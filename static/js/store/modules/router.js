import { always, append, filter, init } from "ramda";
import { enLocale } from "../../utilities/locales";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  activeRoute: {
    name: "",
    params: {},
    href: "",
    pathname: "",
  },
  locale: enLocale,
  matchesCounter: 0,
  isRestoringScrollPosition: false,
  scrollPositions: [],
  routesNames: [],
};

export const REGISTER = "router/REGISTER";
export const REGISTERED = "router/REGISTERED";
export const UNREGISTER = "router/UNREGISTER";
export const UNREGISTERED = "router/UNREGISTERED";
export const FIND_ROUTE = "router/FIND_ROUTE";
export const ROUTE_FOUND = "router/ROUTE_FOUND";
export const CHANGE_ROUTE = "router/CHANGE_ROUTE";
export const REDIRECT = "router/REDIRECT";
export const GUESS_LOCALE_AND_REDIRECT_TO_HOMEPAGE =
  "router/GUESS_LOCALE_AND_REDIRECT_TO_HOMEPAGE";
export const SAVE_SCROLL_POSITION = "router/SAVE_SCROLL_POSITION";
export const RESTORE_SCROLL_POSITION = "router/RESTORE_SCROLL_POSITION";
export const RESTORE_SCROLL_POSITION_RETRY =
  "router/RESTORE_SCROLL_POSITION_RETRY";
export const SCROLL_POSITION_RESTORED = "router/SCROLL_POSITION_RESTORED";
export const SCROLL_POSITION_RESTORE_FAILED =
  "router/SCROLL_POSITION_RESTORE_FAILED";

// register :: Route -> Action REGISTER
export const register = (route) => ({
  type: REGISTER,
  route,
});

// registered :: Route -> Action REGISTERED
export const registered = (route) => ({
  type: REGISTERED,
  route,
});

// unregister :: Route -> Action UNREGISTER
export const unregister = (route) => ({
  type: UNREGISTER,
  route,
});

// registered :: Route -> Action UNREGISTERED
export const unregistered = (route) => ({
  type: UNREGISTERED,
  route,
});

// findRoute :: String -> Action findRoute
export const findRoute = (pathname) => ({
  type: FIND_ROUTE,
  pathname,
});

// routeFound :: (String, Object, String, String) -> Action ROUTE_FOUND
export const routeFound = (name, params, href, pathname) => ({
  type: ROUTE_FOUND,
  name,
  params,
  href,
  pathname,
});

// changeRoute :: String -> Action CHANGE_ROUTE
export const changeRoute = (to) => ({
  type: CHANGE_ROUTE,
  to,
});

// saveScrollPosition :: (Int, Int) -> Action SAVE_SCROLL_POSITION
export const saveScrollPosition = (scrollTop, scrollLeft) => ({
  type: SAVE_SCROLL_POSITION,
  scrollTop,
  scrollLeft,
});

// restoreScrollPosition :: (Int, Int) -> Action RESTORE_SCROLL_POSITION
export const restoreScrollPosition = (scrollTop, scrollLeft) => ({
  type: RESTORE_SCROLL_POSITION,
  scrollTop,
  scrollLeft,
});

// restoreScrollPositionRetry :: _ -> Action SCROLL_POSITION_RESTORE_FAILED
export const restoreScrollPositionRetry = always({
  type: RESTORE_SCROLL_POSITION_RETRY,
});

// scrollPositionRestored :: _ -> Action SCROLL_POSITION_RESTORED
export const scrollPositionRestored = always({
  type: SCROLL_POSITION_RESTORED,
});

// scrollPositionRestoreFailed :: _ -> Action SCROLL_POSITION_RESTORE_FAILED
export const scrollPositionRestoreFailed = always({
  type: SCROLL_POSITION_RESTORE_FAILED,
});

// redirect :: String -> Action REDIRECT
export const redirect = (to) => ({
  type: REDIRECT,
  to,
});

export default createReducer(INITIAL_STATE, {
  [REGISTERED]: (state, { route }) => ({
    ...state,
    routesNames: append(route.name, state.routesNames),
  }),
  [UNREGISTER]: (state, { route }) => ({
    ...state,
    routesNames: filter(
      (routeName) => routeName !== route.name,
      state.routesNames
    ),
  }),
  [FIND_ROUTE]: (state) => ({
    ...state,
    isRestoringScrollPosition: false,
  }),
  [ROUTE_FOUND]: (state, { name, params, href, pathname }) => ({
    ...state,
    activeRoute: {
      name,
      params,
      href,
      pathname,
    },
    locale: (params && params.locale) || state.locale,
    matchesCounter: state.matchesCounter + 1,
  }),
  [SAVE_SCROLL_POSITION]: (state, { scrollTop, scrollLeft }) => ({
    ...state,
    scrollPositions: append(
      {
        scrollTop,
        scrollLeft,
      },
      state.scrollPositions
    ),
  }),
  [RESTORE_SCROLL_POSITION]: (state) => ({
    ...state,
    isRestoringScrollPosition: true,
    scrollPositions: init(state.scrollPositions),
  }),
  [SCROLL_POSITION_RESTORED]: (state) => ({
    ...state,
    isRestoringScrollPosition: false,
  }),
  [SCROLL_POSITION_RESTORE_FAILED]: (state) => ({
    ...state,
    isRestoringScrollPosition: false,
  }),
});
