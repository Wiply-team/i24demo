import {
  CHECK_TCFAPI_STATUS,
  LOAD_SCRIPT,
  SHOW_COOKIE_LIST,
  TCDATA_READY,
  TCFAPI_READY,
  authorizeNonIABVendors,
  checkTcfapiStatus,
  domainDataReceived,
  observableTcdataCreated,
  tcDataReady,
  tcfapiReady,
} from "../store/modules/consentManagement";
import {
  anyPass,
  both,
  complement,
  equals,
  ifElse,
  isEmpty,
  isNil,
  length,
  o,
  path,
  pick,
  pipe,
  prop,
  filter as rfilter,
  test as regexTest,
  values,
} from "ramda";
import { combineEpics, ofType } from "redux-observable";
import {
  combineLatest,
  delay,
  filter,
  map,
  mergeMap,
  take,
  takeUntil,
  tap,
} from "rxjs";
import { logObservableError } from "../utilities/logs";
import { isRequestFromSSR } from "../utilities/urls";
import { consentManagementTcData$ } from "./index";

// isRequestFromCrawler :: String -> Boolean
export const isRequestFromCrawler = anyPass([
  regexTest(/Taboolabot/i),
  regexTest(/W3C_Validator/i),
  regexTest(/WhatsApp/i),
  regexTest(/adsbot-google/i),
  regexTest(/apis-google/i),
  regexTest(/appengine-google/i),
  regexTest(/baiduspider/i),
  regexTest(/bingbot/i),
  regexTest(/Chrome-Lighthouse/i),
  regexTest(/developers\.google\.com\/\+\/web\/snippet/i),
  regexTest(/embedly/i),
  regexTest(/facebookexternalhit/i),
  regexTest(/feedfetcher-google/i),
  regexTest(/google-read-aloud/i),
  regexTest(/google-structured-data-testing-tool/i),
  regexTest(/google sketchup/i),
  regexTest(/googlebot/i),
  regexTest(/linkedinbot/i),
  regexTest(/mediapartners-google/i),
  regexTest(/OgScrper/i),
  regexTest(/outbrain/i),
  regexTest(/pinterest/i),
  regexTest(/quora link preview/i),
  regexTest(/rogerbot/i),
  regexTest(/showyoubot/i),
  regexTest(/slackbot/i),
  regexTest(/toutiaospider/i),
  regexTest(/twitterbot/i),
  regexTest(/vkShare/i),
  regexTest(/Web-Crawler/i),
  regexTest(/yandex/i),
  regexTest(/adsbot-google-mobile/i),
  regexTest(/adsbot-google-mobile-apps/i),
  regexTest(/duplexweb-google/i),
  regexTest(/googleweblight/i),
  regexTest(/storebot-google/i),
  regexTest(/google favicon/i),
  regexTest(/archive\.org_bot/i),
  regexTest(/duckduckbot/i),
]);

// loadOneTrustScriptEpic :: Epic -> Observable Action CHECK_TCFAPI_STATUS
export const loadOneTrustScriptEpic = (
  action$,
  state$,
  { logger, document, navigator, window }
) =>
  action$.pipe(
    ofType(LOAD_SCRIPT),
    take(1),
    // Avoids to inject the consent management layer when request comes from the SSR
    filter(() => !isRequestFromSSR(navigator.userAgent)),
    // Delays the GDPR layer for 5 seconds in case the request is made with
    // crawler's user agent. This request has been made by the SEO team with
    // the goal of improving core web vitals score.
    delay(isRequestFromCrawler(navigator.userAgent) ? 5000 : 0),
    mergeMap(
      () =>
        new Promise((resolve) => {
          const script = document.createElement("script");
          script.async = true;
          script.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js";
          script.dataset.domainScript =
            process.env.REACT_APP_ONETRUST_SCRIPT_ID;
          script.dataset.documentLanguage = true;
          script.onload = () => resolve();

          document.querySelector("head").appendChild(script);
        })
    ),
    tap(() => (window.OptanonWrapper = () => {})),
    map(checkTcfapiStatus),
    logObservableError("consentManagement :: loadOneTrustScriptEpic", logger)
  );

// checkTcfapiStatusEpic :: Epic -> Observable Action TCFAPI_READY
export const checkTcfapiStatusEpic = (
  action$,
  state$,
  { logger, getOneTrust }
) =>
  action$.pipe(
    ofType(CHECK_TCFAPI_STATUS),
    delay(100),
    map(getOneTrust),
    map(ifElse(isNil, checkTcfapiStatus, tcfapiReady)),
    logObservableError(
      "epic :: consentManagement :: checkTcfapiStatusEpic",
      logger
    )
  );

// createTcDataObservableEpic :: Epic -> Observable action OBSERVABLE_TCDATA_CREATED
export const createTcDataObservableEpic = (
  action$,
  state$,
  { logger, getTcfApi }
) =>
  action$.pipe(
    ofType(TCFAPI_READY),
    map(getTcfApi),
    filter(complement(isNil)),
    tap((tcfapi) =>
      tcfapi("addEventListener", 2, (tcData) =>
        consentManagementTcData$.next(tcData)
      )
    ),
    map(observableTcdataCreated),
    logObservableError(
      "epic :: consentManagement :: createTcDataObservableEpic",
      logger
    )
  );

// hasNoFalseElement :: [Boolean] -> Boolean
const hasNoFalseElement = pipe(rfilter(equals(false)), isEmpty);

// hasLength :: Number -> [Boolean] -> Boolean
const hasLength = (val) => o(equals(val), length);

// @see https://iabeurope.eu/wp-content/uploads/2019/08/TransparencyConsentFramework_PoliciesVersion_TCFv2-0_2019-08-21.3_FINAL-1-1.pdf
// p. 42, appendix D
//
// allSpecialFeaturesOptIns :: TCData -> Boolean
const allSpecialFeaturesOptIns = pipe(
  prop("specialFeatureOptins"),
  values,
  both(hasNoFalseElement, hasLength(2))
);

// @see https://iabeurope.eu/wp-content/uploads/2019/08/TransparencyConsentFramework_PoliciesVersion_TCFv2-0_2019-08-21.3_FINAL-1-1.pdf
// p. 25, appendix A
//
// allPurposesOptIns :: TCData -> Boolean
const allPurposesOptIns = pipe(
  path(["purpose", "consents"]),
  values,
  both(
    hasNoFalseElement,
    (optIns) => hasLength(10, optIns) || hasLength(11, optIns)
  )
);

// checkTCDataEpic :: Epic -> Observable Action TCDATA_READY
const checkTCDataEpic = (action$, state$, { logger }) =>
  consentManagementTcData$.pipe(
    // To avoid dispatching TCDATA_READY action multiple times
    takeUntil(action$.pipe(ofType(TCDATA_READY))),
    filter(
      anyPass([
        o(equals("tcloaded"), prop("eventStatus")),
        o(equals("useractioncomplete"), prop("eventStatus")),
      ])
    ),
    map(tcDataReady),
    logObservableError("epic :: consentManagement :: checkTCDataEpic", logger)
  );

// @see https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md#addeventlistener
//
// As for today, neither Facebook, Google or X complies with the IAB,
// we restrict the usage of those vendors only for users which opted in for
// all known purposes and special features covered by the standard.
//
// authorizeNonIabVendorsEpic :: Epic -> Observable Action AUTHORIZE_NON_IAB_VENDORS
const authorizeNonIabVendorsEpic = (action$, state$, { logger }) =>
  consentManagementTcData$.pipe(
    filter(
      anyPass([
        o(equals("tcloaded"), prop("eventStatus")),
        o(equals("useractioncomplete"), prop("eventStatus")),
      ])
    ),
    map(
      pipe(
        both(allSpecialFeaturesOptIns, allPurposesOptIns),
        authorizeNonIABVendors
      )
    ),
    logObservableError(
      "epic :: consentManagement :: authorizeNonIabVendorsEpic",
      logger
    )
  );

//showCookieListEpic :: Epic -> Observable Action DOMAIN_DATA_RECEIVED
export const showCookieListEpic = (action$, state$, { logger, getOneTrust }) =>
  combineLatest([
    action$.pipe(ofType(TCFAPI_READY)),
    action$.pipe(ofType(SHOW_COOKIE_LIST)),
  ]).pipe(
    map(getOneTrust),
    filter(complement(isNil)),
    map(
      pipe(
        (ot) => ot.GetDomainData(),
        pick(["CookieListDescription", "Groups"]),
        domainDataReceived
      )
    ),
    logObservableError(
      "epic :: consentManagement :: showCookieListEpic",
      logger
    )
  );

export default combineEpics(
  loadOneTrustScriptEpic,
  authorizeNonIabVendorsEpic,
  checkTcfapiStatusEpic,
  createTcDataObservableEpic,
  showCookieListEpic,
  checkTCDataEpic
);
