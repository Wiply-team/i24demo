import View from "./SectionHeader";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// SectionHeader :: Props -> React.Component
const SectionHeader = connect(mapStateToProps)(View);

export default SectionHeader;
