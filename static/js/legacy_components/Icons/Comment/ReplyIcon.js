import React from "react";
import Svg from "./../Svg";

// ReplyIcon :: Props -> React.Component
export default ({
  width = 30,
  height = 20,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    aria-label={ariaLabel}
  >
    <path d="M5.744 22.241h15.474l-5.747 5.747 1.767 1.767 8.763-8.763-8.763-8.763-1.767 1.767 5.747 5.747h-15.474c-5.098 0-9.245-4.147-9.245-9.245 0-2.397 1.212-4.435 2.229-5.722l0.775-0.98-1.96-1.549-0.775 0.98c-1.263 1.598-2.768 4.156-2.768 7.271 0 6.475 5.268 11.743 11.744 11.743z" />
  </Svg>
);
