import View from "./StickyShareBar";
import { compose } from "ramda";
import { connect } from "react-redux";
import {
  scrollToCommentBox,
  hideShareIcons,
} from "../../../../store/modules/article";
import { componentWillUnmount } from "../../../../components/Lifecycles";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  id: state.article.content.id,
  title: state.article.content.title,
  excerpt: state.article.content.excerpt,
  url: state.article.content.frontendUrl,
  commentsDisabled: state.article.content.commentsDisabled,
  isVisible: state.article.showShareIcons,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  scrollToCommentBox: compose(dispatch, scrollToCommentBox),
  hideShareIcons: compose(dispatch, hideShareIcons),
});

// willUnmount :: Props -> Action
const willUnmount = ({ hideShareIcons }) => hideShareIcons();

// lifecycles :: React.Component -> React.Component
const lifecycles = componentWillUnmount(willUnmount)(View);

// StickyShareBar :: Props -> React.Component
const StickyShareBar = connect(mapStateToProps, mapDispatchToProps)(lifecycles);

export default StickyShareBar;
