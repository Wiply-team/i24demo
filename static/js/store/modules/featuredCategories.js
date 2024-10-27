import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  fetching: false,
  categories: [],
};

export const FETCH = "featuredCategories/FETCH";
export const RECEIVED = "featuredCategories/RECEIVED";
export const CLEAN = "featuredCategories/CLEAN";

export const fetchFeaturedCategories = always({ type: FETCH });
export const received = (featuredCategories) => ({
  type: RECEIVED,
  featuredCategories,
});
export const cleanFeaturedCategories = always({ type: CLEAN });

export default createReducer(INITIAL_STATE, {
  [FETCH]: (state) => ({
    ...state,
    fetching: true,
  }),
  [RECEIVED]: (state, { featuredCategories }) => ({
    ...state,
    fetching: false,
    categories: featuredCategories,
  }),
  [CLEAN]: always(INITIAL_STATE),
});
