"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [9201, 5662],
  {
    99201: (e, t, r) => {
      r.r(t), r.d(t, { default: () => n, fetchTopArticlesEpic: () => a });
      var c = r(45662),
        i = r(36140),
        l = r(43472),
        o = r(86490),
        s = r(42435),
        p = r(82635),
        T = r(25722),
        A = r(51198),
        E = r(43879);
      const a = (e, t, r) => {
          let { fetchApi: l, logger: a } = r;
          return e.pipe(
            (0, i.g)(c.FETCH_TOP_ARTICLES),
            (0, T.E)(t),
            (0, A.Z)((e) => {
              let [t, r] = e;
              return Promise.all([
                l(
                  "/v2/"
                    .concat(r.router.locale, "/contents/top?limit=")
                    .concat(r.homepage.topArticlesLimit, "&sort=position")
                ),
                r.router.locale,
              ]);
            }),
            (0, E.T)((e) => {
              let [t, r] = e;
              return (0, c.receivedTopArticles)(
                (0, p.A)((e) => (0, s.W0)(r, e), t.body)
              );
            }),
            (0, o.qn)("homepage :: fetchTopArticlesEpic", a)
          );
        },
        n = (0, l.E)(a);
    },
    45662: (e, t, r) => {
      r.r(t),
        r.d(t, {
          CLEAN_TOP_ARTICLES: () => p,
          FETCH_TOP_ARTICLES: () => o,
          INITIAL_STATE: () => l,
          RECEIVED_TOP_ARTICLES: () => s,
          cleanTopArticles: () => E,
          default: () => a,
          fetchTopArticles: () => T,
          receivedTopArticles: () => A,
        });
      var c = r(48500),
        i = r(42435);
      const l = {
          topArticles: [],
          isFetchingTopArticles: !0,
          topArticlesLimit: 6,
        },
        o = "homepage/FETCH_TOP_ARTICLES",
        s = "homepage/RECEIVED_TOP_ARTICLES",
        p = "homepage/CLEAN_TOP_ARTICLES",
        T = (0, c.A)({ type: o }),
        A = (e) => ({ type: s, articles: e }),
        E = (0, c.A)({ type: p }),
        a = (0, i.vy)(l, {
          [o]: (e) => ({ ...e, isFetchingTopArticles: !0 }),
          [s]: (e, t) => {
            let { articles: r } = t;
            return { ...e, topArticles: r, isFetchingTopArticles: !1 };
          },
          [p]: (e, t) => {
            let { articles: r } = t;
            return { ...e, topArticles: [] };
          },
        });
    },
  },
]);
//# sourceMappingURL=9201.88dd9043.chunk.js.map
