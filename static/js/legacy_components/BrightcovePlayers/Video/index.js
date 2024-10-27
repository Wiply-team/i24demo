import {
  componentDidMount,
  componentWillUnmount,
} from "../../../components/Lifecycles";
import { compose, pipe } from "ramda";
import {
  disposeBrightcoveVideo,
  initBrightcoveVideo,
} from "../../../store/modules/brightcoveVideo";
import Video from "./Video";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  initBrightcoveVideo: compose(dispatch, initBrightcoveVideo),
  disposeBrightcoveVideo: compose(dispatch, disposeBrightcoveVideo),
});

// didMount :: Props -> Action INIT_BRIGHTCOVE_VIDEO
const didMount = ({
  initBrightcoveVideo,
  videoId,
  lazy,
  autoPlay,
  muted,
  endScreenType,
  onEnd,
}) => initBrightcoveVideo(videoId, lazy, autoPlay, muted, endScreenType, onEnd);

// willUnmount :: Props -> Action DISPOSE_BRIGHTCOVE_VIDEO
const willUnmount = ({ disposeBrightcoveVideo, videoId }) =>
  disposeBrightcoveVideo(videoId);

// lifecycles :: React.Component -> React.Component
const lifecycles = pipe(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(Video);

// Video :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
