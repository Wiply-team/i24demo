import {
  FETCH_SPECIAL_PAGE,
  LOAD_ARTICLES,
  LOAD_MORE,
  articlesLoaded,
  error,
  specialPageReceived,
} from "../store/modules/specialPage";
import { combineEpics, ofType } from "redux-observable";
import { defaultTo, join, o, pipe, prop, map as rmap } from "ramda";
import { logObservableErrorAndTriggerAction } from "../utilities/logs";
import { formatArticle } from "../utilities/miscellaneous";
import { map, mergeMap, withLatestFrom } from "rxjs";

// getTags :: [Tag] -> String
const getTags = pipe(rmap(prop("name")), join(","));

// fetchSpecialPageEpic :: Epic -> Observable Action SPECIAL_PAGE_RECEIVED
export const fetchSpecialPageEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(FETCH_SPECIAL_PAGE),
    withLatestFrom(state$),
    mergeMap(([_, state]) =>
      fetchApi(`/v2/${state.router.locale}/special-page`)
    ),
    map(o(specialPageReceived, prop("body"))),
    logObservableErrorAndTriggerAction(
      "specialPage :: fetchSpecialPageEpic",
      error,
      logger
    )
  );

// loadArticlesEpic :: Epic -> Observable Action ARTICLES_LOADED ERROR
export const loadArticlesEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(LOAD_ARTICLES, LOAD_MORE),
    withLatestFrom(state$),
    mergeMap(([_, { router, specialPage }]) =>
      fetchApi(
        join("", [
          `/v2/${router.locale}/contents/search`,
          `?tags=${getTags(specialPage.metadata.tags)}`,
          `&page=${specialPage.page}`,
          `&limit=${specialPage.limit}`,
          `&sort=-publishedAt`,
          "&countable=1",
        ])
      )
    ),
    withLatestFrom(state$),
    map(([response, state]) =>
      pipe(
        prop("body"),
        defaultTo([]),
        rmap((article) => formatArticle(state.router.locale, article)),
        (articles) =>
          articlesLoaded(articles, response.headers.get("Total-Result"))
      )(response)
    ),
    logObservableErrorAndTriggerAction(
      "specialPage :: loadArticlesEpic",
      error,
      logger
    )
  );

export default combineEpics(fetchSpecialPageEpic, loadArticlesEpic);
