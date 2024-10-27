import { compose, isNil } from "ramda";
import { sendComment } from "../../../../store/modules/comments";
import View from "./CommentForm";
import { connect } from "react-redux";
import { openSignIn } from "../../../../store/modules/session";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  isSending: state.comments.sending,
  isSignedIn: !isNil(state.session.user),
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  signIn: compose(dispatch, openSignIn),
  submit: compose(dispatch, sendComment),
});

// CommentForm :: Props -> React.Component
const CommentForm = connect(mapStateToProps, mapDispatchToProps)(View);

export default CommentForm;
