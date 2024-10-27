import "./Divider.scss";
import React from "react";
import PropTypes from "prop-types";

// Divider :: () -> React.Component
const Divider = ({ variant = "default" }) => (
  <hr className={`widget-layout-divider ${variant}`} />
);

Divider.propTypes = {
  variant: PropTypes.oneOf(["thin", "default"]),
};

export default Divider;
