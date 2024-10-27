import React from "react";
import styles from "./Label.module.css";
import PropTypes from "prop-types";

const Label = ({
  children,
  htmlFor,
  onClick,
  required = false,
  variant = "default",
}) => (
  <label className={`${styles.label} ${styles[variant]}`} htmlFor={htmlFor}>
    {children}
    {required ? (
      <>
        &nbsp;
        <span className={styles.required}>*</span>
      </>
    ) : null}
  </label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "bold", "thin"]),
};

export default Label;
