import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

// IAB stands for Interactive Advertising Bureau
//
// @see https://www.iabfrance.com/article/transparency-consent-framework
//
// consentManagement initial state
export const INITIAL_STATE = {
  tcDataReady: false,
  nonIABVendorsAuthorized: false,
  otData: null,
};

// consentManagement action types
export const LOAD_SCRIPT = "consentManagement/LOAD_SCRIPT";
export const CHECK_TCFAPI_STATUS = "consentManagement/CHECK_TCFAPI_STATUS";
export const TCFAPI_READY = "consentManagement/TCFAPI_READY";
export const TCDATA_READY = "consentManagement/TCDATA_READY";
export const OBSERVABLE_TCDATA_CREATED =
  "consentManagement/OBSERVABLE_TCDATA_CREATED";
export const AUTHORIZE_NON_IAB_VENDORS =
  "consentManagement/AUTHORIZE_NON_IAB_VENDORS";
export const TRANSPARENCY_CONSENT_STRING_CHANGED =
  "consentManagement/TRANSPARENCY_CONSENT_STRING_CHANGED";
export const SHOW_COOKIE_LIST = "consentManagement/SHOW_COOKIE_LIST";
export const DOMAIN_DATA_RECEIVED = "consentManagement/DOMAIN_DATA_RECEIVED";
export const CLEAR_DOMAIN_DATA = "consentManagement/CLEAR_DOMAIN_DATA";

// loadScript :: () -> Action
export const loadScript = always({ type: LOAD_SCRIPT });

// checkTcfapiStatus :: () -> Action
export const checkTcfapiStatus = always({ type: CHECK_TCFAPI_STATUS });

// tcfapiReady :: () -> Action
export const tcfapiReady = always({ type: TCFAPI_READY });

// tcDataReady :: () -> Action
export const tcDataReady = always({ type: TCDATA_READY });

// observableTcdataCreated :: () -> Action
export const observableTcdataCreated = always({
  type: OBSERVABLE_TCDATA_CREATED,
});

// authorizeNonIABVendors :: Boolean -> Action
export const authorizeNonIABVendors = (isAuthorized) => ({
  type: AUTHORIZE_NON_IAB_VENDORS,
  isAuthorized,
});

// transparencyConsentStringChanged :: TCData -> Action
export const transparencyConsentStringChanged = (tcData) => ({
  type: TRANSPARENCY_CONSENT_STRING_CHANGED,
  tcData,
});

// showCookieList :: () -> Action
export const showCookieList = always({ type: SHOW_COOKIE_LIST });

// domainDataReceived :: OTData -> Action
export const domainDataReceived = (otData) => ({
  type: DOMAIN_DATA_RECEIVED,
  otData,
});

// clearDomainData :: () -> Action
export const clearDomainData = always({ type: CLEAR_DOMAIN_DATA });

// consentManagement :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [DOMAIN_DATA_RECEIVED]: (state, { otData }) => ({
    ...state,
    otData,
  }),

  [CLEAR_DOMAIN_DATA]: (state) => ({
    ...state,
    otData: null,
  }),

  [TCDATA_READY]: (state) => ({
    ...state,
    tcDataReady: true,
  }),

  [AUTHORIZE_NON_IAB_VENDORS]: (state, { isAuthorized }) => ({
    ...state,
    nonIABVendorsAuthorized: isAuthorized,
  }),
});
