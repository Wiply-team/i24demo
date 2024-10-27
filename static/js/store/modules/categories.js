import { always, assoc, map } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

// categories initial state
export const INITIAL_STATE = {
  isFetching: false,
  categories: [],
  error: false,
};

// categories action types
export const FETCH_CATEGORIES = "categories/FETCH_CATEGORIES";
export const RECEIVED_CATEGORIES = "categories/RECEIVED_CATEGORIES";
export const ERROR = "categories/ERROR";
export const SET_CURRENT_CATEGORY = "categories/SET_CURRENT_CATEGORY";
export const UPDATE_ACTIVE_CATEGORY = "categories/UPDATE_ACTIVE_CATEGORY";
export const UNSET_CURRENT_CATEGORY = "categories/UNSET_CURRENT_CATEGORY";
export const DEACTIVATE_ALL_CATEGORIES = "categories/DEACTIVATE_ALL_CATEGORIES";

// fetchCategories :: () -> Action.FETCH_CATEGORIES
export const fetchCategories = always({ type: FETCH_CATEGORIES });

// receivedCategories :: [Category] -> Action.RECEIVED_CATEGORIES
export const receivedCategories = (categories) => ({
  type: RECEIVED_CATEGORIES,
  categories,
});

// error :: () -> Action.ERROR
export const error = always({ type: ERROR });

// setCurrentCategory :: (Number, Number) -> Action
export const setCurrentCategory = (current, parent) => ({
  type: SET_CURRENT_CATEGORY,
  current,
  parent,
});

// updateActiveCategory :: (Number, Number) -> Action
export const updateActiveCategory = (current, parent) => ({
  type: UPDATE_ACTIVE_CATEGORY,
  current,
  parent,
});

// unsetCurrentCategory :: () -> Action
export const unsetCurrentCategory = always({ type: UNSET_CURRENT_CATEGORY });

// deactivateAllCategories :: () -> Action
export const deactivateAllCategories = always({
  type: DEACTIVATE_ALL_CATEGORIES,
});

// categories :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [RECEIVED_CATEGORIES]: (state, { categories }) => ({
    ...state,
    categories: map(assoc("active", false), categories),
    isFetching: false,
    error: false,
  }),

  [FETCH_CATEGORIES]: (state) => ({
    ...state,
    isFetching: true,
    error: false,
  }),

  [ERROR]: (state) => ({
    ...state,
    isFetching: false,
    error: true,
  }),

  [UPDATE_ACTIVE_CATEGORY]: (state, { current, parent }) => ({
    ...state,
    categories: map(
      (cat) => ({
        ...cat,
        active: cat.id === current || cat.id === parent,
        children: map(
          (ch) => ({
            ...ch,
            active: ch.id === current,
          }),
          cat.children
        ),
      }),
      state.categories
    ),
  }),

  [DEACTIVATE_ALL_CATEGORIES]: (state) => ({
    ...state,
    categories: map(
      (category) => ({
        ...category,
        active: false,
        children: map(
          (child) => ({
            ...child,
            active: false,
          }),
          category.children
        ),
      }),
      state.categories
    ),
  }),
});
