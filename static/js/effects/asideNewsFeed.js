import {
  CLEAN,
  FETCH_NEWS_FEED,
  INITIALIZE,
  fetchNewsFeed,
  receivedNewsFeed,
} from "../store/modules/asideNewsFeed";
import { combineEpics, ofType } from "redux-observable";
import { compose, map as fmap, propOr } from "ramda";
import { logObservableError } from "../utilities/logs";
import { formatNews } from "../utilities/miscellaneous";
import {
  interval,
  map,
  mergeMap,
  switchMap,
  takeUntil,
  withLatestFrom,
} from "rxjs";

// initializeAsideNewsFeedEpic :: Epic -> Observable Action.FETCH_NEWS_FEED
export const initializeAsideNewsFeedEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(INITIALIZE),
    map(fetchNewsFeed),
    logObservableError("asideNewsFeed :: initializeAsideNewsFeedEpic", logger)
  );

// autoLoadFreshNews :: Epic -> Observable Action.FETCH_NEWS_FEED
export const autoLoadFreshNewsEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(INITIALIZE),
    withLatestFrom(state$),
    switchMap(() =>
      interval(60 * 1000).pipe(
        takeUntil(action$.pipe(ofType(CLEAN))),
        map(() => fetchNewsFeed())
      )
    ),
    logObservableError("asideNewsFeed :: autoLoadFreshNewsEpic", logger)
  );

// fetchNewsFeedEpic :: Epic -> Observable Action.RECEIVED_NEWS_FEED
export const fetchNewsFeedEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(FETCH_NEWS_FEED),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      fetchApi(`/v2/${state.router.locale}/news?web=1&page=1`)
    ),
    map(propOr([], "body")),
    withLatestFrom(state$),
    map(([body, state]) =>
      compose(
        receivedNewsFeed,
        fmap((news) => formatNews(state.router.locale, news))
      )(body)
    ),
    logObservableError("asideNewsFeed :: fetchNewsFeedEpic", logger)
  );

export default combineEpics(
  initializeAsideNewsFeedEpic,
  autoLoadFreshNewsEpic,
  fetchNewsFeedEpic
);
