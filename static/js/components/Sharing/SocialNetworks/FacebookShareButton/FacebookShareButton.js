import { FacebookShareButton as Base } from "react-share";
import React from "react";
import FacebookIcon from "../../../../legacy_components/Icons/SocialMedia/FacebookIcon";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import styles from "../SocialNetworks.module.css";

const trans = translate(translations);

// FacebookShareButton :: Props -> React.Component
const FacebookShareButton = ({ locale, url }) => (
  <div className={styles.button}>
    <Base url={url} resetButtonStyle={true} aria-label={trans(locale)("label")}>
      <FacebookIcon />
    </Base>
  </div>
);

FacebookShareButton.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  url: PropTypes.string.isRequired,
};

export default FacebookShareButton;
