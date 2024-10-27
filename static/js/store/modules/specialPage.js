import { concat, length } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

// initial state
export const INITIAL_STATE = {
  articles: [],
  canLoadMore: false,
  error: false,
  isFetching: true,
  isFetchingArticles: true,
  limit: 20,
  page: 1,
  metadata: {
    type: "",
    title: "",
    slug: "",
    externalUrl: null,
    imageAlternateText: null,
    metaTitle: null,
    metaDescription: null,
    visible: false,
    headerImage: {
      href: null,
    },
    bannerImage: {
      href: null,
    },
    tags: [],
  },
};

// action types
export const FETCH_SPECIAL_PAGE = "specialPage/FETCH_SPECIAL_PAGE";
export const SPECIAL_PAGE_RECEIVED = "specialPage/SPECIAL_PAGE_RECEIVED";
export const LOAD_ARTICLES = "specialPage/LOAD_ARTICLES";
export const ARTICLES_LOADED = "specialPage/ARTICLES_LOADED";
export const ERROR = "specialPage/ERROR";
export const LOAD_MORE = "specialPage/LOAD_MORE";
export const CLEAR = "specialPage/CLEAR";

// fetchSpecialPage :: () -> Action
export const fetchSpecialPage = () => ({ type: FETCH_SPECIAL_PAGE });

// specialPageReceived :: SpecialPage -> Action
export const specialPageReceived = (specialPage) => ({
  type: SPECIAL_PAGE_RECEIVED,
  specialPage,
});

// loadArticles :: () -> Action
export const loadArticles = () => ({ type: LOAD_ARTICLES });

// articlesLoaded :: ([Content], Number) -> Action
export const articlesLoaded = (articles, total) => ({
  type: ARTICLES_LOADED,
  articles: articles || [],
  total: Number(total) || 0,
});

// error :: () -> Action
export const error = () => ({ type: ERROR });

// loadMore :: () -> Action
export const loadMore = () => ({ type: LOAD_MORE });

// clear :: () -> Action
export const clear = () => ({ type: CLEAR });

// specialPage :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [FETCH_SPECIAL_PAGE]: (state) => ({
    ...state,
    isFetching: true,
  }),

  [SPECIAL_PAGE_RECEIVED]: (state, { specialPage }) => ({
    ...state,
    isFetching: false,
    metadata: { ...specialPage },
  }),

  [LOAD_ARTICLES]: (state) => ({
    ...state,
    isFetchingArticles: true,
  }),

  [ARTICLES_LOADED]: (state, { articles, total }) => ({
    ...state,
    isFetchingArticles: false,
    error: false,
    articles: concat(state.articles, articles),
    canLoadMore: total > length(concat(state.articles, articles)),
  }),

  [ERROR]: (state) => ({
    ...state,
    isFetching: false,
    isFetchingArticles: false,
    error: true,
  }),

  [LOAD_MORE]: (state) => ({
    ...state,
    isFetchingArticles: true,
    error: false,
    page: state.page + 1,
  }),

  [CLEAR]: () => INITIAL_STATE,
});
