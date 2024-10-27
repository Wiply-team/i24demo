import View from "./Dropdown";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  isHomePage: state.router.activeRoute.name === "homepage",
  categories: state.categories.categories,
});

// Dropdown :: Props -> React.Component
const Dropdown = connect(mapStateToProps)(View);

Dropdown.Toggle = View.Toggle;
Dropdown.Menu = View.Menu;

export default Dropdown;
