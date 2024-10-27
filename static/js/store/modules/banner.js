import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

// banner initial state
export const INITIAL_STATE = {
  opened: false,
  banner: null,
};

// banner action creators
export const CLEAN = "banner/CLEAN";
export const CLOSE = "banner/CLOSE";
export const FETCH_LATEST_BANNER = "banner/FETCH_LATEST_BANNER";
export const BANNER_RECEIVED = "banner/BANNER_RECEIVED";

// clean :: () -> Action.CLEAN
export const clean = always({ type: CLEAN });

// close :: () -> Action.CLOSE
export const close = always({ type: CLOSE });

// fetchLatestBanner :: () -> Action.FETCH_LATEST_BANNER
export const fetchLatestBanner = always({ type: FETCH_LATEST_BANNER });

// bannerReceived :: Banner -> Action.BANNER_RECEIVED
export const bannerReceived = (banner) => ({
  type: BANNER_RECEIVED,
  banner,
});

// banner :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [CLEAN]: always(INITIAL_STATE),

  [CLOSE]: (state) => ({
    ...state,
    opened: false,
  }),

  [BANNER_RECEIVED]: (state, { banner }) => ({
    ...state,
    opened: true,
    banner,
  }),
});
