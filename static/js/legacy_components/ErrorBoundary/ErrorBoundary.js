import { DEFAULT_CONTEXT } from "../../store/modules/errorBoundary";
import Error from "./../Error";
import React from "react";

// Error :: Props -> React.Component
export default ({ context = DEFAULT_CONTEXT, errors, children }) =>
  errors[context] ? <Error critical={true} /> : children;
