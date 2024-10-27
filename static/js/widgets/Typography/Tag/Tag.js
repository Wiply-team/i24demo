import "./Tag.scss";
import React from "react";
import PropTypes from "prop-types";

// Tag :: Props -> React.Component
const Tag = ({ variant = "default", children }) => (
  <div className={`widget-typography-tag ${variant}`}>{children}</div>
);

Tag.propTypes = {
  variant: PropTypes.oneOf(["sponsored", "default"]),
};

export default Tag;
