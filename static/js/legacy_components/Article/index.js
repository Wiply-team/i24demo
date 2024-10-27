import React from "react";
import Article from "./Loader";
import ResourceLoader from "../../components/ResourceLoader";

// Wrapper :: Props -> React.Component
const Wrapper = (props) => (
  <ResourceLoader reducers={["article"]} epics={["article"]}>
    <Article {...props} />
  </ResourceLoader>
);

export default Wrapper;
