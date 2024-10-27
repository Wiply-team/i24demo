import { append } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

// initial state
export const INITIAL_STATE = {
  toasts: [],
};

// action types
export const ADD_TOAST = "toastr/ADD_TOAST";
export const CLOSE_TOAST = "toastr/CLOSE_TOAST";
export const REMOVE_TOAST = "toastr/REMOVE_TOAST";

// addToast :: Toast -> Action
export const addToast = (toast) => ({
  type: ADD_TOAST,
  toast,
});

// closeToast :: Number -> Action
export const closeToast = (id) => ({
  type: CLOSE_TOAST,
  id,
});

// removeToast :: Number -> Action
export const removeToast = (id) => ({
  type: REMOVE_TOAST,
  id,
});

// toastr :: (State, Action * ) -> State
export default createReducer(INITIAL_STATE, {
  [ADD_TOAST]: (state, { toast }) => ({
    ...state,
    toasts: append(toast, state.toasts),
  }),

  [REMOVE_TOAST]: (state, { id }) => ({
    ...state,
    toasts: state.toasts.filter((t) => t.id !== id),
  }),
});
