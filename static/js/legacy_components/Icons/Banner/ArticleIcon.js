import React from "react";
import Svg from "../Svg";

// ArticleIcon :: Props -> React.Component
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
    <path d="M856 282.665v-114.665h-802.665v630.665c0 31.666 25.669 57.335 57.335 57.335h774c47.497 0 86-38.503 86-86v-487.335h-114.665zM798.665 798.665h-688v-573.335h688v573.335zM168 340h573.335v57.335h-573.335zM512 454.665h229.335v57.335h-229.335zM512 569.335h229.335v57.335h-229.335zM512 684h172v57.335h-172zM168 454.665h286.665v286.665h-286.665z" />
  </Svg>
);
