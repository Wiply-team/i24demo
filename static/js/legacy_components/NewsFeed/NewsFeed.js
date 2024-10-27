import Aside from "./Aside";
import FullPage from "./FullPage";
import React from "react";

// NewsFeed :: Props -> React.Component
export default ({ aside, className = "" }) => (
  <div data-is="newsfeed" className={className}>
    {aside ? <Aside /> : <FullPage />}
  </div>
);
