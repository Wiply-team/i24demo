import {
  __,
  allPass,
  complement,
  compose,
  equals,
  gt,
  head,
  isNil,
  keys,
  last,
  length,
  lte,
  pipe,
  prop,
  propEq,
  when,
} from "ramda";
import {
  clean,
  freezeScrollPosition,
  init,
} from "../../store/modules/pagination";
import {
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../components/Lifecycles";
import Pagination from "./Pagination";
import { connect } from "react-redux";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  isFetchingPrevPage: isFetchingPrevItems(
    state.pagination.page,
    state.pagination.pages,
    state.pagination.isFetching
  ),
  isFetchingNextPage: isFetchingNextItems(
    state.pagination.page,
    state.pagination.pages,
    state.pagination.isFetching
  ),
  isEmptyContent: equals(state.pagination.totalPages, 0),
  isFetching: state.pagination.isFetching,
  page: state.pagination.page,
  pages: state.pagination.pages,
  totalPages: state.pagination.totalPages,
  scrollHeight: state.pagination.scrollHeight,
  scrollTop: state.pagination.scrollTop,
  error: state.pagination.error,
  locale: state.router.locale,
});

// isFetchingPrevItems :: (Number, Object, Boolean) -> Boolean
export const isFetchingPrevItems = allPass([
  (page, pages, isFetching) => isFetching,
  (page, pages) => page <= compose(head, keys)(pages),
]);

// isFetchingNextItems :: (Number, Object, Boolean) -> Boolean
export const isFetchingNextItems = allPass([
  (page, pages, isFetching) => isFetching,
  (page, pages) => compose(gt(__, 1), length, keys)(pages),
  (page, pages) => page >= compose(last, keys)(pages),
]);

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  freezeScrollPosition: compose(dispatch, freezeScrollPosition),
  init: compose(dispatch, init),
  clean: compose(dispatch, clean),
});

// isLoadingPreviousPage = Object -> Boolean
const isLoadingPreviousPage = allPass([
  compose(gt(__, 1), length, keys, prop("pages")),
  ({ pages, page }) => pipe(keys, head, lte(page))(pages),
]);

// hasScrollPropertiesSet = Object -> Boolean
export const hasScrollPropertiesSet = allPass([
  compose(complement(isNil), prop("scrollTop")),
  compose(complement(isNil), prop("scrollHeight")),
]);

// shouldFreezePosition = Object -> Boolean
const shouldFreezePosition = allPass([
  hasScrollPropertiesSet,
  isLoadingPreviousPage,
  propEq(false, "isFetching"),
]);

// didUpdate :: Props -> Action.FREEZE_SCROLL_POSITION
const didUpdate = when(shouldFreezePosition, ({ freezeScrollPosition }) =>
  freezeScrollPosition()
);

// didMount :: Props -> Action.INIT
const didMount = ({ init }) => init();

// willUnmount :: Props -> Action.CLEAN
const willUnmount = ({ clean }) => clean();

const lifecycles = compose(
  componentWillUnmount(willUnmount),
  componentDidMount(didMount),
  componentDidUpdate(didUpdate)
)(Pagination);

export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
