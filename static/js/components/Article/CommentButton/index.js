import View from "./CommentButton";
import { connect } from "react-redux";
import compose from "ramda/src/compose";
import { scrollToCommentBox } from "../../../store/modules/article";

// mapStateToProps ::  (State, Props) -> Props
const mapStateToProps = (state, props) => ({
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  scrollToCommentBox: compose(dispatch, scrollToCommentBox),
});

// CommentButton :: Props -> React.Component
const CommentButton = connect(mapStateToProps, mapDispatchToProps)(View);

export default CommentButton;
