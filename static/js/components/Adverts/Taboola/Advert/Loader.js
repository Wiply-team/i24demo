import Advert from "./Container";
import React from "react";

// Loader :: Props -> React.Component
const Loader = ({ shouldLoad, ...restProps }) =>
  shouldLoad ? <Advert {...restProps} /> : null;

export default Loader;
