import { always, both, compose, dropWhile, equals, prop } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  title: "i24NEWS",
  metas: [],
};

export const CHANGE_TITLE = "metas/CHANGE_TITLE";
export const TITLE_CHANGED = "metas/TITLE_CHANGED";
export const REMOVE_METAS = "metas/REMOVE_ALL";
export const SET_METAS = "metas/SET";
export const ADD_META = "metas/ADD";
export const REMOVE_META = "metas/REMOVE";

export const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  title,
});

export const titleChanged = always({ type: TITLE_CHANGED });

export const setMetas = (metas) => ({
  type: SET_METAS,
  metas,
});

export const removeMetas = (metas) => ({
  type: REMOVE_METAS,
  metas,
});

export const addMeta = (name, content) => ({
  type: ADD_META,
  name,
  content,
});

export const removeMeta = (name, content) => ({
  type: REMOVE_META,
  name,
  content,
});

export default createReducer(INITIAL_STATE, {
  [CHANGE_TITLE]: (state, { title }) => ({
    ...state,
    title,
  }),

  [SET_METAS]: (state, { metas }) => ({
    ...state,
    metas,
  }),

  [REMOVE_METAS]: (state) => ({ ...state, metas: [] }),

  [ADD_META]: (state, { name, content }) => ({
    ...state,
    metas: [...state.metas, { name, content }],
  }),

  [REMOVE_META]: (state, { name, content }) => ({
    ...state,
    metas: dropWhile(
      both(
        compose(equals(name), prop("name")),
        compose(equals(content), prop("content"))
      ),
      state.metas
    ),
  }),
});
