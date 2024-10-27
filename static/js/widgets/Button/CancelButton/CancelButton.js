import React from "react";
import styles from "./CancelButton.module.css";
import PropTypes from "prop-types";

// CancelButton :: Props -> React.Component
const CancelButton = ({ children, onClick, "aria-label": ariaLabel }) => {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onClick(event);
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

CancelButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  "aria-label": PropTypes.string,
};

export default CancelButton;
