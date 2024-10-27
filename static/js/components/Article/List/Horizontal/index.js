import View from "./Horizontal";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// Horizontal :: Props -> React.Component
const Horizontal = connect(mapStateToProps)(View);

export default Horizontal;
