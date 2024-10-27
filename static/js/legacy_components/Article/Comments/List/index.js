import List from "./Container";
import React from "react";
import ResourceLoader from "../../../../components/ResourceLoader";
import ClientOnly from "../../../ClientOnly";

export default (props) => (
  <ClientOnly>
    <ResourceLoader reducers={["comments"]} epics={["comment"]}>
      <List {...props} />
    </ResourceLoader>
  </ClientOnly>
);
