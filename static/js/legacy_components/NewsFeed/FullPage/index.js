import React from "react";
import FullPage from "./Container";
import ResourceLoader from "../../../components/ResourceLoader";

// Wrapper :: Props -> React.Component
const Wrapper = (props) => (
  <ResourceLoader
    reducers={["newsFeed", "pagination"]}
    epics={["newsFeed", "pagination"]}
  >
    <FullPage {...props} />
  </ResourceLoader>
);

export default Wrapper;
