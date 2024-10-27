import View from "./Homepage";
import { connect } from "react-redux";
import { guessLiveVideoStreamId } from "../../utilities/media/videos";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  liveVideoId: guessLiveVideoStreamId(state.router.locale),
});

// Homepage :: Props -> React.Component
const Homepage = connect(mapStateToProps)(View);

export default Homepage;
