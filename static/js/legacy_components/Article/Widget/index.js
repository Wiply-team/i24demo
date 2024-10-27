import Widget from "./Widget";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  nonIABVendorsAuthorized: state.consentManagement.nonIABVendorsAuthorized,
  locale: state.router.locale,
});

// Widget :: Props -> React.Component
export default connect(mapStateToProps)(Widget);
