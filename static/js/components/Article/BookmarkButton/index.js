import View from "./BookmarkButton";
import { connect } from "react-redux";
import { includes, isNil } from "ramda";
import {
  addBookmark,
  openSignIn,
  removeBookmark,
} from "../../../store/modules/session";
import compose from "ramda/src/compose";

// mapStateToProps ::  (State, Props) -> Props
const mapStateToProps = (state, props) => ({
  isSignedIn: !isNil(state.session.user),
  isMarked: includes(props.articleId, state.session.bookmarks),
  isFetching:
    !isNil(state.session.user) &&
    (state.session.isFetching || state.session.isSubmitting),
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  signIn: compose(dispatch, openSignIn),
  mark: compose(dispatch, addBookmark),
  unmark: compose(dispatch, removeBookmark),
});

// BookmarkButton :: Props -> React.Component
const BookmarkButton = connect(mapStateToProps, mapDispatchToProps)(View);

export default BookmarkButton;
