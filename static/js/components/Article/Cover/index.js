import Cover from "./Cover";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  image: state.article.content.image,
  title: state.article.content.title,
  videoCover: state.article.content.videoCover,
  excerpt: state.article.content.excerpt,
});

// Cover :: Props -> React.Component
export default connect(mapStateToProps)(Cover);
