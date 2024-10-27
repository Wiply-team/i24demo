import "./ConsentManagement.scss";
import { componentDidMount } from "../../components/Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";
import { loadScript } from "../../store/modules/consentManagement";

// mapDispatchToProps :: State -> Props
const mapDispatchToProps = (dispatch) => ({
  loadScript: compose(dispatch, loadScript),
});

// view :: () -> NULL
const view = () => null;

// didMount -> Props -> Action.LOAD_SCRIPT
const didMount = ({ loadScript }) => loadScript();

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(componentDidMount(didMount, true))(view);

// ConsentManagement :: Props -> React.Component
export default connect(null, mapDispatchToProps)(lifecycles);
