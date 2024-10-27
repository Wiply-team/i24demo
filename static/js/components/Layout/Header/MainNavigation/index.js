import View from "./MainNavigation";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// MainNavigation :: Props -> React.Component
const MainNavigation = connect(mapStateToProps)(View);

export default MainNavigation;
