import React from "react";
import styles from "./Footer.module.css";
import translate from "../../../utilities/translate";
import translations from "./translations";
import AndroidAppBadge from "./AndroidAppBadge";
import IOSAppBadge from "./IOSAppBadge";
import LogoIcon from "../../../legacy_components/Icons/LogoIcon";
import SocialNetworkList from "../SocialNetworkList";
import Link from "../../Routing/Link";
import { isEnglish, isFrench } from "../../../utilities/locales";
import { filterNavbarCategories } from "../../../utilities/miscellaneous";
import CookiePreferencesButton from "../../OneTrust/CookiePreferencesButton";

const trans = translate(translations);

// Footer :: Props -> React.Component
const Footer = ({ locale, categories }) => (
  <footer id="navigation-footer" className={styles.wrapper} role="contentinfo">
    <div className={`${styles.column} ${styles.brand}`}>
      <div>
        <LogoIcon width={79} height={45} />
      </div>
    </div>
    <div className={`${styles.column} ${styles.navigation}`}>
      <nav
        className={styles.apps}
        aria-label={trans(locale)("mobileAppsLabel")}
      >
        <div className={styles["list-title"]}>
          <LogoIcon height={23} width={40} />
        </div>
        <ul className={styles.list}>
          <li>
            <AndroidAppBadge />
          </li>
          <li>
            <IOSAppBadge />
          </li>
        </ul>
      </nav>
      <div className={styles.links}>
        <nav>
          <h4 className={styles["list-title"]}>
            {trans(locale)("informationTitle")}
          </h4>
          <ul className={styles.list}>
            <li className={styles["no-upper-case"]}>
              <Link href={trans(locale)("leadershipLink")}>
                {trans(locale)("leadershipLabel")}
              </Link>
            </li>
            {isEnglish(locale) || isFrench(locale) ? (
              <li className={styles["no-upper-case"]}>
                <Link href={trans(locale)("anchorsLink")}>
                  {trans(locale)("anchorsLabel")}
                </Link>
              </li>
            ) : null}
            <li className={styles["no-upper-case"]}>
              <Link href={trans(locale)("showsLink")}>
                {trans(locale)("showsLabel")}
              </Link>
            </li>
            <li>
              <Link href={trans(locale)("liveRadioLink")}>
                {trans(locale)("liveRadioLabel")}
              </Link>
            </li>
            <li>
              <Link href={trans(locale)("contactLink")}>
                {trans(locale)("contactLabel")}
              </Link>
            </li>
            <li>
              <Link href={trans(locale)("sitemapLink")}>
                {trans(locale)("sitemapLabel")}
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h4 className={styles["list-title"]}>
            {trans(locale)("categoriesTitle")}
          </h4>
          <ul className={styles.list}>
            <li>
              <Link href={trans(locale)("breakingNewsLink")}>
                {trans(locale)("breakingNewsLabel")}
              </Link>
            </li>
            {filterNavbarCategories(categories).map((category) => (
              <li key={category.id}>
                <Link href={category.link}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <h4 className={styles["list-title"]}>
            {trans(locale)("legalTitle")}
          </h4>
          <ul className={styles.list}>
            <li>
              <Link href={trans(locale)("termsOfServiceLink")}>
                {trans(locale)("termsOfServiceLabel")}
              </Link>
            </li>
            <li>
              <Link href={trans(locale)("privacyPolicyLink")}>
                {trans(locale)("privacyPolicyLabel")}
              </Link>
            </li>
            <li>
              <Link href={trans(locale)("advertisingTermsAndConditionsLink")}>
                {trans(locale)("advertisingTermsAndConditionsLabel")}
              </Link>
            </li>
            <li>
              <Link href={trans(locale)("accessibilityDeclarationLink")}>
                {trans(locale)("accessibilityDeclarationLabel")}
              </Link>
            </li>
            <li>
              <CookiePreferencesButton />
            </li>
            <li>
              <Link href={trans(locale)("cookiesLink")}>
                {trans(locale)("cookiesLabel")}
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h4 className={styles["list-title"]}>
            {trans(locale)("socialTitle")}
          </h4>
          <ul className={styles.list}>
            <li>
              <Link href={trans(locale)("newsletterLink")}>
                {trans(locale)("newsletterLabel")}
              </Link>
            </li>
            <li>
              <div className={styles["social-network-links-wrapper"]}>
                <SocialNetworkList variant="light" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className={styles.column}></div>
  </footer>
);

export default Footer;
