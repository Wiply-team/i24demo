import View from "./ShareBar";
import { compose } from "ramda";
import { connect } from "react-redux";
import { scrollToCommentBox } from "../../../../store/modules/article";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  id: state.article.content.id,
  title: state.article.content.title,
  excerpt: state.article.content.excerpt,
  url: state.article.content.frontendUrl,
  commentsDisabled: state.article.content.commentsDisabled,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  scrollToCommentBox: compose(dispatch, scrollToCommentBox),
});

// ShareBar :: Props -> React.Component
const ShareBar = connect(mapStateToProps, mapDispatchToProps)(View);

export default ShareBar;
