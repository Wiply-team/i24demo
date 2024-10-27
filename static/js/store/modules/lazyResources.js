import { createReducer } from "../../utilities/miscellaneous";
import { uniq } from "ramda";

export const INITIAL_STATE = {
  reducers: [],
  epics: [],
};

export const LOAD_RESOURCES = "lazyResources/LOAD_RESOURCES";
export const REDUCERS_LOADED = "lazyResources/REDUCERS_LOADED";
export const EPICS_LOADED = "lazyResources/EPICS_LOADED";

// loadResources :: () -> Action.LOAD_RESOURCES
export const loadResources = (reducers = [], epics = []) => ({
  type: LOAD_RESOURCES,
  reducers,
  epics,
});

// reducersLoaded :: [String] -> Action.REDUCERS_LOADED
export const reducersLoaded = (reducers = []) => ({
  type: REDUCERS_LOADED,
  reducers,
});

// epicsLoaded :: [String] -> Action.EPICS_LOADED
export const epicsLoaded = (epics = []) => ({
  type: EPICS_LOADED,
  epics,
});

// lazyResources :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [REDUCERS_LOADED]: (state, { reducers }) => ({
    ...state,
    reducers: uniq([...state.reducers, ...reducers]),
  }),
  [EPICS_LOADED]: (state, { epics }) => ({
    ...state,
    epics: uniq([...state.epics, ...epics]),
  }),
});
