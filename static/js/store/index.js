import { applyMiddleware, createStore as reduxCreateStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { loaded as loadedLazyComponent } from "./modules/lazyComponents";
import createDependencies from "./dependencies";
import { map } from "ramda";

// createStore :: (Object, Window) -> Store
const createStore = async (preloadedState, window) => {
  const dependencies = createDependencies(window);

  if (!preloadedState) {
    preloadedState = dependencies.reducerRegistry.reduce();
  }

  // Preload expected lazy reducers
  await Promise.all(
    map(
      async (reducer) => await dependencies.reducerRegistry.add(reducer),
      preloadedState.lazyResources.reducers
    )
  );

  // Create the epic middleware
  const epicMiddleware = createEpicMiddleware({ dependencies });

  // Create the store
  const store = reduxCreateStore(
    dependencies.reducerRegistry.reduce,
    preloadedState,
    applyMiddleware(epicMiddleware)
  );

  // Preload expected lazy components (discarding already loaded components in the state)
  await Promise.all(
    map(
      async (componentName) =>
        store.dispatch(
          loadedLazyComponent(
            componentName,
            await dependencies.lazyComponentRegistry.add(componentName)
          )
        ),
      Object.keys(preloadedState.lazyComponents.loadedComponents)
    )
  );

  // Start the epic middleware
  epicMiddleware.run(dependencies.epicRegistry.getRootEpic());

  // Preload expected lazy epics (needs to be run after the store creation)
  await Promise.all(
    map(
      async (epic) => await dependencies.epicRegistry.add(epic),
      preloadedState.lazyResources.epics
    )
  );

  return store;
};

export default createStore;
