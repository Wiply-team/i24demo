import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  topArticles: [],
  isFetchingTopArticles: true,
  topArticlesLimit: 6,
};

export const FETCH_TOP_ARTICLES = "homepage/FETCH_TOP_ARTICLES";
export const RECEIVED_TOP_ARTICLES = "homepage/RECEIVED_TOP_ARTICLES";
export const CLEAN_TOP_ARTICLES = "homepage/CLEAN_TOP_ARTICLES";

// fetchTopArticles :: () -> Action
export const fetchTopArticles = always({ type: FETCH_TOP_ARTICLES });

// receivedTopArticles :: Array -> Action.RECEIVED_TOP_ARTICLES
export const receivedTopArticles = (articles) => ({
  type: RECEIVED_TOP_ARTICLES,
  articles,
});

// cleanTopArticles :: () -> Action
export const cleanTopArticles = always({ type: CLEAN_TOP_ARTICLES });

export default createReducer(INITIAL_STATE, {
  [FETCH_TOP_ARTICLES]: (state) => ({
    ...state,
    isFetchingTopArticles: true,
  }),

  [RECEIVED_TOP_ARTICLES]: (state, { articles }) => ({
    ...state,
    topArticles: articles,
    isFetchingTopArticles: false,
  }),

  [CLEAN_TOP_ARTICLES]: (state, { articles }) => ({
    ...state,
    topArticles: [],
  }),
});
