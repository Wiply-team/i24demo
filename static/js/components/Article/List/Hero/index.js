import View from "./Hero";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// Hero :: Props -> React.Component
const Hero = connect(mapStateToProps)(View);

export default Hero;
