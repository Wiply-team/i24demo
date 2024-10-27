import { compose, isEmpty, pipe, without } from "ramda";
import React from "react";
import { componentDidMount } from "./Lifecycles";
import { connect } from "react-redux";
import { loadResources } from "../store/modules/lazyResources";

// mapStateToProps :: State -> Props
const mapStateToProps = (state, { reducers = [], epics = [] }) => ({
  areResourcesLoaded:
    isEmpty(without(state.lazyResources.reducers, reducers)) &&
    isEmpty(without(state.lazyResources.epics, epics)),
});

// mapDispatchToProps :: (Action * -> State) -> Prop
const mapDispatchToProps = (dispatch) => ({
  loadResources: compose(dispatch, loadResources),
});

// didMount :: Props -> State
const didMount = ({ reducers, epics, loadResources }) =>
  loadResources(reducers, epics);

// View :: Props -> React.Component
const View = ({ children, areResourcesLoaded }) =>
  areResourcesLoaded ? <>{children}</> : null;

// lifecycles :: React.Component -> React.Component
const lifecycles = pipe(componentDidMount(didMount))(View);

// ResourceLoader :: Props -> React.Component
const ResourceLoader = connect(mapStateToProps, mapDispatchToProps)(lifecycles);

export default ResourceLoader;
