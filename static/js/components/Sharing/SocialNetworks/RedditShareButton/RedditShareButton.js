import React from "react";
import { RedditShareButton as Base } from "react-share";
import RedditIcon from "../../../../legacy_components/Icons/SocialMedia/RedditIcon";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import styles from "../SocialNetworks.module.css";

const trans = translate(translations);

// RedditShareButton :: Props -> React.Component
const RedditShareButton = ({ locale, title, url }) => (
  <div className={styles.button}>
    <Base
      title={title}
      url={url}
      resetButtonStyle={true}
      aria-label={trans(locale)("label")}
    >
      <RedditIcon />
    </Base>
  </div>
);

RedditShareButton.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default RedditShareButton;
