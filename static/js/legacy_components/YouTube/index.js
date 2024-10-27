import { F, compose } from "ramda";
import {
  componentDidMount,
  shouldComponentUpdate,
} from "../../components/Lifecycles";
import YouTube from "./YouTube";
import { connect } from "react-redux";
import { injectYoutubeSchema } from "../../store/modules/header";

// mapDispatchToProps :: (Action * -> State) -> Prop
const mapDispatchToProps = (dispatch) => ({
  injectYoutubeSchema: compose(dispatch, injectYoutubeSchema),
});

// didMount :: Props -> State
const didMount = ({ injectYoutubeSchema, src }) => injectYoutubeSchema(src);

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(
  componentDidMount(didMount),
  shouldComponentUpdate(F)
)(YouTube);

// YouTube :: Props -> React.Component
export default connect(null, mapDispatchToProps)(lifecycles);
