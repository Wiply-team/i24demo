import { clean, fetchArticle } from "../../store/modules/article";
import {
  componentDidMount,
  componentWillUnmount,
} from "../../components/Lifecycles";
import Article from "./Container";
import Error from "../Error";
import LazyComponent from "../../components/LazyComponent";
import LoadingOverlay from "./LoadingOverlay";
import React from "react";
import { compose } from "ramda";
import { connect } from "react-redux";

const PageNotFound = LazyComponent("PageNotFound");

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  isLoading:
    state.article.isFetching ||
    state.router.activeRoute.params.article !== state.article.content.slug,
  error: state.article.error,
  routeSlug: state.router.activeRoute.params.article,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  fetchArticle: compose(dispatch, fetchArticle),
  clean: compose(dispatch, clean),
});

// ErrorView:: Props -> React.Component
const ErrorView = ({ status = 500 }) =>
  status === 404 ? <PageNotFound /> : <Error code={status} />;

// Loader :: Props -> React.Component
const View = ({ error, isLoading }) =>
  error ? (
    <ErrorView status={error.status} />
  ) : isLoading ? (
    <LoadingOverlay />
  ) : (
    <Article />
  );

// didMount :: Props -> Action CLEAN_ARTICLE
const didMount = ({ fetchArticle, routeSlug }) => fetchArticle(routeSlug);

// willUnmount :: Props -> Action CLEAN_ARTICLE
const willUnmount = ({ clean }) => clean();

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount)
)(View);

// Loader :: Props -> React.Component
const Loader = connect(mapStateToProps, mapDispatchToProps)(lifecycles);

export default Loader;
