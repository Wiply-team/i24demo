import styles from "./Base.module.css";
import React from "react";
import PropTypes from "prop-types";

// Base :: Props -> React.Component
const Base = ({
  id,
  onClick,
  onKeyDown,
  disabled = false,
  "aria-label": ariaLabel,
  children,
  type = "button",
}) => (
  <button
    id={id}
    type={type}
    className={styles.button}
    disabled={disabled}
    aria-label={ariaLabel}
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      onClick(e);
    }}
    onKeyDown={onKeyDown}
  >
    {children}
  </button>
);

Base.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  "aria-label": PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
};

export default Base;
