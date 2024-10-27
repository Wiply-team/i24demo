import View from "./CookiePreferencesButton";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// CookiePreferencesButton :: Props -> React.Component
const CookiePreferencesButton = connect(mapStateToProps)(View);

export default CookiePreferencesButton;
