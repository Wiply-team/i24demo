import React from "react";
import Svg from "../Svg";

// YoutubeIcon :: Props -> React.Component
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
    viewBox="0 0 1024 1024"
    aria-label={ariaLabel}
  >
    <path d="M991.504 316.3c0 0-9.556-67.464-38.988-97.086-37.268-38.988-78.93-39.178-98.042-41.472-136.838-9.938-342.284-9.938-342.284-9.938h-0.382c0 0-205.448 0-342.284 9.938-19.112 2.294-60.774 2.484-98.042 41.472-29.432 29.622-38.796 97.086-38.796 97.086s-9.746 79.122-9.746 158.434v74.152c0 79.122 9.746 158.434 9.746 158.434s9.556 67.464 38.796 97.086c37.268 38.988 86.192 37.65 107.98 41.854 78.356 7.454 332.728 9.746 332.728 9.746s205.638-0.382 342.476-10.129c19.112-2.294 60.774-2.484 98.042-41.472 29.432-29.622 38.988-97.086 38.988-97.086s9.746-79.122 9.746-158.434v-74.152c-0.192-79.122-9.938-158.434-9.938-158.434zM410.9 638.9v-275.012l264.31 137.984-264.31 137.028z" />
  </Svg>
);