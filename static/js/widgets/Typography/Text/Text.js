import "./Text.scss";
import PropTypes from "prop-types";
import React from "react";

// Text :: Props -> React.Component
const Text = ({ size, children }) => (
  <p className={`widget-typography-text ${size ? `size-${size}` : ""}`}>
    {children.replace(/\s/g, " ")}
  </p>
);

Text.propTypes = {
  size: PropTypes.oneOf(["small", "extra-small"]),
  children: PropTypes.string.isRequired,
};

export default Text;
