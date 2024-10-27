import { equals, cond } from "ramda";
import ExternalLink from "../../../components/Routing/ExternalLink";
import React from "react";
import CloseIcon from "../../Icons/CloseIcon";
import ArticleIcon from "../../Icons/Banner/ArticleIcon";
import BellIcon from "../../Icons/Banner/BellIcon";
import ClockIcon from "../../Icons/Banner/ClockIcon";
import SpeakerIcon from "../../Icons/Banner/SpeakerIcon";
import TvIcon from "../../Icons/Banner/TvIcon";
import FacebookIcon from "../../Icons/SocialMedia/FacebookIcon";
import YoutubeIcon from "../../Icons/SocialMedia/YoutubeIcon";
import Divider from "../../../widgets/Layout/Divider";
import { isDefined } from "../../../utilities/strings";
import translate from "../../../utilities/translate";
import { getLocales } from "../../../utilities/locales";
import PropTypes from "prop-types";
import translations from "../translations";
import Button from "../../../widgets/Button/Base";
import XIcon from "../../Icons/SocialMedia/XIcon";

// renderIcon:: String -> React.Component
export const renderIcon = cond([
  [equals("tv"), () => <TvIcon />],
  [equals("speaker"), () => <SpeakerIcon />],
  [equals("facebook"), () => <FacebookIcon />],
  [equals("x"), () => <XIcon />],
  [equals("youtube"), () => <YoutubeIcon />],
  [equals("article"), () => <ArticleIcon />],
  [equals("bell"), () => <BellIcon />],
  [equals("clock"), () => <ClockIcon />],
]);

// trans :: String -> String -> String
const trans = translate(translations);

// renderBannerWithLink :: Props -> React.Component
const renderBannerWithLink = ({ banner, close, locale }) => (
  <ExternalLink href={banner.linkUrl}>
    <div
      className="container container-page"
      style={{ backgroundColor: banner.backgroundColor }}
    >
      <div className="close-button">
        <Button onClick={close} aria-label={trans(locale)("close")}>
          <CloseIcon width={14} height={14} />
        </Button>
      </div>

      <p className="content">
        <span className="banner-icon">{renderIcon(banner.icon)}</span>
        <span className="title">{banner.title}:&nbsp;</span>
        {banner.body}
        <span className="see-more-separator">&nbsp;&nbsp;|&nbsp;</span>
        <span className="see-more">
          {isDefined(banner.linkLabel)
            ? banner.linkLabel
            : trans(locale)("link.label")}
        </span>
      </p>
    </div>
  </ExternalLink>
);

// renderBannerWithoutLink :: Props -> React.Component
const renderBannerWithoutLink = ({ banner, close, locale }) => (
  <div
    className="container container-page"
    style={{ backgroundColor: banner.backgroundColor }}
  >
    <div className="close-button">
      <Button onClick={close} aria-label={trans(locale)("close")}>
        <CloseIcon width={14} height={14} />
      </Button>
    </div>

    <p className="content">
      <span className="banner-icon">{renderIcon(banner.icon)}</span>
      <span className="title">{banner.title}:&nbsp;</span>
      {banner.body}
    </p>
  </div>
);

// Banner :: Props -> React.Component
const Banner = ({ banner, close, opened, locale }) =>
  opened ? (
    <div data-is="banner">
      {isDefined(banner.linkUrl)
        ? renderBannerWithLink({ banner, close, locale })
        : renderBannerWithoutLink({ banner, close, locale })}
      <Divider />
    </div>
  ) : null;

Banner.propTypes = {
  banner: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    linkUrl: PropTypes.string,
    linkLabel: PropTypes.string,
    icon: PropTypes.oneOf([
      "tv",
      "speaker",
      "facebook",
      "x",
      "youtube",
      "article",
      "bell",
      "clock",
    ]).isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }),
  close: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default Banner;
