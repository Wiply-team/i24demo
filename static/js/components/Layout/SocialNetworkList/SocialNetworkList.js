import React from "react";
import styles from "./SocialNetworkList.module.css";
import ExternalLink from "../../Routing/ExternalLink";
import Link from "../../Routing/Link";
import translate from "../../../utilities/translate";
import translations from "./translations";
import XIcon from "../../../legacy_components/Icons/SocialMedia/XIcon";
import InstagramIcon from "../../../legacy_components/Icons/SocialMedia/InstagramIcon";
import YoutubeIcon from "../../../legacy_components/Icons/SocialMedia/YoutubeIcon";
import WikipediaIcon from "../../../legacy_components/Icons/SocialMedia/WikipediaIcon";
import LinkedinIcon from "../../../legacy_components/Icons/SocialMedia/LinkedinIcon";
import NewsletterIcon from "../../../legacy_components/Icons/SocialMedia/NewsletterIcon";
import FacebookIcon from "../../../legacy_components/Icons/SocialMedia/FacebookIcon";
import PropTypes from "prop-types";
import { getLocales } from "../../../utilities/locales";

const trans = translate(translations);

// SocialNetworkList :: Props -> React.Component
const SocialNetworkList = ({ locale, variant = "default" }) => (
  <ul className={`${styles.list} ${styles[variant] ?? ""}`}>
    <li>
      <div className={styles.wrapper}>
        <ExternalLink
          href={trans(locale)("facebookLink")}
          variant="block"
          aria-label={trans(locale)("facebookLabel")}
        >
          <FacebookIcon />
        </ExternalLink>
      </div>
    </li>
    <li>
      <div className={styles.wrapper}>
        <ExternalLink
          href={trans(locale)("xLink")}
          variant="block"
          aria-label={trans(locale)("xLabel")}
        >
          <XIcon />
        </ExternalLink>
      </div>
    </li>
    <li>
      <div className={styles.wrapper}>
        <ExternalLink
          href={trans(locale)("instagramLink")}
          variant="block"
          aria-label={trans(locale)("instagramLabel")}
        >
          <InstagramIcon />
        </ExternalLink>
      </div>
    </li>
    <li>
      <div className={styles.wrapper}>
        <ExternalLink
          href={trans(locale)("youtubeLink")}
          variant="block"
          aria-label={trans(locale)("youtubeLabel")}
        >
          <YoutubeIcon />
        </ExternalLink>
      </div>
    </li>
    <li>
      <div className={styles.wrapper}>
        <ExternalLink
          href={trans(locale)("wikipediaLink")}
          variant="block"
          aria-label={trans(locale)("wikipediaLabel")}
        >
          <WikipediaIcon />
        </ExternalLink>
      </div>
    </li>
    <li>
      <div className={styles.wrapper}>
        <ExternalLink
          href={trans(locale)("linkedInLink")}
          variant="block"
          aria-label={trans(locale)("linkedInLabel")}
        >
          <LinkedinIcon />
        </ExternalLink>
      </div>
    </li>
    <li>
      <div className={styles.wrapper}>
        <Link
          href={trans(locale)("newsletterLink")}
          variant="block"
          aria-label={trans(locale)("newsletterLabel")}
        >
          <NewsletterIcon />
        </Link>
      </div>
    </li>
  </ul>
);

SocialNetworkList.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  variant: PropTypes.oneOf(["default", "light"]),
};

export default SocialNetworkList;
