import React from "react";
import Svg from "./Svg";

// FlashIcon :: Props -> React.Component
export default ({
  width = 8,
  height = 13,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 512 1024"
    aria-label={ariaLabel}
  >
    <path d="M146 600h-146l481-600-117 433h148l-483 591z" />
  </Svg>
);
