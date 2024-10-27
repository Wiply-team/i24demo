import Tags from "./Tags";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  tags: state.article.content.tags,
});

// Tags :: Props -> React.Component
export default connect(mapStateToProps)(Tags);
