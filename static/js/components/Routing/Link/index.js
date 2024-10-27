import { compose } from "ramda";
import { changeRoute } from "../../../store/modules/router";
import { connect } from "react-redux";
import View from "./Link";

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  changeRoute: compose(dispatch, changeRoute),
});

// Link :: React.Component -> React.Component
const Link = connect(null, mapDispatchToProps)(View);

export default Link;
