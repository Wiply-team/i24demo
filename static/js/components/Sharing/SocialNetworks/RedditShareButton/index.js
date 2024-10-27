import View from "./RedditShareButton";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// RedditShareButton :: Props -> React.Component
const RedditShareButton = connect(mapStateToProps)(View);

export default RedditShareButton;
