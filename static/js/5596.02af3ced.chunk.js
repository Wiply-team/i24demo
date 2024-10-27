"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [5596],
  {
    75596: (e, t, r) => {
      r.r(t),
        r.d(t, {
          CLEAN: () => c,
          FETCH: () => C,
          INITIAL_STATE: () => i,
          RECEIVED: () => u,
          cleanFeaturedCategories: () => g,
          default: () => E,
          fetchFeaturedCategories: () => d,
          received: () => f,
        });
      var a = r(48500),
        s = r(42435);
      const i = { fetching: !1, categories: [] },
        C = "featuredCategories/FETCH",
        u = "featuredCategories/RECEIVED",
        c = "featuredCategories/CLEAN",
        d = (0, a.A)({ type: C }),
        f = (e) => ({ type: u, featuredCategories: e }),
        g = (0, a.A)({ type: c }),
        E = (0, s.vy)(i, {
          [C]: (e) => ({ ...e, fetching: !0 }),
          [u]: (e, t) => {
            let { featuredCategories: r } = t;
            return { ...e, fetching: !1, categories: r };
          },
          [c]: (0, a.A)(i),
        });
    },
  },
]);
//# sourceMappingURL=5596.02af3ced.chunk.js.map
