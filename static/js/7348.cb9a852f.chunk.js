"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [7348],
  {
    57348: (e, E, n) => {
      n.r(E),
        n.d(E, {
          BREAKING_NEWS_RECEIVED: () => a,
          CLEAN: () => t,
          CLOSE: () => A,
          FETCH_BREAKING_NEWS: () => w,
          INITIAL_STATE: () => r,
          breakingNewsReceived: () => i,
          clean: () => C,
          close: () => k,
          default: () => p,
          fetchBreakingNews: () => _,
        });
      var s = n(48500),
        N = n(42435);
      const r = { opened: !0, news: null },
        w = "breakingNews/FETCH_BREAKING_NEWS",
        a = "breakingNews/BREAKING_NEWS_RECEIVED",
        A = "breakingNews/CLOSE",
        t = "breakingNews/CLEAN",
        _ = (0, s.A)({ type: w }),
        i = (e) => ({ type: a, news: e }),
        k = (0, s.A)({ type: A }),
        C = (0, s.A)({ type: t }),
        p = (0, N.vy)(r, {
          [a]: (e, E) => {
            let { news: n } = E;
            return { ...e, news: n };
          },
          [A]: (e) => ({ ...e, opened: !1 }),
          [t]: (0, s.A)(r),
        });
    },
  },
]);
//# sourceMappingURL=7348.cb9a852f.chunk.js.map
