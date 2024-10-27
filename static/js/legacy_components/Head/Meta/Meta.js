import { addMeta, removeMeta } from "../../../store/modules/metas";
import {
  always,
  complement,
  compose,
  either,
  equals,
  flip,
  ifElse,
  pipe,
  prop,
  tap,
  uncurryN,
} from "ramda";
import {
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../../components/Lifecycles";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  doAddMeta: compose(dispatch, addMeta),
  doRemoveMeta: compose(dispatch, removeMeta),
});

const onMount = ({ name, content, doAddMeta }) => doAddMeta(name, content);

const onUnMount = ({ name, content, doRemoveMeta }) =>
  doRemoveMeta(name, content);

const isPropsTitleEquals = (title) => compose(equals(title), prop("title"));
const isNotPropsTitleEquals = compose(complement, isPropsTitleEquals);

const isPropsValueEquals = (content) =>
  compose(equals(content), prop("content"));
const isNotPropsValueEquals = compose(complement, isPropsValueEquals);

const hasPropsChange = either(isNotPropsValueEquals, isNotPropsTitleEquals);

const onUpdate = ({ name, content }) =>
  ifElse(
    hasPropsChange,
    compose(
      onMount,
      tap(({ doRemoveMeta }) =>
        onUnMount({
          name,
          content,
          doRemoveMeta,
        })
      )
    ),
    always(null)
  );

const View = () => null;

export default connect(
  always({}),
  mapDispatchToProps
)(
  pipe(
    componentDidUpdate(flip(uncurryN(2, onUpdate))),
    componentDidMount(onMount),
    componentWillUnmount(onUnMount)
  )(View)
);
