import React from "react";
import { WhatsappShareButton as Base } from "react-share";
import WhatsAppIcon from "../../../../legacy_components/Icons/SocialMedia/WhatsAppIcon";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import styles from "../SocialNetworks.module.css";

const trans = translate(translations);

// WhatsappShareButton :: Props -> React.Component
const WhatsappShareButton = ({ locale, title, url }) => (
  <div className={styles.button}>
    <Base
      title={title}
      url={url}
      resetButtonStyle={true}
      aria-label={trans(locale)("label")}
    >
      <WhatsAppIcon />
    </Base>
  </div>
);

WhatsappShareButton.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default WhatsappShareButton;
