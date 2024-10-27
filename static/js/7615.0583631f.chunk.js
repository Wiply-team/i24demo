"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [7615, 3044],
  {
    17615: (e, n, r) => {
      r.r(n), r.d(n, { default: () => u, fetchLatestBannerEpic: () => d });
      var a = r(13044),
        t = r(36140),
        E = r(43472),
        A = r(61888),
        c = r(36169),
        p = r(25854),
        b = r(25722),
        l = r(51198),
        s = r(43879),
        T = r(64631),
        N = r(86490);
      const d = (e, n, r) => {
          let { fetchApi: E, logger: d } = r;
          return e.pipe(
            (0, t.g)(a.FETCH_LATEST_BANNER),
            (0, b.E)(n),
            (0, l.Z)((e) => {
              let [n, r] = e;
              return E("/v2/".concat(r.router.locale, "/banners/current"));
            }),
            (0, s.T)((0, A.A)("body")),
            (0, T.p)((0, c.A)(p.A)),
            (0, s.T)(a.bannerReceived),
            (0, N.qn)("banner :: fetchLatestBannerEpic", d)
          );
        },
        u = (0, E.E)(d);
    },
    13044: (e, n, r) => {
      r.r(n),
        r.d(n, {
          BANNER_RECEIVED: () => b,
          CLEAN: () => A,
          CLOSE: () => c,
          FETCH_LATEST_BANNER: () => p,
          INITIAL_STATE: () => E,
          bannerReceived: () => N,
          clean: () => l,
          close: () => s,
          default: () => d,
          fetchLatestBanner: () => T,
        });
      var a = r(48500),
        t = r(42435);
      const E = { opened: !1, banner: null },
        A = "banner/CLEAN",
        c = "banner/CLOSE",
        p = "banner/FETCH_LATEST_BANNER",
        b = "banner/BANNER_RECEIVED",
        l = (0, a.A)({ type: A }),
        s = (0, a.A)({ type: c }),
        T = (0, a.A)({ type: p }),
        N = (e) => ({ type: b, banner: e }),
        d = (0, t.vy)(E, {
          [A]: (0, a.A)(E),
          [c]: (e) => ({ ...e, opened: !1 }),
          [b]: (e, n) => {
            let { banner: r } = n;
            return { ...e, opened: !0, banner: r };
          },
        });
    },
  },
]);
//# sourceMappingURL=7615.0583631f.chunk.js.map
