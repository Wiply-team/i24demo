import JumpToComments from "./JumpToComments";
import { compose } from "ramda";
import { connect } from "react-redux";
import { scrollToCommentBox } from "../../../store/modules/article";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  isFetching: state.article.isFetching,
  numberOfComments: state.article.content.numberOfComments,
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  scrollToCommentBox: compose(dispatch, scrollToCommentBox),
});

// JumpToComments :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(JumpToComments);
