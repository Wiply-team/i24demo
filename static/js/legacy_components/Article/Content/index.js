import Content from "./Content";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  components: state.article.content.components,
  locale: state.router.locale,
  hasEvents: state.article.content.hasEvents,
  commentsDisabled: state.article.content.commentsDisabled,
  slug: state.article.content.slug,
});

// Content :: Props -> React.Component
export default connect(mapStateToProps)(Content);
