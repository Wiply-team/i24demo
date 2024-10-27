import {
  __,
  add,
  always,
  compose,
  gt,
  head,
  ifElse,
  last,
  length,
  subtract,
  when,
  allPass,
  not,
  isNil,
  prop,
  isEmpty,
  keys,
  sort,
  assoc,
  omit,
  assocPath,
  map,
  lte,
} from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  pages: {},
  page: 1,
  isFetching: true,
  totalPages: null,
  scrollHeight: null,
  scrollTop: null,
  error: false,
};

export const INIT = "pagination/INIT";
export const FETCH_PAGE = "pagination/FETCH_PAGE";
export const FETCH_PREV_PAGE = "pagination/FETCH_PREV_PAGE";
export const FETCH_NEXT_PAGE = "pagination/FETCH_NEXT_PAGE";
export const RECEIVED_PAGE = "pagination/RECEIVED_PAGE";
export const CLEAN_EXTRA_PAGES = "pagination/CLEAN_EXTRA_PAGES";
export const FREEZE_SCROLL_POSITION = "pagination/FREEZE_SCROLL_POSITION";
export const RESTORE_SCROLL_BEHAVIOR = "pagination/RESTORE_SCROLL_BEHAVIOR";
export const UPDATE_PAGE_VISIBILITY = "pagination/UPDATE_PAGE_VISIBILITY";
export const REDIRECT_TO_FIRST_PAGE = "pagination/REDIRECT_TO_FIRST_PAGE";
export const CLEAN = "pagination/CLEAN";
export const ERROR = "pagination/ERROR";

// init :: () -> Action.INIT
export const init = always({ type: INIT });

// receivedPage :: (Number, Number, Number, Number) -> Action.RECEIVED_PAGE
export const receivedPage = (
  page = 1,
  totalPages = 1,
  scrollHeight = 0,
  scrollTop = 0
) => ({
  type: RECEIVED_PAGE,
  page,
  totalPages,
  scrollHeight,
  scrollTop,
});

// fetchPage :: Number -> Action.FETCH_PAGE
export const fetchPage = (page = 1) => ({
  type: FETCH_PAGE,
  page,
});

// fetchPrevPage :: () -> Action.FETCH_PREV_PAGE
export const fetchPrevPage = always({ type: FETCH_PREV_PAGE });

// fetchNextPage :: () -> Action.FETCH_NEXT_PAGE
export const fetchNextPage = always({ type: FETCH_NEXT_PAGE });

// cleanExtraPages :: () -> Action.CLEAN_EXTRA_PAGES
export const cleanExtraPages = always({ type: CLEAN_EXTRA_PAGES });

// freezeScrollPosition :: () -> Action.FREEZE_SCROLL_POSITION
export const freezeScrollPosition = always({ type: FREEZE_SCROLL_POSITION });

// restoreScrollBehavior :: () -> Action.RESTORE_SCROLL_BEHAVIOR
export const restoreScrollBehavior = always({ type: RESTORE_SCROLL_BEHAVIOR });

// updatePageVisibility :: (Number, Boolean) -> Action.UPDATE_PAGE_VISIBILITY
export const updatePageVisibility = (page, isVisible) => ({
  type: UPDATE_PAGE_VISIBILITY,
  page,
  isVisible,
});

// redirectToFirstPage :: () -> Action.REDIRECT_TO_FIRST_PAGE
export const redirectToFirstPage = always({ type: REDIRECT_TO_FIRST_PAGE });

// clean :: () -> Action.CLEAN
export const clean = always({ type: CLEAN });

// hasTooManyPages :: Object -> Boolean
const hasTooManyPages = compose(gt(__, 2), length, keys);

// isFetchingPrevPages :: State -> Boolean
const isFetchingPrevPage = (state) =>
  state.page <= compose(head, getPageNumbers)(state.pages);

// removeAPage :: State -> Object
const removeAPage = ifElse(
  isFetchingPrevPage,
  (state) => removeLastPage(state.pages),
  (state) => removeFirstPage(state.pages)
);

// removeFirstPage :: Object -> Object
const removeFirstPage = (pages) =>
  omit([compose(head, getPageNumbers)(pages)], pages);

// removeLastPage :: Object -> Object
const removeLastPage = (pages) =>
  omit([compose(last, getPageNumbers)(pages)], pages);

// getPageNumbers :: Object -> Array
export const getPageNumbers = compose(
  sort(subtract),
  map((page) => Number(page)),
  keys
);

// error :: () -> Action.ERROR
export const error = always({ type: ERROR });

export default createReducer(INITIAL_STATE, {
  [REDIRECT_TO_FIRST_PAGE]: (state) => ({
    ...state,
    page: 1,
  }),
  [FETCH_PAGE]: (state, { page }) => ({
    ...state,
    isFetching: true,
    page: Number(page),
    pages: { [page]: { isVisible: false } },
    error: false,
  }),
  [FETCH_PREV_PAGE]: (state) => ({
    ...state,
    isFetching: true,
    ...(state.page > 1
      ? {
          page: compose(subtract(__, 1), head, getPageNumbers)(state.pages),
          pages: compose(
            assoc(__, { isVisible: false }, state.pages),
            subtract(__, 1),
            head,
            getPageNumbers
          )(state.pages),
        }
      : {}),
    error: false,
  }),
  [FETCH_NEXT_PAGE]: (state) => ({
    ...state,
    isFetching: true,
    ...(state.page < state.totalPages
      ? {
          page: compose(add(1), last, getPageNumbers)(state.pages),
          pages: compose(
            assoc(__, { isVisible: false }, state.pages),
            add(1),
            last,
            getPageNumbers
          )(state.pages),
        }
      : {}),
    error: false,
  }),
  [RECEIVED_PAGE]: (state, { totalPages, scrollHeight, scrollTop }) => ({
    ...state,
    isFetching: false,
    totalPages,
    scrollHeight: allPass([
      compose(not, isNil, prop("pages")),
      ({ pages, page }) => compose(lte(page, __), head, getPageNumbers)(pages),
    ])(state)
      ? scrollHeight
      : state.scrollHeight,
    scrollTop: allPass([
      compose(not, isEmpty, prop("pages")),
      ({ pages, page }) => compose(lte(page, __), head, getPageNumbers)(pages),
    ])(state)
      ? scrollTop
      : state.scrollTop,
    error: false,
  }),
  [CLEAN_EXTRA_PAGES]: (state) => ({
    ...state,
    pages: when(hasTooManyPages, () => removeAPage(state))(state.pages),
  }),
  [RESTORE_SCROLL_BEHAVIOR]: (state) => ({
    ...state,
    scrollTop: null,
    scrollHeight: null,
  }),
  [UPDATE_PAGE_VISIBILITY]: (state, { page, isVisible }) => ({
    ...state,
    pages: assocPath([page, "isVisible"], isVisible, state.pages),
  }),
  [ERROR]: (state) => ({
    ...state,
    isFetching: false,
    error: true,
  }),
  [CLEAN]: always(INITIAL_STATE),
});
