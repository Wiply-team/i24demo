import React from "react";
import Tweet from "./Tweet";
import ResourceLoader from "../../components/ResourceLoader";
import SdkLoader from "./SdkLoader";

export default (props) => (
  <ResourceLoader reducers={["x"]} epics={["x"]}>
    <SdkLoader />
    <Tweet {...props} />
  </ResourceLoader>
);
