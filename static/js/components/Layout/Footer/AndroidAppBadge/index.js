import View from "./AndroidAppBadge";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// AndroidAppBadge :: Props -> React.Component
const AndroidAppBadge = connect(mapStateToProps)(View);

export default AndroidAppBadge;
