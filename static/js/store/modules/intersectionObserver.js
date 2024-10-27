import {
  T,
  always,
  anyPass,
  assocPath,
  complement,
  cond,
  mapObjIndexed,
  path,
  pickBy,
  propEq,
  when,
} from "ramda";
import {
  OBSERVER_BRIGHTCOVE_VIDEO,
  OBSERVER_IMAGE,
} from "../../store/dependencies/observersRegistry/registries";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  observedItems: {},
};

export const CLEAR = "intersectionObserver/CLEAR";
export const OBSERVE = "intersectionObserver/OBSERVE";
export const INTERSECT = "intersectionObserver/INTERSECT";
export const LOADED = "intersectionObserver/LOADED";
export const LOAD_ERROR = "intersectionObserver/LOAD_ERROR";

// clear :: _ -> Action.CLEAR
export const clear = always({ type: CLEAR });

// observe :: (String, String) -> Action.OBSERVE
export const observe = (observerName, observedItemId) => ({
  type: OBSERVE,
  observerName,
  observedItemId,
});

// intersect :: (String, String) -> Action.INTERSECT
export const intersect = (observerName, observedItemId) => ({
  type: INTERSECT,
  observerName,
  observedItemId,
});

// loaded :: (String, String) -> Action.LOADED
export const loaded = (observerName, observedItemId) => ({
  type: LOADED,
  observerName,
  observedItemId,
});

// loadError :: (String, String) -> Action.OAD_ERROR
export const loadError = (observerName, observedItemId) => ({
  type: LOAD_ERROR,
  observerName,
  observedItemId,
});

export default createReducer(INITIAL_STATE, {
  [CLEAR]: (state) => ({
    ...state,
    observedItems: mapObjIndexed(
      cond([
        [
          // For those two types of observers, the `clear` action just removes
          // the observed items that has not been loaded yet, keeping untouched
          // the already loaded ones. This because, if an item as already been
          // lazy loaded, it means that the associated resources are already
          // present on the client and therefore they can be loaded without
          // requiring anything to the server.
          (_, key) => OBSERVER_IMAGE === key || OBSERVER_BRIGHTCOVE_VIDEO,
          pickBy(
            anyPass([
              propEq(true, "isLoaded"),
              propEq(true, "isLoadedWithErrors"),
            ])
          ),
        ],
        [T, always({})],
      ]),
      state.observedItems
    ),
  }),

  [OBSERVE]: (state, { observerName, observedItemId }) => ({
    ...state,
    observedItems: when(
      complement(path([observerName, observedItemId])),
      assocPath([observerName, observedItemId], {
        isIntersecting: false,
        isLoaded: false,
        isLoadedWithErrors: false,
      })
    )(state.observedItems),
  }),

  [INTERSECT]: (state, { observerName, observedItemId }) => ({
    ...state,
    observedItems: assocPath(
      [observerName, observedItemId, "isIntersecting"],
      true,
      state.observedItems
    ),
  }),

  [LOADED]: (state, { observerName, observedItemId }) => ({
    ...state,
    observedItems: assocPath(
      [observerName, observedItemId, "isLoaded"],
      true,
      state.observedItems
    ),
  }),

  [LOAD_ERROR]: (state, { observerName, observedItemId }) => ({
    ...state,
    observedItems: assocPath(
      [observerName, observedItemId, "isLoadedWithErrors"],
      true,
      state.observedItems
    ),
  }),
});
