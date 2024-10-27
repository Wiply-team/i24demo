import React from "react";
import styles from "./DirectionAware.module.css";
import PropTypes from "prop-types";

const DirectionAware = ({ direction, children }) => (
  <div className={styles[direction]}>{children}</div>
);

DirectionAware.propTypes = {
  direction: PropTypes.oneOf([
    "left",
    "up-left",
    "up",
    "up-right",
    "right",
    "bottom-right",
    "bottom",
    "bottom-left",
  ]).isRequired,
};

export default DirectionAware;
