import * as metas from "../store/modules/metas";
import {
  always,
  call,
  compose,
  ifElse,
  isNil,
  not,
  pipe,
  prop,
  map as rmap,
} from "ramda";
import { combineEpics, ofType } from "redux-observable";
import { filter, ignoreElements, map, tap } from "rxjs";
import { inDoubleQuotedAttr } from "xss-filters";
import { logObservableError } from "../utilities/logs";

// changeHeadTitleEpic :: Epic -> Observable Action TITLE_CHANGED
export const changeHeadTitleEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(metas.CHANGE_TITLE),
    map(prop("title")),
    map((title) => ({
      title,
      element: document.querySelector("head title"),
    })),
    filter(compose(not, isNil, prop("element"))),
    tap(({ title, element }) => (element.textContent = title)),
    map(({ title }) => metas.titleChanged(title)),
    logObservableError("metas :: changeHeadTitleEpic", logger)
  );

// setHeadMetasEpic :: Epic -> _
export const setHeadMetasEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(metas.SET_METAS),
    map(prop("metas")),
    map((metas) => ({
      metas,
      head: document.querySelector("head"),
    })),
    filter(compose(not, isNil, prop("head"))),
    tap(({ head, metas }) => rmap((meta) => createMetaTag(head, meta))(metas)),
    ignoreElements(),
    logObservableError("metas :: setHeadMetasEpic", logger)
  );

// removeHeadMetasEpic :: Epic -> _
export const removeHeadMetasEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(metas.REMOVE_METAS),
    map(prop("metas")),
    map((metas) => ({
      metas,
      head: document.querySelector("head"),
    })),
    filter(compose(not, isNil, prop("head"))),
    tap(({ head, metas }) =>
      rmap((meta) => removeMetaTag(document, head, meta))(metas)
    ),
    ignoreElements(),
    logObservableError("metas :: removeHeadMetasEpic", logger)
  );

// addHeadMetaEpic :: Epic -> _
export const addHeadMetaEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(metas.ADD_META),
    map(({ name, content }) => ({
      meta: { name, content },
      head: document.querySelector("head"),
    })),
    filter(compose(not, isNil, prop("head"))),
    tap(({ head, meta }) => createMetaTag(head, meta)),
    ignoreElements(),
    logObservableError("metas :: addHeadMetaEpic", logger)
  );

// removeHeadMetaEpic :: Epic -> _
export const removeHeadMetaEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(metas.REMOVE_META),
    map(({ name, content }) => ({
      meta: { name, content },
      head: document.querySelector("head"),
    })),
    filter(compose(not, isNil, prop("head"))),
    tap(({ head, meta }) => removeMetaTag(document, head, meta)),
    ignoreElements(),
    logObservableError("metas :: removeHeadMetaEpic", logger)
  );

const removeMetaTag = (document, head, { name, content }) =>
  call(
    pipe(
      () => document.querySelectorAll("head meta"),
      rmap(
        ifElse(
          (meta) =>
            meta.getAttribute("name") === name &&
            meta.getAttribute("content") === content,
          (meta) => head.removeChild(meta),
          always(null)
        )
      )
    )
  );

const createMetaTag = (head, { name, content }) =>
  head.insertAdjacentHTML(
    "beforeend",
    `<meta property="${inDoubleQuotedAttr(name)}" name="${inDoubleQuotedAttr(
      name
    )}" content="${inDoubleQuotedAttr(content)}" />`
  );

export default combineEpics(
  changeHeadTitleEpic,
  setHeadMetasEpic,
  removeHeadMetasEpic,
  addHeadMetaEpic,
  removeHeadMetaEpic
);
