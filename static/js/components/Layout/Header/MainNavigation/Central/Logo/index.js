import { connect } from "react-redux";
import View from "./Logo";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// Logo :: Props -> React.Component
const Logo = connect(mapStateToProps)(View);

export default Logo;
