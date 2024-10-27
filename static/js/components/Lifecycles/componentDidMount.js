import React, { Component } from "react";
import { equals, omit } from "ramda";
import { connect } from "react-redux";

// This component attaches a componentDidMount lifecycle event to functional
// components. In order to prevent double renderings during React app's
// hydration (when SSR is used to pre-render the html page) this component
// verifies if the React app is in hydrating state checking on a Redux state
// property. In case the app is being hydrated then the componentDidMount
// function is not called. In order to force some component to still be able to
// run the componentDidMount function even during hydration you can pass a
// second argument to this component to force the client to execute it anyway
// (ex. adverts, consent management layer, etc...).
const componentDidMount = (fn) => (WrappedComponent) =>
  class ComponentDidMount extends Component {
    componentDidMount() {
      if (!this.props.isHydrating) {
        return fn(this.props, this);
      }
    }

    shouldComponentUpdate(nextProps) {
      return !equals(
        omit(["isHydrating"], this.props),
        omit(["isHydrating"], nextProps)
      );
    }

    render() {
      return <WrappedComponent {...omit(["isHydrating"], this.props)} />;
    }
  };

// mapStateToProps :: State -> Props
const mapStateToProps = (force) => (state) => ({
  isHydrating: !force && state.app.isHydrating,
});

export default (fn, force = false) =>
  (WrappedComponent) =>
    connect(
      mapStateToProps(force),
      null
    )(componentDidMount(fn)(WrappedComponent));
