import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  isFetching: true,
  widgets: [],
  error: false,
};

export const FETCH = "articlesWidgets/FETCH";
export const RECEIVED = "articlesWidgets/RECEIVED";
export const ERROR = "articlesWidgets/ERROR";
export const CLEAN = "articlesWidgets/CLEAN";

// fetch :: () -> Action
export const fetch = always({ type: FETCH });

// received :: [ArticlesWidget] -> Action
export const received = (widgets) => ({
  type: RECEIVED,
  widgets: widgets ?? [],
});

// error :: () -> Action
export const error = always({ type: ERROR });

// clean :: () -> Action
export const clean = always({ type: CLEAN });

export default createReducer(INITIAL_STATE, {
  [FETCH]: (state) => ({
    ...state,
    isFetching: true,
    error: false,
  }),
  [RECEIVED]: (state, { widgets }) => ({
    ...state,
    isFetching: false,
    error: false,
    widgets,
  }),
  [ERROR]: (state) => ({
    ...state,
    isFetching: false,
    error: true,
  }),
  [CLEAN]: always(INITIAL_STATE),
});
