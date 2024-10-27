import React from "react";
import Svg from "./../Svg";

// SendIcon :: Props -> React.Component
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
    viewBox="0 0 24 26"
    aria-label={ariaLabel}
  >
    <path d="M23,11.22,2.88.24A1.94,1.94,0,0,0,0,1.94v22a2,2,0,0,0,1,1.67,2,2,0,0,0,1.93,0L23,14.62a1.94,1.94,0,0,0,0-3.4ZM1.85,24V14.23h8.51a1,1,0,0,0,0-2H1.85V1.85l20.3,11.07Z" />
  </Svg>
);
