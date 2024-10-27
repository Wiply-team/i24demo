import React from "react";
import Svg from "../Svg";

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
    viewBox="0 0 1024 1024"
    aria-label={ariaLabel}
  >
    <path d="M252.003 200l520.003 312-520.003 312z" />
  </Svg>
);
