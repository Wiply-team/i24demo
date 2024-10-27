import { clear, fetchSpecialPage } from "../../../store/modules/specialPage";
import {
  componentDidMount,
  componentWillUnmount,
} from "../../../components/Lifecycles";
import SpecialPageBanner from "./SpecialPageBanner";
import { compose } from "ramda";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  specialPage: state.specialPage.metadata,
  isFetching: state.specialPage.isFetching,
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  clear: compose(dispatch, clear),
  fetchSpecialPage: compose(dispatch, fetchSpecialPage),
});

// didMount :: Props -> Action
const didMount = ({ fetchSpecialPage }) => fetchSpecialPage();

// willUnmount -> Props -> Action
const willUnmount = ({ clear }) => clear();

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(SpecialPageBanner);

// Banner :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
