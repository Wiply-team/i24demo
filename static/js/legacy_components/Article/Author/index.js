import View from "./Author";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  signatures: state.article.content.signatures,
  updatedAt: state.article.content.updatedAt,
  publishedAt: state.article.content.publishedAt,
});

// Author :: Props -> React.Component
const Author = connect(mapStateToProps)(View);

export default Author;
