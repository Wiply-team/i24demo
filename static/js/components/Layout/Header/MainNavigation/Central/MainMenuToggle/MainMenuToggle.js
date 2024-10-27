import React from "react";
import styles from "./MainMenuToggle.module.css";
import translate from "../../../../../../utilities/translate";
import translations from "./translations";
import Button from "../../../../../../widgets/Button/Base";
import PropTypes from "prop-types";
import { getLocales } from "../../../../../../utilities/locales";

const trans = translate(translations);

// MainMenuToggle :: Props -> React.Component
const MainMenuToggle = ({ locale, isActive, onClick }) => (
  <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
    <Button
      id="main-menu-toggle"
      onClick={onClick}
      aria-label={isActive ? trans(locale)("close") : trans(locale)("open")}
    >
      <div className={styles.icon}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </Button>
  </div>
);

MainMenuToggle.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MainMenuToggle;
