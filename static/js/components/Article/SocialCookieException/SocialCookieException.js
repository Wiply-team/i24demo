import styles from "./SocialCookieException.module.css";
import ExternalLink from "../../../components/Routing/ExternalLink";
import React from "react";
import translations from "./translations";
import translate from "../../../utilities/translate";
import CookiePreferencesButton from "../../../components/OneTrust/CookiePreferencesButton";
import { getLocales } from "../../../utilities/locales";
import PropTypes from "prop-types";

// trans :: String -> String -> String
const trans = translate(translations);

// SocialCookieException -> Props -> React.Component
const SocialCookieException = ({ locale, href }) => (
  <div className={styles.wrapper}>
    <p className={styles.link}>
      <ExternalLink href={href}>
        <span className={styles["link-inner"]}>{href}</span>
      </ExternalLink>
    </p>
    <p className={styles.text}>
      {trans(locale)("message")}&#32;
      <CookiePreferencesButton />.
    </p>
  </div>
);

SocialCookieException.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  href: PropTypes.string.isRequired,
};

export default SocialCookieException;
