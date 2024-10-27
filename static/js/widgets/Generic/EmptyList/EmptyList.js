import React from "react";
import styles from "./EmptyList.module.css";
import PropTypes from "prop-types";

// EmptyList :: Props -> React.Component
const EmptyList = ({ children }) => <p className={styles.empty}>{children}</p>;

EmptyList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmptyList;
