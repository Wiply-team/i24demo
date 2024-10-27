import { always, defaultTo } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const DEFAULT_CONTEXT = "app";

// initial state
export const INITIAL_STATE = {
  errors: {
    [DEFAULT_CONTEXT]: null,
  },
};

// action types
export const CATCH_ERROR = "errorBoundary/CATCH_ERROR";
export const CLEAR = "errorBoundary/CLEAR";

// catchError :: (String, String) -> Action
export const catchError = (context, error) => ({
  type: CATCH_ERROR,
  context,
  error,
});

// clear :: () -> Action
export const clear = always({ type: CLEAR });

// menu :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [CATCH_ERROR]: (state, { context, error }) => ({
    ...state,
    errors: {
      ...state.errors,
      [defaultTo(DEFAULT_CONTEXT, context)]: error,
    },
  }),

  [CLEAR]: always(INITIAL_STATE),
});
