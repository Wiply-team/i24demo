import React from "react";

export default ({ src }) => (
  <iframe
    data-is="component-youtube"
    src={src}
    allowFullScreen={true}
    title="i24NEWS Youtube video"
  />
);
