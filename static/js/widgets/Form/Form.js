import React from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

const Form = ({ onSubmit, children, noValidate = false, ariaLive = "off" }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onSubmit(event);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-live={ariaLive}
      noValidate={noValidate}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  ariaLive: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
