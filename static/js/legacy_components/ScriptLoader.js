import { F, compose, find, ifElse, isNil, pipe, prop, propEq } from "ramda";
import Loader from "../widgets/Generic/Loader";
import React from "react";
import { componentDidMount } from "../components/Lifecycles";
import { connect } from "react-redux";
import { loadScript } from "../store/modules/scripts";

// mapStateToProps :: State -> Props
const mapStateToProps = (state, props) => ({
  ready: pipe(
    find(propEq(props.src, "src")),
    ifElse(isNil, F, prop("ready"))
  )(state.scripts.scripts),
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  loadScript: compose(dispatch, loadScript),
});

// didMount :: Props -> Action
const didMount = ({ loadScript, src }) => loadScript(src);

// View :: Props -> React.Component
const View = ({ ready, children }) => (ready ? children : <Loader />);

// lifecycles :: React.Component -> React.Component
const lifecycles = componentDidMount(didMount, true)(View);

// ScriptLoader :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
