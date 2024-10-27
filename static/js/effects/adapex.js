import {
  PROCESS_ADS_ON_PAGE,
  adapexScriptImported,
  adsRendered,
  interstitialAdLoaded,
  processAdsOnPage,
} from "../store/modules/adapex";
import {
  allPass,
  complement,
  has,
  ifElse,
  includes,
  isNil,
  pipe,
  tap as rTap,
  test as regexTest,
} from "ramda";
import { combineEpics, ofType } from "redux-observable";
import {
  debounceTime,
  filter,
  map,
  mergeMap,
  take,
  tap,
  withLatestFrom,
  zip,
} from "rxjs";
import { isSmallViewport } from "../utilities/displays";
import { logObservableError } from "../utilities/logs";
import { HYDRATION_COMPLETED } from "../store/modules/app";
import { ROUTE_FOUND } from "../store/modules/router";
import { TCDATA_READY } from "../store/modules/consentManagement";

// importAdapexScriptEpic :: Epic -> Observable Action ADAPEX_SCRIPT_IMPORTED
export const importAdapexScriptEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(TCDATA_READY),
    take(1),
    mergeMap(
      () =>
        new Promise((resolve) => {
          const script = document.createElement("script");
          script.async = true;
          script.src = "https://cdn.adapex.io/hb/aaw.i24nt2.js";
          script.onload = () => resolve();

          document.querySelector("head").appendChild(script);
        })
    ),
    map(adapexScriptImported),
    logObservableError("adapex :: importAdapexScriptEpic", logger)
  );

// loadInterstialAdEpic :: Epic -> Observable Action _
//
// Interstitial ads have to be loaded only when all the following conditions
// are met:
// - on first page load
// - on article pages
// - on mobile viewports
//
export const loadInterstialAdEpic = (
  action$,
  state$,
  { document, logger, window }
) =>
  zip(
    action$.pipe(ofType(TCDATA_READY)),
    action$.pipe(ofType(ROUTE_FOUND, HYDRATION_COMPLETED))
  ).pipe(
    take(1),
    filter(() =>
      regexTest(
        /(t\.co|twitter\.com|x\.com|facebook\.com|reddit\.com|linkedin\.com)/,
        document.referrer
      )
    ),
    filter(() => isSmallViewport(window)),
    withLatestFrom(state$),
    filter(([_, state]) =>
      includes(state.router.activeRoute.name, [
        "articleHe",
        "articleAr",
        "articleFr",
        "articleEn",
      ])
    ),
    tap(() => {
      window.googletag = window.googletag || { cmd: [] };
      window.googletag.cmd = Array.isArray(window.googletag.cmd)
        ? window.googletag.cmd
        : [];
      window.googletag.cmd.push(function () {
        window.googletag.pubads().setTargeting("inter", "true");
      });
    }),
    map(interstitialAdLoaded),
    logObservableError("adapex :: loadInterstialAdEpic", logger)
  );

// @see http://cdn.adapex.io/doc/addContent.html
//
// renderAdsEpic :: Epic -> Observable Action ADS_RENDERED
export const renderAdsEpic = (action$, state$, { adapexAdsWrapper, logger }) =>
  action$.pipe(
    ofType(PROCESS_ADS_ON_PAGE),
    debounceTime(250),
    map(() => adapexAdsWrapper()),
    map(
      ifElse(
        allPass([complement(isNil), has("cmd")]),
        pipe(
          rTap((aaw) => aaw.cmd.push(() => aaw.processAdsOnPage())),
          adsRendered
        ),
        processAdsOnPage
      )
    ),
    logObservableError("adapex :: renderAdsEpic", logger)
  );

export default combineEpics(
  importAdapexScriptEpic,
  loadInterstialAdEpic,
  renderAdsEpic
);
