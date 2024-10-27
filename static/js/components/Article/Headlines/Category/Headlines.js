import "../Headlines.scss";
import React from "react";
import { T, cond } from "ramda";
import Hero from "../../List/Hero";
import Toast from "../../../../legacy_components/Toastr/Toast";
import translations from "../translations";
import translate from "../../../../utilities/translate";
import Divider from "../../../../widgets/Layout/Divider";
import Vertical from "../../List/Vertical";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import {
  HomepageHeadlinesAfterDesktopAdvert,
  HomepageHeadlinesAfterMobileAdvert,
  HomepageHeadlinesHeroMobileAdvert,
} from "../../../Adverts";

// trans :: String -> String -> String
const trans = translate(translations);

const Articles = ({ articles }) => (
  <>
    <div className="headline-articles">
      <div className="headline-article-hero">
        <Hero article={articles[0]} lazy={false} />
        <div className="show-sm">
          <HomepageHeadlinesHeroMobileAdvert />
          <Divider />
        </div>
      </div>
      <div className="headline-side-articles">
        {articles.slice(1).map((article) => (
          <div className="headline-side-article" key={article.id}>
            <Vertical size="small" article={article} lazy={false} />
          </div>
        ))}
      </div>
    </div>
    <HomepageHeadlinesAfterMobileAdvert />
    <HomepageHeadlinesAfterDesktopAdvert />
    <Divider />
  </>
);

// Headlines :: Props -> React.Component
const Headlines = ({ isFetching, articles, locale, error }) => (
  <section className="headlines">
    {error ? <Toast message={trans(locale)("error")} level="error" /> : null}
    {cond([
      [() => isFetching, () => null],
      [() => articles.length === 0, () => null],
      [T, () => <Articles articles={articles} />],
    ])(articles)}
  </section>
);

Headlines.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.number,
  error: PropTypes.object,
};

export default Headlines;
