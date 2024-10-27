import "./StickyAds.scss";
import React from "react";

// StickyAds :: Props -> React.Component
export default ({ className = "", children }) => (
  <div className={`sticky-ads ${className}`}>
    <div className="ads-main-container">{children}</div>
  </div>
);
