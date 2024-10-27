import Loader from "../../widgets/Generic/Loader";
import React from "react";
import { dissoc } from "ramda";

export default ({ Component, ...props }) =>
  Component ? <Component {...dissoc("load", props)} /> : <Loader />;
