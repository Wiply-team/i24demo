import {
  RECEIVED_PAGE,
  FREEZE_SCROLL_POSITION,
  restoreScrollBehavior,
  CLEAN,
  fetchPrevPage,
  fetchNextPage,
  INIT,
  fetchPage,
  updatePageVisibility,
  UPDATE_PAGE_VISIBILITY,
  cleanExtraPages,
  getPageNumbers,
  REDIRECT_TO_FIRST_PAGE,
  redirectToFirstPage,
} from "../store/modules/pagination";
import {
  __,
  add,
  allPass,
  anyPass,
  complement,
  compose,
  equals,
  head,
  isNil,
  includes,
  keys,
  pickBy,
  pipe,
  propEq,
  props,
  sort,
  subtract,
  when,
} from "ramda";
import { combineEpics, ofType } from "redux-observable";
import {
  debounceTime,
  filter,
  fromEvent,
  ignoreElements,
  map,
  switchMap,
  take,
  takeUntil,
  tap,
  withLatestFrom,
} from "rxjs";
import { logObservableError } from "../utilities/logs";
import {
  resolvePaginatedUrl,
  resolvePaginationPage,
} from "../utilities/paginations";
import { CHANGE_ROUTE, redirect } from "../store/modules/router";
import { HYDRATION_COMPLETED } from "../store/modules/app";
import { OBSERVER_PAGINATION_PAGE } from "../store/dependencies/observersRegistry/registries";
import { intersectionObserverTargetChange$ } from "./index";

// isPaginatedRoute :: String -> Boolean
const isPaginatedRoute = includes(__, [
  "categoryAr",
  "categoryEn",
  "categoryFr",
  "categoryHe",
  "tag",
  "newsFeedAr",
  "newsFeedEn",
  "newsFeedFr",
  "newsFeedHe",
  "author",
])(__);

// initPaginationEpic :: Epic -> Observable Action.FETCH_PAGE
export const initPaginationEpic = (action$, state$, { location, logger }) =>
  action$.pipe(
    ofType(INIT),
    withLatestFrom(state$),
    map(([action, state]) =>
      pipe(
        (location, state) =>
          resolvePaginationPage(state.pagination.page)(location),
        fetchPage
      )(location, state)
    ),
    logObservableError("pagination :: initPaginationEpic", logger)
  );

// loadPrevPageOnScrollEpic :: Epic -> Observable Action.FETCH_PREV_PAGE
export const loadPrevPageOnScrollEpic = (
  action$,
  state$,
  { document, logger, window }
) =>
  action$.pipe(
    ofType(INIT, HYDRATION_COMPLETED),
    withLatestFrom(state$),
    filter(([{ type }, state]) =>
      anyPass([
        equals(INIT),
        allPass([
          equals(HYDRATION_COMPLETED),
          () => isPaginatedRoute(state.router.activeRoute.name),
        ]),
      ])(type)
    ),
    switchMap(() =>
      fromEvent(window, "scroll").pipe(
        takeUntil(action$.pipe(ofType(CLEAN))),
        debounceTime(200),
        withLatestFrom(state$),
        filter(([_, state]) => !state.router.isRestoringScrollPosition),
        filter(([_, state]) => !state.pagination.isFetching),
        filter(([_, state]) => state.pagination.page > 1),
        filter(([_, state]) => Object.keys(state.pagination.pages).length > 0),
        filter(
          ([_, state]) =>
            compose(head, getPageNumbers)(state.pagination.pages) > 1
        ),
        filter(() => document.documentElement.scrollTop === 0),
        map(fetchPrevPage),
        logObservableError("pagination :: loadPrevPageOnScrollEpic", logger)
      )
    )
  );

// loadNextPageOnScrollEpic :: Epic -> Observable Action.FETCH_NEXT_PAGE
export const loadNextPageOnScrollEpic = (
  action$,
  state$,
  { document, logger, window }
) =>
  action$.pipe(
    ofType(INIT, HYDRATION_COMPLETED),
    withLatestFrom(state$),
    filter(([{ type }, state]) =>
      anyPass([
        equals(INIT),
        allPass([
          equals(HYDRATION_COMPLETED),
          () => isPaginatedRoute(state.router.activeRoute.name),
        ]),
      ])(type)
    ),
    switchMap(() =>
      fromEvent(window, "scroll").pipe(
        takeUntil(action$.pipe(ofType(CLEAN))),
        debounceTime(200),
        withLatestFrom(state$),
        filter(([_, state]) => !state.router.isRestoringScrollPosition),
        filter(([_, state]) => !state.pagination.isFetching),
        filter(([_, state]) => Object.keys(state.pagination.pages).length > 0),
        filter(
          ([_, state]) => state.pagination.totalPages > state.pagination.page
        ),
        map(() => document.querySelector("#loader-placeholder-next")),
        filter(complement(isNil)),
        map((e) => e.getBoundingClientRect().bottom),
        filter((position) => position < +window.innerHeight),
        withLatestFrom(state$),
        map(fetchNextPage),
        logObservableError("pagination :: loadNextPageOnScrollEpic", logger)
      )
    )
  );

// cleanExtraPagesEpic :: Epic -> Observable Action.CLEAN_EXTRA_PAGES
export const cleanExtraPagesEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(RECEIVED_PAGE),
    withLatestFrom(state$),
    map(cleanExtraPages),
    logObservableError("pagination :: cleanExtraPagesEpic", logger)
  );

/**
 * Move the scroll position to the first article, when the user will scroll up,
 * Then the user will be able to fetch previous articles.
 *
 * scrollToPageEpic :: Epic -> Observable Action __
 */
export const scrollToPageEpic = (
  action$,
  state$,
  { logger, document, window }
) =>
  action$.pipe(
    ofType(RECEIVED_PAGE, HYDRATION_COMPLETED),
    withLatestFrom(state$),
    filter(([{ type }, state]) =>
      anyPass([
        equals(RECEIVED_PAGE),
        allPass([
          equals(HYDRATION_COMPLETED),
          () => isPaginatedRoute(state.router.activeRoute.name),
        ]),
      ])(type)
    ),
    filter(([_, state]) => !state.router.isRestoringScrollPosition),
    filter(([_, state]) => state.pagination.page !== 1),
    filter(([{ page }, state]) => state.pagination.page === page),
    filter(([_, state]) => Object.keys(state.pagination.pages).length === 1),
    filter(() => document.documentElement.scrollTop === 0),
    tap(() => {
      const header = document.querySelector(".header-navbar");

      window.scrollTo(document.documentElement.scrollLeft, header.offsetHeight);
    }),
    ignoreElements(),
    logObservableError("pagination :: scrollToPageEpic", logger)
  );

/**
 * When the user scroll up, we store the position of the last item he saw.
 * Then the previous items are loaded, we reset the scroll position to this item so there is no unwanted scroll behavior.
 *
 * restoreScrollPositionEpic :: Epic -> Observable Action _
 */
export const restoreScrollPositionEpic = (
  action$,
  state$,
  { logger, document }
) =>
  action$.pipe(
    ofType(FREEZE_SCROLL_POSITION),
    withLatestFrom(state$),
    filter(([_, state]) => Object.keys(state.pagination.pages).length > 1),
    tap(([_, state]) => {
      const node = document.querySelector("html");
      node.scrollTop =
        state.pagination.scrollTop +
        (node.scrollHeight - state.pagination.scrollHeight);
    }),
    map(restoreScrollBehavior),
    logObservableError("pagination :: restoreScrollPositionEpic", logger)
  );

// addSEOLinkEpic :: Epic -> _
export const addSEOLinkEpic = (
  action$,
  state$,
  { location, document, logger }
) =>
  action$.pipe(
    ofType(RECEIVED_PAGE),
    take(1),
    filter(() => !isNil(document.head)),
    withLatestFrom(state$),
    map(([_, { pagination }]) => props(["page", "totalPages"])(pagination)),
    // the canonical link is added by the epic src/effects/header::injectCanonicalLinkEpic
    tap(
      when(
        ([page]) => page > 1,
        ([page]) =>
          addPrevLink(
            document,
            resolvePaginatedUrl(location.href, subtract(page, 1))
          )
      )
    ),
    tap(
      when(
        ([page, totalPages]) => page < totalPages,
        ([page]) =>
          addNextLink(
            document,
            resolvePaginatedUrl(location.href, add(page, 1))
          )
      )
    ),
    ignoreElements(),
    logObservableError("pagination :: addSEOLinkEpic", logger)
  );

// addLink :: String -> (Document, String) -> _
const addLink = (rel) => (document, href) => {
  var linkEl = document.createElement("link");
  linkEl.rel = rel;
  linkEl.href = href;
  document.head.appendChild(linkEl);
};

// addPrevLink :: String -> Function
const addPrevLink = addLink("prev");

// addNextLink :: String -> Function
const addNextLink = addLink("next");

// observePageEpic :: Epic -> Observable Action _
export const observePageEpic = (
  action$,
  state$,
  { intersectionObserversRegistry, logger, document }
) =>
  action$.pipe(
    ofType(HYDRATION_COMPLETED, RECEIVED_PAGE),
    filter(() => intersectionObserversRegistry.isSupported()),
    withLatestFrom(state$),
    filter(([{ type }, state]) =>
      anyPass([
        equals(RECEIVED_PAGE),
        allPass([
          equals(HYDRATION_COMPLETED),
          () => isPaginatedRoute(state.router.activeRoute.name),
        ]),
      ])(type)
    ),
    tap(([_, state]) => {
      const target = document.querySelector(`#page-${state.pagination.page}`);
      const pageObserver = intersectionObserversRegistry.get(
        OBSERVER_PAGINATION_PAGE
      );

      if (target && pageObserver) {
        pageObserver.observe(target);
      }
    }),
    ignoreElements(),
    logObservableError("pagination :: observeArticlePageEpic", logger)
  );

// removeUnusedPageObserversEpic :: Epic -> Observable Action _
export const removeUnusedPageObserversEpic = (
  action$,
  state$,
  { intersectionObserversRegistry, logger }
) =>
  action$.pipe(
    ofType(CHANGE_ROUTE),
    filter(() => intersectionObserversRegistry.isSupported()),
    tap(() => {
      const pageObserver = intersectionObserversRegistry.get(
        OBSERVER_PAGINATION_PAGE
      );

      if (pageObserver) {
        pageObserver.disconnect();
      }
    }),
    ignoreElements(),
    logObservableError("pagination :: removeUnusedPageObserversEpic", logger)
  );

// updatePageIntersectionEpic :: Epic -> Observable Action UPDATE_PAGE_VISIBILITY
export const updatePageIntersectionEpic = (action$, state$, { logger }) =>
  intersectionObserverTargetChange$.pipe(
    filter(propEq(OBSERVER_PAGINATION_PAGE, "observerName")),
    map(({ observedItem }) =>
      updatePageVisibility(
        observedItem.target.dataset.page,
        observedItem.isIntersecting
      )
    ),
    logObservableError("pagination :: updatePageIntersectionEpic", logger)
  );

// resolveMinPageNumber :: Array -> Number
// Returns the min page number from all the visible pages
const resolveMinPageNumber = pipe(
  pickBy(propEq(true, "isVisible")),
  keys,
  sort(subtract),
  head
);

// updatePageUrlEpic :: Epic -> Observable Action _
export const updatePageUrlEpic = (
  action$,
  state$,
  { location, logger, history }
) =>
  action$.pipe(
    ofType(UPDATE_PAGE_VISIBILITY),
    withLatestFrom(state$),
    tap(
      pipe(
        ([_, state]) => resolveMinPageNumber(state.pagination.pages),
        when(complement(isNil), (page) =>
          history.replaceState(
            history.state,
            "",
            resolvePaginatedUrl(location.href, page)
          )
        )
      )
    ),
    ignoreElements(),
    logObservableError("pagination :: updatePageUrlEpic", logger)
  );

// checkIfPageIsValidEpic :: Epic -> Observable Action.REDIRECT_TO_FIRST_PAGE
export const checkIfPageIsValidEpic = (action$, state$, { location, logger }) =>
  action$.pipe(
    ofType(RECEIVED_PAGE),
    filter(({ totalPages, page }) => page > totalPages),
    map(redirectToFirstPage),
    logObservableError("pagination :: checkIfPageIsValidEpic", logger)
  );

// redirectToFirstPageEpic :: Epic -> Observable Action.REDIRECT
export const redirectToFirstPageEpic = (
  action$,
  state$,
  { location, logger }
) =>
  action$.pipe(
    ofType(REDIRECT_TO_FIRST_PAGE),
    map(() => redirect(location.pathname)),
    logObservableError("pagination :: redirectToFirstPageEpic", logger)
  );

export default combineEpics(
  initPaginationEpic,
  loadPrevPageOnScrollEpic,
  loadNextPageOnScrollEpic,
  cleanExtraPagesEpic,
  scrollToPageEpic,
  restoreScrollPositionEpic,
  addSEOLinkEpic,
  observePageEpic,
  updatePageIntersectionEpic,
  removeUnusedPageObserversEpic,
  updatePageUrlEpic,
  checkIfPageIsValidEpic,
  redirectToFirstPageEpic
);
