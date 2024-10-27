import styles from "./Loader.module.css";
import React from "react";
import PropTypes from "prop-types";

const Loader = ({ color = "default", size = "default" }) => (
  <div
    className={`${styles.wrapper} ${styles[`colored-${color}`]} ${
      styles[`size-${size}`]
    }`}
  >
    <div className={styles.loader} />
  </div>
);

Loader.propTypes = {
  color: PropTypes.oneOf(["default", "white"]),
  size: PropTypes.oneOf(["default", "small"]),
};

export default Loader;
