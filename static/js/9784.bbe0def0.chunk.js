"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [9784],
  {
    39784: (e, a, t) => {
      t.r(a),
        t.d(a, {
          ARTICLES_LOADED: () => E,
          CLEAR: () => L,
          ERROR: () => g,
          FETCH_SPECIAL_PAGE: () => c,
          INITIAL_STATE: () => s,
          LOAD_ARTICLES: () => n,
          LOAD_MORE: () => p,
          SPECIAL_PAGE_RECEIVED: () => A,
          articlesLoaded: () => _,
          clear: () => u,
          default: () => I,
          error: () => h,
          fetchSpecialPage: () => P,
          loadArticles: () => R,
          loadMore: () => C,
          specialPageReceived: () => o,
        });
      var i = t(83317),
        l = t(14321),
        r = t(42435);
      const s = {
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
        c = "specialPage/FETCH_SPECIAL_PAGE",
        A = "specialPage/SPECIAL_PAGE_RECEIVED",
        n = "specialPage/LOAD_ARTICLES",
        E = "specialPage/ARTICLES_LOADED",
        g = "specialPage/ERROR",
        p = "specialPage/LOAD_MORE",
        L = "specialPage/CLEAR",
        P = () => ({ type: c }),
        o = (e) => ({ type: A, specialPage: e }),
        R = () => ({ type: n }),
        _ = (e, a) => ({ type: E, articles: e || [], total: Number(a) || 0 }),
        h = () => ({ type: g }),
        C = () => ({ type: p }),
        u = () => ({ type: L }),
        I = (0, r.vy)(s, {
          [c]: (e) => ({ ...e, isFetching: !0 }),
          [A]: (e, a) => {
            let { specialPage: t } = a;
            return { ...e, isFetching: !1, metadata: { ...t } };
          },
          [n]: (e) => ({ ...e, isFetchingArticles: !0 }),
          [E]: (e, a) => {
            let { articles: t, total: r } = a;
            return {
              ...e,
              isFetchingArticles: !1,
              error: !1,
              articles: (0, i.A)(e.articles, t),
              canLoadMore: r > (0, l.A)((0, i.A)(e.articles, t)),
            };
          },
          [g]: (e) => ({
            ...e,
            isFetching: !1,
            isFetchingArticles: !1,
            error: !0,
          }),
          [p]: (e) => ({
            ...e,
            isFetchingArticles: !0,
            error: !1,
            page: e.page + 1,
          }),
          [L]: () => s,
        });
    },
  },
]);
//# sourceMappingURL=9784.bbe0def0.chunk.js.map
