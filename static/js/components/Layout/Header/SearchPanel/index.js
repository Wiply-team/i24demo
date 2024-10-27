import View from "./Wrapper";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// SearchPanel :: Props -> React.Component
const SearchPanel = connect(mapStateToProps)(View);

export default SearchPanel;
