import React from "react";
import styles from "./ModalHeader.module.css";
import PropTypes from "prop-types";

const ModalHeader = ({ title }) => (
  <h2 className={styles.header} id="modal-title">
    {title}
  </h2>
);

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ModalHeader;
