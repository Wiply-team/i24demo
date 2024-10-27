import "./Horizontal.scss";
import React from "react";
import Link from "../../../Routing/Link";
import Divider from "../../../../widgets/Layout/Divider";
import Information from "../Common/Information";
import Cover from "../Common/Cover";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import translate from "../../../../utilities/translate";
import translations from "../translations";

const trans = translate(translations);

// Horizontal :: Props -> React.Component
const Horizontal = ({ article, locale, variant = "default", lazy = true }) => (
  <div className="article-list-horizontal">
    <Link
      href={article.frontendUrl}
      aria-label={trans(locale)("label", { title: article.title })}
      variant="block"
      role="group"
    >
      <div className="article-list-horizontal-wrapper">
        <div className="cover-wrapper">
          <Cover article={article} lazy={lazy} locale={locale} />
        </div>
        <Information article={article} locale={locale} variant={variant} />
      </div>
    </Link>
    <Divider />
  </div>
);

Horizontal.propTypes = {
  article: PropTypes.object.isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
  variant: PropTypes.oneOf([
    "default",
    "author",
    "author-full-date",
    "full-date",
  ]),
  lazy: PropTypes.bool,
};

// Placeholder :: Props -> React.Component
const Placeholder = () => (
  <div className="article-list-horizontal placeholder">
    <div className="article-list-horizontal-wrapper">
      <Cover.Placeholder />
      <Information.Placeholder />
    </div>
    <Divider />
  </div>
);

Horizontal.Placeholder = Placeholder;

Horizontal.Placeholder.propTypes = {};

export default Horizontal;
