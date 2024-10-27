import { clean, initialize } from "../../../../store/modules/headlines";
import { componentDidMount, componentWillUnmount } from "../../../Lifecycles";
import Headlines from "./Headlines";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  isFetching: state.headlines.isFetching,
  articles: state.headlines.contents,
  error: state.headlines.error,
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  initialize: compose(dispatch, initialize),
  clean: compose(dispatch, clean),
});

// didMount :: Props -> Action.FETCH_CONTENTS
const didMount = ({ initialize, id }) => initialize(id);

// willUnmount :: Props -> Action.CLEAN
const willUnmount = ({ clean }) => clean();

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(Headlines);

// Wrapper :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
