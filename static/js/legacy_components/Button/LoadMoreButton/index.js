import LoadMoreButton from "./LoadMoreButton";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// LoadMoreButton :: Props -> React.Component
export default connect(mapStateToProps)(LoadMoreButton);
