import View from "./IOSAppBadge";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// IOSAppBadge :: Props -> React.Component
const IOSAppBadge = connect(mapStateToProps)(View);

export default IOSAppBadge;
