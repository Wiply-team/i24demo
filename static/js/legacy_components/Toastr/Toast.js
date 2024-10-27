import { F, o, pipe } from "ramda";
import {
  componentDidMount,
  shouldComponentUpdate,
} from "../../components/Lifecycles";
import { addToast } from "../../store/modules/toastr";
import { connect } from "react-redux";

// View :: () -> _
const View = () => null;

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  nbToasts: state.toastr.toasts.length,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  add: o(dispatch, addToast),
});

// didMount :: Props -> Action
const didMount = ({ add, duration, level, message, nbToasts }) =>
  add({
    id: Date.now() + nbToasts,
    duration: duration || 5000,
    level: level || "warning",
    message,
  });

// lifecycles :: React.Component -> React.Component
const lifecycles = pipe(
  componentDidMount(didMount),
  shouldComponentUpdate(F)
)(View);

// Toast :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
