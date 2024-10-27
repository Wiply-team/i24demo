import View from "./Advert";
import { componentDidMount } from "../../../Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";
import { processAdsOnPage } from "../../../../store/modules/adapex";

// mapStateToProps :: (Action * -> State) -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  processAdsOnPage: compose(dispatch, processAdsOnPage),
});

// didMount :: Props -> Action
const didMount = ({ processAdsOnPage }) => processAdsOnPage();

// lifecycles :: React.Component -> React.Component
const lifecycles = componentDidMount(didMount, true)(View);

// Advert :: Props -> React.Component
const Advert = connect(mapStateToProps, mapDispatchToProps)(lifecycles);

export default Advert;
