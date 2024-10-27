import { compose, path, propOr } from "ramda";
import { loaded, observe } from "../../store/modules/intersectionObserver";
import { OBSERVER_COMPONENT } from "../../store/dependencies/observersRegistry/registries";
import ObservedComponent from "./ObservedComponent";
import React from "react";
import { componentDidMount } from "../../components/Lifecycles";
import { connect } from "react-redux";

// mapStateToProps :: (State, Props) -> Props
const mapStateToProps = (state, { componentId }) => ({
  observedItem: path(
    ["intersectionObserver", "observedItems", OBSERVER_COMPONENT, componentId],
    state
  ),
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  observe: compose(dispatch, observe),
  loaded: compose(dispatch, loaded),
});

// view :: Props -> React.Component
const view = ({
  componentId,
  observedItem,
  component,
  loaded,
  ...restProps
}) => (
  <div data-observed-item-id={componentId} id={componentId}>
    {propOr(false, "isIntersecting", observedItem) ? (
      <ObservedComponent
        component={component}
        onLoad={() => loaded(OBSERVER_COMPONENT, componentId)}
        {...restProps}
      />
    ) : null}
  </div>
);

// didMount :: Props -> Action OBSERVE
const didMount = ({ observe, componentId }) =>
  observe(OBSERVER_COMPONENT, componentId);

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(componentDidMount(didMount, true))(view);

// ComponentObserver :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
