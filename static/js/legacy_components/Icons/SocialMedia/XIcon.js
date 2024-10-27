import React from "react";
import Svg from "../Svg";

// XIcon :: Props -> React.Component
export default ({
  width = 20,
  height = 20,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-label={ariaLabel}
  >
    <path d="M18.901 1.15356H22.581L14.541 10.3436L24 22.8466H16.594L10.794 15.2626L4.156 22.8466H0.474L9.074 13.0166L0 1.15456H7.594L12.837 8.08657L18.901 1.15356ZM17.61 20.6446H19.649L6.486 3.24056H4.298L17.61 20.6446Z" />
  </Svg>
);
