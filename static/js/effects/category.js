import {
  CLEAN as CLEAN_CATEGORY,
  FETCH as FETCH_CURRENT_CATEGORY,
  RECEIVED as RECEIVED_CURRENT_CATEGORY,
  closeSubCategories,
  received as receivedCurrentCategory,
  receivedArticlePage,
  FETCH_ARTICLE_PAGE,
  RECEIVED_ARTICLE_PAGE,
  lastRevisionReceived,
  error,
} from "../store/modules/category";
import { complement, map as fmap, isNil, join, path, prop } from "ramda";
import { combineEpics, ofType } from "redux-observable";
import {
  filter,
  ignoreElements,
  map,
  mergeMap,
  tap,
  withLatestFrom,
} from "rxjs";
import {
  logObservableError,
  logObservableErrorAndTriggerAction,
} from "../utilities/logs";
import { formatArticle } from "../utilities/miscellaneous";
import { calculateTotalPages } from "../utilities/paginations";
import {
  setCurrentCategory,
  unsetCurrentCategory,
} from "../store/modules/categories";
import { CHANGE_ROUTE } from "../store/modules/router";
import { TOGGLE_COLLAPSED } from "../store/modules/header";
import { receivedPage } from "../store/modules/pagination";
import { isIsraelAtWarCategory } from "../utilities/displays";

// shouldRedirect :: (Location, Category) -> Boolean
const shouldRedirect = (location, cat) =>
  decodeURI(new URL(cat.frontendUrl).pathname) !== decodeURI(location.pathname);

// fetchCurrentCategoryEpic :: Epic -> Observable Action.RECEIVED
export const fetchCurrentCategoryEpic = (
  action$,
  state$,
  { fetchApi, location, logger }
) =>
  action$.pipe(
    ofType(FETCH_CURRENT_CATEGORY),
    withLatestFrom(state$),
    map(([action, state]) => [
      state.router.locale,
      state.router.activeRoute.params.rootCategory,
      state.router.activeRoute.params.subCategory,
    ]),
    mergeMap(([locale, rootCategorySlug, subCategorySlug]) =>
      fetchApi(
        subCategorySlug
          ? `/v2/${locale}/categories/${rootCategorySlug}/${subCategorySlug}`
          : `/v2/${locale}/categories/${rootCategorySlug}`
      )
    ),
    map((response) =>
      receivedCurrentCategory(
        response.body,
        shouldRedirect(location, response.body)
      )
    ),
    logObservableErrorAndTriggerAction(
      "category :: fetchCurrentCategoryEpic",
      error,
      logger
    )
  );

// updateCategoryUrl :: Epic -> Observable Action _
export const updateCategoryUrl = (action$, state$, { logger, history }) =>
  action$.pipe(
    ofType(RECEIVED_CURRENT_CATEGORY),
    filter(({ shouldRedirect }) => shouldRedirect),
    map(({ category }) => new URL(category.frontendUrl)),
    tap((expectedUrl) =>
      history.replaceState(history.state, "", expectedUrl.pathname)
    ),
    ignoreElements(),
    logObservableError("category :: updateCategoryUrl", logger)
  );

// fetchLastRevisionEpic :: Epic -> Observable Action.LAST_REVISION_RECEIVED
export const fetchLastRevisionEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(RECEIVED_CURRENT_CATEGORY),
    withLatestFrom(state$),
    map(([_, state]) => [state.router.locale, state.category.category.id]),
    filter(([_, id]) => isIsraelAtWarCategory(id)),
    mergeMap(([locale, id]) =>
      fetchApi(`/v2/${locale}/categories/${id}/last-revision`)
    ),
    map((response) => lastRevisionReceived(response.body)),
    logObservableError("category :: fetchLastRevisionEpic", logger)
  );

// updateActiveCategoryEpic :: Epic -> Action SET_CURRENT_CATEGORY
export const updateActiveCategoryEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(RECEIVED_CURRENT_CATEGORY),
    map(prop("category")),
    filter(complement(isNil)),
    map((category) =>
      setCurrentCategory(
        category.id,
        category.parent ? category.parent.id : null
      )
    ),
    logObservableError("category :: updateActiveCategoryEpic", logger)
  );

// deactivateAllCategoriesEpic :: Epic -> Observable Action UNSET_CURRENT_CATEGORY
export const deactivateAllCategoriesEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(CLEAN_CATEGORY),
    map(unsetCurrentCategory),
    logObservableError("category :: deactivateAllCategoriesEpic", logger)
  );

// closeSubCategoriesMenuEpic :: Epic -> Observable Action CLOSE_SUB_CATEGORIES
export const closeSubCategoriesMenuEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(CHANGE_ROUTE, TOGGLE_COLLAPSED),
    withLatestFrom(state$),
    filter(([_, state]) => state.category.subCategoriesMenuOpened),
    filter(
      ([action, state]) =>
        !(action.type === TOGGLE_COLLAPSED && state.header.collapsed)
    ),
    map(closeSubCategories),
    logObservableError("category :: closeSubCategoriesMenuEpic", logger)
  );

// fetchArticlesFromCurrentCategoryEpic :: Epic -> Observable Action.RECEIVED_ARTICLE_PAGE
export const fetchArticlesFromCurrentCategoryEpic = (
  action$,
  state$,
  { document, fetchApi, logger }
) =>
  action$.pipe(
    ofType(FETCH_ARTICLE_PAGE),
    withLatestFrom(state$),
    filter(([_, state]) => path(["category", "category", "id"], state)),
    mergeMap(([{ page, size }, state]) =>
      Promise.all([
        fetchApi(
          join("", [
            `/v2/${state.router.locale}/contents`,
            `?category=${state.category.category.id}`,
            `&page=${page}`,
            `&limit=${size}`,
            `&countable=1`,
            `&inSlider=0`,
            "&sort=-sortDate",
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
    logObservableError(
      "category :: fetchArticlesFromCurrentCategoryEpic",
      logger
    )
  );

// updatePaginationEpic :: Epic -> Action RECEIVED_PAGE
export const updatePaginationEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(RECEIVED_ARTICLE_PAGE),
    map(({ page, totalPages, scrollHeight, scrollTop }) =>
      receivedPage(page, totalPages, scrollHeight, scrollTop)
    ),
    logObservableError("category :: updatePaginationEpic", logger)
  );

export default combineEpics(
  closeSubCategoriesMenuEpic,
  deactivateAllCategoriesEpic,
  fetchCurrentCategoryEpic,
  updateActiveCategoryEpic,
  fetchArticlesFromCurrentCategoryEpic,
  updateCategoryUrl,
  updatePaginationEpic,
  fetchLastRevisionEpic
);
