import { componentDidMount } from "../../../../components/Lifecycles";
import { compose } from "ramda";
import { connect } from "react-redux";
import { injectImagePreloadHints } from "../../../../store/modules/header";

// View :: Props -> React.Component
const View = () => null;

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  injectImagePreloadHints: compose(dispatch, injectImagePreloadHints),
});

// didMount :: Props -> Action.INJECT_IMAGE_PRELOAD_HINTS
const didMount = ({ injectImagePreloadHints, preload = false, src, sources }) =>
  preload && injectImagePreloadHints(src, sources);

// lifecycle :: React.Component -> React.Component
const lifecycles = compose(componentDidMount(didMount))(View);

// PicturePreloader :: Props -> React.Component
const PicturePreloader = connect(null, mapDispatchToProps)(lifecycles);

export default PicturePreloader;
