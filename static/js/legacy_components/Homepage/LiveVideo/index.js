import View from "./LiveVideo";
import { connect } from "react-redux";
import { guessLiveVideoStreamId } from "../../../utilities/media/videos";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  id: guessLiveVideoStreamId(state.router.locale),
});

// LiveVideo :: Props -> React.Component
const LiveVideo = connect(mapStateToProps)(View);

export default LiveVideo;
