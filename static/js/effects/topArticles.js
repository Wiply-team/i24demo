import {
  FETCH_ARTICLE_PAGE,
  receivedArticlePage,
  RECEIVED_ARTICLE_PAGE,
  REFRESH_ARTICLE_PAGE,
  refreshArticlePage,
  CLEAN,
  REMOVE_ARTICLE_PAGE,
} from "../store/modules/topArticles";
import { combineEpics, ofType } from "redux-observable";
import { map as fmap, join } from "ramda";
import { logObservableError } from "../utilities/logs";
import { formatArticle } from "../utilities/miscellaneous";
import {
  filter,
  interval,
  map,
  merge,
  mergeMap,
  switchMap,
  takeUntil,
  withLatestFrom,
} from "rxjs";
import { calculateTotalPages } from "../utilities/paginations";
import { receivedPage } from "../store/modules/pagination";

// autoRefreshPageEpic :: Epic -> Observable Action.FETCH_CONTENTS
export const autoRefreshPageEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(FETCH_ARTICLE_PAGE),
    filter(({ autoRefresh }) => autoRefresh),
    switchMap(({ page, size }) =>
      interval(2 * 60 * 1000).pipe(
        takeUntil(
          merge(
            action$.pipe(ofType(CLEAN)),
            action$.pipe(
              ofType(REMOVE_ARTICLE_PAGE),
              filter(({ page: pageToRemove }) => pageToRemove === page)
            )
          )
        ),
        map(() => refreshArticlePage(page, size))
      )
    ),
    logObservableError("topArticles :: autoRefreshPageEpic", logger)
  );

// fetchArticlePageEpic :: Epic -> Observable Action.RECEIVED_ARTICLE_PAGE
export const fetchArticlePageEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(FETCH_ARTICLE_PAGE, REFRESH_ARTICLE_PAGE),
    withLatestFrom(state$),
    mergeMap(([{ page, size }, state]) =>
      Promise.all([
        fetchApi(
          join("", [
            `/v2/${state.router.locale}/contents`,
            `?home=1`,
            `&sort=-publishedAt`,
            `&inSlider=0`,
            `&page=${page}`,
            `&limit=${size}`,
            `&countable=1`,
          ])
        ),
        page,
        size,
        state.router.locale,
      ])
    ),
    map(([response, page, size, locale]) =>
      receivedArticlePage(
        page,
        calculateTotalPages(
          Number(response.headers.get("Total-Result") || 0),
          size
        ),
        document.documentElement.scrollHeight,
        document.documentElement.scrollTop,
        fmap((article) => formatArticle(locale, article))(response.body || [])
      )
    ),
    logObservableError("topArticles :: fetchArticlePageEpic", logger)
  );

// updatePaginationEpic :: Epic -> Action RECEIVED_PAGE
export const updatePaginationEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(RECEIVED_ARTICLE_PAGE),
    map(({ page, totalPages, scrollHeight, scrollTop }) =>
      receivedPage(page, totalPages, scrollHeight, scrollTop)
    ),
    logObservableError("topArticles :: updatePaginationEpic", logger)
  );

export default combineEpics(
  fetchArticlePageEpic,
  autoRefreshPageEpic,
  updatePaginationEpic
);
