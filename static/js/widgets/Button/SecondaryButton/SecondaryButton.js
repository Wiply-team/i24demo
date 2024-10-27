import React from "react";
import styles from "./SecondaryButton.module.css";
import PropTypes from "prop-types";

// SecondaryButton :: Props -> React.Component
const SecondaryButton = ({ children, onClick }) => {
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

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SecondaryButton;
