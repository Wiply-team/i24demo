import View from "./CategoryList";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  isHomePage: state.router.activeRoute.name === "homepage",
  categories: state.categories.categories,
});

// CategoryList :: Props -> React.Component
const CategoryList = connect(mapStateToProps)(View);

export default CategoryList;
