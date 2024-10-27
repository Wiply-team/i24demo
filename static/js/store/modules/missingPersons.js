import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  isFetching: true,
  missingPersons: [],
  error: false,
};

export const FETCH = "missingPersons/FETCH";
export const RECEIVED = "missingPersons/RECEIVED";
export const ERROR = "missingPersons/ERROR";
export const CLEAN = "missingPersons/CLEAN";

// fetch :: () -> Action
export const fetch = always({ type: FETCH });

// received :: [Person] -> Action
export const received = (missingPersons) => ({
  type: RECEIVED,
  missingPersons: missingPersons ?? [],
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
  [RECEIVED]: (state, { missingPersons }) => ({
    ...state,
    isFetching: false,
    error: false,
    missingPersons,
  }),
  [ERROR]: (state) => ({
    ...state,
    isFetching: false,
    error: true,
  }),
  [CLEAN]: always(INITIAL_STATE),
});
