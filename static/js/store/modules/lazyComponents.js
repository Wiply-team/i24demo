import { createReducer } from "../../utilities/miscellaneous";

// breakingNews initial state
export const INITIAL_STATE = {
  loadedComponents: {},
};

// lazyComponents action types
export const LOAD = "lazyComponents/LOAD";
export const LOADED = "lazyComponents/LOADED";

// load :: String -> Action.LOAD
export const load = (componentName) => ({
  type: LOAD,
  componentName,
});

// loaded :: (String, React.Component) -> Action.LOADED
export const loaded = (componentName, component) => ({
  type: LOADED,
  componentName,
  component,
});

// lazyComponents :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [LOADED]: (state, { componentName, component }) => ({
    ...state,
    loadedComponents: {
      ...state.loadedComponents,
      [componentName]: component,
    },
  }),
});
