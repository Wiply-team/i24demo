import "./FullPage.scss";
import Head from "../../Head";
import NewsPage from "./NewsPage";
import Pagination from "../../Pagination";
import React from "react";
import StickyAds from "../../StickyAds";
import translate from "../../../utilities/translate";
import translations from "../translations";
import Heading from "../../../widgets/Typography/Heading";
import {
  NewsAsideFirstAdvert,
  NewsAsideSecondDesktopAdvert,
  NewsBannerDesktopAdvert,
  NewsBannerMobileAdvert,
} from "../../../components/Adverts";

// trans :: String -> String -> String
const trans = translate(translations);

// FullPage :: Props -> React.Component
export default ({ locale, pages }) => (
  <div data-is="fullpage-newsfeed" className="page-content">
    <Head
      title={trans(locale)("metaTitle")}
      description={trans(locale)("metaDescription")}
    >
      <div className="container container-page">
        <div className="ads-horizontal">
          <NewsBannerDesktopAdvert />
          <NewsBannerMobileAdvert />
        </div>

        <div className="columns">
          <div className="column col-8 col-md-12">
            <Heading level="1">{trans(locale)("title")}</Heading>

            {/* News List */}
            <div className="column col-8 col-md-12">
              <div className="timeline">
                <Pagination
                  renderPage={(page) => <NewsPage pages={pages} page={page} />}
                />
              </div>
            </div>
          </div>

          {/* Side ads */}
          <div className="column col-4 col-md-12 d-flex">
            <StickyAds className="sticky-ads-newsfeed">
              <NewsAsideFirstAdvert />
              <NewsAsideSecondDesktopAdvert />
            </StickyAds>
          </div>
        </div>
      </div>
    </Head>
  </div>
);
