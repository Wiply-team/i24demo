import { compose, pipe } from "ramda";
import Aside from "./Aside";
import { connect } from "react-redux";
import {
  componentDidMount,
  componentWillUnmount,
} from "../../../components/Lifecycles";
import { clean, initialize } from "../../../store/modules/asideNewsFeed";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  isFetching: state.asideNewsFeed.isFetching,
  newsFeed: state.asideNewsFeed.newsFeed,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  initialize: compose(dispatch, initialize),
  clean: compose(dispatch, clean),
});

// didMount :: Props -> Action.INITIALIZE
const didMount = ({ initialize }) => initialize();

// willUnmount :: Props -> Action.CLEAN
const willUnmount = ({ clean }) => clean();

// lifecycles :: React.Component -> React.Component
const lifecycles = pipe(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(Aside);

// Aside :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
