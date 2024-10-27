import View from "./LastRevision";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  updatedAt: state.article.content.updatedAt,
  publishedAt: state.article.content.publishedAt,
});

// LastRevision :: Props -> React.Component
const LastRevision = connect(mapStateToProps)(View);

export default LastRevision;
