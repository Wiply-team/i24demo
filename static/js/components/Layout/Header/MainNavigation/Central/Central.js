import React from "react";
import styles from "./Central.module.css";
import MainMenuToggle from "./MainMenuToggle";
import SearchToggle from "./SearchToggle";
import UserMenuToggle from "./UserMenuToggle";
import LanguageSelector from "./LanguageSelector";
import LiveRadioLink from "./LiveRadioLink";
import MainMenu from "../../MainMenu";
import SearchPanel from "../../SearchPanel";
import PropTypes from "prop-types";
import MainCategories from "./MainCategories";
import ClientOnly from "../../../../../legacy_components/ClientOnly";

// Central :: Props -> React.Component
const Central = ({
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
  <ul className={styles.list}>
    <li>
      <MainMenuToggle
        isActive={isMainMenuOpened}
        onClick={isMainMenuOpened ? onMainMenuClose : onMainMenuOpen}
      />
      <MainMenu isOpen={isMainMenuOpened} />
    </li>
    <li>
      <SearchToggle
        isActive={isSearchPanelOpened}
        onClick={isSearchPanelOpened ? onSearchPanelClose : onSearchPanelOpen}
      />
      <SearchPanel isOpen={isSearchPanelOpened} />
    </li>
    <li className={styles.central}>
      <ClientOnly>
        <MainCategories />
      </ClientOnly>
    </li>
    <li>
      <UserMenuToggle
        isActive={isUserMenuOpened}
        onClick={isUserMenuOpened ? onUserMenuClose : onUserMenuOpen}
      />
    </li>
    <li>
      <LanguageSelector />
    </li>
    <li className={styles["live-radio-item"]}>
      <LiveRadioLink />
    </li>
  </ul>
);

Central.propTypes = {
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

export default Central;
