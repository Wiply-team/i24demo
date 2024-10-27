import { compose, propOr } from "ramda";
import { connect } from "react-redux";
import {
  fetchArticlePage,
  removeArticlePage,
} from "../../../store/modules/category";
import View from "../AbstractArticleList/ArticlePage";

// mapStateToProps :: (State, Number) -> Props
const mapStateToProps = (state, { page }) => ({
  articles: propOr([], page, state.category.articlePages),
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  fetchPage: compose(dispatch, fetchArticlePage),
  removePage: compose(dispatch, removeArticlePage),
});

// ArticlePage :: Props -> React.Component
const ArticlePage = connect(mapStateToProps, mapDispatchToProps)(View);

export default ArticlePage;
