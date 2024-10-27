import React, { useState } from "react";
import styles from "./Header.module.css";
import MainNavigation from "./MainNavigation";
import SecondaryNavigation from "./SecondaryNavigation";
import useEscapePress from "../../../hooks/useEscapePress";
import SkipLinksNavigation from "./SkipLinksNavigation";
import useHistoryChange from "../../../hooks/useHistoryChange";

// Header :: Props -> React.Component
const Header = () => {
  const [isMainMenuOpened, setMainMenuOpened] = useState(false);
  const [isSearchPanelOpened, setSearchPanelOpened] = useState(false);
  const [isUserMenuOpened, setUserMenuOpened] = useState(false);

  const onMainMenuOpen = () => {
    closeAll();
    setMainMenuOpened(true);
  };

  const onSearchPanelOpen = () => {
    closeAll();
    setSearchPanelOpened(true);
  };

  const onUserMenuOpen = () => {
    closeAll();
    setUserMenuOpened(true);
  };

  const closeAll = () => {
    setMainMenuOpened(false);
    setSearchPanelOpened(false);
    setUserMenuOpened(false);
  };

  useEscapePress(closeAll);
  useHistoryChange(closeAll);

  return (
    <header className={styles.wrapper}>
      <SkipLinksNavigation />
      <MainNavigation
        onMainMenuOpen={onMainMenuOpen}
        onMainMenuClose={closeAll}
        isMainMenuOpened={isMainMenuOpened}
        onSearchPanelOpen={onSearchPanelOpen}
        onSearchPanelClose={closeAll}
        isSearchPanelOpened={isSearchPanelOpened}
        onUserMenuOpen={onUserMenuOpen}
        onUserMenuClose={closeAll}
        isUserMenuOpened={isUserMenuOpened}
      />
      <SecondaryNavigation />
    </header>
  );
};

export default Header;
