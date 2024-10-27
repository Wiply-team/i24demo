import "./Vertical.scss";
import React from "react";
import Link from "../../../Routing/Link";
import Divider from "../../../../widgets/Layout/Divider";
import Information from "../Common/Information";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import Cover from "../Common/Cover";
import translate from "../../../../utilities/translate";
import translations from "../translations";

const coverSizeMapping = {
  large: "large",
};

const trans = translate(translations);

// Vertical :: Props -> React.Component
const Vertical = ({
  article,
  locale,
  size = "default",
  variant = "default",
  lazy = true,
  showSponsored = false,
}) => (
  <div className={`article-list-vertical size-${size}`}>
    <Link
      href={article.frontendUrl}
      aria-label={trans(locale)("label", { title: article.title })}
      variant="block"
      role="group"
    >
      <div className="article-list-vertical-wrapper">
        <div className="cover-wrapper">
          <Cover
            article={article}
            lazy={lazy}
            size={coverSizeMapping[size]}
            variant={variant === "squared" ? variant : "default"}
            locale={locale}
          />
        </div>
        <Information
          article={article}
          locale={locale}
          size={size}
          variant={
            ["author-full-date", "author", "full-date"].includes(variant)
              ? variant
              : "default"
          }
          showSponsored={showSponsored}
        />
      </div>
    </Link>
    <Divider />
  </div>
);

Vertical.propTypes = {
  article: PropTypes.object.isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
  size: PropTypes.oneOf(["large", "default", "small"]),
  variant: PropTypes.oneOf([
    "squared",
    "default",
    "author",
    "author-full-date",
    "full-date",
  ]),
  lazy: PropTypes.bool,
};

// Placeholder :: Props -> React.Component
const Placeholder = ({ size = "default", variant = "default" }) => (
  <div className={`article-list-vertical placeholder size-${size}`}>
    <div className="article-list-vertical-wrapper">
      <Cover.Placeholder variant={variant} size={coverSizeMapping[size]} />
      <Information.Placeholder size={size} />
    </div>
    <Divider />
  </div>
);

Vertical.Placeholder = Placeholder;

Vertical.Placeholder.propTypes = {
  size: PropTypes.oneOf(["large", "default", "small"]),
  variant: PropTypes.oneOf(["squared", "default"]),
};

export default Vertical;
