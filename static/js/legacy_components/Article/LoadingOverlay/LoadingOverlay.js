import "./LoadingOverlay.scss";
import Overlay from "../../Loader/Overlay";
import React from "react";

// LoadingOverlay :: () -> React.Component
const LoadingOverlay = () => (
  <div className="article-overlay" id="article">
    <div className="container container-page">
      <Overlay className="title" />
    </div>
    <div className="container container-page">
      <Overlay className="signature" />
    </div>
    <div className="container container-page">
      <Overlay className="cover" />
    </div>
    <div className="container container-page">
      <Overlay className="cover-caption" />
    </div>
    <div className="container container-page show-lg">
      <Overlay className="share-bar" />
    </div>
    <div className="banner-section">
      <div className="container container-reader">
        <Overlay className="content" />
      </div>
    </div>
  </div>
);

export default LoadingOverlay;
