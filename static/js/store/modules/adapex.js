import { always } from "ramda";
import { createReducer } from "./../../utilities/miscellaneous";

// INITIAL_STATE
export const INITIAL_STATE = {
  stickyAdShown: true,
  adapexScriptImported: false,
};

// action types
export const PROCESS_ADS_ON_PAGE = "adapex/PROCESS_ADS_ON_PAGE";
export const ADAPEX_SCRIPT_IMPORTED = "adapex/ADAPEX_SCRIPT_IMPORTED";
export const INTERSTITIAL_AD_LOADED = "adapex/INTERSTITIAL_AD_LOADED";
export const ADS_RENDERED = "adapex/ADS_RENDERED";
export const CLOSE_STICKY_AD = "adapex/CLOSE_STICKY_AD";

// processAdsOnPage :: () -> Action
export const processAdsOnPage = always({ type: PROCESS_ADS_ON_PAGE });

// adsRendered :: () -> Action
export const adapexScriptImported = always({ type: ADAPEX_SCRIPT_IMPORTED });

// interstitialAdLoaded :: () -> Action
export const interstitialAdLoaded = always({ type: INTERSTITIAL_AD_LOADED });

// adsRendered :: () -> Action
export const adsRendered = always({ type: ADS_RENDERED });

// closeStickyAd :: () -> Action
export const closeStickyAd = always({ type: CLOSE_STICKY_AD });

export default createReducer(INITIAL_STATE, {
  [ADAPEX_SCRIPT_IMPORTED]: (state) => ({
    ...state,
    adapexScriptImported: true,
  }),
  [CLOSE_STICKY_AD]: (state) => ({
    ...state,
    stickyAdShown: false,
  }),
});
