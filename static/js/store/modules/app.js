import { always } from "ramda";
import { createReducer } from "./../../utilities/miscellaneous";

export const INITIAL_STATE = {
  isHydrating: false,
};

export const HYDRATION_STARTED = "app/HYDRATION_STARTED";
export const HYDRATION_COMPLETED = "app/HYDRATION_COMPLETED";

// hydrationStarted :: () -> Action
export const hydrationStarted = always({ type: HYDRATION_STARTED });

// hydrationCompleted :: () -> Action
export const hydrationCompleted = always({ type: HYDRATION_COMPLETED });

export default createReducer(INITIAL_STATE, {
  [HYDRATION_STARTED]: (state) => ({
    ...state,
    isHydrating: true,
  }),
  [HYDRATION_COMPLETED]: (state) => ({
    ...state,
    isHydrating: false,
  }),
});
