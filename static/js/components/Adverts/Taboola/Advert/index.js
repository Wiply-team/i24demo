import Loader from "./Loader";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  shouldLoad: state.taboola.scriptImported && state.taboola.pageNavigations > 0,
});

// Advert :: Props -> React.Component
const Advert = connect(mapStateToProps)(Loader);

export default Advert;
