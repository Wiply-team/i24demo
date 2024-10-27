import {
  FETCH_CATEGORIES,
  SET_CURRENT_CATEGORY,
  UNSET_CURRENT_CATEGORY,
  deactivateAllCategories,
  error,
  receivedCategories,
  updateActiveCategory,
} from "../store/modules/categories";
import {
  logObservableError,
  logObservableErrorAndTriggerAction,
} from "../utilities/logs";
import { localeToNews } from "../utilities/locales";
import { combineEpics, ofType } from "redux-observable";
import { filter, map, mergeMap, take, withLatestFrom, zip } from "rxjs";
import { map as fmap, hasPath, join } from "ramda";
import { ROUTE_FOUND } from "../store/modules/router";

// fetchAllRootCategoriesEpic :: Epic -> Observable Action.RECEIVED_CATEGORIES
export const fetchAllRootCategoriesEpic = (
  action$,
  state$,
  { fetchApi, logger }
) =>
  // We observe ROUTE_FOUND action, as well as FETCH_CATEGORIES action, in order to
  // be sure to only fetch root categories for the current route locale.
  // Before this change, root categories were fetched in english (default router locale)
  // and then, if a route with a different locale was found, in the route language
  // causing, sometimes, the wrong categories to be shown for the current route locale.
  zip(
    action$.pipe(ofType(FETCH_CATEGORIES)),
    action$.pipe(ofType(ROUTE_FOUND), filter(hasPath(["params", "locale"])))
  ).pipe(
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      fetchApi(`/v2/${state.router.locale}/categories/tree`)
    ),
    withLatestFrom(state$),
    map(([categories, state]) =>
      fmap((category) => formatCategory(state.router.locale)(category))(
        categories.body
      )
    ),
    map(receivedCategories),
    take(1),
    logObservableErrorAndTriggerAction(
      "categories :: fetchAllRootCategoriesEpic",
      error,
      logger
    )
  );

export const setActiveCategoryEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(SET_CURRENT_CATEGORY),
    map(({ current, parent }) => updateActiveCategory(current, parent)),
    logObservableError("categories :: setActiveCategoryEpic", logger)
  );

export const unsetActiveCategoryEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(UNSET_CURRENT_CATEGORY),
    map(deactivateAllCategories),
    logObservableError("categories :: unsetActiveCategoryEpic", logger)
  );

// formatCategory :: (String, Category) -> Category -> Category
const formatCategory = (locale, parentCategory) => (category) => ({
  id: category.id,
  parent: category.parent,
  name: category.name,
  slug: category.slug,
  metaTitle: category.metaTitle,
  metaDescription: category.metaDescription,
  navbar: category.navbar,
  navbarPosition: category.navbarPosition,
  link: join("", [
    `/${locale}`,
    `/${localeToNews[locale]}`,
    `${parentCategory ? "/" + parentCategory.slug : ""}`,
    `/${category.slug}`,
  ]),
  children: category.children.length
    ? fmap(formatCategory(locale, category), category.children)
    : [],
});

export default combineEpics(
  fetchAllRootCategoriesEpic,
  setActiveCategoryEpic,
  unsetActiveCategoryEpic
);
