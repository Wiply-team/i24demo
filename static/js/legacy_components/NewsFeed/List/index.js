import List from "./List";
import { connect } from "react-redux";

// mapStateToProps :: (State, Props) -> Props
const mapStateToProps = (state, ownProps) => ({
  locale: state.router.locale,
});

// List :: Props -> React.Component
export default connect(mapStateToProps)(List);
