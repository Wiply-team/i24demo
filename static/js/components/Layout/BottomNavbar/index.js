import { includes } from "ramda";
import View from "./BottomNavbar";
import { connect } from "react-redux";
import { closeStickyAd } from "../../../store/modules/adapex";
import compose from "ramda/src/compose";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  isHomePage: state.router.activeRoute.name === "homepage",
  isNewsfeedPage: includes(state.router.activeRoute.name, [
    "newsFeedFr",
    "newsFeedAr",
    "newsFeedEn",
    "newsFeedHe",
  ]),
  isLiveRadioPage: includes(state.router.activeRoute.name, [
    "LiveRadioAr",
    "LiveRadioFr",
    "LiveRadioEn",
    "LiveRadioHe",
  ]),
  isShowsPage: includes(state.router.activeRoute.name, [
    "showsAr",
    "showsFr",
    "showsEn",
    "showsHe",
  ]),
  isArticlePage: includes(state.router.activeRoute.name, [
    "articleAr",
    "articleFr",
    "articleEn",
    "articleHe",
  ]),
  isAdvertOpen: state.adapex.stickyAdShown,
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  closeAdvert: compose(dispatch, closeStickyAd),
});

// BottomNavbar :: Props -> React.Component
const BottomNavbar = connect(mapStateToProps, mapDispatchToProps)(View);

export default BottomNavbar;
