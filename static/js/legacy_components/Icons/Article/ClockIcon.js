import React from "react";
import Svg from "./../Svg";

// ClockIcon :: Props -> React.Component
export default ({
  width = 14,
  height = 14,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 13 13"
    aria-label={ariaLabel}
  >
    <path d="M6.5,0A6.5,6.5,0,1,0,13,6.5,6.5,6.5,0,0,0,6.5,0Zm0,12.11A5.61,5.61,0,1,1,12.11,6.5,5.61,5.61,0,0,1,6.5,12.11Z" />
    <path d="M9.33,6.64H6.8V3.18a.42.42,0,1,0-.84,0v4.4H9.33a.47.47,0,0,0,0-.94Z" />
  </Svg>
);
