import View from "./ReadingTime";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  readingTime: state.article.content.readingTime,
});

// ReadingTime :: Props -> React.Component
const ReadingTime = connect(mapStateToProps)(View);

export default ReadingTime;
