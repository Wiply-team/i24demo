import Eager from "./Eager";
import Lazy from "./Lazy";
import React from "react";
import { imagePlaceholder } from "../../utilities/media/images";
import { applyQueryParamsToUrl } from "../../utilities/urls";

export default ({
  src,
  width,
  height,
  alt = "",
  className = "",
  lazy = false,
  fallbackSrc = imagePlaceholder,
  ...restProps
}) =>
  lazy ? (
    <Lazy
      src={applyQueryParamsToUrl({ width, height })(src)}
      fallbackSrc={fallbackSrc}
      alt={alt}
      className={className}
      {...restProps}
    />
  ) : (
    <Eager
      src={applyQueryParamsToUrl({ width, height })(src)}
      fallbackSrc={fallbackSrc}
      alt={alt}
      className={className}
      {...restProps}
    />
  );
