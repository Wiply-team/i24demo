import React, { useEffect } from "react";
import styles from "./SearchToggle.module.css";
import translate from "../../../../../../utilities/translate";
import translations from "./translations";
import SearchIcon from "../../../../../../legacy_components/Icons/SearchIcon";
import Button from "../../../../../../widgets/Button/Base";
import PropTypes from "prop-types";
import { getLocales } from "../../../../../../utilities/locales";

const trans = translate(translations);

// SearchToggle :: Props -> React.Component
const SearchToggle = ({ locale, isActive, onClick }) => {
  useEffect(() => {
    document.body.style.overflowY = isActive ? "hidden" : "visible";
  }, [isActive]);

  return (
    <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
      <Button
        id="search-panel-toggle"
        onClick={onClick}
        aria-label={isActive ? trans(locale)("close") : trans(locale)("open")}
      >
        <SearchIcon height={26} />
      </Button>
    </div>
  );
};

SearchToggle.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchToggle;
