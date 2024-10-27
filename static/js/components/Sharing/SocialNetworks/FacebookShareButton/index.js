import View from "./FacebookShareButton";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// FacebookShareButton :: Props -> React.Component
const FacebookShareButton = connect(mapStateToProps)(View);

export default FacebookShareButton;
