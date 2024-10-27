import React from "react";
import Svg from "./../Svg";

// CommentsIcon :: Props -> React.Component
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
    viewBox="0 0 18 16"
    aria-label={ariaLabel}
  >
    <path d="M15,0.2c1.5,0,2.7,1.2,2.7,2.8c0,0,0,0,0,0v7.3c0,1.5-1.2,2.7-2.7,2.7H6.6l-3.1,2.7V13H3c-1.5,0-2.7-1.2-2.7-2.7V3c0-1.5,1.2-2.8,2.7-2.8c0,0,0,0,0,0H15z M9,5.7c-0.6,0-1.2,0.5-1.2,1.1C7.8,7.5,8.3,8,8.9,8c0.6,0,1.2-0.5,1.2-1.1c0,0,0,0,0,0C10.1,6.2,9.6,5.7,9,5.7z M13.5,5.7c-0.6,0-1.2,0.5-1.2,1.1c0,0.6,0.5,1.2,1.1,1.2c0.6,0,1.2-0.5,1.2-1.1c0,0,0,0,0,0C14.6,6.2,14.1,5.7,13.5,5.7z M4.5,5.7c-0.6,0-1.2,0.5-1.2,1.1C3.3,7.5,3.8,8,4.4,8c0.6,0,1.2-0.5,1.2-1.1c0,0,0,0,0,0C5.6,6.2,5.1,5.7,4.5,5.7z" />
  </Svg>
);
