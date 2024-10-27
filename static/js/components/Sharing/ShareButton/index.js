import View from "./ShareButton";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// ShareButton :: Props -> React.Component
const ShareButton = connect(mapStateToProps)(View);

export default ShareButton;
