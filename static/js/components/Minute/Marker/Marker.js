import React from "react";
import PropTypes from "prop-types";

// Marker :: Props -> React.Component
const Marker = ({ pageId }) => <div id={`minute_${pageId}`} />;

Marker.propTypes = {
  pageId: PropTypes.oneOf(["home"]).isRequired,
};

export default Marker;
