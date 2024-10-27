import { connect } from "react-redux";
import View from "./LiveRadioLink";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// LiveRadioLink :: Props -> React.Component
const LiveRadioLink = connect(mapStateToProps)(View);

export default LiveRadioLink;
