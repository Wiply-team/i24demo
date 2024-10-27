import Header from "./Header";
import { componentDidMount } from "../../../components/Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";
import { fetchCategories } from "./../../../store/modules/categories";

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  fetchCategories: compose(dispatch, fetchCategories),
});

// didMount :: Props -> Action
const didMount = ({ fetchCategories }) => fetchCategories();

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(componentDidMount(didMount))(Header);

// Header :: Props -> React.Component
export default connect(null, mapDispatchToProps)(lifecycles);
