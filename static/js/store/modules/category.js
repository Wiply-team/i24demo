import { always, assoc, dissoc } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  isFetching: true,
  category: null,
  articlePages: {},
  lastRevision: null,
  subCategoriesMenuOpened: false,
  redirected: false,
  error: false,
};

export const FETCH = "category/FETCH";
export const RECEIVED = "category/RECEIVED";
export const FETCH_ARTICLE_PAGE = "category/FETCH_ARTICLE_PAGE";
export const RECEIVED_ARTICLE_PAGE = "category/RECEIVED_ARTICLE_PAGE";
export const REMOVE_ARTICLE_PAGE = "category/REMOVE_ARTICLE_PAGE";
export const CLEAN = "category/CLEAN";
export const ERROR = "category/ERROR";
export const OPEN_SUB_CATEGORIES = "categories/OPEN_SUB_CATEGORIES";
export const CLOSE_SUB_CATEGORIES = "categories/CLOSE_SUB_CATEGORIES";
export const LAST_REVISION_RECEIVED = "category/LAST_REVISION_RECEIVED";

// fetch :: () -> Action.FETCH
export const fetch = always({ type: FETCH });

// received :: (Category, boolean) -> Action.RECEIVED
export const received = (category, shouldRedirect) => ({
  type: RECEIVED,
  category,
  shouldRedirect,
});

// fetchArticlePage :: (Number, Number) -> Action.FETCH_ARTICLE_PAGE
export const fetchArticlePage = (page, size) => ({
  type: FETCH_ARTICLE_PAGE,
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

// lastRevisionReceived :: String -> Action.LAST_REVISION_RECEIVED
export const lastRevisionReceived = ({ lastRevision }) => ({
  type: LAST_REVISION_RECEIVED,
  lastRevision,
});

// clean :: () -> Action.CLEAN
export const clean = always({ type: CLEAN });

// error :: () -> Action.ERROR
export const error = always({ type: ERROR });

// openSubCategories :: () -> Action
export const openSubCategories = always({ type: OPEN_SUB_CATEGORIES });

// closeSubCategories :: () -> Action
export const closeSubCategories = always({ type: CLOSE_SUB_CATEGORIES });

export default createReducer(INITIAL_STATE, {
  [FETCH]: () => ({
    ...INITIAL_STATE,
  }),

  [RECEIVED]: (state, { category, shouldRedirect }) => ({
    ...state,
    isFetching: false,
    redirected: shouldRedirect,
    error: false,
    category,
  }),

  [RECEIVED_ARTICLE_PAGE]: (state, { page, articles }) => ({
    ...state,
    articlePages: assoc(page, articles, state.articlePages),
  }),

  [LAST_REVISION_RECEIVED]: (state, { lastRevision }) => ({
    ...state,
    lastRevision,
  }),

  [REMOVE_ARTICLE_PAGE]: (state, { page }) => ({
    ...state,
    articlePages: dissoc(page, state.articlePages),
  }),

  [CLEAN]: always(INITIAL_STATE),

  [ERROR]: (state) => ({
    ...state,
    isFetching: false,
    error: true,
  }),

  [OPEN_SUB_CATEGORIES]: (state) => ({
    ...state,
    subCategoriesMenuOpened: true,
  }),

  [CLOSE_SUB_CATEGORIES]: (state) => ({
    ...state,
    subCategoriesMenuOpened: false,
  }),
});
