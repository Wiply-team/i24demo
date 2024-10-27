import React from "react";
import ArticlesWidgets from "./Container";
import ResourceLoader from "../ResourceLoader";

// Wrapper :: Props -> React.Component
const Wrapper = (props) => (
  <ResourceLoader reducers={["articlesWidgets"]} epics={["articlesWidgets"]}>
    <ArticlesWidgets {...props} />
  </ResourceLoader>
);

export default Wrapper;
