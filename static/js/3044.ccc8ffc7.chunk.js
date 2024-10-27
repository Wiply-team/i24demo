"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [3044],
  {
    13044: (e, n, r) => {
      r.r(n),
        r.d(n, {
          BANNER_RECEIVED: () => p,
          CLEAN: () => t,
          CLOSE: () => b,
          FETCH_LATEST_BANNER: () => N,
          INITIAL_STATE: () => A,
          bannerReceived: () => _,
          clean: () => s,
          close: () => C,
          default: () => c,
          fetchLatestBanner: () => T,
        });
      var E = r(48500),
        a = r(42435);
      const A = { opened: !1, banner: null },
        t = "banner/CLEAN",
        b = "banner/CLOSE",
        N = "banner/FETCH_LATEST_BANNER",
        p = "banner/BANNER_RECEIVED",
        s = (0, E.A)({ type: t }),
        C = (0, E.A)({ type: b }),
        T = (0, E.A)({ type: N }),
        _ = (e) => ({ type: p, banner: e }),
        c = (0, a.vy)(A, {
          [t]: (0, E.A)(A),
          [b]: (e) => ({ ...e, opened: !1 }),
          [p]: (e, n) => {
            let { banner: r } = n;
            return { ...e, opened: !0, banner: r };
          },
        });
    },
  },
]);
//# sourceMappingURL=3044.ccc8ffc7.chunk.js.map
