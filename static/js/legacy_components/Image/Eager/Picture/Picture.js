import React, { forwardRef } from "react";
import {
  T,
  always,
  append,
  assoc,
  complement,
  concat,
  cond,
  filter,
  isEmpty,
  isNil,
  join,
  juxt,
  map,
  pick,
  pipe,
  prop,
  propIs,
  when,
} from "ramda";
import { applyQueryParamsToUrl } from "../../../../utilities/urls";
import PicturePreloader from "./PicturePreloader";

// resolveSrcSetDescriptor = Rendition -> String
const resolveSrcSetDescriptor = cond([
  [propIs(String, "descriptor"), prop("descriptor")],
  [T, always(null)],
]);

// resolveSrcSetUrl = (String, String) -> Rendition -> String
const resolveSrcSetUrl = (src, mime) =>
  pipe(
    pick(["width", "height"]),
    when(
      () => mime === "image/webp",
      (params) => ({
        type: "webp",
        ...params,
      })
    ),
    (params) => applyQueryParamsToUrl(params)(src)
  );

// renditionToSrcSet = (String, String) -> Rendition -> String
const renditionToSrcSet = (src, mime) =>
  pipe(
    juxt([resolveSrcSetUrl(src, mime), resolveSrcSetDescriptor]),
    filter(complement(isNil)),
    join(" ")
  );

// renditionsToSrcSet = (String, String) -> [Rendition] -> String
const renditionsToSrcSet = (src, mime) =>
  pipe(map(renditionToSrcSet(src, mime)), join(", "));

// prependWebpSources :: [Source] -> React.Component
const prependWebpSources = (sources) =>
  concat(
    pipe(
      // Add default {} webp source (<source type="image/webp", srcSet="%SRC%">)
      // in case we don't have any other source.
      when(isEmpty, append({})),
      map(assoc("type", "image/webp"))
    )(sources),
    sources
  );

// prependWebpSources :: [Source] -> [Source]
const formatSources = (src) =>
  pipe(
    prependWebpSources,
    map((source) => ({
      ...source,
      srcSet: source.renditions
        ? renditionsToSrcSet(src, source.type)(source.renditions)
        : resolveSrcSetUrl(src, source.type)({}),
    }))
  );

// Picture :: Props -> React.Component
const Picture = forwardRef(
  (
    {
      alt,
      dispatch,
      injectImagePreloadHints,
      preload,
      src,
      sources = [],
      ...restProps
    },
    ref
  ) => {
    const formattedSources = formatSources(src)(sources);

    return (
      <>
        <PicturePreloader
          preload={preload}
          src={src}
          sources={formattedSources}
        />
        <picture>
          {formattedSources.map((source, i) => (
            <source
              key={i}
              type={source.type}
              media={source.media}
              sizes={source.sizes}
              srcSet={source.srcSet}
            />
          ))}
          <img alt={alt} src={src} {...restProps} ref={ref} />
        </picture>
      </>
    );
  }
);

export default Picture;
