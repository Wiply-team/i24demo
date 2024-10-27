import {
  FETCH_TOP_ARTICLES,
  receivedTopArticles,
} from "../store/modules/homepage";
import { combineEpics, ofType } from "redux-observable";
import { logObservableError } from "../utilities/logs";
import { formatArticle } from "../utilities/miscellaneous";
import { map as fmap } from "ramda";
import { map, mergeMap, withLatestFrom } from "rxjs";

// fetchTopArticlesEpic :: Epic -> Observable Action.RECEIVED_TOP_ARTICLES
export const fetchTopArticlesEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(FETCH_TOP_ARTICLES),
    withLatestFrom(state$),
    mergeMap(([_, state]) =>
      Promise.all([
        fetchApi(
          `/v2/${state.router.locale}/contents/top?limit=${state.homepage.topArticlesLimit}&sort=position`
        ),
        state.router.locale,
      ])
    ),
    map(([response, locale]) =>
      receivedTopArticles(
        fmap((article) => formatArticle(locale, article), response.body)
      )
    ),
    logObservableError("homepage :: fetchTopArticlesEpic", logger)
  );

export default combineEpics(fetchTopArticlesEpic);
