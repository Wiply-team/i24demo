import {
  dislikeComment,
  likeComment,
  toggleCommentFormThread,
  toggleCommentThread,
  undislikeComment,
  unlikeComment,
} from "./../../../../store/modules/comments";
import Comment from "./Comment";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  commentToBeDeleted: state.comments.commentToBeDeleted,
  deleting: state.comments.deleting,
  locale: state.router.locale,
  user: state.session.user,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  likeComment: compose(dispatch, likeComment),
  dislikeComment: compose(dispatch, dislikeComment),
  unlikeComment: compose(dispatch, unlikeComment),
  undislikeComment: compose(dispatch, undislikeComment),
  toggleCommentThread: compose(dispatch, toggleCommentThread),
  toggleCommentFormThread: compose(dispatch, toggleCommentFormThread),
});

// Comment :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
