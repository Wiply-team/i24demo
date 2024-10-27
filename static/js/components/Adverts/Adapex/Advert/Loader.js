import Advert from "./Container";
import React from "react";

// Loader :: Props -> React.Component
const Loader = ({ isSdkReady, ...restProps }) =>
  isSdkReady ? <Advert {...restProps} /> : null;

export default Loader;
