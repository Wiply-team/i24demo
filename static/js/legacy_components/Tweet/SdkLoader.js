import { compose } from "ramda";
import { componentDidMount } from "../../components/Lifecycles";
import { connect } from "react-redux";
import { loadSdk } from "../../store/modules/x";

// mapDispatchToProps :: (Action * -> State) -> Prop
const mapDispatchToProps = (dispatch) => ({
  loadSdk: compose(dispatch, loadSdk),
});

// didMount :: Props -> State
const didMount = ({ loadSdk }) => loadSdk();

// View :: Props -> React.Component
const View = () => null;

// lifecycles :: React.Component -> React.Component
const lifecycles = componentDidMount(didMount)(View);

// Tweet :: Props -> React.Component
export default connect(null, mapDispatchToProps)(lifecycles);
