import Footer from "./Footer";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  locale: state.router.locale,
});

// Footer :: Props -> React.Component
export default connect(mapStateToProps)(Footer);
