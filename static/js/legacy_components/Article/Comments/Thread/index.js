import { compose } from "ramda";
import View from "./Thread";
import { connect } from "react-redux";
import { fetchComments } from "./../../../../store/modules/comments";

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  fetchComments: compose(dispatch, fetchComments),
});

// Thread :: Props -> React.Component
const Thread = connect(null, mapDispatchToProps)(View);

export default Thread;
