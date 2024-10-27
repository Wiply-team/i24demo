import { T, always, complement, cond, isNil, propEq } from "ramda";
import DefaultFallbackView from "./DefaultFallbackView";
import React from "react";
import { connect } from "react-redux";

// isAuthorized :: User|Null -> Boolean
const isAuthenticated = complement(isNil);

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  isSessionReady: state.session.isInitialized,
  user: state.session.user,
});

// createProtectedComponent :: (React.Component, React.Component) -> Props -> React.Component
const createProtectedComponent = (ProtectedView, FallbackView) =>
  cond([
    [propEq(false, "isSessionReady"), always(null)],
    [
      ({ user }) => isAuthenticated(user),
      ({ isSessionReady, user, ...props }) => <ProtectedView {...props} />,
    ],
    [T, ({ isSessionReady, user, ...props }) => <FallbackView {...props} />],
  ]);

// Firewall :: (React.Component, React.Component) -> Props -> React.Component
const Firewall = (ProtectedView, FallbackView = DefaultFallbackView) =>
  connect(mapStateToProps)(
    createProtectedComponent(ProtectedView, FallbackView)
  );

export default Firewall;
