import React, { Component } from "react";

const componentDidUpdate = (fn) => (WrappedComponent) =>
  class ComponentDidUpdate extends Component {
    componentDidUpdate(previousProps) {
      return fn(this.props, previousProps, this);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default componentDidUpdate;
