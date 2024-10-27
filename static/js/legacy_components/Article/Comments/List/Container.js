import { clean, fetchComments } from "../../../../store/modules/comments";
import {
  componentDidMount,
  componentWillUnmount,
} from "../../../../components/Lifecycles";
import { compose } from "ramda";
import View from "./List";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  comments: state.comments.list,
  total: state.comments.total,
  loading: state.comments.loading,
  locale: state.router.locale,
  error: state.comments.error,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  fetchComments: compose(dispatch, fetchComments),
  clean: compose(dispatch, clean),
});

// didMount :: Props -> Action
const didMount = ({ fetchComments }) => fetchComments();

// willUnmount :: Props -> Action
const willUnmount = ({ clean }) => clean();

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(
  componentDidMount(didMount, true),
  componentWillUnmount(willUnmount)
)(View);

// List :: Props -> React.Component
const List = connect(mapStateToProps, mapDispatchToProps)(lifecycles);

export default List;
