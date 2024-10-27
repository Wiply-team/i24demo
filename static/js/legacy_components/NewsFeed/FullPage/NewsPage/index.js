import {
  componentDidMount,
  componentWillUnmount,
} from "../../../../components/Lifecycles";
import {
  fetchNewsPage,
  removeNewsPage,
} from "../../../../store/modules/newsFeed";
import NewsPage from "./NewsPage";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  fetchNewsPage: compose(dispatch, fetchNewsPage),
  removeNewsPage: compose(dispatch, removeNewsPage),
});

// didMount :: Props -> Action.FETCH_NEWS_PAGE
const didMount = ({ fetchNewsPage, page }) => fetchNewsPage(page);

// willUnmount :: Props -> Action.REMOVE_NEWS_PAGE
const willUnmount = ({ removeNewsPage, page }) => removeNewsPage(page);

const lifecycles = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(NewsPage);

export default connect(null, mapDispatchToProps)(lifecycles);
