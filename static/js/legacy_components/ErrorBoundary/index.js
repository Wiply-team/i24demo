import ErrorBoundary from "./ErrorBoundary";
import { catchError } from "./../../store/modules/errorBoundary";
import { componentDidCatch } from "../../components/Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  errors: state.errorBoundary.errors,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  catchError: compose(dispatch, catchError),
});

// didCatch :: (Props, Error) -> Action.CATCH_ERROR
const didCatch = ({ context, catchError }, error) => catchError(context, error);

// lifecycle :: React.Component -> React.Component
const lifecycles = compose(componentDidCatch(didCatch))(ErrorBoundary);

// ErrorBoundary :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
