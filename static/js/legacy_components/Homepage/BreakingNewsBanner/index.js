import {
  clean,
  close,
  fetchBreakingNews,
} from "../../../store/modules/breakingNews";
import {
  componentDidMount,
  componentWillUnmount,
} from "../../../components/Lifecycles";
import BreakingNewsBanner from "./BreakingNewsBanner";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  news: state.breakingNews.news,
  opened: state.breakingNews.opened,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  fetchBreakingNews: compose(dispatch, fetchBreakingNews),
  clean: compose(dispatch, clean),
  close: compose(dispatch, close),
});

// didMount :: Props -> Action.FETCH_BREAKING_NEWS
const didMount = ({ fetchBreakingNews }) => fetchBreakingNews();

// willUnmount :: Props -> Action.CLEAN
const willUnmount = ({ clean }) => clean();

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(BreakingNewsBanner);

// BreakingNewsBanner :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
