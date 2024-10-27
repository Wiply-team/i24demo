import View from "./AnimationWrapper";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  isHomePage: state.router.activeRoute.name === "homepage",
  locale: state.router.locale,
  collapsed: state.header.collapsed,
});

// SecondaryNavigation :: Props -> React.Component
const SecondaryNavigation = connect(mapStateToProps)(View);

export default SecondaryNavigation;
