import "./Cover.scss";
import React from "react";
import MediaContainer from "../../../../../widgets/Layout/MediaContainer";
import ReadingTime from "../../../../../widgets/ReadingTime";
import ListImage from "../../../../../legacy_components/Image/Rendition/List";
import PropTypes from "prop-types";
import { getLocales } from "../../../../../utilities/locales";

const Cover = ({
  article,
  lazy,
  size = "default",
  variant = "default",
  locale,
}) => (
  <div className={`article-cover-wrapper size-${size}`}>
    <MediaContainer variant={variant}>
      <ListImage
        src={article.image.src}
        alt={article.image.alt}
        lazy={lazy}
        size={size}
      />
    </MediaContainer>
    <div className="article-reading-time-wrapper">
      <ReadingTime time={article.readingTime} locale={locale} />
    </div>
  </div>
);

Cover.propTypes = {
  article: PropTypes.object.isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
  lazy: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(["squared", "default"]),
  size: PropTypes.oneOf(["large", "default"]),
};

const Placeholder = ({ variant, size = "default" }) => (
  <div className={`article-cover-wrapper placeholder size-${size}`}>
    <MediaContainer variant={variant} />
  </div>
);

Cover.Placeholder = Placeholder;

export default Cover;
