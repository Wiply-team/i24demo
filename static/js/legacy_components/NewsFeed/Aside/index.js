import React from "react";
import Aside from "./Container";
import ResourceLoader from "../../../components/ResourceLoader";

// Wrapper :: Props -> React.Component
const Wrapper = (props) => (
  <ResourceLoader reducers={["asideNewsFeed"]} epics={["asideNewsFeed"]}>
    <Aside {...props} />
  </ResourceLoader>
);

export default Wrapper;
