import "./Title.scss";
import React from "react";
import PropTypes from "prop-types";

// Title :: Props -> React.Component
const Title = ({ size = "default", children }) => (
  <h3 className={`widget-typography-title size-${size}`}>
    {children instanceof Array
      ? children.map((text) => text.replace(/\s/g, " "))
      : children.replace(/\s/g, " ")}
  </h3>
);

Title.propTypes = {
  size: PropTypes.oneOf(["default", "small", "large", "extra-large"]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Title;
