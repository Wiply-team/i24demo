import { connect } from "react-redux";
import View from "./MainMenuToggle";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// MainMenuToggle :: Props -> React.Component
const MainMenuToggle = connect(mapStateToProps)(View);

export default MainMenuToggle;
