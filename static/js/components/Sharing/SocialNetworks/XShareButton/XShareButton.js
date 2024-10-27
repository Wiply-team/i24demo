import React from "react";
import { TwitterShareButton as Base } from "react-share";
import XIcon from "../../../../legacy_components/Icons/SocialMedia/XIcon";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import { guessXAccount } from "../../../../utilities/miscellaneous";
import styles from "../SocialNetworks.module.css";

const trans = translate(translations);

// XShareButton :: Props -> React.Component
const XShareButton = ({ locale, url, hashtags = [] }) => (
  <div className={styles.button}>
    <Base
      url={url}
      via={guessXAccount(locale)}
      hashtags={hashtags}
      resetButtonStyle={true}
      aria-label={trans(locale)("label")}
    >
      <XIcon />
    </Base>
  </div>
);

XShareButton.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  url: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string),
};

export default XShareButton;
