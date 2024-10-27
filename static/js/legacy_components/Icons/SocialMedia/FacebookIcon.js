import React from "react";
import Svg from "../Svg";

// FacebookIcon :: Props -> React.Component
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
    <path d="M13.8473 24V11.9986H17.1602L17.5993 7.86284H13.8473L13.8529 5.79286C13.8529 4.71419 13.9554 4.13622 15.5047 4.13622H17.5758V0H14.2624C10.2825 0 8.88169 2.00628 8.88169 5.38022V7.86331H6.40088V11.9991H8.88169V24H13.8473Z" />
  </Svg>
);
