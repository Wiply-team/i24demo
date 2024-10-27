import {
  CHANGE_ROUTE,
  FIND_ROUTE,
  REDIRECT,
  REGISTER,
  ROUTE_FOUND,
  UNREGISTER,
  findRoute,
  registered,
  routeFound,
  unregistered,
  saveScrollPosition,
  scrollPositionRestored,
  restoreScrollPosition,
  RESTORE_SCROLL_POSITION,
  SCROLL_POSITION_RESTORED,
  SCROLL_POSITION_RESTORE_FAILED,
  restoreScrollPositionRetry,
  scrollPositionRestoreFailed,
} from "../store/modules/router";
import {
  F,
  T,
  add,
  always,
  apply,
  call,
  complement,
  compose,
  cond,
  defaultTo,
  equals,
  filter as rfilter,
  find,
  gt,
  head,
  ifElse,
  isEmpty,
  isNil,
  juxt,
  keys,
  last,
  pathOr,
  pipe,
  prop,
  propEq,
  propOr,
  reduce,
} from "ramda";
import { combineEpics, ofType } from "redux-observable";
import {
  filter,
  fromEvent,
  ignoreElements,
  map,
  merge,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
  withLatestFrom,
} from "rxjs";
import { logObservableError } from "../utilities/logs";

// resolveTopPage :: State-> Number
const resolveTopPage = pipe(
  pathOr({}, ["pagination", "pages"]),
  keys,
  head,
  defaultTo(1)
);

// resolveTopVisiblePage :: State-> Number
const resolveTopVisiblePage = pipe(
  pathOr({}, ["pagination", "pages"]),
  rfilter(propEq(true, "isVisible")),
  keys,
  head,
  defaultTo(1)
);

// resolveScrollGap :: (State, Document) -> Number
const resolveScrollGap = (state, document) =>
  ifElse(
    pipe(juxt([resolveTopPage, resolveTopVisiblePage]), apply(equals)),
    always(0),
    pipe(
      resolveTopVisiblePage,
      // Get all the previous pages that will not be loaded on backward navigation
      (currentPage) =>
        pipe(
          pathOr({}, ["pagination", "pages"]),
          keys,
          rfilter(gt(currentPage))
        )(state),
      // Calculate the height of all the previous pages in order to subtract it
      // to the scrollTop position on restore
      reduce(
        (gap, page) =>
          call(
            pipe(
              () => document.querySelector(`#page-${page}`),
              (pageElement) => add(gap, propOr(0, "offsetHeight", pageElement))
            )
          ),
        0
      )
    )
  )(state);

// hasUrlChanged :: (URL, URL) -> Boolean
// Compares origin, pathname and search to consider the whole url except for anchor link changes
const hasUrlChanged = (current, desired) =>
  !(
    current.origin === desired.origin &&
    current.pathname === desired.pathname &&
    current.search === desired.search
  );

// saveScrollPositionEpic :: Epic -> Action.SAVE_SCROLL_POSITION
export const saveScrollPositionEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(CHANGE_ROUTE),
    withLatestFrom(state$),
    filter(([_, state]) => !isEmpty(state.router.activeRoute.pathname)),
    map(([_, state]) =>
      saveScrollPosition(
        document.documentElement.scrollTop - resolveScrollGap(state, document),
        document.documentElement.scrollLeft
      )
    ),
    logObservableError("router :: saveScrollPositionEpic", logger)
  );

// restoreScrollPositionEpic :: Epic -> Action.RESTORE_SCROLL_POSITION
export const restoreScrollPositionEpic = (
  action$,
  state$,
  { logger, window }
) =>
  fromEvent(window, "popstate").pipe(
    switchMap(() =>
      action$.pipe(
        ofType(ROUTE_FOUND),
        take(1),
        withLatestFrom(state$),
        map(([_, state]) => last(state.router.scrollPositions)),
        filter(complement(isNil)),
        map(({ scrollTop, scrollLeft }) =>
          restoreScrollPosition(scrollTop, scrollLeft)
        )
      )
    ),
    logObservableError("router :: restoreScrollPositionEpic", logger)
  );

// resolveDocumentHeight :: Document -> Number
const resolveDocumentHeight = (document) =>
  Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

// resolveMaxScrollHeight :: (Window, Document) -> Number
const resolveMaxScrollHeight = (window, document) =>
  resolveDocumentHeight(document) - window.innerHeight;

// tryRestoreScrollPositionEpic :: Epic -> Action
export const tryRestoreScrollPositionEpic = (
  action$,
  state$,
  { document, window, logger }
) =>
  action$.pipe(
    ofType(RESTORE_SCROLL_POSITION),
    switchMap(({ scrollTop, scrollLeft }) =>
      timer(0, 50).pipe(
        takeUntil(
          action$.pipe(
            ofType(
              FIND_ROUTE,
              SCROLL_POSITION_RESTORED,
              SCROLL_POSITION_RESTORE_FAILED
            )
          )
        ),
        map(
          cond([
            [
              () => resolveMaxScrollHeight(window, document) >= scrollTop,
              pipe(
                () => window.scrollTo(scrollLeft, scrollTop),
                scrollPositionRestored
              ),
            ],
            [
              (tryNumber) => Number(tryNumber) < 100,
              restoreScrollPositionRetry,
            ],
            [T, scrollPositionRestoreFailed],
          ])
        )
      )
    ),
    logObservableError("router :: tryRestoreScrollPositionEpic", logger)
  );

// registerRoutePatternEpic :: Epic -> Action.REGISTERED
export const registerRoutePatternEpic = (
  action$,
  state$,
  { logger, routesPatternRegistry }
) =>
  action$.pipe(
    ofType(REGISTER),
    map(prop("route")),
    tap((route) => routesPatternRegistry.register(route)),
    map(registered),
    logObservableError("router :: registerRoutePatternEpic", logger)
  );

// unregisterRoutePatternEpic :: Epic -> Action.UNREGISTERED
export const unregisterRoutePatternEpic = (
  action$,
  state$,
  { logger, routesPatternRegistry }
) =>
  action$.pipe(
    ofType(UNREGISTER),
    map(prop("route")),
    tap((route) => routesPatternRegistry.unregister(route.name)),
    map(unregistered),
    logObservableError("router :: unregisterRoutePatternEpic", logger)
  );

// changeEpic :: Epic -> Action.FIND_ROUTE
export const historyChangeEpic = (
  action$,
  state$,
  { location, logger, window }
) =>
  merge(fromEvent(window, "popstate"), fromEvent(window, "pushstate")).pipe(
    withLatestFrom(state$),
    map(([_, state]) => new URL(state.router.activeRoute.href)),
    filter((url) => hasUrlChanged(url, location)),
    // decode the pathname in order to avoid issues
    // with encoded arabic characters
    map(() => decodeURIComponent(location.pathname)),
    map(findRoute),
    logObservableError("router :: historyChangeEpic", logger)
  );

// changeRouteEpic :: Epic -> Action.FIND_ROUTE
export const changeRouteEpic = (
  action$,
  state$,
  { history, location, logger }
) =>
  action$.pipe(
    ofType(CHANGE_ROUTE),
    map(({ to }) => new URL(to, location.origin)),
    filter((url) => hasUrlChanged(url, location)),
    tap((url) => history.pushState({}, "", url.pathname + url.search)),
    map((url) => findRoute(decodeURIComponent(url.pathname))),
    logObservableError("router :: changeRouteEpic", logger)
  );

// redirectEpic :: Epic -> Action.FIND_ROUTE
export const redirectEpic = (action$, state$, { history, location, logger }) =>
  action$.pipe(
    ofType(REDIRECT),
    map(({ to }) => new URL(to, location.origin)),
    filter((url) => hasUrlChanged(url, location)),
    tap((url) => history.replaceState({}, "", url.pathname + url.search)),
    map((url) => findRoute(decodeURIComponent(url.pathname))),
    logObservableError("router :: redirectEpic", logger)
  );

// doesPathnameMatchRoute :: (RoutePatternRegistry, String) -> String -> Boolean
const doesPathnameMatchRoute = (routesPatternRegistry, pathname) =>
  pipe(
    (routeName) => routesPatternRegistry.getPattern(routeName),
    ifElse(complement(isNil), (pattern) => pattern.test(pathname), F)
  );

// getRouteParams :: (RoutePatternRegistry, String) -> String -> Object
const getRouteParams = (routesPatternRegistry, pathname) =>
  pipe(
    (routeName) => routesPatternRegistry.getPattern(routeName),
    (pattern) => pattern.exec(pathname),
    propOr({}, "groups")
  );

// findRouteEpic :: Epic -> Action.FIND_ROUTE
export const findRouteEpic = (
  action$,
  state$,
  { location, logger, routesPatternRegistry }
) =>
  action$.pipe(
    ofType(FIND_ROUTE),
    map(prop("pathname")),
    withLatestFrom(state$),
    filter(([_, state]) => location.href !== state.router.activeRoute.href),
    map(([pathname, state]) => ({
      pathname,
      routeName: find(
        doesPathnameMatchRoute(routesPatternRegistry, pathname),
        state.router.routesNames
      ),
    })),
    filter(compose(complement(isNil), prop("routeName"))),
    map(({ pathname, routeName }) =>
      routeFound(
        routeName,
        getRouteParams(routesPatternRegistry, pathname)(routeName),
        location.href,
        location.pathname
      )
    ),
    logObservableError("router :: findRouteEpic", logger)
  );

// scrollTopOnRouteFoundEpic :: Epic -> Observable Void
export const scrollTopOnRouteFoundEpic = (
  action$,
  state$,
  { logger, window }
) =>
  action$.pipe(
    ofType(CHANGE_ROUTE),
    switchMap(() =>
      action$.pipe(
        ofType(ROUTE_FOUND),
        take(1),
        tap(() => window.scrollTo(0, 0))
      )
    ),
    ignoreElements(),
    logObservableError("router :: scrollTopOnRouteFoundEpic", logger)
  );

export default combineEpics(
  scrollTopOnRouteFoundEpic,
  saveScrollPositionEpic,
  restoreScrollPositionEpic,
  tryRestoreScrollPositionEpic,
  registerRoutePatternEpic,
  unregisterRoutePatternEpic,
  historyChangeEpic,
  changeRouteEpic,
  findRouteEpic,
  redirectEpic
);
