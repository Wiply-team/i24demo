import "./Overlay.scss";
import React from "react";

export default ({ className = "", inversed = false }) => (
  <figure
    className={`loader-wrapper ${className} ${inversed ? "inverse" : ""}`}
  >
    <div className="loader-overlay"></div>
  </figure>
);
