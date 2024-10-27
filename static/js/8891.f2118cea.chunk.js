"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [8891, 5596],
  {
    18891: (e, t, r) => {
      r.r(t),
        r.d(t, { default: () => k, fetchCategoryWithContentsEpic: () => T });
      var a = r(75596),
        c = r(36140),
        n = r(43472),
        o = r(1393),
        i = r(20045),
        s = r(61888),
        u = r(36169),
        g = r(33981),
        C = r(82635),
        d = r(25722),
        f = r(51198),
        l = r(43879),
        E = r(64631),
        A = r(85556),
        p = r(86490),
        h = r(42435);
      const T = (e, t, r) => {
          let { fetchApi: n, logger: A } = r;
          return e.pipe(
            (0, c.g)(a.FETCH),
            (0, d.E)(t),
            (0, f.Z)((e) => {
              let [t, r] = e;
              return n(
                (0, o.A)("", [
                  "/v2/".concat(r.router.locale, "/categories/featured"),
                  "?contentStickToCategory=1",
                  "&contentLimit=7",
                ])
              );
            }),
            (0, l.T)((0, i.A)((0, s.A)("body"))),
            (0, E.p)((0, u.A)(g.A)),
            (0, d.E)(t),
            (0, l.T)((e) => {
              let [t, r] = e;
              return (0, C.A)((e) => y(e, r.router.locale), t);
            }),
            (0, l.T)(a.received),
            (0, p.qn)("featuredCategories :: fetchCategoryWithContentsEpic", A)
          );
        },
        y = (e, t) => ({
          id: e.id,
          name: e.name,
          link: (0, o.A)("", [
            "/".concat(t),
            "/".concat(A.ZU[t]),
            "".concat(e.parent ? "/" + e.parent.slug : ""),
            "/".concat(e.slug),
          ]),
          contents: (0, C.A)((e) => (0, h.W0)(t, e), e.contents),
        }),
        k = (0, n.E)(T);
    },
    75596: (e, t, r) => {
      r.r(t),
        r.d(t, {
          CLEAN: () => s,
          FETCH: () => o,
          INITIAL_STATE: () => n,
          RECEIVED: () => i,
          cleanFeaturedCategories: () => C,
          default: () => d,
          fetchFeaturedCategories: () => u,
          received: () => g,
        });
      var a = r(48500),
        c = r(42435);
      const n = { fetching: !1, categories: [] },
        o = "featuredCategories/FETCH",
        i = "featuredCategories/RECEIVED",
        s = "featuredCategories/CLEAN",
        u = (0, a.A)({ type: o }),
        g = (e) => ({ type: i, featuredCategories: e }),
        C = (0, a.A)({ type: s }),
        d = (0, c.vy)(n, {
          [o]: (e) => ({ ...e, fetching: !0 }),
          [i]: (e, t) => {
            let { featuredCategories: r } = t;
            return { ...e, fetching: !1, categories: r };
          },
          [s]: (0, a.A)(n),
        });
    },
  },
]);
//# sourceMappingURL=8891.f2118cea.chunk.js.map
