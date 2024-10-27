import "./StickyBottomBanner.scss";
import React from "react";
import LiveVideo from "../Homepage/LiveVideo";

// StickyBottomBanner :: Props -> React.Component
const StickyBottomBanner = () => (
  <div className="sticky-bottom">
    <div className="sticky-bottom-content hide-xl">
      <LiveVideo />
    </div>
  </div>
);

export default StickyBottomBanner;
