import React from "react";
import Svg from "./Svg";

// CloseIcon :: Props -> React.Component
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
    viewBox="0 0 26 26"
    aria-label={ariaLabel}
  >
    <path d="M2.5.78,13,11.28,23.5.78a1.33,1.33,0,1,1,1.87,1.88L14.88,13.16l10.49,10.5a1.32,1.32,0,0,1-1.87,1.87L13,15,2.5,25.53A1.32,1.32,0,0,1,.63,23.66l10.5-10.5L.63,2.66A1.33,1.33,0,0,1,2.5.78Z" />
  </Svg>
);
