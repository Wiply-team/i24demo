"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [1225, 90, 7212],
  {
    11225: (e, t, r) => {
      r.r(t),
        r.d(t, {
          autoRefreshPageEpic: () => I,
          default: () => L,
          fetchArticlePageEpic: () => C,
          updatePaginationEpic: () => d,
        });
      var A = r(37212),
        a = r(36140),
        i = r(43472),
        l = r(1393),
        g = r(82635),
        n = r(86490),
        o = r(42435),
        p = r(64631),
        s = r(47727),
        E = r(99216),
        c = r(21220),
        u = r(56121),
        P = r(43879),
        _ = r(25722),
        T = r(51198),
        R = r(79070),
        h = r(70090);
      const I = (e, t, r) => {
          let { logger: i } = r;
          return e.pipe(
            (0, a.g)(A.FETCH_ARTICLE_PAGE),
            (0, p.p)((e) => {
              let { autoRefresh: t } = e;
              return t;
            }),
            (0, s.n)((t) => {
              let { page: r, size: i } = t;
              return (0, E.Y)(12e4).pipe(
                (0, c.Q)(
                  (0, u.h)(
                    e.pipe((0, a.g)(A.CLEAN)),
                    e.pipe(
                      (0, a.g)(A.REMOVE_ARTICLE_PAGE),
                      (0, p.p)((e) => {
                        let { page: t } = e;
                        return t === r;
                      })
                    )
                  )
                ),
                (0, P.T)(() => (0, A.refreshArticlePage)(r, i))
              );
            }),
            (0, n.qn)("topArticles :: autoRefreshPageEpic", i)
          );
        },
        C = (e, t, r) => {
          let { fetchApi: i, logger: p } = r;
          return e.pipe(
            (0, a.g)(A.FETCH_ARTICLE_PAGE, A.REFRESH_ARTICLE_PAGE),
            (0, _.E)(t),
            (0, T.Z)((e) => {
              let [{ page: t, size: r }, A] = e;
              return Promise.all([
                i(
                  (0, l.A)("", [
                    "/v2/".concat(A.router.locale, "/contents"),
                    "?home=1",
                    "&sort=-publishedAt",
                    "&inSlider=0",
                    "&page=".concat(t),
                    "&limit=".concat(r),
                    "&countable=1",
                  ])
                ),
                t,
                r,
                A.router.locale,
              ]);
            }),
            (0, P.T)((e) => {
              let [t, r, a, i] = e;
              return (0, A.receivedArticlePage)(
                r,
                (0, R.JU)(Number(t.headers.get("Total-Result") || 0), a),
                document.documentElement.scrollHeight,
                document.documentElement.scrollTop,
                (0, g.A)((e) => (0, o.W0)(i, e))(t.body || [])
              );
            }),
            (0, n.qn)("topArticles :: fetchArticlePageEpic", p)
          );
        },
        d = (e, t, r) => {
          let { logger: i } = r;
          return e.pipe(
            (0, a.g)(A.RECEIVED_ARTICLE_PAGE),
            (0, P.T)((e) => {
              let { page: t, totalPages: r, scrollHeight: A, scrollTop: a } = e;
              return (0, h.receivedPage)(t, r, A, a);
            }),
            (0, n.qn)("topArticles :: updatePaginationEpic", i)
          );
        },
        L = (0, i.E)(C, I, d);
    },
    70090: (e, t, r) => {
      r.r(t),
        r.d(t, {
          CLEAN: () => z,
          CLEAN_EXTRA_PAGES: () => O,
          ERROR: () => B,
          FETCH_NEXT_PAGE: () => b,
          FETCH_PAGE: () => y,
          FETCH_PREV_PAGE: () => H,
          FREEZE_SCROLL_POSITION: () => V,
          INIT: () => N,
          INITIAL_STATE: () => v,
          RECEIVED_PAGE: () => S,
          REDIRECT_TO_FIRST_PAGE: () => w,
          RESTORE_SCROLL_BEHAVIOR: () => m,
          UPDATE_PAGE_VISIBILITY: () => D,
          clean: () => Q,
          cleanExtraPages: () => Z,
          default: () => Ae,
          error: () => re,
          fetchNextPage: () => Y,
          fetchPage: () => M,
          fetchPrevPage: () => X,
          freezeScrollPosition: () => q,
          getPageNumbers: () => te,
          init: () => U,
          receivedPage: () => k,
          redirectToFirstPage: () => J,
          restoreScrollBehavior: () => j,
          updatePageVisibility: () => x,
        });
      var A = r(48500),
        a = r(20045),
        i = r(48098),
        l = r(52527),
        g = r(14321),
        n = r(94473),
        o = r(18587),
        p = r(8135),
        s = r(57416),
        E = r(14825),
        c = r(64749),
        u = r(75377),
        P = r(82635),
        _ = r(4258),
        T = r(82130),
        R = r(84003),
        h = r(58116),
        I = r(25854),
        C = r(61888),
        d = r(80982),
        L = r(33981),
        f = r(83645),
        F = r(90371),
        G = r(42435);
      const v = {
          pages: {},
          page: 1,
          isFetching: !0,
          totalPages: null,
          scrollHeight: null,
          scrollTop: null,
          error: !1,
        },
        N = "pagination/INIT",
        y = "pagination/FETCH_PAGE",
        H = "pagination/FETCH_PREV_PAGE",
        b = "pagination/FETCH_NEXT_PAGE",
        S = "pagination/RECEIVED_PAGE",
        O = "pagination/CLEAN_EXTRA_PAGES",
        V = "pagination/FREEZE_SCROLL_POSITION",
        m = "pagination/RESTORE_SCROLL_BEHAVIOR",
        D = "pagination/UPDATE_PAGE_VISIBILITY",
        w = "pagination/REDIRECT_TO_FIRST_PAGE",
        z = "pagination/CLEAN",
        B = "pagination/ERROR",
        U = (0, A.A)({ type: N }),
        k = function () {
          return {
            type: S,
            page:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            totalPages:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            scrollHeight:
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            scrollTop:
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
          };
        },
        M = function () {
          return {
            type: y,
            page:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
          };
        },
        X = (0, A.A)({ type: H }),
        Y = (0, A.A)({ type: b }),
        Z = (0, A.A)({ type: O }),
        q = (0, A.A)({ type: V }),
        j = (0, A.A)({ type: m }),
        x = (e, t) => ({ type: D, page: e, isVisible: t }),
        J = (0, A.A)({ type: w }),
        Q = (0, A.A)({ type: z }),
        W = (0, a.A)((0, i.A)(l.A, 2), g.A, n.A),
        $ = (0, p.A)(
          (e) => e.page <= (0, a.A)(o.A, te)(e.pages),
          (e) => ee(e.pages),
          (e) => K(e.pages)
        ),
        K = (e) => (0, s.A)([(0, a.A)(o.A, te)(e)], e),
        ee = (e) => (0, s.A)([(0, a.A)(E.A, te)(e)], e),
        te = (0, a.A)(
          (0, c.A)(u.A),
          (0, P.A)((e) => Number(e)),
          n.A
        ),
        re = (0, A.A)({ type: B }),
        Ae = (0, G.vy)(v, {
          [w]: (e) => ({ ...e, page: 1 }),
          [y]: (e, t) => {
            let { page: r } = t;
            return {
              ...e,
              isFetching: !0,
              page: Number(r),
              pages: { [r]: { isVisible: !1 } },
              error: !1,
            };
          },
          [H]: (e) => ({
            ...e,
            isFetching: !0,
            ...(e.page > 1
              ? {
                  page: (0, a.A)((0, u.A)(l.A, 1), o.A, te)(e.pages),
                  pages: (0, a.A)(
                    (0, _.A)(l.A, { isVisible: !1 }, e.pages),
                    (0, u.A)(l.A, 1),
                    o.A,
                    te
                  )(e.pages),
                }
              : {}),
            error: !1,
          }),
          [b]: (e) => ({
            ...e,
            isFetching: !0,
            ...(e.page < e.totalPages
              ? {
                  page: (0, a.A)((0, T.A)(1), E.A, te)(e.pages),
                  pages: (0, a.A)(
                    (0, _.A)(l.A, { isVisible: !1 }, e.pages),
                    (0, T.A)(1),
                    E.A,
                    te
                  )(e.pages),
                }
              : {}),
            error: !1,
          }),
          [S]: (e, t) => {
            let { totalPages: r, scrollHeight: A, scrollTop: i } = t;
            return {
              ...e,
              isFetching: !1,
              totalPages: r,
              scrollHeight: (0, R.A)([
                (0, a.A)(h.A, I.A, (0, C.A)("pages")),
                (e) => {
                  let { pages: t, page: r } = e;
                  return (0, a.A)((0, d.A)(r, l.A), o.A, te)(t);
                },
              ])(e)
                ? A
                : e.scrollHeight,
              scrollTop: (0, R.A)([
                (0, a.A)(h.A, L.A, (0, C.A)("pages")),
                (e) => {
                  let { pages: t, page: r } = e;
                  return (0, a.A)((0, d.A)(r, l.A), o.A, te)(t);
                },
              ])(e)
                ? i
                : e.scrollTop,
              error: !1,
            };
          },
          [O]: (e) => ({ ...e, pages: (0, f.A)(W, () => $(e))(e.pages) }),
          [m]: (e) => ({ ...e, scrollTop: null, scrollHeight: null }),
          [D]: (e, t) => {
            let { page: r, isVisible: A } = t;
            return { ...e, pages: (0, F.A)([r, "isVisible"], A, e.pages) };
          },
          [B]: (e) => ({ ...e, isFetching: !1, error: !0 }),
          [z]: (0, A.A)(v),
        });
    },
    37212: (e, t, r) => {
      r.r(t),
        r.d(t, {
          CLEAN: () => E,
          FETCH_ARTICLE_PAGE: () => n,
          INITIAL_STATE: () => g,
          RECEIVED_ARTICLE_PAGE: () => s,
          REFRESH_ARTICLE_PAGE: () => o,
          REMOVE_ARTICLE_PAGE: () => p,
          clean: () => T,
          default: () => R,
          fetchArticlePage: () => c,
          receivedArticlePage: () => _,
          refreshArticlePage: () => u,
          removeArticlePage: () => P,
        });
      var A = r(48500),
        a = r(4258),
        i = r(94233),
        l = r(42435);
      const g = { isFetching: !0, pages: {} },
        n = "topArticles/FETCH_ARTICLE_PAGE",
        o = "topArticles/REFRESH_ARTICLE_PAGE",
        p = "topArticles/REMOVE_ARTICLE_PAGE",
        s = "topArticles/RECEIVED_ARTICLE_PAGE",
        E = "topArticles/CLEAN",
        c = function (e, t) {
          return {
            type: n,
            page: e,
            size: t,
            autoRefresh:
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          };
        },
        u = (e, t) => ({ type: o, page: e, size: t }),
        P = (e) => ({ type: p, page: e }),
        _ = function (e, t, r, A) {
          return {
            type: s,
            page: e,
            totalPages: t,
            scrollHeight: r,
            scrollTop: A,
            articles:
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : [],
          };
        },
        T = (0, A.A)({ type: E }),
        R = (0, l.vy)(g, {
          [n]: (e) => ({ ...e, isFetching: !0 }),
          [s]: (e, t) => {
            let { page: r, articles: A } = t;
            return { ...e, pages: (0, a.A)(r, A, e.pages), isFetching: !1 };
          },
          [p]: (e, t) => {
            let { page: r } = t;
            return { ...e, pages: (0, i.A)(r, e.pages) };
          },
          [E]: (0, A.A)(g),
        });
    },
    79070: (e, t, r) => {
      r.d(t, { AT: () => u, JU: () => P, Q3: () => T, ZL: () => R });
      var A = r(84003),
        a = r(58089),
        i = r(36169),
        l = r(4036),
        g = r(48098),
        n = r(52527),
        o = r(8761),
        p = r(83645),
        s = r(48500),
        E = r(80367),
        c = r(18558);
      const u = function () {
          return (
            arguments.length > 0 &&
            void 0 !== arguments[0] &&
            arguments[0] &&
            0 ===
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : []
              ).length
          );
        },
        P = (e, t) => Math.ceil(e / t),
        _ = (0, A.A)([
          (0, a.A)(Number),
          (0, i.A)((0, l.A)(NaN)),
          (0, g.A)(n.A, 0),
        ]),
        T = (e) =>
          (0, o.A)(
            (e) => new URL(e.href).searchParams.get("page"),
            (e) => Number(e),
            (0, p.A)((0, i.A)(_), (0, s.A)(e))
          ),
        R = (e, t) =>
          (0, p.A)(() => t > 1, (0, E.f_)({ page: t }))((0, c.u$)("?")(e));
    },
    99216: (e, t, r) => {
      r.d(t, { Y: () => i });
      var A = r(62977),
        a = r(24380);
      function i(e, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = A.E),
          e < 0 && (e = 0),
          (0, a.O)(e, e, t)
        );
      }
    },
    58089: (e, t, r) => {
      r.d(t, { A: () => A });
      const A = (0, r(7573).A)(function (e, t) {
        return (
          t instanceof e ||
          (null != t &&
            (t.constructor === e ||
              ("Object" === e.name && "object" === typeof t)))
        );
      });
    },
    64749: (e, t, r) => {
      r.d(t, { A: () => A });
      const A = (0, r(7573).A)(function (e, t) {
        return Array.prototype.slice.call(t, 0).sort(e);
      });
    },
    75377: (e, t, r) => {
      r.d(t, { A: () => A });
      const A = (0, r(7573).A)(function (e, t) {
        return Number(e) - Number(t);
      });
    },
  },
]);
//# sourceMappingURL=1225.f833028c.chunk.js.map
