import { connect } from "react-redux";
import View from "./ResetPasswordForm";
import compose from "ramda/src/compose";
import { clear, requestPasswordReset } from "../../../../store/modules/session";
import { componentWillUnmount } from "../../../Lifecycles";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  isSubmitting: state.session.isSubmitting,
  isSuccess: state.session.isSuccessfullySubmitted,
  error: state.session.error,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  requestPasswordReset: compose(dispatch, requestPasswordReset),
  clear: compose(dispatch, clear),
});

// willUnmount :: Props -> Action CLEAR
const willUnmount = ({ clear }) => clear();

// lifecycles :: React.Component -> React.Component
const lifecycles = componentWillUnmount(willUnmount)(View);

// ResetPasswordForm :: Props -> React.Component
const ResetPasswordForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(lifecycles);

export default ResetPasswordForm;
