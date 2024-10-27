import { compose } from "ramda";
import { connect } from "react-redux";
import { pushPageNavigation } from "../../../../store/modules/taboola";
import View from "./Provider";

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  pushPageNavigation: compose(dispatch, pushPageNavigation),
});

// Provider :: Props -> React.Component
const Provider = connect(null, mapDispatchToProps)(View);

export default Provider;
