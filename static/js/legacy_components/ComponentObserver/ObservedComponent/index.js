import React from "react";
import { componentDidMount } from "../../../components/Lifecycles";
import { compose } from "ramda";

// view :: Props -> React.Component
const view = ({ component: Component, onLoad, ...props }) => (
  <Component {...props} />
);

// didMount :: Props -> Action OBSERVE
const didMount = ({ onLoad }) => onLoad();

// ObservedComponent :: Props -> React.Component
export default compose(componentDidMount(didMount, true))(view);
