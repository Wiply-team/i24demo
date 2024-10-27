import View from "./SkipLinksNavigation";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// SkipLinksNavigation :: Props -> React.Component
const SkipLinksNavigation = connect(mapStateToProps)(View);

export default SkipLinksNavigation;
