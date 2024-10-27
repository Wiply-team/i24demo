import { compose, path } from "ramda";
import {
  loadError,
  loaded,
  observe,
} from "../../../store/modules/intersectionObserver";
import Lazy from "./Lazy";
import { OBSERVER_IMAGE } from "../../../store/dependencies/observersRegistry/registries";
import { componentDidMount } from "../../../components/Lifecycles";
import { connect } from "react-redux";

// mapStateToProps :: (State, Props) -> Props
const mapStateToProps = (state, { src }) => ({
  observedItemId: src,
  observedItem: path(
    ["intersectionObserver", "observedItems", OBSERVER_IMAGE, src],
    state
  ),
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  onLoad: compose(dispatch, loaded),
  onError: compose(dispatch, loadError),
  observe: compose(dispatch, observe),
});

// didMount :: Props -> Action.OBSERVE_IMAGE
const didMount = ({ observe, observedItemId }) =>
  observe(OBSERVER_IMAGE, observedItemId);

// lifecycle :: React.Component -> React.Component
const lifecycles = compose(componentDidMount(didMount, true))(Lazy);

// Lazy :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
