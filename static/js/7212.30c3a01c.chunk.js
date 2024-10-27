"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [7212],
  {
    37212: (e, t, E) => {
      E.r(t),
        E.d(t, {
          CLEAN: () => n,
          FETCH_ARTICLE_PAGE: () => c,
          INITIAL_STATE: () => a,
          RECEIVED_ARTICLE_PAGE: () => g,
          REFRESH_ARTICLE_PAGE: () => p,
          REMOVE_ARTICLE_PAGE: () => l,
          clean: () => T,
          default: () => I,
          fetchArticlePage: () => _,
          receivedArticlePage: () => C,
          refreshArticlePage: () => R,
          removeArticlePage: () => o,
        });
      var r = E(48500),
        A = E(4258),
        s = E(94233),
        i = E(42435);
      const a = { isFetching: !0, pages: {} },
        c = "topArticles/FETCH_ARTICLE_PAGE",
        p = "topArticles/REFRESH_ARTICLE_PAGE",
        l = "topArticles/REMOVE_ARTICLE_PAGE",
        g = "topArticles/RECEIVED_ARTICLE_PAGE",
        n = "topArticles/CLEAN",
        _ = function (e, t) {
          return {
            type: c,
            page: e,
            size: t,
            autoRefresh:
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          };
        },
        R = (e, t) => ({ type: p, page: e, size: t }),
        o = (e) => ({ type: l, page: e }),
        C = function (e, t, E, r) {
          return {
            type: g,
            page: e,
            totalPages: t,
            scrollHeight: E,
            scrollTop: r,
            articles:
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : [],
          };
        },
        T = (0, r.A)({ type: n }),
        I = (0, i.vy)(a, {
          [c]: (e) => ({ ...e, isFetching: !0 }),
          [g]: (e, t) => {
            let { page: E, articles: r } = t;
            return { ...e, pages: (0, A.A)(E, r, e.pages), isFetching: !1 };
          },
          [l]: (e, t) => {
            let { page: E } = t;
            return { ...e, pages: (0, s.A)(E, e.pages) };
          },
          [n]: (0, r.A)(a),
        });
    },
  },
]);
//# sourceMappingURL=7212.30c3a01c.chunk.js.map
