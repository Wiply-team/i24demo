import View from "./MainMenu";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  locale: state.router.locale,
});

// MainMenu :: Props -> React.Component
const MainMenu = connect(mapStateToProps)(View);

export default MainMenu;
