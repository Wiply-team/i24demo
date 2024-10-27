import React from "react";
import Homepage from "./Container";
import ResourceLoader from "../../components/ResourceLoader";

const reducers = [
  "banner",
  "breakingNews",
  "featuredCategories",
  "headlines",
  "homepage",
  "latestVideos",
  "specialPage",
  "topArticles",
];

const epics = [
  "banner",
  "breakingNews",
  "featuredCategories",
  "headlines",
  "homepage",
  "latestVideos",
  "specialPage",
  "topArticles",
];

// Wrapper :: Props -> React.Component
const Wrapper = (props) => (
  <ResourceLoader reducers={reducers} epics={epics}>
    <Homepage {...props} />
  </ResourceLoader>
);

export default Wrapper;
