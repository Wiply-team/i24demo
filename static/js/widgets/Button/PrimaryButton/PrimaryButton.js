import React from "react";
import styles from "./PrimaryButton.module.css";
import PropTypes from "prop-types";

// PrimaryButton :: Props -> React.Component
const PrimaryButton = ({ children, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onClick(event);
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrimaryButton;
