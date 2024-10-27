import View from "./WhatsappShareButton";
import { connect } from "react-redux";

// mapStateToProps ::  State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// WhatsappShareButton :: Props -> React.Component
const WhatsappShareButton = connect(mapStateToProps)(View);

export default WhatsappShareButton;
