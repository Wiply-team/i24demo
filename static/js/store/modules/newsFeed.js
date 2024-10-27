import { always, assoc, dissoc } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  isFetching: true,
  limit: 24,
  newsPages: {},
};

export const FETCH_NEWS_PAGE = "newsFeed/FETCH_NEWS_PAGE";
export const RECEIVED_NEWS_PAGE = "newsFeed/RECEIVED_NEWS_PAGE";
export const REMOVE_NEWS_PAGE = "newsFeed/REMOVE_NEWS_PAGE";
export const CLEAN = "newsFeed/CLEAN";

// fetchNewsPage :: Number -> Action.FETCH_NEWS_PAGE
export const fetchNewsPage = (page) => ({
  type: FETCH_NEWS_PAGE,
  page,
});

// removeNewsPage :: Number -> Action.REMOVE_NEWS_PAGE
export const removeNewsPage = (page) => ({
  type: REMOVE_NEWS_PAGE,
  page,
});

// receivedNewsFeed :: (Number, Number, Number, Number, [news]) -> Action.RECEIVED_NEWS_PAGE
export const receivedNewsPage = (
  page,
  totalPages,
  scrollHeight,
  scrollTop,
  newsFeed = []
) => ({
  type: RECEIVED_NEWS_PAGE,
  page,
  totalPages,
  scrollHeight,
  scrollTop,
  newsFeed,
});

// clean :: () -> Action.CLEAN
export const clean = always({ type: CLEAN });

export default createReducer(INITIAL_STATE, {
  [FETCH_NEWS_PAGE]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [RECEIVED_NEWS_PAGE]: (state, { page, newsFeed }) => ({
    ...state,
    isFetching: false,
    newsPages: assoc(page, newsFeed, state.newsPages),
  }),
  [REMOVE_NEWS_PAGE]: (state, { page }) => ({
    ...state,
    newsPages: dissoc(page, state.newsPages),
  }),
  [CLEAN]: always(INITIAL_STATE),
});
