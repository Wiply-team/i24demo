import React, { Component } from "react";

const shouldComponentUpdate = (fn) => (WrappedComponent) =>
  class ShouldComponentUpdate extends Component {
    shouldComponentUpdate(nextProps) {
      return fn(this.props, nextProps, this);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default shouldComponentUpdate;
