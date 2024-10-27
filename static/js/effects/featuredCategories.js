import { FETCH, received } from "../store/modules/featuredCategories";
import { combineEpics, ofType } from "redux-observable";
import { complement, compose, map as fmap, isEmpty, join, prop } from "ramda";
import { filter, map, mergeMap, withLatestFrom } from "rxjs";
import { localeToNews } from "../utilities/locales";
import { logObservableError } from "../utilities/logs";
import { formatArticle } from "../utilities/miscellaneous";

// fetchCategoryWithContentsEpic :: Epic -> Observable Action.RECEIVED
export const fetchCategoryWithContentsEpic = (
  action$,
  state$,
  { fetchApi, logger }
) =>
  action$.pipe(
    ofType(FETCH),
    withLatestFrom(state$),
    mergeMap(([id, state]) =>
      fetchApi(
        join("", [
          `/v2/${state.router.locale}/categories/featured`,
          `?contentStickToCategory=1`,
          `&contentLimit=7`,
        ])
      )
    ),
    map(compose(prop("body"))),
    filter(complement(isEmpty)),
    withLatestFrom(state$),
    map(([categories, state]) =>
      fmap(
        (category) => formatFeaturedCategory(category, state.router.locale),
        categories
      )
    ),
    map(received),
    logObservableError(
      "featuredCategories :: fetchCategoryWithContentsEpic",
      logger
    )
  );

// formatFeaturedCategory :: (Category, String) -> Category
const formatFeaturedCategory = (category, locale) => ({
  id: category.id,
  name: category.name,
  link: join("", [
    `/${locale}`,
    `/${localeToNews[locale]}`,
    `${category.parent ? "/" + category.parent.slug : ""}`,
    `/${category.slug}`,
  ]),
  contents: fmap(
    (content) => formatArticle(locale, content),
    category.contents
  ),
});

export default combineEpics(fetchCategoryWithContentsEpic);
