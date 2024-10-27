import Error from "./Error";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// Error :: Props -> React.Component
export default connect(mapStateToProps)(Error);
