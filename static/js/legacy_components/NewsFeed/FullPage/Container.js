import FullPage from "./FullPage";
import { clean } from "../../../store/modules/newsFeed";
import { componentWillUnmount } from "../../../components/Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  page: state.pagination.page,
  pages: state.newsFeed.newsPages,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  clean: compose(dispatch, clean),
});

// didMount :: Props -> Action.CLEAN
const willUnmount = ({ clean }) => clean();

const lifecycles = compose(componentWillUnmount(willUnmount))(FullPage);

export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
