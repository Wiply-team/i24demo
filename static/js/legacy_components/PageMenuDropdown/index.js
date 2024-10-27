import { connect } from "react-redux";
import View from "./PageMenuDropdown";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// PageMenuDropdown :: Props -> React.Component
const PageMenuDropdown = connect(mapStateToProps)(View);

export default PageMenuDropdown;
