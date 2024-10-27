import React from "react";
import Svg from "./../Svg";

// ChannelsIcon :: Props -> React.Component
export default ({
  width = 25,
  height = 23,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 30 27"
    aria-label={ariaLabel}
  >
    <path d="M27.4,0v9.6h2v16.9h-7.9V18H0V0H27.4z M28.2,10.8h-5.5v14.4h5.5V10.8z M27,22v1h-3v-1H27z M17,19.5v1.6h-7v-1.6H17z M27,20v1h-3v-1H27z M27,18v1h-3v-1H27z M27,16v1h-3v-1H27z M25.6,1.8H1.8v14.5h19.7V9.6h4.1V1.8z M27,14v1h-3v-1H27z M27,12v1h-1v-1H27z M13,11c0.9,0,1.6,0.5,1.9,1.4l0.1,0.2L13.7,13c-0.1-0.3-0.4-0.5-0.7-0.5c-0.3,0-0.5,0.2-0.6,0.4l0,0.1L11,12.5 C11.3,11.6,12.1,11,13,11z M13,8c2,0,3.7,1.3,4.4,3.3l0.1,0.2L16.2,12c-0.5-1.5-1.7-2.5-3.2-2.5c-1.4,0-2.6,0.9-3.1,2.3L9.8,12 l-1.3-0.5C9.1,9.4,11,8,13,8z M13,5.3c3.1,0,5.8,2.4,6.9,5.1l0.1,0.2L18.6,11c-0.8-2.2-3.1-4.2-5.6-4.2c-2.5,0-4.7,1.9-5.6,4L7.4,11 L6,10.6C7,7.8,9.8,5.3,13,5.3z" />
  </Svg>
);
