import {
  clean,
  fetchLatestVideos,
  focusVideo,
  next,
  playNextVideo,
  playVideo,
  previous,
} from "../../../store/modules/latestVideos";
import {
  componentDidMount,
  componentWillUnmount,
} from "../../../components/Lifecycles";
import { compose, pipe } from "ramda";
import LatestVideos from "./LatestVideos";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  loading: state.latestVideos.fetching,
  videos: state.latestVideos.list,
  slideIndex: state.latestVideos.activeIndex,
  focusedVideo: state.latestVideos.focusedVideo,
  playedVideo: state.latestVideos.playedVideo,
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  toNext: () => dispatch(next(window.innerWidth)), // @TODO: find a better way to avoid passing the window object
  toPrevious: () => dispatch(previous(window.innerWidth)), // @TODO: find a better way to avoid passing the window object
  focusVideo: (videoId) => dispatch(focusVideo(videoId)),
  playVideo: (videoId) => dispatch(playVideo(videoId)),
  fetchLatestVideos: compose(dispatch, fetchLatestVideos),
  clean: compose(dispatch, clean),
  playNextVideo: (videoId, player) => {
    if (player.isFullscreen()) {
      player.exitFullscreen();
    }

    dispatch(playNextVideo(videoId, window.innerWidth));
  },
});

// didMount :: Props -> Action FETCH_LATEST_VIDEOS
const didMount = ({ fetchLatestVideos }) => fetchLatestVideos();

// willUnmount :: Props -> Action CLEAN
const willUnmount = ({ clean }) => clean();

// lifecycles :: React.Component -> React.Component
const lifecycles = pipe(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(LatestVideos);

// LatestVideos :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
