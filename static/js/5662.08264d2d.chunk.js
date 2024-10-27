"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [5662],
  {
    45662: (e, t, i) => {
      i.r(t),
        i.d(t, {
          CLEAN_TOP_ARTICLES: () => l,
          FETCH_TOP_ARTICLES: () => T,
          INITIAL_STATE: () => c,
          RECEIVED_TOP_ARTICLES: () => A,
          cleanTopArticles: () => _,
          default: () => o,
          fetchTopArticles: () => p,
          receivedTopArticles: () => E,
        });
      var r = i(48500),
        s = i(42435);
      const c = {
          topArticles: [],
          isFetchingTopArticles: !0,
          topArticlesLimit: 6,
        },
        T = "homepage/FETCH_TOP_ARTICLES",
        A = "homepage/RECEIVED_TOP_ARTICLES",
        l = "homepage/CLEAN_TOP_ARTICLES",
        p = (0, r.A)({ type: T }),
        E = (e) => ({ type: A, articles: e }),
        _ = (0, r.A)({ type: l }),
        o = (0, s.vy)(c, {
          [T]: (e) => ({ ...e, isFetchingTopArticles: !0 }),
          [A]: (e, t) => {
            let { articles: i } = t;
            return { ...e, topArticles: i, isFetchingTopArticles: !1 };
          },
          [l]: (e, t) => {
            let { articles: i } = t;
            return { ...e, topArticles: [] };
          },
        });
    },
  },
]);
//# sourceMappingURL=5662.08264d2d.chunk.js.map
