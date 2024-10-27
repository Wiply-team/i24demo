import { componentDidMount } from "../../components/Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";
import { redirect } from "../../store/modules/router";

// mapDispatchToProps :: (Action * -> State) -> Prop
const mapDispatchToProps = (dispatch) => ({
  redirect: compose(dispatch, redirect),
});

// didMount :: Props -> Action
const didMount = ({ redirect, to }) => redirect(to);

// View :: () -> _
const View = () => null;

// component :: React.Component -> React.Component
const component = componentDidMount(didMount)(View);

// Redirect :: Props -> React.Component
export default connect(null, mapDispatchToProps)(component);
