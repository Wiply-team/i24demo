import "./Heading.scss";
import React from "react";
import PropTypes from "prop-types";

// Heading :: Props -> React.Component
const Heading = ({ level, color = "default", size = "medium", children }) =>
  React.createElement(
    `h${level}`,
    {
      className: `widget-typography-heading size-${size} color-${color}`,
    },
    children
  );

// Sub :: Props -> React.Component
const Sub = ({ children }) => (
  <>
    <span className="widget-typography-heading-separator">/</span>
    <span className="widget-typography-heading-subtitle">{children}</span>
  </>
);

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          type: PropTypes.oneOf([Sub]),
        }),
      ])
    ),
  ]),
  color: PropTypes.oneOf(["default", "light"]),
  level: PropTypes.oneOf(["1", "2"]).isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]),
};

Heading.Sub = Sub;

Heading.Sub.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Heading;
