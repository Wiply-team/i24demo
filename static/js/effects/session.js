import {
  REQUEST_PASSWORD_RESET,
  SIGNED_IN,
  SIGN_IN,
  SIGN_UP,
  fetchUser,
  passwordResetRequested,
  signedIn,
  signedUp,
  error,
  unverifiedError,
} from "../store/modules/session";
import { combineEpics, ofType } from "redux-observable";
import { map, mergeMap, withLatestFrom } from "rxjs";
import {
  logObservableError,
  logObservableErrorAndTriggerAction,
} from "../utilities/logs";
import { jsonStringify } from "../utilities/strings";

// signInEpic :: Epic -> Observable Action
export const signInEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(SIGN_IN),
    mergeMap(({ username, password }) =>
      fetchApi("/v2/consumer/token", {
        method: "POST",
        body: jsonStringify({
          username,
          password,
        }),
      })
    ),
    map(signedIn),
    logObservableErrorAndTriggerAction(
      "session :: signInEpic",
      (e) => (e.status === 403 ? unverifiedError() : error()),
      logger
    )
  );

// loadUserOnSignedInEpic :: Epic -> Observable Action
export const loadUserOnSignedInEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(SIGNED_IN),
    map(fetchUser),
    logObservableError("session :: loadUserOnSignedInEpic", logger)
  );

// signUpEpic :: Epic -> Observable Action
export const signUpEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(SIGN_UP),
    withLatestFrom(state$),
    mergeMap(
      ([
        { nickname, email, password, newsletterSubscription, captcha },
        state,
      ]) =>
        fetchApi(`/v2/${state.router.locale}/users`, {
          method: "POST",
          body: jsonStringify({
            nickname,
            email,
            password,
            newsletterSubscription,
            recaptcha: captcha,
          }),
        })
    ),
    map(signedUp),
    logObservableErrorAndTriggerAction("session :: signUpEpic", error, logger)
  );

// requestResetPasswordEpic :: Epic -> Observable Action
export const requestResetPasswordEpic = (
  action$,
  state$,
  { fetchApi, logger }
) =>
  action$.pipe(
    ofType(REQUEST_PASSWORD_RESET),
    withLatestFrom(state$),
    mergeMap(([{ email }, state]) =>
      fetchApi(`/v2/${state.router.locale}/password-reset-token`, {
        method: "POST",
        body: jsonStringify({ email }),
      })
    ),
    map(passwordResetRequested),
    logObservableErrorAndTriggerAction(
      "session :: requestResetPasswordEpic",
      error,
      logger
    )
  );

export default combineEpics(
  signInEpic,
  loadUserOnSignedInEpic,
  signUpEpic,
  requestResetPasswordEpic
);
