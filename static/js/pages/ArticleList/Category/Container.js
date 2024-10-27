import { compose } from "ramda";
import { clean, fetch } from "../../../store/modules/category";
import {
  componentDidMount,
  componentWillUnmount,
} from "../../../components/Lifecycles";
import Category from "./Category";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  isFetching: state.category.isFetching,
  category: state.category.category,
  lastRevision: state.category.lastRevision,
  redirected: state.category.redirected,
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  fetch: compose(dispatch, fetch),
  clean: compose(dispatch, clean),
});

// didMount :: Props -> Action.FETCH
const didMount = ({ fetch }) => fetch();

// willUnmount :: Props -> Action.CLEAN
const willUnmount = ({ clean }) => clean();

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(Category);

export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
