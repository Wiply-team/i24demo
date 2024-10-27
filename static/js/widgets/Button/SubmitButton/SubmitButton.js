import React from "react";
import styles from "./SubmitButton.module.css";
import PropTypes from "prop-types";

// SubmitButton :: Props -> React.Component
const SubmitButton = ({ children, disabled = false }) => (
  <button type="submit" className={styles.button} disabled={disabled}>
    {children}
  </button>
);

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default SubmitButton;
