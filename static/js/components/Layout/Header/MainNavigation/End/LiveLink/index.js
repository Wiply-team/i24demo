import { connect } from "react-redux";
import View from "./LiveLink";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// LiveLink :: Props -> React.Component
const LiveLink = connect(mapStateToProps)(View);

export default LiveLink;
