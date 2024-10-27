import { componentDidMount } from "../../components/Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";
import { injectBrightcoveVideoSchema } from "../../store/modules/header";

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  injectBrightcoveVideoSchema: compose(dispatch, injectBrightcoveVideoSchema),
});

// didMount :: Props -> Action
const didMount = ({ injectBrightcoveVideoSchema, videoId }) =>
  injectBrightcoveVideoSchema(videoId);

// View :: Props -> React.Component
const View = () => null;

// lifecycles :: React.Component -> React.Component
const lifecycles = componentDidMount(didMount)(View);

// LiveRadio :: Props -> React.Component
export default connect(null, mapDispatchToProps)(lifecycles);
