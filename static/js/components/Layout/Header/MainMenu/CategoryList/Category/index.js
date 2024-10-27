import View from "./Category";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// Category :: Props -> React.Component
const Category = connect(mapStateToProps)(View);

export default Category;
