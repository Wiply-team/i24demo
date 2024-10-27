// createRoutePatternsRegistry :: () -> RoutePatternsRegistry
const createRoutePatternsRegistry = () =>
  ((storage) => ({
    register: (route) => (storage[route.name] = route.pattern),
    unregister: (routeName) => delete storage[routeName],
    getPattern: (routeName) => storage[routeName],
  }))({});

export default createRoutePatternsRegistry;
