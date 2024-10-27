import { clean, close, fetchLatestBanner } from "../../../store/modules/banner";
import {
  componentDidMount,
  componentWillUnmount,
} from "../../../components/Lifecycles";
import Banner from "./Banner";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  opened: state.banner.opened,
  banner: state.banner.banner,
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  close: compose(dispatch, close),
  clean: compose(dispatch, clean),
  fetchLatestBanner: compose(dispatch, fetchLatestBanner),
});

// didMount :: Props -> Action
const didMount = ({ fetchLatestBanner }) => fetchLatestBanner();

// willUnmount :: Props -> Action
const willUnmount = ({ clean }) => clean();

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(Banner);

// Banner :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
