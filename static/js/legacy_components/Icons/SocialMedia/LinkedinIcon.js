import React from "react";
import Svg from "../Svg";

// LinkedinIcon :: Props -> React.Component
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
    <path d="M398.77 398.77h156.67v80.306h2.238c21.796-39.094 75.154-80.306 154.67-80.306 165.376 0 195.96 102.948 195.96 236.84v272.698h-163.31v-241.748c0-57.661-1.178-131.83-84.946-131.83-85.054 0-98.034 62.796-98.034 127.642v245.936h-163.248v-509.538zM115.69 398.77h169.848v509.538h-169.848v-509.538zM285.538 257.228c0 46.899-38.019 84.924-84.924 84.924s-84.924-38.019-84.924-84.924c0-46.899 38.019-84.924 84.924-84.924s84.924 38.019 84.924 84.924z" />
  </Svg>
);
