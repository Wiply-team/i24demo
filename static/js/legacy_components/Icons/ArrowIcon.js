import React from "react";
import Svg from "./Svg";

// ArrowIcon :: Props -> React.Component
export default ({
  width = 15,
  height = 15,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 32"
    aria-label={ariaLabel}
  >
    <path d="M20.281 28.25l-12.531-12.25 12.531-12.25-3.875-3.75-16.406 16 16.406 16z" />
  </Svg>
);
