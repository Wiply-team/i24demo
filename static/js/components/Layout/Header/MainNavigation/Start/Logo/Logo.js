import React from "react";
import Link from "../../../../../Routing/Link";
import LogoIcon from "../../../../../../legacy_components/Icons/LogoIcon";
import styles from "./Logo.module.css";
import { getLocales } from "../../../../../../utilities/locales";
import PropTypes from "prop-types";

const Logo = ({ locale }) => (
  <div className={styles.logo} aria-hidden="true">
    <Link href={`/${locale}`} tabIndex={-1}>
      <LogoIcon />
    </Link>
  </div>
);

Logo.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default Logo;
