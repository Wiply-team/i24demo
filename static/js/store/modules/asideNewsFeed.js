import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  isFetching: false,
  newsFeed: [],
};

export const INITIALIZE = "asideNewsFeed/INITIALIZE";
export const FETCH_NEWS_FEED = "asideNewsFeed/FETCH";
export const RECEIVED_NEWS_FEED = "asideNewsFeed/RECEIVED";
export const CLEAN = "asideNewsFeed/CLEAN";

// initialize :: () -> Action.INITIALIZE
export const initialize = always({ type: INITIALIZE });

// fetchNewsFeed :: () -> Action.FETCH_NEWS_FEED
export const fetchNewsFeed = always({ type: FETCH_NEWS_FEED });

// receivedNewsFeed :: [News] -> Action.RECEIVED_NEWS_FEED
export const receivedNewsFeed = (newsFeed) => ({
  type: RECEIVED_NEWS_FEED,
  newsFeed: newsFeed || [],
});

// clean :: () -> Action.CLEAN
export const clean = always({ type: CLEAN });

export default createReducer(INITIAL_STATE, {
  [FETCH_NEWS_FEED]: (state) => ({
    ...state,
    isFetching: true,
  }),

  [RECEIVED_NEWS_FEED]: (state, { newsFeed }) => ({
    ...state,
    newsFeed,
    isFetching: false,
  }),

  [CLEAN]: always(INITIAL_STATE),
});
