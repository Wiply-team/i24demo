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
import Banner from "../../../../legacy_components/Homepage/Banner";
import HTMLWidgetRenderer from "../../../HTMLWidgetRenderer";
import BreakingNewsBanner from "../../../../legacy_components/Homepage/BreakingNewsBanner";
import {
  HomepageHeadlinesAfterDesktopAdvert,
  HomepageHeadlinesHeroMobileAdvert,
} from "../../../Adverts";

// trans :: String -> String -> String
const trans = translate(translations);

const Placeholder = () => (
  <>
    <div className="headline-articles">
      <div className="headline-article-hero">
        <Hero.Placeholder />
        <div className="show-sm">
          <HomepageHeadlinesHeroMobileAdvert />
          <Divider />
        </div>
      </div>
      <div className="headline-side-articles">
        <div className="headline-side-article">
          <Vertical.Placeholder size="small" />
        </div>
        <div className="headline-side-article">
          <Vertical.Placeholder size="small" />
        </div>
        <div className="headline-side-article">
          <Vertical.Placeholder size="small" />
        </div>
        <div className="headline-side-article">
          <Vertical.Placeholder size="small" />
        </div>
      </div>
    </div>
    <div className="hide-sm">
      <HomepageHeadlinesAfterDesktopAdvert />
      <Divider />
    </div>
  </>
);

const Articles = ({ articles, locale }) => (
  <>
    <Divider variant="thin" />
    <div className="hide-sm">
      <BreakingNewsBanner />
    </div>
    <div className="headline-articles">
      <div className="headline-article-hero">
        <Hero article={articles[0]} lazy={false} />
        <div className="show-sm">
          <BreakingNewsBanner />
          <Banner />
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
    <div>
      <HTMLWidgetRenderer.Counters locale={locale} />
      <Divider />
    </div>
    <div className="hide-sm">
      <HomepageHeadlinesAfterDesktopAdvert />
      <Divider />
      <Banner />
    </div>
  </>
);

// Headlines :: Props -> React.Component
const Headlines = ({ isFetching, articles, locale, error }) => (
  <section className="headlines">
    {error ? <Toast message={trans(locale)("error")} level="error" /> : null}
    {cond([
      [() => isFetching, () => <Placeholder />],
      [() => articles.length === 0, () => null],
      [T, () => <Articles articles={articles} locale={locale} />],
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
