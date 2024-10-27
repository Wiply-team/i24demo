import React from "react";
import Svg from "./../Svg";

// BookmarkIcon :: Props -> React.Component
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
    viewBox="0 0 12 16"
    aria-label={ariaLabel}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M10.5 0H1.5C0.671562 0 0 0.671562 0 1.5V14.9969C0 15.7688 0.837187 16.2494 1.50375 15.8606L6 13.2375L10.4969 15.8603C11.1625 16.2219 12 15.7688 12 14.9969V1.5C12 0.671562 11.3281 0 10.5 0ZM10.5 14.125L6 11.5L1.5 14.125V1.6875C1.5 1.58219 1.58219 1.5 1.65937 1.5H10.2844C10.4187 1.5 10.5 1.58219 10.5 1.6875V14.125Z" />
  </Svg>
);
