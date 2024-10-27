import { always, compose, ifElse, pipe } from "ramda";
import {
  componentDidMount,
  componentDidUpdate,
} from "../../../components/Lifecycles";
import { changeTitle } from "../../../store/modules/metas";
import { connect } from "react-redux";

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  updateTitle: compose(dispatch, changeTitle),
});

// didMount :: Props -> Action UPDATE_TITLE
const didMount = ({ updateTitle, title }) => updateTitle(title);

// didUpdate :: Props -> Action UPDATE_TITLE|_
const didUpdate = ifElse(
  ({ title }, { prevTitle }) => title !== prevTitle,
  ({ title, updateTitle }) => updateTitle(title),
  always(null)
);

const view = () => null;

// lifecycles :: React.Component -> React.Component
const lifecycles = pipe(
  componentDidMount(didMount),
  componentDidUpdate(didUpdate)
)(view);

// Title :: Props -> React.Component
export default connect(null, mapDispatchToProps)(lifecycles);
