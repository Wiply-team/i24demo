import React from "react";
import styles from "./MainNavigation.module.css";
import Start from "./Start";
import Central from "./Central";
import End from "./End";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";

const trans = translate(translations);

// MainNavigation :: Props -> React.Component
const MainNavigation = ({
  locale,
  onMainMenuOpen,
  onMainMenuClose,
  isMainMenuOpened,
  onSearchPanelOpen,
  onSearchPanelClose,
  isSearchPanelOpened,
  onUserMenuOpen,
  onUserMenuClose,
  isUserMenuOpened,
}) => (
  <div id="navigation-menu" className={styles.wrapper}>
    <nav className={styles.navigation} aria-label={trans(locale)("label")}>
      <Start />
      <Central
        onMainMenuOpen={onMainMenuOpen}
        onMainMenuClose={onMainMenuClose}
        isMainMenuOpened={isMainMenuOpened}
        onSearchPanelOpen={onSearchPanelOpen}
        onSearchPanelClose={onSearchPanelClose}
        isSearchPanelOpened={isSearchPanelOpened}
        onUserMenuOpen={onUserMenuOpen}
        onUserMenuClose={onUserMenuClose}
        isUserMenuOpened={isUserMenuOpened}
      />
      <End />
    </nav>
  </div>
);

MainNavigation.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  onMainMenuOpen: PropTypes.func.isRequired,
  onMainMenuClose: PropTypes.func.isRequired,
  isMainMenuOpened: PropTypes.bool.isRequired,
  onSearchPanelOpen: PropTypes.func.isRequired,
  onSearchPanelClose: PropTypes.func.isRequired,
  isSearchPanelOpened: PropTypes.bool.isRequired,
  onUserMenuOpen: PropTypes.func.isRequired,
  onUserMenuClose: PropTypes.func.isRequired,
  isUserMenuOpened: PropTypes.bool.isRequired,
};

export default MainNavigation;
