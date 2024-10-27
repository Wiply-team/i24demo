import React from "react";
import Video from "../Video";

// LiveVideo :: Props -> React.Component
export default ({ autoPlay = true, muted = true, ...restProps }) => (
  <Video autoPlay={autoPlay} muted={muted} {...restProps} />
);
