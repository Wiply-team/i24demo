import "./Hero.scss";
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

// Hero :: Props -> React.Component
const Hero = ({ article, locale, lazy = true }) => (
  <div className="article-list-hero">
    <Link
      href={article.frontendUrl}
      aria-label={trans(locale)("label", { title: article.title })}
      variant="block"
      role="group"
    >
      <div className="article-list-hero-wrapper">
        <div className="cover-wrapper">
          <Cover article={article} lazy={lazy} locale={locale} size="large" />
        </div>
        <div className="information-background" />
        <div className="information-wrapper">
          <Information
            article={article}
            locale={locale}
            size="large"
            variant="author"
          />
        </div>
      </div>
    </Link>
    <Divider />
  </div>
);

Hero.propTypes = {
  article: PropTypes.object.isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
  lazy: PropTypes.bool,
};

// Placeholder :: () -> React.Component
const Placeholder = () => (
  <div className="article-list-hero placeholder">
    <div className="article-list-hero-wrapper">
      <div className="cover-wrapper">
        <Cover.Placeholder size="large" />
      </div>
      <div className="information-wrapper">
        <Information.Placeholder size="large" />
      </div>
    </div>
    <Divider />
  </div>
);

Hero.Placeholder = Placeholder;

Hero.Placeholder.propTypes = {};

export default Hero;
