import {
  OBSERVER_BRIGHTCOVE_VIDEO,
  OBSERVER_COMPONENT,
  OBSERVER_IMAGE,
  OBSERVER_PAGINATION_PAGE,
} from "./registries";
import { defaultOptions, withMarginOptions } from "./options";
import { map, pipe, tap } from "ramda";
import { intersectionObserverTargetChange$ } from "../../../effects";

const createIntersectionObserverDefaultCallback =
  (observerName) => (entries, observer) =>
    map(
      (entry) =>
        intersectionObserverTargetChange$.next({
          observerName,
          observedItem: entry,
        }),
      entries
    );

// createObserver :: (observerName, options) -> IntersectionObserver
const createObserver = (callback, options) =>
  new IntersectionObserver(callback, options);

// createIntersectionObserversRegistry :: Window -> IntersectionObserversRegistry
const createIntersectionObserversRegistry = pipe(
  (window) => ({
    window,
    _supportsIntersectionObserver: "IntersectionObserver" in window,
    _observers: {},

    add: function (observerName, options, observerCallback) {
      this._observers[observerName] = this.isSupported()
        ? createObserver(observerCallback, options)
        : null;
    },

    get: function (observerName) {
      return this._observers[observerName];
    },

    getAll: function () {
      return this._observers;
    },

    isSupported: function () {
      return this._supportsIntersectionObserver;
    },
  }),
  tap((registry) =>
    registry.add(
      OBSERVER_IMAGE,
      withMarginOptions,
      createIntersectionObserverDefaultCallback(OBSERVER_IMAGE)
    )
  ),
  tap((registry) =>
    registry.add(
      OBSERVER_COMPONENT,
      withMarginOptions,
      createIntersectionObserverDefaultCallback(OBSERVER_COMPONENT)
    )
  ),
  tap((registry) =>
    registry.add(
      OBSERVER_PAGINATION_PAGE,
      defaultOptions,
      createIntersectionObserverDefaultCallback(OBSERVER_PAGINATION_PAGE)
    )
  ),
  tap((registry) =>
    registry.add(
      OBSERVER_BRIGHTCOVE_VIDEO,
      defaultOptions,
      createIntersectionObserverDefaultCallback(OBSERVER_BRIGHTCOVE_VIDEO)
    )
  )
);

export default createIntersectionObserversRegistry;
