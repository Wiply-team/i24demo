import { always, compose, pipe, tryCatch } from "ramda";
import { buildErrorLink } from "../../utilities/urls";
import { isArabic, isHebrew } from "../../utilities/locales";
import React from "react";
import { componentDidMount } from "../../components/Lifecycles";
import { connect } from "react-redux";
import { findRoute } from "../../store/modules/router";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  isRtl: isArabic(state.router.locale) || isHebrew(state.router.locale),
});

// mapDispatchToProps :: (Action * -> State) -> Prop
const mapDispatchToProps = (dispatch) => ({
  findRoute: compose(dispatch, findRoute),
});

// didMount :: Props -> State
const didMount = ({ findRoute, locale, location }) =>
  pipe(
    tryCatch(decodeURIComponent, always(buildErrorLink(500, locale))),
    findRoute
  )(location.pathname);

// View :: Props -> React.Component
const View = ({ children, isRtl }) => (
  <div
    data-is="router"
    dir={isRtl ? "rtl" : "ltr"}
    className={isRtl ? "rtl" : "ltr"}
  >
    {children}
  </div>
);

// component :: React.Component -> React.Component
const component = pipe(componentDidMount(didMount))(View);

// Router :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(component);
