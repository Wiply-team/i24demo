import { connect } from "react-redux";
import View from "./MainCategories";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  isHomePage: state.router.activeRoute.name === "homepage",
  allCategories: state.categories.categories,
});

// MainCategories :: Props -> React.Component
const MainCategories = connect(mapStateToProps)(View);

export default MainCategories;
