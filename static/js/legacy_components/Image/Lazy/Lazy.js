import "./Lazy.scss";
import { always, anyPass, ifElse, propOr } from "ramda";
import Eager from "../Eager";
import { OBSERVER_IMAGE } from "../../../store/dependencies/observersRegistry/registries";
import React from "react";

// Lazy :: Props -> React.Component
export default ({
  className = "",
  dispatch,
  observe,
  observedItem = {},
  observedItemId,
  onError,
  onLoad,
  sources,
  src,
  fallbackSrc,
  ...restProps
}) => (
  <div className="lazyImageContainer">
    <Eager
      data-is="lazy-image"
      data-observed-item-id={observedItemId}
      className={resolveClassName(observedItem, className)}
      src={resolveSrc(observedItem, src)}
      sources={resolveSources(observedItem, sources)}
      fallbackSrc={fallbackSrc}
      onError={() => onError(OBSERVER_IMAGE, observedItemId)}
      onLoad={() => onLoad(OBSERVER_IMAGE, observedItemId)}
      {...restProps}
    />
  </div>
);

// shouldLoadSrc :: ObservedItem -> Boolean
const shouldLoadSrc = propOr(false, "isIntersecting");

// shouldLoadSources :: ObservedItem -> Boolean
const shouldLoadSources = propOr(true, "isIntersecting");

// isLoadedSuccesfully :: ObservedItem -> Boolean
const isLoadedSuccesfully = propOr(false, "isLoaded");

// isLoadedWithErrors :: ObservedItem -> Boolean
const isLoadedWithErrors = propOr(false, "isLoadedWithErrors");

// isLoaded :: ObservedItem -> Boolean
const isLoaded = anyPass([isLoadedSuccesfully, isLoadedWithErrors]);

// resolveClassName :: (ObservedItem, String) -> Boolean
const resolveClassName = (observedItem, className) =>
  ifElse(
    isLoaded,
    always(`${className} visible`),
    always(className)
  )(observedItem);

// resolveSrc :: (ObservedItem, String) -> Boolean
const resolveSrc = (observedItem, src) =>
  ifElse(shouldLoadSrc, always(src), always(undefined))(observedItem);

// resolveSources :: (ObservedItem, Object) -> Boolean
const resolveSources = (observedItem, sources) =>
  ifElse(shouldLoadSources, always(sources), always(undefined))(observedItem);
