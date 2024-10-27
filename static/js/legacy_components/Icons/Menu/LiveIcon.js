import React from "react";
import Svg from "./../Svg";

// LiveIcon :: Props -> React.Component
export default ({
  width = 30,
  height = 25,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 33 26"
    aria-label={ariaLabel}
  >
    <path d="M20,23.5a1,1,0,0,1,0,2H13a1,1,0,0,1,0-2ZM31,0a2,2,0,0,1,2,2V20a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Zm0,2H2V20H31ZM13,7l8,4-8,4Z" />
  </Svg>
);
