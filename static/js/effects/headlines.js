import {
  CLEAN,
  FETCH_CONTENTS,
  INITIALIZE,
  REFRESH_CONTENTS,
  contentsReceived,
  error,
  fetchContents,
  refreshContents,
} from "../store/modules/headlines";
import { combineEpics, ofType } from "redux-observable";
import {
  filter,
  interval,
  map,
  mergeMap,
  switchMap,
  takeUntil,
  withLatestFrom,
} from "rxjs";
import { defaultTo, map as fmap, pipe } from "ramda";
import {
  logObservableError,
  logObservableErrorAndTriggerAction,
} from "../utilities/logs";
import { formatArticle } from "../utilities/miscellaneous";

// initializeHeadlinesEpic :: Epic -> Observable Action.FETCH_CONTENTS
export const initializeHeadlinesEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(INITIALIZE),
    map(({ categoryId }) => fetchContents(categoryId)),
    logObservableError("headlines :: initializeHeadlinesEpic", logger)
  );

// initializeAutoRefreshHeadlinesEpic :: Epic -> Observable Action.FETCH_CONTENTS
export const initializeAutoRefreshHeadlinesEpic = (
  action$,
  state$,
  { logger }
) =>
  action$.pipe(
    ofType(INITIALIZE),
    filter(({ autoRefresh }) => autoRefresh),
    switchMap(({ categoryId }) =>
      interval(2 * 60 * 1000).pipe(
        takeUntil(action$.pipe(ofType(CLEAN))),
        map(() => refreshContents(categoryId))
      )
    ),
    logObservableError(
      "headlines :: initializeAutoRefreshHeadlinesEpic",
      logger
    )
  );

// fetchHeadlinesEpic :: Epic -> Observable Action.CONTENTS_RECEIVED
export const fetchHeadlinesEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(FETCH_CONTENTS, REFRESH_CONTENTS),
    withLatestFrom(state$),
    mergeMap(([{ categoryId }, state]) =>
      Promise.all([
        fetchApi(
          categoryId
            ? `/v2/${state.router.locale}/headlines/${categoryId}`
            : `/v2/${state.router.locale}/headlines`
        ),
        state.router.locale,
      ])
    ),
    map(([contents, locale]) =>
      pipe(
        defaultTo([]),
        fmap((content) => formatArticle(locale, content)),
        contentsReceived
      )(contents.body)
    ),
    logObservableErrorAndTriggerAction(
      "headlines :: fetchHeadlinesEpic",
      error,
      logger
    )
  );

export default combineEpics(
  initializeHeadlinesEpic,
  initializeAutoRefreshHeadlinesEpic,
  fetchHeadlinesEpic
);
