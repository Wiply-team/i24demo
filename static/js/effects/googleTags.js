import {
  SCRIPT_LOADED,
  SDK_INITIALIZED,
  pageViewRequestSend,
  scriptLoaded,
  sdkInitialized,
} from "../store/modules/googleTags";
import { combineEpics, ofType } from "redux-observable";
import {
  filter,
  ignoreElements,
  map,
  mergeMap,
  take,
  tap,
  withLatestFrom,
} from "rxjs";
import { isWebView } from "../utilities/displays";
import { logObservableError } from "../utilities/logs";
import { AUTHORIZE_NON_IAB_VENDORS } from "../store/modules/consentManagement";
import { TITLE_CHANGED } from "../store/modules/metas";

// loadGtagManagerScriptEpic :: Epic -> Observable Action _
export const loadGtagManagerScriptEpic = (
  action$,
  state$,
  { document, logger, window, location }
) =>
  action$.pipe(
    ofType(AUTHORIZE_NON_IAB_VENDORS),
    withLatestFrom(state$),
    filter(([_, state]) => state.consentManagement.nonIABVendorsAuthorized),
    filter(() => !isWebView(location)),
    take(1),
    tap(() => {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          // eslint-disable-next-line eqeqeq
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(
        window,
        document,
        "script",
        "dataLayer",
        process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID
      );
    }),
    ignoreElements(),
    logObservableError("googleTags :: loadGtagScriptEpic", logger)
  );

// loadGtagScriptEpic :: Epic -> Observable Action SCRIPT_LOADED
export const loadGtagScriptEpic = (
  action$,
  state$,
  { document, logger, location }
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
          const script = document.createElement("script");
          script.async = true;
          script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`;
          script.onload = () => resolve();

          document.querySelector("head").appendChild(script);
        })
    ),
    map(scriptLoaded),
    logObservableError("googleTags :: loadGtagScriptEpic", logger)
  );

// @see https://support.google.com/analytics/answer/1008080
//
// initializeGtagEpic :: Epic -> Observable Action SDK_INITIALIZED
export const initializeGtagEpic = (action$, state$, { logger, window }) =>
  action$.pipe(
    ofType(SCRIPT_LOADED),
    tap(() => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
    }),
    map(sdkInitialized),
    logObservableError("googleTags :: initializeGtagEpic", logger)
  );

// viewPageEpic :: Epic -> Observable Action PAGE_VIEW_REQUEST_SEND
export const viewPageEpic = (
  action$,
  state$,
  { dataLayer, gtag, location, logger }
) =>
  action$.pipe(
    ofType(SDK_INITIALIZED, TITLE_CHANGED),
    withLatestFrom(state$),
    filter(([_, state]) => state.consentManagement.nonIABVendorsAuthorized),
    filter(() => !isWebView(location)),
    filter(
      ([_, state]) => location.pathname !== state.googleTags.lastPageViewed
    ),
    filter(() => gtag() && dataLayer()),
    tap(([_, state]) =>
      gtag()("config", process.env.REACT_APP_GOOGLE_ANALYTICS_ID, {
        page_path: location.pathname,
        page_title: state.metas.title,
      })
    ),
    tap(() =>
      dataLayer().push({
        event: "Pageview",
        url: location.href,
      })
    ),
    map(() => pageViewRequestSend(location.pathname)),
    logObservableError("googleTags :: viewPageEpic", logger)
  );

export default combineEpics(
  loadGtagManagerScriptEpic,
  loadGtagScriptEpic,
  initializeGtagEpic,
  viewPageEpic
);
