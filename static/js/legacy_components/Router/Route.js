import {
  componentDidMount,
  componentWillUnmount,
} from "../../components/Lifecycles";
import { compose, pipe } from "ramda";
import { register, unregister } from "../../store/modules/router";
import React from "react";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  activeRouteName: state.router.activeRoute.name,
  matchesCounter: state.router.matchesCounter,
});

// mapDispatchToProps :: (Action * -> State) -> Prop
const mapDispatchToProps = (dispatch) => ({
  register: compose(dispatch, register),
  unregister: compose(dispatch, unregister),
});

// didMount :: Props -> State
const didMount = ({ register, name, pattern }) => register({ name, pattern });

// didMount :: Props -> State
const willUnmount = ({ unregister, name }) => unregister({ name });

// View :: Props -> React.Component
const View = ({
  activeRouteName,
  component: Component,
  matchesCounter,
  name,
  ...restProps
}) =>
  name === activeRouteName ? (
    <div key={matchesCounter}>
      <Component {...restProps} />
    </div>
  ) : null;

// component :: React.Component -> React.Component
const component = pipe(
  componentDidMount(didMount, true),
  componentWillUnmount(willUnmount)
)(View);

// Route :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(component);
