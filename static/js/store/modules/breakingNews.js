import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

// breakingNews initial state
export const INITIAL_STATE = {
  opened: true,
  news: null,
};

// breakingNews action types
export const FETCH_BREAKING_NEWS = "breakingNews/FETCH_BREAKING_NEWS";
export const BREAKING_NEWS_RECEIVED = "breakingNews/BREAKING_NEWS_RECEIVED";
export const CLOSE = "breakingNews/CLOSE";
export const CLEAN = "breakingNews/CLEAN";

// fetchBreakingNews :: () -> Action.FETCH_BREAKING_NEWS
export const fetchBreakingNews = always({ type: FETCH_BREAKING_NEWS });

// breakingNewsReceived :: News -> Action.BREAKING_NEWS_RECEIVED
export const breakingNewsReceived = (news) => ({
  type: BREAKING_NEWS_RECEIVED,
  news,
});

// close :: () -> Action.CLOSE
export const close = always({ type: CLOSE });

// clean :: () -> Action.CLEAN
export const clean = always({ type: CLEAN });

// breakingNews :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [BREAKING_NEWS_RECEIVED]: (state, { news }) => ({
    ...state,
    news,
  }),
  [CLOSE]: (state) => ({
    ...state,
    opened: false,
  }),
  [CLEAN]: always(INITIAL_STATE),
});
