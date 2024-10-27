import { componentDidMount, componentWillUnmount } from "../Lifecycles";
import { clean, fetch } from "../../store/modules/articlesWidgets";
import ArticlesWidgets from "./ArticlesWidgets";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  widgets: state.articlesWidgets.widgets,
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
)(ArticlesWidgets);

// ArticlesWidgets :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
