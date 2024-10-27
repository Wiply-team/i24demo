"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [9549, 6234, 90],
  {
    49549: (e, t, r) => {
      r.r(t),
        r.d(t, {
          closeSubCategoriesMenuEpic: () => V,
          deactivateAllCategoriesEpic: () => N,
          default: () => m,
          fetchArticlesFromCurrentCategoryEpic: () => F,
          fetchCurrentCategoryEpic: () => L,
          fetchLastRevisionEpic: () => b,
          updateActiveCategoryEpic: () => f,
          updateCategoryUrl: () => O,
          updatePaginationEpic: () => G,
        });
      var a = r(26234),
        o = r(61888),
        i = r(36169),
        g = r(25854),
        c = r(76426),
        n = r(1393),
        l = r(82635),
        A = r(36140),
        s = r(43472),
        p = r(25722),
        E = r(43879),
        u = r(51198),
        R = r(64631),
        C = r(58468),
        T = r(16114),
        d = r(86490),
        y = r(42435),
        _ = r(79070),
        P = r(71846),
        I = r(75243),
        h = r(79495),
        v = r(70090),
        S = r(12040);
      const L = (e, t, r) => {
          let { fetchApi: o, location: i, logger: g } = r;
          return e.pipe(
            (0, A.g)(a.FETCH),
            (0, p.E)(t),
            (0, E.T)((e) => {
              let [t, r] = e;
              return [
                r.router.locale,
                r.router.activeRoute.params.rootCategory,
                r.router.activeRoute.params.subCategory,
              ];
            }),
            (0, u.Z)((e) => {
              let [t, r, a] = e;
              return o(
                a
                  ? "/v2/".concat(t, "/categories/").concat(r, "/").concat(a)
                  : "/v2/".concat(t, "/categories/").concat(r)
              );
            }),
            (0, E.T)((e) =>
              (0, a.received)(
                e.body,
                ((e, t) =>
                  decodeURI(new URL(t.frontendUrl).pathname) !==
                  decodeURI(e.pathname))(i, e.body)
              )
            ),
            (0, d.d$)("category :: fetchCurrentCategoryEpic", a.error, g)
          );
        },
        O = (e, t, r) => {
          let { logger: o, history: i } = r;
          return e.pipe(
            (0, A.g)(a.RECEIVED),
            (0, R.p)((e) => {
              let { shouldRedirect: t } = e;
              return t;
            }),
            (0, E.T)((e) => {
              let { category: t } = e;
              return new URL(t.frontendUrl);
            }),
            (0, C.M)((e) => i.replaceState(i.state, "", e.pathname)),
            (0, T.w)(),
            (0, d.qn)("category :: updateCategoryUrl", o)
          );
        },
        b = (e, t, r) => {
          let { fetchApi: o, logger: i } = r;
          return e.pipe(
            (0, A.g)(a.RECEIVED),
            (0, p.E)(t),
            (0, E.T)((e) => {
              let [t, r] = e;
              return [r.router.locale, r.category.category.id];
            }),
            (0, R.p)((e) => {
              let [t, r] = e;
              return (0, S.O5)(r);
            }),
            (0, u.Z)((e) => {
              let [t, r] = e;
              return o(
                "/v2/".concat(t, "/categories/").concat(r, "/last-revision")
              );
            }),
            (0, E.T)((e) => (0, a.lastRevisionReceived)(e.body)),
            (0, d.qn)("category :: fetchLastRevisionEpic", i)
          );
        },
        f = (e, t, r) => {
          let { logger: c } = r;
          return e.pipe(
            (0, A.g)(a.RECEIVED),
            (0, E.T)((0, o.A)("category")),
            (0, R.p)((0, i.A)(g.A)),
            (0, E.T)((e) => (0, P.iE)(e.id, e.parent ? e.parent.id : null)),
            (0, d.qn)("category :: updateActiveCategoryEpic", c)
          );
        },
        N = (e, t, r) => {
          let { logger: o } = r;
          return e.pipe(
            (0, A.g)(a.CLEAN),
            (0, E.T)(P.BJ),
            (0, d.qn)("category :: deactivateAllCategoriesEpic", o)
          );
        },
        V = (e, t, r) => {
          let { logger: o } = r;
          return e.pipe(
            (0, A.g)(I.Ty, h.l7),
            (0, p.E)(t),
            (0, R.p)((e) => {
              let [t, r] = e;
              return r.category.subCategoriesMenuOpened;
            }),
            (0, R.p)((e) => {
              let [t, r] = e;
              return !(t.type === h.l7 && r.header.collapsed);
            }),
            (0, E.T)(a.closeSubCategories),
            (0, d.qn)("category :: closeSubCategoriesMenuEpic", o)
          );
        },
        F = (e, t, r) => {
          let { document: o, fetchApi: i, logger: g } = r;
          return e.pipe(
            (0, A.g)(a.FETCH_ARTICLE_PAGE),
            (0, p.E)(t),
            (0, R.p)((e) => {
              let [t, r] = e;
              return (0, c.A)(["category", "category", "id"], r);
            }),
            (0, u.Z)((e) => {
              let [{ page: t, size: r }, a] = e;
              return Promise.all([
                i(
                  (0, n.A)("", [
                    "/v2/".concat(a.router.locale, "/contents"),
                    "?category=".concat(a.category.category.id),
                    "&page=".concat(t),
                    "&limit=".concat(r),
                    "&countable=1",
                    "&inSlider=0",
                    "&sort=-sortDate",
                  ])
                ),
                t,
                r,
                a.router.locale,
              ]);
            }),
            (0, E.T)((e) => {
              let [t, r, i, g] = e;
              return (0, a.receivedArticlePage)(
                r,
                (0, _.JU)(Number(t.headers.get("Total-Result") || 0), i),
                o.documentElement.scrollHeight,
                o.documentElement.scrollTop,
                (0, l.A)((e) => (0, y.W0)(g, e))(t.body || [])
              );
            }),
            (0, d.qn)("category :: fetchArticlesFromCurrentCategoryEpic", g)
          );
        },
        G = (e, t, r) => {
          let { logger: o } = r;
          return e.pipe(
            (0, A.g)(a.RECEIVED_ARTICLE_PAGE),
            (0, E.T)((e) => {
              let { page: t, totalPages: r, scrollHeight: a, scrollTop: o } = e;
              return (0, v.receivedPage)(t, r, a, o);
            }),
            (0, d.qn)("category :: updatePaginationEpic", o)
          );
        },
        m = (0, s.E)(V, N, L, f, F, O, G, b);
    },
    26234: (e, t, r) => {
      r.r(t),
        r.d(t, {
          CLEAN: () => E,
          CLOSE_SUB_CATEGORIES: () => C,
          ERROR: () => u,
          FETCH: () => n,
          FETCH_ARTICLE_PAGE: () => A,
          INITIAL_STATE: () => c,
          LAST_REVISION_RECEIVED: () => T,
          OPEN_SUB_CATEGORIES: () => R,
          RECEIVED: () => l,
          RECEIVED_ARTICLE_PAGE: () => s,
          REMOVE_ARTICLE_PAGE: () => p,
          clean: () => v,
          closeSubCategories: () => O,
          default: () => b,
          error: () => S,
          fetch: () => d,
          fetchArticlePage: () => _,
          lastRevisionReceived: () => h,
          openSubCategories: () => L,
          received: () => y,
          receivedArticlePage: () => I,
          removeArticlePage: () => P,
        });
      var a = r(48500),
        o = r(4258),
        i = r(94233),
        g = r(42435);
      const c = {
          isFetching: !0,
          category: null,
          articlePages: {},
          lastRevision: null,
          subCategoriesMenuOpened: !1,
          redirected: !1,
          error: !1,
        },
        n = "category/FETCH",
        l = "category/RECEIVED",
        A = "category/FETCH_ARTICLE_PAGE",
        s = "category/RECEIVED_ARTICLE_PAGE",
        p = "category/REMOVE_ARTICLE_PAGE",
        E = "category/CLEAN",
        u = "category/ERROR",
        R = "categories/OPEN_SUB_CATEGORIES",
        C = "categories/CLOSE_SUB_CATEGORIES",
        T = "category/LAST_REVISION_RECEIVED",
        d = (0, a.A)({ type: n }),
        y = (e, t) => ({ type: l, category: e, shouldRedirect: t }),
        _ = (e, t) => ({ type: A, page: e, size: t }),
        P = (e) => ({ type: p, page: e }),
        I = function (e, t, r, a) {
          return {
            type: s,
            page: e,
            totalPages: t,
            scrollHeight: r,
            scrollTop: a,
            articles:
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : [],
          };
        },
        h = (e) => {
          let { lastRevision: t } = e;
          return { type: T, lastRevision: t };
        },
        v = (0, a.A)({ type: E }),
        S = (0, a.A)({ type: u }),
        L = (0, a.A)({ type: R }),
        O = (0, a.A)({ type: C }),
        b = (0, g.vy)(c, {
          [n]: () => ({ ...c }),
          [l]: (e, t) => {
            let { category: r, shouldRedirect: a } = t;
            return {
              ...e,
              isFetching: !1,
              redirected: a,
              error: !1,
              category: r,
            };
          },
          [s]: (e, t) => {
            let { page: r, articles: a } = t;
            return { ...e, articlePages: (0, o.A)(r, a, e.articlePages) };
          },
          [T]: (e, t) => {
            let { lastRevision: r } = t;
            return { ...e, lastRevision: r };
          },
          [p]: (e, t) => {
            let { page: r } = t;
            return { ...e, articlePages: (0, i.A)(r, e.articlePages) };
          },
          [E]: (0, a.A)(c),
          [u]: (e) => ({ ...e, isFetching: !1, error: !0 }),
          [R]: (e) => ({ ...e, subCategoriesMenuOpened: !0 }),
          [C]: (e) => ({ ...e, subCategoriesMenuOpened: !1 }),
        });
    },
    70090: (e, t, r) => {
      r.r(t),
        r.d(t, {
          CLEAN: () => B,
          CLEAN_EXTRA_PAGES: () => G,
          ERROR: () => M,
          FETCH_NEXT_PAGE: () => V,
          FETCH_PAGE: () => f,
          FETCH_PREV_PAGE: () => N,
          FREEZE_SCROLL_POSITION: () => m,
          INIT: () => b,
          INITIAL_STATE: () => O,
          RECEIVED_PAGE: () => F,
          REDIRECT_TO_FIRST_PAGE: () => U,
          RESTORE_SCROLL_BEHAVIOR: () => H,
          UPDATE_PAGE_VISIBILITY: () => D,
          clean: () => $,
          cleanExtraPages: () => z,
          default: () => ae,
          error: () => re,
          fetchNextPage: () => X,
          fetchPage: () => Z,
          fetchPrevPage: () => k,
          freezeScrollPosition: () => J,
          getPageNumbers: () => te,
          init: () => w,
          receivedPage: () => q,
          redirectToFirstPage: () => Y,
          restoreScrollBehavior: () => j,
          updatePageVisibility: () => x,
        });
      var a = r(48500),
        o = r(20045),
        i = r(48098),
        g = r(52527),
        c = r(14321),
        n = r(94473),
        l = r(18587),
        A = r(8135),
        s = r(57416),
        p = r(14825),
        E = r(64749),
        u = r(75377),
        R = r(82635),
        C = r(4258),
        T = r(82130),
        d = r(84003),
        y = r(58116),
        _ = r(25854),
        P = r(61888),
        I = r(80982),
        h = r(33981),
        v = r(83645),
        S = r(90371),
        L = r(42435);
      const O = {
          pages: {},
          page: 1,
          isFetching: !0,
          totalPages: null,
          scrollHeight: null,
          scrollTop: null,
          error: !1,
        },
        b = "pagination/INIT",
        f = "pagination/FETCH_PAGE",
        N = "pagination/FETCH_PREV_PAGE",
        V = "pagination/FETCH_NEXT_PAGE",
        F = "pagination/RECEIVED_PAGE",
        G = "pagination/CLEAN_EXTRA_PAGES",
        m = "pagination/FREEZE_SCROLL_POSITION",
        H = "pagination/RESTORE_SCROLL_BEHAVIOR",
        D = "pagination/UPDATE_PAGE_VISIBILITY",
        U = "pagination/REDIRECT_TO_FIRST_PAGE",
        B = "pagination/CLEAN",
        M = "pagination/ERROR",
        w = (0, a.A)({ type: b }),
        q = function () {
          return {
            type: F,
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
        Z = function () {
          return {
            type: f,
            page:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
          };
        },
        k = (0, a.A)({ type: N }),
        X = (0, a.A)({ type: V }),
        z = (0, a.A)({ type: G }),
        J = (0, a.A)({ type: m }),
        j = (0, a.A)({ type: H }),
        x = (e, t) => ({ type: D, page: e, isVisible: t }),
        Y = (0, a.A)({ type: U }),
        $ = (0, a.A)({ type: B }),
        Q = (0, o.A)((0, i.A)(g.A, 2), c.A, n.A),
        W = (0, A.A)(
          (e) => e.page <= (0, o.A)(l.A, te)(e.pages),
          (e) => ee(e.pages),
          (e) => K(e.pages)
        ),
        K = (e) => (0, s.A)([(0, o.A)(l.A, te)(e)], e),
        ee = (e) => (0, s.A)([(0, o.A)(p.A, te)(e)], e),
        te = (0, o.A)(
          (0, E.A)(u.A),
          (0, R.A)((e) => Number(e)),
          n.A
        ),
        re = (0, a.A)({ type: M }),
        ae = (0, L.vy)(O, {
          [U]: (e) => ({ ...e, page: 1 }),
          [f]: (e, t) => {
            let { page: r } = t;
            return {
              ...e,
              isFetching: !0,
              page: Number(r),
              pages: { [r]: { isVisible: !1 } },
              error: !1,
            };
          },
          [N]: (e) => ({
            ...e,
            isFetching: !0,
            ...(e.page > 1
              ? {
                  page: (0, o.A)((0, u.A)(g.A, 1), l.A, te)(e.pages),
                  pages: (0, o.A)(
                    (0, C.A)(g.A, { isVisible: !1 }, e.pages),
                    (0, u.A)(g.A, 1),
                    l.A,
                    te
                  )(e.pages),
                }
              : {}),
            error: !1,
          }),
          [V]: (e) => ({
            ...e,
            isFetching: !0,
            ...(e.page < e.totalPages
              ? {
                  page: (0, o.A)((0, T.A)(1), p.A, te)(e.pages),
                  pages: (0, o.A)(
                    (0, C.A)(g.A, { isVisible: !1 }, e.pages),
                    (0, T.A)(1),
                    p.A,
                    te
                  )(e.pages),
                }
              : {}),
            error: !1,
          }),
          [F]: (e, t) => {
            let { totalPages: r, scrollHeight: a, scrollTop: i } = t;
            return {
              ...e,
              isFetching: !1,
              totalPages: r,
              scrollHeight: (0, d.A)([
                (0, o.A)(y.A, _.A, (0, P.A)("pages")),
                (e) => {
                  let { pages: t, page: r } = e;
                  return (0, o.A)((0, I.A)(r, g.A), l.A, te)(t);
                },
              ])(e)
                ? a
                : e.scrollHeight,
              scrollTop: (0, d.A)([
                (0, o.A)(y.A, h.A, (0, P.A)("pages")),
                (e) => {
                  let { pages: t, page: r } = e;
                  return (0, o.A)((0, I.A)(r, g.A), l.A, te)(t);
                },
              ])(e)
                ? i
                : e.scrollTop,
              error: !1,
            };
          },
          [G]: (e) => ({ ...e, pages: (0, v.A)(Q, () => W(e))(e.pages) }),
          [H]: (e) => ({ ...e, scrollTop: null, scrollHeight: null }),
          [D]: (e, t) => {
            let { page: r, isVisible: a } = t;
            return { ...e, pages: (0, S.A)([r, "isVisible"], a, e.pages) };
          },
          [M]: (e) => ({ ...e, isFetching: !1, error: !0 }),
          [B]: (0, a.A)(O),
        });
    },
    79070: (e, t, r) => {
      r.d(t, { AT: () => u, JU: () => R, Q3: () => T, ZL: () => d });
      var a = r(84003),
        o = r(58089),
        i = r(36169),
        g = r(4036),
        c = r(48098),
        n = r(52527),
        l = r(8761),
        A = r(83645),
        s = r(48500),
        p = r(80367),
        E = r(18558);
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
        R = (e, t) => Math.ceil(e / t),
        C = (0, a.A)([
          (0, o.A)(Number),
          (0, i.A)((0, g.A)(NaN)),
          (0, c.A)(n.A, 0),
        ]),
        T = (e) =>
          (0, l.A)(
            (e) => new URL(e.href).searchParams.get("page"),
            (e) => Number(e),
            (0, A.A)((0, i.A)(C), (0, s.A)(e))
          ),
        d = (e, t) =>
          (0, A.A)(() => t > 1, (0, p.f_)({ page: t }))((0, E.u$)("?")(e));
    },
    58089: (e, t, r) => {
      r.d(t, { A: () => a });
      const a = (0, r(7573).A)(function (e, t) {
        return (
          t instanceof e ||
          (null != t &&
            (t.constructor === e ||
              ("Object" === e.name && "object" === typeof t)))
        );
      });
    },
    64749: (e, t, r) => {
      r.d(t, { A: () => a });
      const a = (0, r(7573).A)(function (e, t) {
        return Array.prototype.slice.call(t, 0).sort(e);
      });
    },
    75377: (e, t, r) => {
      r.d(t, { A: () => a });
      const a = (0, r(7573).A)(function (e, t) {
        return Number(e) - Number(t);
      });
    },
  },
]);
//# sourceMappingURL=9549.b060709a.chunk.js.map
