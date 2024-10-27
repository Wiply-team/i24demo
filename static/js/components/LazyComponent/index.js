import View from "./LazyComponent";
import { componentDidMount } from "../Lifecycles";
import { connect } from "react-redux";
import { isNil } from "ramda";
import { load } from "../../store/modules/lazyComponents";

// mapStateToProps :: String -> Store.State -> Props
const mapStateToProps = (componentName) => (state) => ({
  componentName,
  Component: state.lazyComponents.loadedComponents[componentName],
});

// mapDispatchToProps :: String -> Store.Dispatch -> Props
const mapDispatchToProps = (componentName) => (dispatch) => ({
  load: () => dispatch(load(componentName)),
});

// didMount :: Props -> Action LOAD
const didMount = ({ Component, load }) => isNil(Component) && load();

// lifecycles :: React.Component -> React.Component
const lifecycles = componentDidMount(didMount)(View);

// LazyComponent :: String -> Props -> React.Component
const LazyComponent = (componentName) =>
  connect(
    mapStateToProps(componentName),
    mapDispatchToProps(componentName)
  )(lifecycles);

export default LazyComponent;
