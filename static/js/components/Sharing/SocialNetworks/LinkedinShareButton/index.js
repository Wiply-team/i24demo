import View from "./LinkedinShareButton";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// LinkedinShareButton :: Props -> React.Component
const LinkedinShareButton = connect(mapStateToProps)(View);

export default LinkedinShareButton;
