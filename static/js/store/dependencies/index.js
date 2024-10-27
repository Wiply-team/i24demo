import { path } from "ramda";
import createEpicRegistry from "../../effects";
import createFetchApi from "./fetchApiFactory";
import createIntersectionObserversRegistry from "./observersRegistry/observersRegistryFactory";
import createLazyComponentRegistry from "./lazyComponentRegistryFactory";
import createLogger from "./loggerFactory";
import createReducerRegistry from "../modules";
import createRoutesPatternRegistry from "./routePatternsRegistryFactory";
import translate from "../../utilities/translate";

// createDependencies :: Window -> Dependencies
const createDependencies = (window) => {
  const logger = createLogger(window.Sentry, window.console);

  return {
    adapexAdsWrapper: () => window["aaw"],
    dataLayer: () => window.dataLayer,
    document: window.document,
    epicRegistry: createEpicRegistry(),
    fetchApi: createFetchApi(window.fetch, process.env.REACT_APP_API_BASE_URL),
    getBrightcovePlayerSdk: (playerId) =>
      path(["bc", playerId, "videojs"], window),
    getBrightcoveRootSdk: () => window.bc,
    getBrightcoveSdk: (playerId) => path(["bc", playerId], window),
    getFacebookSDK: () => window.FB,
    getOneTrust: () => window.Optanon,
    getTaboolaTrc: () => window.TRC,
    getTcfApi: () => window.__tcfapi,
    gtag: () => window.gtag,
    // We use a proxy to dispatch pushState and replaceState events as,
    // by default, the browser does not dispatch them when using those
    // functions. Those events are used by the hooks/useHistoryChange hook.
    history: window.Proxy
      ? new window.Proxy(window.history, {
          get(target, prop, receiver) {
            const value = target[prop];

            if (value instanceof Function) {
              return function (...args) {
                switch (prop) {
                  case "pushState":
                  case "replaceState": {
                    value.apply(this === receiver ? target : this, args);

                    const event = new Event(prop);
                    event.arguments = args;
                    window.dispatchEvent(event);

                    return;
                  }
                  default:
                    return value.apply(this === receiver ? target : this, args);
                }
              };
            }

            return value;
          },
        })
      : window.history,
    intersectionObserversRegistry: createIntersectionObserversRegistry(window),
    lazyComponentRegistry: createLazyComponentRegistry(),
    location: window.location,
    logger,
    navigator: window.navigator,
    reducerRegistry: createReducerRegistry(logger),
    routesPatternRegistry: createRoutesPatternRegistry(),
    taboola: () => window._taboola,
    translate,
    x: () => window.twttr,
    window,
  };
};

export default createDependencies;
