import View from "./Article";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  category: state.article.content.category,
  description: state.article.content.metaDescription,
  frontendUrl: state.article.content.frontendUrl,
  image: state.article.content.image,
  redirected: state.article.redirected,
  pageTitle: state.article.content.metaTitle,
  publishedAt: state.article.content.publishedAt,
  title: state.article.content.title,
  videoCover: state.article.content.videoCover,
});

// Article :: Props -> React.Component
const Article = connect(mapStateToProps)(View);

export default Article;
