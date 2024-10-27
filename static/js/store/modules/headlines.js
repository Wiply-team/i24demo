import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  isFetching: false,
  contents: [],
  error: null,
};

export const INITIALIZE = "headlines/INITIALIZE";
export const FETCH_CONTENTS = "headlines/FETCH_CONTENTS";
export const REFRESH_CONTENTS = "headlines/REFRESH_CONTENTS";
export const CONTENTS_RECEIVED = "headlines/CONTENTS_RECEIVED";
export const ERROR = "headlines/ERROR";
export const CLEAN = "headlines/CLEAN";

// initialize :: (Integer, Boolean) -> Action
export const initialize = (categoryId, autoRefresh = false) => ({
  type: INITIALIZE,
  categoryId,
  autoRefresh,
});

// fetchContents :: Integer -> Action
export const fetchContents = (categoryId) => ({
  type: FETCH_CONTENTS,
  categoryId,
});

// refreshContents :: Integer -> Action
export const refreshContents = (categoryId) => ({
  type: REFRESH_CONTENTS,
  categoryId,
});

// contentsReceived :: [Content] -> Action
export const contentsReceived = (contents) => ({
  type: CONTENTS_RECEIVED,
  contents,
});

// error :: Error -> Action
export const error = (error) => ({
  type: ERROR,
  error,
});

// clean :: () -> Action
export const clean = always({ type: CLEAN });

export default createReducer(INITIAL_STATE, {
  [FETCH_CONTENTS]: (state) => ({
    ...state,
    isFetching: true,
    error: null,
  }),
  [REFRESH_CONTENTS]: (state) => ({
    ...state,
    error: null,
  }),
  [CONTENTS_RECEIVED]: (state, { contents }) => ({
    ...state,
    isFetching: false,
    error: null,
    contents,
  }),
  [ERROR]: (state, { error }) => ({
    ...state,
    isFetching: false,
    error,
  }),

  [CLEAN]: always(INITIAL_STATE),
});
