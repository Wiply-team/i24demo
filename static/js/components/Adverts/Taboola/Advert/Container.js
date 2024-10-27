import { componentDidMount } from "../../../Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";
import { pushAd } from "../../../../store/modules/taboola";
import View from "./Advert";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  pushAd: compose(dispatch, pushAd),
});

// didMount :: Props -> Action
const didMount = ({ name, placement, pushAd, targetType = null }) =>
  pushAd({ name, placement, targetType });

// lifecycles :: React.Component -> React.Component
const lifecycles = componentDidMount(didMount, true)(View);

// Advert :: Props -> React.Component
const Advert = connect(mapStateToProps, mapDispatchToProps)(lifecycles);

export default Advert;
