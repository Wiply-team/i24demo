import View from "./XShareButton";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// XShareButton :: Props -> React.Component
const XShareButton = connect(mapStateToProps)(View);

export default XShareButton;
