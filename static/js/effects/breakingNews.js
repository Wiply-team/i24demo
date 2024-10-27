import {
  FETCH_BREAKING_NEWS,
  breakingNewsReceived,
} from "../store/modules/breakingNews";
import { complement, compose, head, isNil, join, prop } from "ramda";
import { filter, map, mergeMap, withLatestFrom } from "rxjs";
import { combineEpics } from "redux-observable";
import { logObservableError } from "../utilities/logs";
import { ofType } from "redux-observable";

// fetchBreakingNewsEpic :: Epic -> Observable Action.BREAKING_NEWS_RECEIVED
export const fetchBreakingNewsEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(FETCH_BREAKING_NEWS),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      fetchApi(
        join("", [
          `/v2/${state.router.locale}/news`,
          `?limit=1`,
          `&web=1`,
          `&expired=0`,
          `&status=breaking`,
          "&sort=-startedAt",
        ])
      )
    ),
    map(prop("body")),
    filter(complement(isNil)),
    map(compose(breakingNewsReceived, head)),
    logObservableError("breakingNews :: fetchBreakingNewsEpic", logger)
  );

export default combineEpics(fetchBreakingNewsEpic);
