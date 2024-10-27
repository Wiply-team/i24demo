import { compose, pipe } from "ramda";
import {
  componentDidMount,
  componentWillUnmount,
} from "../../../components/Lifecycles";
import {
  fetchTopArticles,
  cleanTopArticles,
} from "../../../store/modules/homepage";
import View from "./TopArticles";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  articles: state.homepage.topArticles,
  isFetching: state.homepage.isFetchingTopArticles,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  fetchTopArticles: compose(dispatch, fetchTopArticles),
  cleanTopArticles: compose(dispatch, cleanTopArticles),
});

// didMount :: Props -> Action FETCH_TOP_ARTICLES
const didMount = ({ fetchTopArticles }) => fetchTopArticles();

// willUnmount :: Props -> Action CLEAN_TOP_ARTICLES
const willUnmount = ({ cleanTopArticles }) => cleanTopArticles();

// lifecycles :: React.Component -> React.Component
const lifecycles = pipe(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(View);

// TopArticles :: Props -> React.Component
const TopArticles = connect(mapStateToProps, mapDispatchToProps)(lifecycles);

export default TopArticles;
