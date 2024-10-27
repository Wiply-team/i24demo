import React from "react";
import Link from "../../../../../Routing/Link";
import LogoIcon from "../../../../../../legacy_components/Icons/LogoIcon";
import styles from "./Logo.module.css";
import { getLocales } from "../../../../../../utilities/locales";
import PropTypes from "prop-types";

const Logo = ({ locale, label }) => (
  <div className={styles.logo}>
    <Link href={`/${locale}`} aria-label={label}>
      <LogoIcon width={50} />
    </Link>
  </div>
);

Logo.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  label: PropTypes.string.isRequired,
};

export default Logo;
