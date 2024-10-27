import {
  componentDidMount,
  componentWillUnmount,
} from "../../../../components/Lifecycles";
import { compose } from "ramda";
import View from "./ArticlePage";

// didMount :: Props -> Action
const didMount = ({ fetchPage, page, size }) => fetchPage(page, size);

// willUnmount :: Props -> Action
const willUnmount = ({ removePage, page, size }) => removePage(page, size);

// ArticlePage :: Props -> React.Component
const ArticlePage = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(View);

export default ArticlePage;
