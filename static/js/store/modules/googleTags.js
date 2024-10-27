import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

const INITIAL_STATE = {
  lastPageViewed: null,
};

export const SCRIPT_LOADED = "googleTags/SCRIPT_LOADED";
export const SDK_INITIALIZED = "googleTags/SDK_INITIALIZED";
export const PAGE_VIEW_REQUEST_SEND = "googleTags/PAGE_VIEW_REQUEST_SEND";

// scriptLoaded :: () -> Action.SCRIPT_LOADED
export const scriptLoaded = always({ type: SCRIPT_LOADED });

// sdkInitialized :: () -> Action.SDK_INITIALIZED
export const sdkInitialized = always({ type: SDK_INITIALIZED });

// pageViewRequestSend :: String -> Action.PAGE_VIEW_REQUEST_SEND
export const pageViewRequestSend = (page) => ({
  type: PAGE_VIEW_REQUEST_SEND,
  page,
});

// googleTags :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [PAGE_VIEW_REQUEST_SEND]: (state, { page }) => ({
    ...state,
    lastPageViewed: page,
  }),
});
