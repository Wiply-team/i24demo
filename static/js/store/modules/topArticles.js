import { always, assoc, dissoc } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  isFetching: true,
  pages: {},
};

export const FETCH_ARTICLE_PAGE = "topArticles/FETCH_ARTICLE_PAGE";
export const REFRESH_ARTICLE_PAGE = "topArticles/REFRESH_ARTICLE_PAGE";
export const REMOVE_ARTICLE_PAGE = "topArticles/REMOVE_ARTICLE_PAGE";
export const RECEIVED_ARTICLE_PAGE = "topArticles/RECEIVED_ARTICLE_PAGE";
export const CLEAN = "topArticles/CLEAN";

// fetchArticlePage :: (Number, Number, Boolean) -> Action.FETCH_ARTICLE_PAGE
export const fetchArticlePage = (page, size, autoRefresh = false) => ({
  type: FETCH_ARTICLE_PAGE,
  page,
  size,
  autoRefresh,
});

// refreshArticlePage :: (Number, Number) -> Action.FETCH_ARTICLE_PAGE
export const refreshArticlePage = (page, size) => ({
  type: REFRESH_ARTICLE_PAGE,
  page,
  size,
});

// removeArticlePage :: Number -> Action.REMOVE_ARTICLE_PAGE
export const removeArticlePage = (page) => ({
  type: REMOVE_ARTICLE_PAGE,
  page,
});

// receivedArticlePage :: (Number, Number, Number, Number, [article]) -> Action.RECEIVED_ARTICLE_PAGE
export const receivedArticlePage = (
  page,
  totalPages,
  scrollHeight,
  scrollTop,
  articles = []
) => ({
  type: RECEIVED_ARTICLE_PAGE,
  page,
  totalPages,
  scrollHeight,
  scrollTop,
  articles,
});

// clean :: () -> Action.CLEAN
export const clean = always({ type: CLEAN });

export default createReducer(INITIAL_STATE, {
  [FETCH_ARTICLE_PAGE]: (state) => ({
    ...state,
    isFetching: true,
  }),

  [RECEIVED_ARTICLE_PAGE]: (state, { page, articles }) => ({
    ...state,
    pages: assoc(page, articles, state.pages),
    isFetching: false,
  }),

  [REMOVE_ARTICLE_PAGE]: (state, { page }) => ({
    ...state,
    pages: dissoc(page, state.pages),
  }),

  [CLEAN]: always(INITIAL_STATE),
});
