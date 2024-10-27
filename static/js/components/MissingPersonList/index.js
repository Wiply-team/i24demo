import React from "react";
import MissingPersonList from "./Container";
import ResourceLoader from "../../components/ResourceLoader";

// Wrapper :: Props -> React.Component
const Wrapper = (props) => (
  <ResourceLoader reducers={["missingPersons"]} epics={["missingPersons"]}>
    <MissingPersonList {...props} />
  </ResourceLoader>
);

export default Wrapper;
