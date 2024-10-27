import styles from "./Svg.module.css";
import React from "react";
import { isNil } from "ramda";

// Svg :: Props -> React.Component
export default ({
  width,
  height,
  viewBox,
  "aria-label": ariaLabel,
  className = "",
  children,
}) => (
  <svg
    className={`${styles.svg} ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    width={width}
    height={height}
    aria-hidden={isNil(ariaLabel) ? true : undefined}
    aria-label={ariaLabel}
  >
    {children}
  </svg>
);
