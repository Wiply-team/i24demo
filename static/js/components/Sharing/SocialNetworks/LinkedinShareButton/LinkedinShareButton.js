import { LinkedinShareButton as Base } from "react-share";
import React from "react";
import LinkedinIcon from "../../../../legacy_components/Icons/SocialMedia/LinkedinIcon";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import styles from "../SocialNetworks.module.css";

const trans = translate(translations);

// LinkedinShareButton :: Props -> React.Component
const LinkedinShareButton = ({ locale, excerpt, title, url }) => (
  <div className={styles.button}>
    <Base
      source="i24NEWS"
      summary={excerpt}
      title={title}
      url={url}
      resetButtonStyle={true}
      aria-label={trans(locale)("label")}
    >
      <LinkedinIcon />
    </Base>
  </div>
);

LinkedinShareButton.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  url: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  title: PropTypes.string,
};

export default LinkedinShareButton;
