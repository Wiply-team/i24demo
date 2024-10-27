import {
  __,
  adjust,
  always,
  append,
  assoc,
  find,
  findIndex,
  gte,
  ifElse,
  pipe,
  propEq,
  unless,
} from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

// scripts initial state
export const INITIAL_STATE = {
  scripts: [],
};

export const LOAD_SCRIPT = "scripts/LOAD_SCRIPT";
export const SCRIPT_LOADED = "scripts/SCRIPT_LOADED";

// loadScript :: String -> Action
export const loadScript = (src) => ({
  type: LOAD_SCRIPT,
  src,
});

// scriptLoaded :: () -> Action
export const scriptLoaded = (src) => ({
  type: SCRIPT_LOADED,
  src,
});

// scripts :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [LOAD_SCRIPT]: (state, { src }) => ({
    ...state,
    scripts: unless(
      find(propEq(src, "src")),
      append({ src: src, ready: false })
    )(state.scripts),
  }),
  [SCRIPT_LOADED]: (state, { src }) => ({
    ...state,
    scripts: pipe(
      findIndex(propEq(src, "src")),
      ifElse(
        gte(__, 0),
        adjust(__, assoc("ready", true), state.scripts),
        always(state.scripts)
      )
    )(state.scripts),
  }),
});
