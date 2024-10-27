import { always, pipe, tap, when } from "ramda";
import { catchError, mergeWith, of } from "rxjs";

// logException :: (Function, Function, String) -> Error -> _
export const logException = (captureException, logger, context) =>
  pipe(
    // We only catch the exception if the error is a real error and not a generic
    // object (like failed fetches with an error http code).
    tap(when((exception) => exception instanceof Error, captureException)),
    tap((exception) =>
      logger(`An error happened in the context "${context}".`, exception)
    )
  );

// logEpicError :: (Function, String) -> Error -> _
const logEpicError = (logger, epicName) =>
  logException(logger.captureException, logger.error, `epic :: ${epicName}`);

// logEpicWarning :: (Function, String) -> Error -> _
const logEpicWarning = (logger, epicName) =>
  logException(logger.captureException, logger.warn, `epic :: ${epicName}`);

// logObservableError :: (String, Function) -> Observable
export const logObservableError = (obsName, logger) =>
  catchError((err, source) =>
    pipe(tap(logEpicError(logger, obsName)), always(source))(err)
  );

// logObservableError :: (String, Function, Function) -> Observable
export const logObservableErrorAndTriggerAction = (
  obsName,
  actionCreator,
  logger
) =>
  catchError((err, source) =>
    pipe(tap(logEpicWarning(logger, obsName)), () =>
      of(actionCreator(err)).pipe(mergeWith(source))
    )(err)
  );
