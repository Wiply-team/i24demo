import View from "./PageList";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// PageList :: Props -> React.Component
const PageList = connect(mapStateToProps)(View);

export default PageList;
