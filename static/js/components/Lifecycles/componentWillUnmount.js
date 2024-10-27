import React, { Component } from "react";

const componentWillUnmount = (fn) => (WrappedComponent) =>
  class ComponentWillUnmount extends Component {
    componentWillUnmount() {
      return fn(this.props, this);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default componentWillUnmount;
