import "./Content.scss";
import Cover from "./../../../components/Article/Cover";
import Comments from "./../Comments";
import LazyComponent from "./../../../components/LazyComponent";
import React from "react";
import ShareBar from "../../../components/Article/Sharing/ShareBar";
import StickyShareBar from "../../../components/Article/Sharing/StickyShareBar";
import Widget from "./../Widget";
import { indexedMap } from "./../../../utilities/miscellaneous";
import JumpToComments from "../JumpToComments";
import Tags from "../Tags";
import { isArabic } from "../../../utilities/locales";
import MissingPersonList from "../../../components/MissingPersonList";
import Divider from "../../../widgets/Layout/Divider";
import { shouldDisplayMissingPersonList } from "../../../utilities/displays";
import {
  ArticleAsideFirstDesktopAdvert,
  ArticleAsideSecondDesktopAdvert,
  ArticleBodyFirstAdvert,
  ArticleBodySecondMobileAdvert,
  ArticleBodyThirdMobileAdvert,
  ArticleCoverAfterDesktopAdvert,
  ArticleBodyAfterAdvert,
} from "../../../components/Adverts";

const Events = LazyComponent("Events");

const Content = ({ hasEvents, components, locale, commentsDisabled, slug }) => (
  <section className="cover-and-content">
    <Cover />

    <div className="container container-page ads">
      <ArticleCoverAfterDesktopAdvert />
    </div>
    <div className="container container-page">
      <div className="columns">
        <article className="column col-8 col-md-12">
          <div className="components">
            {indexedMap((component, index) => (
              <React.Fragment key={index}>
                {index === 2 ? <ArticleBodyFirstAdvert /> : null}
                {index === 8 ? <ArticleBodySecondMobileAdvert /> : null}
                {index === 12 ? <ArticleBodyThirdMobileAdvert /> : null}
                <Widget component={component} id={index} />
              </React.Fragment>
            ))(components)}

            {hasEvents ? <Events /> : null}
            {shouldDisplayMissingPersonList(slug) ? (
              <>
                <MissingPersonList />
                <Divider variant="thin" />
              </>
            ) : null}
          </div>
          <div className="hide-lg">
            <StickyShareBar />
          </div>
          <div className="show-lg">
            <ShareBar />
          </div>
          <Tags />
          {!commentsDisabled ? <JumpToComments /> : null}
          <ArticleBodyAfterAdvert />
          {
            // We need to keep a root comments component with the id "article-comments" in order
            // that Taboola can integrate the comments section into their ads feed.
            // Like that, in the future, if we have to make changes to this part we will not break the flow of ads.
          }
          <div id="article-comments">
            {!commentsDisabled ? <Comments /> : null}
          </div>
        </article>
        <aside className="col-4 hide-sm aside-ads">
          {!isArabic(locale) ? (
            <ArticleAsideFirstDesktopAdvert align="end-start" />
          ) : null}
          <ArticleAsideSecondDesktopAdvert align="end-start" />
        </aside>
      </div>
    </div>
  </section>
);

export default Content;
