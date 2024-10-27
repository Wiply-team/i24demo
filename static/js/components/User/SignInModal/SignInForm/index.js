import { connect } from "react-redux";
import View from "./SignInForm";
import compose from "ramda/src/compose";
import { clear, signIn } from "../../../../store/modules/session";
import { componentWillUnmount } from "../../../Lifecycles";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  isSubmitting: state.session.isSubmitting,
  isSuccess: state.session.isSuccessfullySubmitted,
  error: state.session.error,
  unverifiedError: state.session.unverifiedError,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  signIn: compose(dispatch, signIn),
  clear: compose(dispatch, clear),
});

// willUnmount :: Props -> Action CLEAR
const willUnmount = ({ clear }) => clear();

// lifecycles :: React.Component -> React.Component
const lifecycles = componentWillUnmount(willUnmount)(View);

// SignInForm :: Props -> React.Component
const SignInForm = connect(mapStateToProps, mapDispatchToProps)(lifecycles);

export default SignInForm;
