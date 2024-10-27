import Link from "../../../components/Routing/Link";
import React from "react";
import CloseIcon from "../../Icons/CloseIcon";
import FlashIcon from "../../Icons/FlashIcon";
import translate from "../../../utilities/translate";
import translations from "../translations";
import Divider from "../../../widgets/Layout/Divider";
import Button from "../../../widgets/Button/Base";
import { isDefined } from "../../../utilities/strings";

// trans :: String -> String -> String
const trans = translate(translations);

// renderBreakingNewsBannerWithLink :: Props -> React.Component
const renderBreakingNewsBannerWithLink = ({ close, locale, news }) => (
  <Link href={news.content.frontendUrl}>
    <div className="container container-page">
      <div className="close-button">
        <Button onClick={close} aria-label={trans(locale)("close")}>
          <CloseIcon width={14} height={14} />
        </Button>
      </div>

      <p className="content">
        <span className="banner-icon">
          <FlashIcon width={9} height={20} />
        </span>
        <span className="title">{trans(locale)("breakingTitle")}:&nbsp;</span>
        {news.title}
        <span className="see-more-separator">&nbsp;&nbsp;|&nbsp;</span>
        <span className="see-more">
          {isDefined(news.linkLabel)
            ? news.linkLabel
            : trans(locale)("link.label")}
        </span>
      </p>
    </div>
  </Link>
);

// renderBreakingNewsBannerWithoutLink :: Props -> React.Component
const renderBreakingNewsBannerWithoutLink = ({ close, locale, news }) => (
  <div className="container container-page">
    <div className="close-button">
      <Button onClick={close} aria-label={trans(locale)("close")}>
        <CloseIcon width={14} height={14} />
      </Button>
    </div>

    <p className="content">
      <span className="banner-icon">
        <FlashIcon width={9} height={20} />
      </span>
      <span className="title">{trans(locale)("breakingTitle")}:&nbsp;</span>
      {news.title}
    </p>
  </div>
);

// BreakingNewsBanner :: Props -> React.Component
const BreakingNewsBanner = ({ close, locale, news, opened }) =>
  opened && null !== news ? (
    <div data-is="banner">
      {null !== news.content
        ? renderBreakingNewsBannerWithLink({ close, locale, news })
        : renderBreakingNewsBannerWithoutLink({ close, locale, news })}
      <div className="show-sm">
        <Divider />
      </div>
      <div className="hide-sm">
        <Divider variant="thin" />
      </div>
    </div>
  ) : null;

export default BreakingNewsBanner;
