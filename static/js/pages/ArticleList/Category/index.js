import React from "react";
import Category from "./Container";
import ResourceLoader from "../../../components/ResourceLoader";

// Wrapper :: Props -> React.Component
const Wrapper = (props) => (
  <ResourceLoader
    reducers={["category", "headlines", "pagination"]}
    epics={["category", "headlines", "pagination"]}
  >
    <Category {...props} />
  </ResourceLoader>
);

export default Wrapper;
