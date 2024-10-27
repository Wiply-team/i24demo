import {
  SIGNED_OUT,
  USER_RECEIVED,
  signedOut,
  userReceived,
  bookmarksReceived,
  ADD_BOOKMARK,
  bookmarkAdded,
  bookmarkRemoved,
  REMOVE_BOOKMARK,
  error,
  FETCH_USER,
  anonymousUserReceived,
  ANONYMOUS_USER_RECEIVED,
  SIGN_OUT,
  FETCH_BOOKMARKS,
  fetchBookmarks,
} from "../store/modules/session";
import {
  adjust,
  apply,
  compose,
  ifElse,
  isNil,
  map as rmap,
  path,
  prop,
  propOr,
} from "ramda";
import { filter, ignoreElements, map, mergeMap, withLatestFrom } from "rxjs";
import {
  logObservableError,
  logObservableErrorAndTriggerAction,
} from "../utilities/logs";
import { changeRoute } from "../store/modules/router";
import { combineEpics } from "redux-observable";
import { ofType } from "redux-observable";

// loadMeEpic :: Epic -> Observable Action.USER_RECEIVED
export const loadMeEpic = (action$, state$, { logger, fetchApi }) =>
  action$.pipe(
    ofType(FETCH_USER),
    withLatestFrom(state$),
    mergeMap(([{ shouldRefreshToken }, state]) =>
      Promise.all([
        fetchApi(`/v2/${state.router.locale}/me`),
        shouldRefreshToken,
      ])
    ),
    map(adjust(0, prop("body"))),
    map(
      ifElse(
        ([user]) => !isNil(user),
        apply(userReceived),
        anonymousUserReceived
      )
    ),
    logObservableErrorAndTriggerAction(
      "user :: loadMeEpic",
      anonymousUserReceived,
      logger
    )
  );

// refreshTokenEpic :: Epic -> Observable _
export const refreshTokenEpic = (action$, state$, { logger, fetchApi }) =>
  action$.pipe(
    ofType(USER_RECEIVED),
    filter(({ shouldRefreshToken }) => true === shouldRefreshToken),
    mergeMap(() => fetchApi(`/v2/consumer/token/refresh`, { method: "POST" })),
    ignoreElements(),
    logObservableError("user :: refreshTokenEpic", logger)
  );

// forwardFetchBookmarksEpic :: Epic -> Observable Action.FETCH_BOOKMARKS
export const forwardFetchBookmarksEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(USER_RECEIVED),
    map(fetchBookmarks),
    logObservableError("user :: forwardFetchBookmarksEpic", logger)
  );

// fetchBookmarksEpic :: Epic -> Observable Action.BOOKMARKS_RECEIVED
export const fetchBookmarksEpic = (action$, state$, { logger, fetchApi }) =>
  action$.pipe(
    ofType(FETCH_BOOKMARKS),
    withLatestFrom(state$),
    mergeMap(([_, state]) => fetchApi(`/v2/${state.router.locale}/favorites`)),
    map(compose(rmap(prop("id")), propOr([], "body"))),
    map(bookmarksReceived),
    logObservableErrorAndTriggerAction(
      "user :: fetchBookmarksEpic",
      error,
      logger
    )
  );

// bookmarkEpic :: Epic -> Observable Action.BOOKMARK_ADDED
export const bookmarkEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(ADD_BOOKMARK),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      fetchApi(`/v2/${state.router.locale}/favorites/${action.id}`, {
        method: "POST",
      })
    ),
    map(path(["body", "id"])),
    map(bookmarkAdded),
    logObservableErrorAndTriggerAction("user :: bookmarkEpic", error, logger)
  );

// removeBookmarkEpic :: Epic -> Observable Action.BOOKMARK_REMOVED
export const removeBookmarkEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(REMOVE_BOOKMARK),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      fetchApi(`/v2/${state.router.locale}/favorites/${action.id}`, {
        method: "DELETE",
      })
    ),
    map(path(["body", "id"])),
    map(bookmarkRemoved),
    logObservableErrorAndTriggerAction(
      "user :: removeBookmarkEpic",
      error,
      logger
    )
  );

// createAnonymousToken :: Epic -> _
export const createAnonymousToken = (action$, state$, { logger, fetchApi }) =>
  action$.pipe(
    ofType(ANONYMOUS_USER_RECEIVED),
    mergeMap(() =>
      fetchApi(`/v2/consumer/anonymous-token`, { method: "POST" })
    ),
    ignoreElements(),
    logObservableError("user :: createAnonymousToken", logger)
  );

// signoutEpic :: Epic -> Observable Action.SIGNED_OUT
export const signoutEpic = (action$, state$, { logger, fetchApi }) =>
  action$.pipe(
    ofType(SIGN_OUT),
    mergeMap(() => fetchApi(`/v2/consumer/logout`, { method: "POST" })),
    map(signedOut),
    logObservableError("user :: signoutEpic", logger)
  );

// redirectUserToHomePageEpic :: Epic -> Observable Action.CHANGE_ROUTE
export const redirectUserToHomePageEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(SIGNED_OUT),
    withLatestFrom(state$),
    map(([_, state]) => changeRoute(`/${state.router.locale}`)),
    logObservableError("user :: redirectUserToHomePageEpic", logger)
  );

export default combineEpics(
  loadMeEpic,
  refreshTokenEpic,
  forwardFetchBookmarksEpic,
  fetchBookmarksEpic,
  bookmarkEpic,
  removeBookmarkEpic,
  createAnonymousToken,
  signoutEpic,
  redirectUserToHomePageEpic
);
