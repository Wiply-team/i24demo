import { connect } from "react-redux";
import View from "./SearchToggle";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// SearchToggle :: Props -> React.Component
const SearchToggle = connect(mapStateToProps)(View);

export default SearchToggle;
