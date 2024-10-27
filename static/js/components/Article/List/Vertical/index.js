import View from "./Vertical";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// Vertical :: Props -> React.Component
const Vertical = connect(mapStateToProps)(View);

export default Vertical;
