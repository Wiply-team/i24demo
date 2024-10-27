import View from "./PublishedAt";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  publishedAt: state.article.content.publishedAt,
});

// PublishedAt :: Props -> React.Component
const PublishedAt = connect(mapStateToProps)(View);

export default PublishedAt;
