import { componentDidMount } from "../../components/Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";
import { breadcrumbLoaded } from "../../store/modules/header";

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  breadcrumbLoaded: compose(dispatch, breadcrumbLoaded),
});

// View :: Props -> React.Component
const View = () => null;

// didMount :: Props -> Action
const didMount = ({ breadcrumbLoaded, crumbs }) => breadcrumbLoaded(crumbs);

// lifecycles :: React.Component -> React.Component
const lifecycles = componentDidMount(didMount)(View);

// BreadcrumbSchemaInjector :: Props -> React.Component
export default connect(null, mapDispatchToProps)(lifecycles);
