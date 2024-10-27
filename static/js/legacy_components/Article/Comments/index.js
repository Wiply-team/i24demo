import View from "./Comments";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// Comments :: Props -> React.Component
const Comments = connect(mapStateToProps)(View);

export default Comments;
