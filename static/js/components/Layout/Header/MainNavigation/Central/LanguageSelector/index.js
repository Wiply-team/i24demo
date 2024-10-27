import { connect } from "react-redux";
import View from "./LanguageSelector";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// LanguageSelector :: Props -> React.Component
const LanguageSelector = connect(mapStateToProps)(View);

export default LanguageSelector;
