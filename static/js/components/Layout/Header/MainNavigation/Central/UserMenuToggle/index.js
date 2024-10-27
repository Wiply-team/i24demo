import { connect } from "react-redux";
import View from "./UserMenuToggle";
import { includes, isNil } from "ramda";
import {
  closeSignIn,
  openSignIn,
  signOut,
} from "../../../../../../store/modules/session";
import compose from "ramda/src/compose";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
  isSignInModalOpen: state.session.isSignInModalOpen,
  isSignedIn: !isNil(state.session.user),
  isProfileActive: state.router.activeRoute.name === "profile",
  isFavoritesActive: includes(state.router.activeRoute.name, [
    "favoritesHe",
    "favoritesAr",
    "favoritesEn",
    "favoritesFr",
  ]),
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  openSignIn: compose(dispatch, openSignIn),
  closeSignIn: compose(dispatch, closeSignIn),
  onSignOut: compose(dispatch, signOut),
});

// UserMenuToggle :: Props -> React.Component
const UserMenuToggle = connect(mapStateToProps, mapDispatchToProps)(View);

export default UserMenuToggle;
