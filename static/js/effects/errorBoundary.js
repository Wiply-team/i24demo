import { CATCH_ERROR, clear } from "../store/modules/errorBoundary";
import { combineEpics, ofType } from "redux-observable";
import { ignoreElements, map, tap } from "rxjs";
import { logException, logObservableError } from "../utilities/logs";
import { CHANGE_ROUTE } from "../store/modules/router";

// logErrorEpic :: Epic -> _
export const logErrorEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(CATCH_ERROR),
    tap(({ error }) =>
      logException(logger.captureException, logger.error, "app")(error)
    ),
    ignoreElements(),
    logObservableError("errorBoundaries :: logErrorEpic", logger)
  );

// clearErrorsEpic :: Epic -> Observable Action.CLEAR
export const clearErrorsEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(CHANGE_ROUTE),
    map(clear),
    logObservableError("errorBoundaries :: clearErrorsEpic", logger)
  );

export default combineEpics(logErrorEpic, clearErrorsEpic);
