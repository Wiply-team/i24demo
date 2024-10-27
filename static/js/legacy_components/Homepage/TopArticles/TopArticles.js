import "./TopArticles.scss";
import React from "react";
import Vertical from "../../../components/Article/List/Vertical";
import translate from "../../../utilities/translate";
import SectionHeader from "../SectionHeader";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../utilities/locales";

// trans :: String -> String -> String
const trans = translate(translations);

// TopArticles :: Props -> React.Component
const TopArticles = ({ locale, articles = [], isFetching }) => (
  <div className="homepage-top-articles">
    <SectionHeader
      label={trans(locale)("label")}
      link={trans(locale)("link")}
    />
    {isFetching ? (
      <Placeholder length={6} />
    ) : (
      <section className="columns">
        {articles.map((article) => (
          <div key={article.id} className="column col-6 col-sm-12">
            <Vertical showSponsored={true} article={article} size="small" />
          </div>
        ))}
      </section>
    )}
  </div>
);

const Placeholder = ({ length }) => (
  <section className="columns vertical-top-articles">
    {Array.from({ length }).map((_, idx) => (
      <div key={idx} className="column col-6 col-sm-12">
        <Vertical.Placeholder size="small" />
      </div>
    ))}
  </section>
);

TopArticles.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default TopArticles;
