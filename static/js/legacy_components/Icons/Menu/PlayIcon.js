import React from "react";
import Svg from "./../Svg";

// PlayIcon :: Props -> React.Component
export default ({
  width = 25,
  height = 25,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    aria-label={ariaLabel}
  >
    <path d="M20,0c11,0,20,9,20,20s-9,20-20,20S0,31,0,20S9,0,20,0z M20,2C10.1,2,2,10.1,2,20 s8.1,18,18,18s18-8.1,18-18S29.9,2,20,2z M16,16l9,4.5L16,25V16z" />
  </Svg>
);
