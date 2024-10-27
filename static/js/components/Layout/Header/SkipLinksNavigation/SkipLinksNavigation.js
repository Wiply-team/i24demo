import styles from "./SkipLinksNavigation.module.css";
import React from "react";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import Link from "../../../../widgets/Link/Link";

// trans :: String -> String -> String
const trans = translate(translations);

// SkipLinksNavigation :: Props -> React.Component
const SkipLinksNavigation = React.memo(({ locale }) => (
  <nav className={styles.wrapper} aria-label={trans(locale)("label")}>
    <ul className={styles.list}>
      <li>
        <Link className={styles.link} href="#navigation-content">
          Content
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="#navigation-menu">
          Menu
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="#navigation-footer">
          Footer
        </Link>
      </li>
    </ul>
  </nav>
));

SkipLinksNavigation.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default SkipLinksNavigation;
