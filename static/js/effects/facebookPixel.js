import {
  SCRIPT_LOADED,
  scriptLoaded,
  pageViewSent,
  sdkInitialized,
  SDK_INITIALIZED,
} from "../store/modules/facebookPixel";
import { combineEpics, ofType } from "redux-observable";
import { isNil } from "ramda";
import { filter, map, mergeMap, take, tap, withLatestFrom } from "rxjs";
import { AUTHORIZE_NON_IAB_VENDORS } from "../store/modules/consentManagement";
import { logObservableError } from "../utilities/logs";
import { TITLE_CHANGED } from "../store/modules/metas";
import { isWebView } from "../utilities/displays";

// loadFacebookPixelEpic :: Epic -> Observable Action _
export const loadFacebookPixelEpic = (
  action$,
  state$,
  { document, logger, window }
) =>
  action$.pipe(
    ofType(AUTHORIZE_NON_IAB_VENDORS),
    withLatestFrom(state$),
    filter(([_, state]) => state.consentManagement.nonIABVendorsAuthorized),
    filter(() => !isWebView(location)),
    take(1),
    mergeMap(
      () =>
        new Promise((resolve) => {
          !(function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
              n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            t.onload = function () {
              resolve();
            };
            s.parentNode.insertBefore(t, s);
          })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
          );
        })
    ),
    map(scriptLoaded),
    logObservableError("facebookPixel :: loadFacebookPixelEpic", logger)
  );

// initializeFacebookPixelEpic :: Epic -> Observable Action _
export const initializeFacebookPixelEpic = (
  action$,
  state$,
  { logger, window }
) =>
  action$.pipe(
    ofType(SCRIPT_LOADED),
    tap(() => window.fbq("init", "133283609673620")),
    map(sdkInitialized),
    logObservableError("facebookPixel :: initializeFacebookPixelEpic", logger)
  );

// viewPageEpic :: Epic -> Observable Action PAGE_VIEW_SENT
export const viewPageEpic = (action$, state$, { window, location, logger }) =>
  action$.pipe(
    ofType(SDK_INITIALIZED, TITLE_CHANGED),
    withLatestFrom(state$),
    filter(([_, state]) => state.consentManagement.nonIABVendorsAuthorized),
    filter(([_, state]) => state.facebookPixel.sdkInitialized),
    filter(
      ([_, state]) => location.pathname !== state.facebookPixel.lastPageViewed
    ),
    filter(() => !isNil(window.fbq)),
    tap(() => window.fbq("track", "PageView")),
    map(() => pageViewSent(location.pathname)),
    logObservableError("facebookPixel :: viewPageEpic", logger)
  );

export default combineEpics(
  loadFacebookPixelEpic,
  initializeFacebookPixelEpic,
  viewPageEpic
);
