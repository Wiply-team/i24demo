import {
  LOAD_SDK,
  RENDER_TWEET,
  REQUEST_TWEET_RENDERING,
  SDK_INITIALIZED,
  renderTweet,
  sdkInitialized,
  waitForSdk,
} from "../store/modules/x";
import { combineEpics, ofType } from "redux-observable";
import {
  debounceTime,
  filter,
  ignoreElements,
  map,
  mergeMap,
  withLatestFrom,
} from "rxjs";
import { ifElse, map as rmap } from "ramda";
import { AUTHORIZE_NON_IAB_VENDORS } from "../store/modules/consentManagement";
import { logObservableError } from "../utilities/logs";

// @see https://developer.x.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
//
// initializeXEpic :: Epic -> SDK_INITIALIZED
const initializeXEpic = (action$, state$, { logger, window }) =>
  action$.pipe(
    ofType(AUTHORIZE_NON_IAB_VENDORS, LOAD_SDK),
    withLatestFrom(state$),
    filter(([_, state]) => state.consentManagement.nonIABVendorsAuthorized),
    filter(([_, state]) => !state.x.initialized),
    debounceTime(200),
    mergeMap(
      () =>
        new Promise((resolve) => {
          window.twttr = (function (d, s, id) {
            var js,
              fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function (f) {
              t._e.push(f);
            };

            t.ready(resolve);

            return t;
          })(document, "script", "twitter-wjs");
        })
    ),
    map(sdkInitialized),
    logObservableError("x :: initializeXEpic", logger)
  );

// requestTweetRenderingEpic :: Epic -> Observable Action RENDER_TWEET WAIT_FOR_SDK
export const requestTweetRenderingEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(REQUEST_TWEET_RENDERING),
    withLatestFrom(state$),
    map(
      ifElse(
        ([action, state]) => state.x.initialized,
        ([{ tweetId, options }]) => renderTweet(tweetId, options),
        ([{ tweetId, options }]) => waitForSdk(tweetId, options)
      )
    ),
    logObservableError("x :: requestTweetRenderingEpic", logger)
  );

// renderPendingTweetsEpic :: Epic -> Observable Action RENDER_TWEET
export const renderPendingTweetsEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(SDK_INITIALIZED),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      rmap(
        ({ tweetId, options }) => renderTweet(tweetId, options),
        state.x.pendingTweets
      )
    ),
    logObservableError("x :: renderPendingTweetsEpic", logger)
  );

/**
 * See this article for a tweet :
 * /en/news/international/americas/157278-171009-top-republican-lawmaker-says-us-on-course-for-wwiii-with-trump-at-helm
 *
 * renderTweetEpic :: Epic -> _
 */
const renderTweetEpic = (action$, state$, { document, logger, x }) =>
  action$.pipe(
    ofType(RENDER_TWEET),
    map((action) => ({
      ...action,
      element: document.getElementById(`tweet-${action.tweetId}`),
    })),
    filter(({ element }) => element),
    mergeMap(({ tweetId, options, element }) =>
      x().widgets.createTweet(tweetId, element, options)
    ),
    ignoreElements(),
    logObservableError("x :: renderTweetEpic", logger)
  );

export default combineEpics(
  initializeXEpic,
  renderPendingTweetsEpic,
  requestTweetRenderingEpic,
  renderTweetEpic
);
