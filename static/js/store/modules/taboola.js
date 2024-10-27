import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  scriptImported: false,
  currentAdType: "home",
  pageNavigations: 0,
};

export const SCRIPT_IMPORTED = "i24-reader/taboola/SCRIPT_IMPORTED";
export const PUSH_PAGE_NAVIGATION = "i24-reader/taboola/PUSH_PAGE_NAVIGATION";
export const PAGE_NAVIGATION_PUSHED =
  "i24-reader/taboola/PAGE_NAVIGATION_PUSHED";
export const PUSH_AD = "i24-reader/taboola/PUSH_AD";
export const AD_PUSHED = "i24-reader/taboola/AD_PUSHED";

// scriptImported :: () -> Action SCRIPT_IMPORTED
export const scriptImported = always({ type: SCRIPT_IMPORTED });

// pushPageNavigation :: String -> Action PUSH_PAGE_NAVIGATION
export const pushPageNavigation = (adType) => ({
  type: PUSH_PAGE_NAVIGATION,
  adType,
});

// pageNavigationPushed :: String -> Action PAGE_NAVIGATION_PUSHED
export const pageNavigationPushed = (adType) => ({
  type: PAGE_NAVIGATION_PUSHED,
  adType,
});

// pushAd :: Ad -> Action PUSH_AD
export const pushAd = ({ name, placement, targetType }) => ({
  type: PUSH_AD,
  name,
  placement,
  targetType,
});

// adPushed :: Ad -> Action AD_PUSHED
export const adPushed = ({ name, placement, targetType }) => ({
  type: AD_PUSHED,
  name,
  placement,
  targetType,
});

// taboola :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [SCRIPT_IMPORTED]: (state) => ({
    ...state,
    scriptImported: true,
  }),

  [PUSH_PAGE_NAVIGATION]: (state, { adType }) => ({
    ...state,
    currentAdType: adType,
  }),

  [PAGE_NAVIGATION_PUSHED]: (state) => ({
    ...state,
    pageNavigations: state.pageNavigations + 1,
  }),
});
