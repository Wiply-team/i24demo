import { T, compose, pipe } from "ramda";
import { componentDidMount } from "./../components/Lifecycles";
import { connect } from "react-redux";
import { fetchUser } from "../store/modules/session";

const mapDispatchToProps = (dispatch) => ({
  load: compose(dispatch, fetchUser, T),
});

const didMount = ({ load }) => load();

const View = ({ children }) => children || null;

/**
 * Simple component which loads the user from the cookie once mounted
 */
export default connect(
  null,
  mapDispatchToProps
)(pipe(componentDidMount(didMount, true))(View));
