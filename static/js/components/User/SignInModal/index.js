import { connect } from "react-redux";
import View from "./SignInModal";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// SignInModal :: Props -> React.Component
const SignInModal = connect(mapStateToProps)(View);

export default SignInModal;
