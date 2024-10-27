import React from "react";
import styles from "./Wrapper.module.css";
import LazyComponent from "../../../LazyComponent";
import PropTypes from "prop-types";

const SearchPanel = LazyComponent("SearchPanel");

// Wrapper :: Props -> React.Component
const Wrapper = ({ isOpen }) => (
  <div
    id="search-panel"
    className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}
  >
    {isOpen ? <SearchPanel /> : null}
  </div>
);

Wrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Wrapper;
