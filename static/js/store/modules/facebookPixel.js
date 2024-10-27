import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  scriptLoaded: false,
  sdkInitialized: false,
  lastPageViewed: null,
};

export const SCRIPT_LOADED = "facebookPixel/SCRIPT_LOADED";
export const SDK_INITIALIZED = "facebookPixel/SDK_INITIALIZED";
export const PAGE_VIEW_SENT = "facebookPixel/PAGE_VIEW_SENT";

// scriptLoaded :: () -> Action.PIXEL_LOADED
export const scriptLoaded = always({ type: SCRIPT_LOADED });

// sdkInitialized :: () -> Action.PIXEL_LOADED
export const sdkInitialized = always({ type: SDK_INITIALIZED });

// pageViewSent :: String -> Action.PAGE_VIEW_SENT
export const pageViewSent = (page) => ({
  type: PAGE_VIEW_SENT,
  page,
});

// facebookPixel :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [SCRIPT_LOADED]: (state) => ({
    ...state,
    scriptLoaded: true,
  }),

  [SDK_INITIALIZED]: (state) => ({
    ...state,
    sdkInitialized: true,
  }),

  [PAGE_VIEW_SENT]: (state, { page }) => ({
    ...state,
    lastPageViewed: page,
  }),
});
