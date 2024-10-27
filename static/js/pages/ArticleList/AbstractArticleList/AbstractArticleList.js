import "./AbstractArticleList.scss";
import Breadcrumb from "../../../legacy_components/Breadcrumb";
import Head from "../../../legacy_components/Head";
import React from "react";
import StickyAds from "../../../legacy_components/StickyAds";
import translate from "../../../utilities/translate";
import translations from "./translations";
import Heading from "../../../widgets/Typography/Heading";
import Headlines from "../../../components/Article/Headlines/Category";
import { isIsraelAtWarCategory } from "../../../utilities/displays";
import HTMLWidgetRenderer from "../../../components/HTMLWidgetRenderer";
import {
  ArticleListAdvertProvider,
  ArticleListAsideFirstAdvert,
  ArticleListAsideSecondDesktopAdvert,
  ArticleListBannerDesktopAdvert,
} from "../../../components/Adverts";
import DateTime from "../../../widgets/Temporal/DateTime/DateTime";
import ClientOnly from "../../../legacy_components/ClientOnly";

// trans :: String -> String -> String
const trans = translate(translations);

// AbstractArticleList :: Props -> React.Component
const AbstractArticleList = ({
  locale,
  className,
  metaTitle,
  metaDescription,
  crumbs,
  title,
  subTitle,
  children,
  page,
  id,
  headlinesId,
  lastRevision,
  frontendUrl = null,
  redirected = false,
}) => (
  <ArticleListAdvertProvider>
    <section id="category" className={`page-content ${className ?? ""}`}>
      <Head
        title={`${metaTitle} ${
          page === 1 ? "" : `(${trans(locale)("page")} ${page})`
        }`}
        description={`${metaDescription} ${
          page === 1 ? "" : `(${trans(locale)("page")} ${page})`
        }`}
        status={redirected ? 301 : 200}
        redirectLocation={redirected ? frontendUrl : null}
      />
      <Breadcrumb crumbs={crumbs} />
      <div className="container container-page">
        {page === 1 ? (
          isIsraelAtWarCategory(id) ? (
            <div className="columns hide-xl">
              <div className="widget-wrapper column col-12">
                <HTMLWidgetRenderer.Counters locale={locale} />
              </div>
            </div>
          ) : (
            <div className="columns">
              <div className="adapex-wrapper column col-12">
                <ArticleListBannerDesktopAdvert />
              </div>
            </div>
          )
        ) : null}
        {page === 1 ? (
          isIsraelAtWarCategory(id) ? (
            <div className="columns show-xl">
              <div className="adapex-wrapper column col-12">
                <ArticleListBannerDesktopAdvert />
              </div>
            </div>
          ) : null
        ) : null}
        <Heading level="1">
          {title}
          {subTitle ? <Heading.Sub>{subTitle}</Heading.Sub> : null}
        </Heading>
        {headlinesId ? <Headlines id={headlinesId} /> : null}
        {lastRevision ? (
          <div className="last-revision-date">
            {trans(locale)("lastRevision")}
            <ClientOnly>
              &nbsp;
              <DateTime
                date={lastRevision}
                locale={locale}
                isoProp="lastRevision"
              />
            </ClientOnly>
          </div>
        ) : null}
        <div className="columns">
          <div className="column col-8 col-md-12">{children}</div>
          <aside className="column col-4 col-md-12 d-flex ads-aside">
            <StickyAds>
              <ArticleListAsideFirstAdvert />
              <ArticleListAsideSecondDesktopAdvert />
            </StickyAds>
          </aside>
        </div>
      </div>
    </section>
  </ArticleListAdvertProvider>
);

export default AbstractArticleList;
