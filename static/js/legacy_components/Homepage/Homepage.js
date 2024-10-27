import "./Homepage.scss";
import ArticlesWidgets from "../../components/ArticlesWidgets";
import ComponentObserver from "../ComponentObserver";
import Head from "../Head";
import LazyComponent from "../../components/LazyComponent";
import MinuteMarker from "../../components/Minute/Marker";
import NewsFeed from "../NewsFeed";
import React from "react";
import SpecialBanner from "./SpecialPageBanner";
import translate from "../../utilities/translate";
import translations from "./translations";
import Headlines from "../../components/Article/Headlines/Homepage";
import TopArticles from "./TopArticles";
import Divider from "../../widgets/Layout/Divider";
import StickyBottomBanner from "../StickyBottomBanner";
import {
  HomepageAdvertProvider,
  HomepageAsideDesktopAdvert,
  HomepageFeaturedCategoriesAsideFirstDesktopAdvert,
  HomepageFeaturedCategoriesAsideSecondAdvert,
  HomepageTopArticlesAfterAdvert,
  HomepageTopArticlesAfterMobileAdvert,
} from "../../components/Adverts";

// trans :: String -> String -> String
const trans = translate(translations);

const LatestVideos = LazyComponent("LatestVideos");
const FeaturedCategories = LazyComponent("FeaturedCategories");

// Homepage :: Props -> React.Component
const Homepage = ({ locale }) => (
  <>
    <Head
      title={trans(locale)("title")}
      description={trans(locale)("metaDescription")}
      withDefaultTitle={false}
    >
      <HomepageAdvertProvider>
        <div id="homepage" className="page-content">
          <section className="container container-page banners special">
            <SpecialBanner />
          </section>
          <div className="container container-page">
            <Headlines />
          </div>

          {/* latest videos */}
          <section className="latest-videos banner-section">
            <div className="wrapper">
              <div className="container container-page">
                <ComponentObserver
                  componentId="latest-videos"
                  component={LatestVideos}
                />
              </div>
            </div>
          </section>

          {/* top articles */}
          <section className="top-articles banner-section">
            <div className="container container-page">
              <div className="columns">
                <div className="column col-8 col-md-12 main-column">
                  <div className="columns">
                    <div className="column col-12">
                      <TopArticles />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column col-12">
                      <MinuteMarker pageId="home" />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column col-6 col-sm-12 show-sm">
                      <Divider />
                      <div className="ads">
                        <HomepageTopArticlesAfterMobileAdvert />
                      </div>
                      <Divider />
                    </div>
                  </div>
                </div>
                <div className="column col-4 col-md-12 aside-column">
                  <NewsFeed aside />
                  <div className="aside-ads">
                    <HomepageAsideDesktopAdvert />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="column-ads banner-section">
            <div className="container container-page taboola-ads">
              <HomepageTopArticlesAfterAdvert />
            </div>
          </section>

          {/* featured categories & articles widgets */}
          <section className="featured-categories articles-widgets banner-section">
            <div className="container container-page">
              <div className="columns">
                <div className="column col-8 col-md-12">
                  <ComponentObserver
                    componentId="articles-widgets"
                    component={ArticlesWidgets}
                  />
                  <ComponentObserver
                    componentId="featured-categories"
                    component={FeaturedCategories}
                  />
                </div>
                <div className="column col-4 col-md-12 d-flex">
                  <div className="featured-category-ads">
                    <HomepageFeaturedCategoriesAsideFirstDesktopAdvert />
                    <HomepageFeaturedCategoriesAsideSecondAdvert />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </HomepageAdvertProvider>
    </Head>
    <StickyBottomBanner />
  </>
);

export default Homepage;
