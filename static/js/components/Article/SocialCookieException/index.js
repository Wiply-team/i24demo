import View from "./SocialCookieException";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// SocialCookieException :: Props -> React.Component
const SocialCookieException = connect(mapStateToProps)(View);

export default SocialCookieException;
