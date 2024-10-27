import {
  cancelDelete,
  confirmDelete,
  deleteComment,
} from "./../../../../store/modules/comments";
import CommentDeleteForm from "./CommentDeleteForm";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  commentToBeDeleted: state.comments.commentToBeDeleted,
  deleting: state.comments.deleting,
  user: state.session.user,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  confirmDelete: compose(dispatch, confirmDelete),
  cancelDelete: compose(dispatch, cancelDelete),
  deleteComment: compose(dispatch, deleteComment),
});

// CommentDeleteForm :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(CommentDeleteForm);
