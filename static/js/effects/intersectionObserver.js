import {
  CLEAR,
  OBSERVE,
  clear,
  intersect,
} from "../store/modules/intersectionObserver";
import {
  OBSERVER_COMPONENT,
  OBSERVER_IMAGE,
} from "../store/dependencies/observersRegistry/registries";
import { combineEpics, ofType } from "redux-observable";
import { filter, ignoreElements, map, tap } from "rxjs";
import { includes, path, pipe, map as rmap } from "ramda";
import { FIND_ROUTE } from "../store/modules/router";
import { intersectionObserverTargetChange$ } from ".";
import { logObservableError } from "../utilities/logs";

// observeEpic :: Epic -> _
//
// IntersectionObserver is supported so we can use it to observe elements with
// the specified id and wait for them to intersect one of the configured
// visibility thresolds
//
// Because of the lazy loading of CSS in dev env, this observers may be triggered
// too early, q quick workaround for this is to use a delay(1000) clause
//
export const observeEpic = (
  action$,
  state$,
  { document, intersectionObserversRegistry, logger }
) =>
  action$.pipe(
    ofType(OBSERVE),
    filter(() => intersectionObserversRegistry.isSupported()),
    tap(
      pipe(
        // Resolve the observer
        ({ observerName, observedItemId }) => [
          intersectionObserversRegistry.get(observerName),
          observedItemId,
        ],
        // Search for elements with the specified id and start observing them
        ([observer, observedItemId]) =>
          rmap(
            (target) => observer.observe(target),
            document.querySelectorAll(
              `*[data-observed-item-id="${observedItemId}"]`
            )
          )
      )
    ),
    ignoreElements(),
    logObservableError("intersectionObserver :: observeEpic", logger)
  );

// observeFallbackEpic :: Epic -> Observable Action.INTERSECT
// IntersectionObserver is not supported so we directly dispatch the INTERSECT
// action (so no lazy loading in this case)
export const observeFallbackEpic = (
  action$,
  state$,
  { intersectionObserversRegistry, logger }
) =>
  action$.pipe(
    ofType(OBSERVE),
    filter(() => !intersectionObserversRegistry.isSupported()),
    map(({ observerName, observedItemId }) =>
      intersect(observerName, observedItemId)
    ),
    logObservableError("intersectionObserver :: observeFallbackEpic", logger)
  );

// intersectTargetEpic :: Epic -> Observable Action.INTERSECT
// Called by IntersectionObserver callback when the target is intersecting one
// of the configured visibility thresholds
export const intersectTargetEpic = (
  action$,
  state$,
  { intersectionObserversRegistry, logger }
) =>
  intersectionObserverTargetChange$.pipe(
    filter(({ observerName }) =>
      includes(observerName, [OBSERVER_COMPONENT, OBSERVER_IMAGE])
    ),
    filter(({ observedItem }) => observedItem.isIntersecting),
    tap(({ observerName, observedItem }) => {
      const observer = intersectionObserversRegistry.get(observerName);

      if (observer) {
        observer.unobserve(observedItem.target);
      }
    }),
    map(({ observerName, observedItem }) =>
      intersect(
        observerName,
        path(["target", "dataset", "observedItemId"], observedItem)
      )
    ),
    logObservableError("intersectionObserver :: intersectTargetEpic", logger)
  );

// disconnectObserversOnRouteChangeEpic :: Epic -> Action.CLEAR
// @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect
export const disconnectObserversOnRouteChangeEpic = (
  action$,
  state$,
  { logger }
) =>
  action$.pipe(
    ofType(FIND_ROUTE),
    map(clear),
    logObservableError(
      "intersectionObserver :: disconnectObserversOnRouteChangeEpic",
      logger
    )
  );

// clearEpic :: Epic -> _
// Stop observing targets from all the observers as they will get removed from
// the DOM
export const clearEpic = (
  action$,
  state$,
  { intersectionObserversRegistry, logger }
) =>
  action$.pipe(
    ofType(CLEAR),
    filter(() => intersectionObserversRegistry.isSupported()),
    map(() => intersectionObserversRegistry.getAll()),
    tap(rmap((observer) => observer.disconnect())),
    ignoreElements(),
    logObservableError("intersectionObserver :: clearEpic", logger)
  );

export default combineEpics(
  clearEpic,
  disconnectObserversOnRouteChangeEpic,
  intersectTargetEpic,
  observeEpic,
  observeFallbackEpic
);
