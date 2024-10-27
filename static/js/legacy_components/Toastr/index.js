import Toastr from "./Toastr";
import { closeToast } from "../../store/modules/toastr";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  toasts: state.toastr.toasts,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  close: (id) => () => dispatch(closeToast(id)),
});

// Toastr :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(Toastr);
