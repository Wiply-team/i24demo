import "./styles/global.module.css";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { hydrationCompleted, hydrationStarted } from "./store/modules/app";
import App from "./legacy_components/App";
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import createStore from "./store";

const main = async (window) => {
  // Scroll position restoration is entirely managed by our app.
  // See src/effects/router::restoreScrollPositionEpic.
  window.history.scrollRestoration = "manual";

  const preloadedState = window.__PRELOADED_STATE__;
  const store = await createStore(preloadedState, window);
  const container = window.document.getElementById("root");

  if (preloadedState) {
    // If we have a preloaded state it means that the page we are rendering has
    // been already server side rendered and we just need to hydrate it.
    store.dispatch(hydrationStarted());

    hydrateRoot(
      container,
      <App
        store={store}
        location={window.location}
        onMount={() => store.dispatch(hydrationCompleted())}
      />
    );
  } else {
    createRoot(container).render(
      <App store={store} location={window.location} />
    );

    window.__ssr__ = {
      postRender: async () => {
        const serialize = await import("serialize-javascript");
        const preloadedState = serialize.default(store.getState());

        const script = window.document.createElement("script");
        script.text = `window.__PRELOADED_STATE__ = ${preloadedState}`;

        window.document.body.prepend(script);
      },
    };
  }

  delete window.__PRELOADED_STATE__;

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://github.com/facebook/create-react-app/issues/2374
  serviceWorker.register();
};

main(window);
