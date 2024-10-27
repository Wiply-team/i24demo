import Breadcrumb from "./Breadcrumb";
import { connect } from "react-redux";

// mapStatetoProps :: State -> Props
const mapStatetoProps = (state) => ({
  locale: state.router.locale,
});

// BreadCrumb :: Props -> React.Component
export default connect(mapStatetoProps)(Breadcrumb);
