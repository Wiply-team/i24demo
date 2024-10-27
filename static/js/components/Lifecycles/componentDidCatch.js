import React, { Component } from "react";

const componentDidCatch = (fn) => (WrappedComponent) =>
  class ComponentDidCatch extends Component {
    componentDidCatch(err, info) {
      return fn(this.props, err, info, this);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default componentDidCatch;
