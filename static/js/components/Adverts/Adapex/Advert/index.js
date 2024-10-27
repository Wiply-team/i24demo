import View from "./Loader";
import { connect } from "react-redux";

// mapStateToProps :: (Action * -> State) -> Props
const mapStateToProps = (state) => ({
  isSdkReady: state.adapex.adapexScriptImported,
});

// Advert :: Props -> React.Component
const Advert = connect(mapStateToProps)(View);

export default Advert;
