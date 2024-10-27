import "./ImageCover.scss";
import ImageCoverRendition from "../Image/Rendition/Cover";
import React from "react";
import { isEmpty } from "ramda";

// ImageCover :: Props -> React.Component
export default ({
  alt = "",
  credit = "",
  src,
  shouldDisplayCaption = true,
}) => (
  <figure data-is="image-cover">
    <ImageCoverRendition src={src} alt={alt} preload={true} />
    {shouldDisplayCaption ? (
      <figcaption>
        {<span className="caption">{alt}</span>}
        {!isEmpty(credit) && alt !== credit ? (
          <span className="credit">{credit}</span>
        ) : null}
      </figcaption>
    ) : null}
  </figure>
);
