import View from "./AbstractArticleList";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  page: state.pagination.page,
  locale: state.router.locale,
});

// AbstractArticleList :: Props -> React.Component
const AbstractArticleList = connect(mapStateToProps)(View);

export default AbstractArticleList;
