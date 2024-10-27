import React, { useEffect } from "react";
import styles from "./MainMenu.module.css";
import PageList from "./PageList";
import SocialNetworkList from "../../SocialNetworkList";
import CategoryList from "./CategoryList";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import { getLocales } from "../../../../utilities/locales";
import PropTypes from "prop-types";
import layout from "../../../../styles/variables/layout.module.css";

const trans = translate(translations);

// MainMenu :: Props -> React.Component
const MainMenu = ({ locale, isOpen }) => {
  useEffect(() => {
    const breakpoint = parseInt(layout["breakpoint-l"].replace("px", ""));

    document.body.style.overflowY =
      isOpen && document.body.clientWidth < breakpoint ? "hidden" : "visible";
  }, [isOpen]);

  return (
    <div
      id="main-menu"
      className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}
    >
      <nav className={styles.navigation} aria-label={trans(locale)("label")}>
        <div className={styles["categories-wrapper"]}>
          <CategoryList />
        </div>
        <div className={styles["categories-divider-wrapper"]}>
          <div className={styles.divider} />
        </div>
        <div className={styles["pages-wrapper"]}>
          <PageList />
        </div>
        <div className={styles.divider} />
        <div className={styles["social-networks-wrapper"]}>
          <SocialNetworkList />
        </div>
      </nav>
    </div>
  );
};

MainMenu.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MainMenu;
