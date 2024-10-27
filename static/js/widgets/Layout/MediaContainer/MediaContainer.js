import "./MediaContainer.scss";
import React from "react";
import PropTypes from "prop-types";

// MediaContainer :: Props -> React.Component
const MediaContainer = ({ children, variant = "default" }) => (
  <div className={`widget-layout-media-container ${variant}`}>{children}</div>
);

MediaContainer.propTypes = {
  variant: PropTypes.oneOf(["squared", "default"]),
};

export default MediaContainer;
