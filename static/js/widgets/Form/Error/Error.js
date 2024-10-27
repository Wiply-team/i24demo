import React from "react";
import styles from "./Error.module.css";
import PropTypes from "prop-types";

// Error :: Props -> React.Component
const Error = ({ id, role, children }) => (
  <p id={id} role={role} className={styles.message}>
    {children}
  </p>
);

Error.propTypes = {
  id: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Error;
