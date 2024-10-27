import React from "react";
import Redirect from "../Router/Redirect";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

const View = ({ locale }) => <Redirect to={`/${locale}`} />;

const DefaultFallbackView = connect(mapStateToProps)(View);

export default DefaultFallbackView;
