import View from "./SocialNetworkList";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// SocialNetworkList :: Props -> React.Component
const SocialNetworkList = connect(mapStateToProps)(View);

export default SocialNetworkList;
