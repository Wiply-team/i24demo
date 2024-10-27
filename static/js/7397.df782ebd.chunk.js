"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [7397, 9784],
  {
    67397: (e, a, t) => {
      t.r(a),
        t.d(a, {
          default: () => _,
          fetchSpecialPageEpic: () => h,
          loadArticlesEpic: () => R,
        });
      var l = t(39784),
        r = t(36140),
        c = t(43472),
        i = t(8761),
        s = t(82635),
        A = t(61888),
        p = t(1393),
        g = t(13884),
        n = t(65325),
        o = t(86490),
        E = t(42435),
        d = t(25722),
        u = t(51198),
        P = t(43879);
      const L = (0, i.A)((0, s.A)((0, A.A)("name")), (0, p.A)(",")),
        h = (e, a, t) => {
          let { fetchApi: c, logger: i } = t;
          return e.pipe(
            (0, r.g)(l.FETCH_SPECIAL_PAGE),
            (0, d.E)(a),
            (0, u.Z)((e) => {
              let [a, t] = e;
              return c("/v2/".concat(t.router.locale, "/special-page"));
            }),
            (0, P.T)((0, g.A)(l.specialPageReceived, (0, A.A)("body"))),
            (0, o.d$)("specialPage :: fetchSpecialPageEpic", l.error, i)
          );
        },
        R = (e, a, t) => {
          let { fetchApi: c, logger: g } = t;
          return e.pipe(
            (0, r.g)(l.LOAD_ARTICLES, l.LOAD_MORE),
            (0, d.E)(a),
            (0, u.Z)((e) => {
              let [a, { router: t, specialPage: l }] = e;
              return c(
                (0, p.A)("", [
                  "/v2/".concat(t.locale, "/contents/search"),
                  "?tags=".concat(L(l.metadata.tags)),
                  "&page=".concat(l.page),
                  "&limit=".concat(l.limit),
                  "&sort=-publishedAt",
                  "&countable=1",
                ])
              );
            }),
            (0, d.E)(a),
            (0, P.T)((e) => {
              let [a, t] = e;
              return (0, i.A)(
                (0, A.A)("body"),
                (0, n.A)([]),
                (0, s.A)((e) => (0, E.W0)(t.router.locale, e)),
                (e) => (0, l.articlesLoaded)(e, a.headers.get("Total-Result"))
              )(a);
            }),
            (0, o.d$)("specialPage :: loadArticlesEpic", l.error, g)
          );
        },
        _ = (0, c.E)(h, R);
    },
    39784: (e, a, t) => {
      t.r(a),
        t.d(a, {
          ARTICLES_LOADED: () => g,
          CLEAR: () => E,
          ERROR: () => n,
          FETCH_SPECIAL_PAGE: () => s,
          INITIAL_STATE: () => i,
          LOAD_ARTICLES: () => p,
          LOAD_MORE: () => o,
          SPECIAL_PAGE_RECEIVED: () => A,
          articlesLoaded: () => L,
          clear: () => _,
          default: () => C,
          error: () => h,
          fetchSpecialPage: () => d,
          loadArticles: () => P,
          loadMore: () => R,
          specialPageReceived: () => u,
        });
      var l = t(83317),
        r = t(14321),
        c = t(42435);
      const i = {
          articles: [],
          canLoadMore: !1,
          error: !1,
          isFetching: !0,
          isFetchingArticles: !0,
          limit: 20,
          page: 1,
          metadata: {
            type: "",
            title: "",
            slug: "",
            externalUrl: null,
            imageAlternateText: null,
            metaTitle: null,
            metaDescription: null,
            visible: !1,
            headerImage: { href: null },
            bannerImage: { href: null },
            tags: [],
          },
        },
        s = "specialPage/FETCH_SPECIAL_PAGE",
        A = "specialPage/SPECIAL_PAGE_RECEIVED",
        p = "specialPage/LOAD_ARTICLES",
        g = "specialPage/ARTICLES_LOADED",
        n = "specialPage/ERROR",
        o = "specialPage/LOAD_MORE",
        E = "specialPage/CLEAR",
        d = () => ({ type: s }),
        u = (e) => ({ type: A, specialPage: e }),
        P = () => ({ type: p }),
        L = (e, a) => ({ type: g, articles: e || [], total: Number(a) || 0 }),
        h = () => ({ type: n }),
        R = () => ({ type: o }),
        _ = () => ({ type: E }),
        C = (0, c.vy)(i, {
          [s]: (e) => ({ ...e, isFetching: !0 }),
          [A]: (e, a) => {
            let { specialPage: t } = a;
            return { ...e, isFetching: !1, metadata: { ...t } };
          },
          [p]: (e) => ({ ...e, isFetchingArticles: !0 }),
          [g]: (e, a) => {
            let { articles: t, total: c } = a;
            return {
              ...e,
              isFetchingArticles: !1,
              error: !1,
              articles: (0, l.A)(e.articles, t),
              canLoadMore: c > (0, r.A)((0, l.A)(e.articles, t)),
            };
          },
          [n]: (e) => ({
            ...e,
            isFetching: !1,
            isFetchingArticles: !1,
            error: !0,
          }),
          [o]: (e) => ({
            ...e,
            isFetchingArticles: !0,
            error: !1,
            page: e.page + 1,
          }),
          [E]: () => i,
        });
    },
  },
]);
//# sourceMappingURL=7397.df782ebd.chunk.js.map
