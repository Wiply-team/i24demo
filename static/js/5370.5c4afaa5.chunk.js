"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [5370, 90],
  {
    35370: (e, t, r) => {
      r.r(t),
        r.d(t, {
          addSEOLinkEpic: () => z,
          checkIfPageIsValidEpic: () => ae,
          cleanExtraPagesEpic: () => Q,
          default: () => oe,
          initPaginationEpic: () => M,
          loadNextPageOnScrollEpic: () => j,
          loadPrevPageOnScrollEpic: () => Z,
          observePageEpic: () => W,
          redirectToFirstPageEpic: () => ie,
          removeUnusedPageObserversEpic: () => ee,
          restoreScrollPositionEpic: () => Y,
          scrollToPageEpic: () => X,
          updatePageIntersectionEpic: () => te,
          updatePageUrlEpic: () => ne,
        });
      var n = r(70090),
        a = r(71144),
        i = r(52527),
        o = r(8761),
        p = r(35846),
        g = r(4036),
        l = r(84003),
        s = r(20045),
        A = r(18587),
        c = r(36169),
        E = r(25854),
        u = r(7573),
        P = r(61888);
      const T = (0, u.A)(function (e, t) {
        return e.map(function (e) {
          return (0, P.A)(e, t);
        });
      });
      var d = r(83645),
        I = r(75377),
        h = r(82130),
        R = r(29874),
        _ = r(98961),
        S = r(94473),
        N = r(64749),
        y = r(36140),
        v = r(43472),
        b = r(25722),
        m = r(43879),
        O = r(64631),
        C = r(47727),
        f = r(89697),
        F = r(21220),
        L = r(89159),
        V = r(58468),
        G = r(16114),
        w = r(7910),
        H = r(86490),
        q = r(79070),
        D = r(75243),
        k = r(91307),
        x = r(27266),
        B = r(25406);
      const U = (0, a.A)(i.A, [
          "categoryAr",
          "categoryEn",
          "categoryFr",
          "categoryHe",
          "tag",
          "newsFeedAr",
          "newsFeedEn",
          "newsFeedFr",
          "newsFeedHe",
          "author",
        ])(i.A),
        M = (e, t, r) => {
          let { location: a, logger: i } = r;
          return e.pipe(
            (0, y.g)(n.INIT),
            (0, b.E)(t),
            (0, m.T)((e) => {
              let [t, r] = e;
              return (0, o.A)(
                (e, t) => (0, q.Q3)(t.pagination.page)(e),
                n.fetchPage
              )(a, r);
            }),
            (0, H.qn)("pagination :: initPaginationEpic", i)
          );
        },
        Z = (e, t, r) => {
          let { document: a, logger: i, window: o } = r;
          return e.pipe(
            (0, y.g)(n.INIT, k.N7),
            (0, b.E)(t),
            (0, O.p)((e) => {
              let [{ type: t }, r] = e;
              return (0, p.A)([
                (0, g.A)(n.INIT),
                (0, l.A)([(0, g.A)(k.N7), () => U(r.router.activeRoute.name)]),
              ])(t);
            }),
            (0, C.n)(() =>
              (0, f.R)(o, "scroll").pipe(
                (0, F.Q)(e.pipe((0, y.g)(n.CLEAN))),
                (0, L.B)(200),
                (0, b.E)(t),
                (0, O.p)((e) => {
                  let [t, r] = e;
                  return !r.router.isRestoringScrollPosition;
                }),
                (0, O.p)((e) => {
                  let [t, r] = e;
                  return !r.pagination.isFetching;
                }),
                (0, O.p)((e) => {
                  let [t, r] = e;
                  return r.pagination.page > 1;
                }),
                (0, O.p)((e) => {
                  let [t, r] = e;
                  return Object.keys(r.pagination.pages).length > 0;
                }),
                (0, O.p)((e) => {
                  let [t, r] = e;
                  return (
                    (0, s.A)(A.A, n.getPageNumbers)(r.pagination.pages) > 1
                  );
                }),
                (0, O.p)(() => 0 === a.documentElement.scrollTop),
                (0, m.T)(n.fetchPrevPage),
                (0, H.qn)("pagination :: loadPrevPageOnScrollEpic", i)
              )
            )
          );
        },
        j = (e, t, r) => {
          let { document: a, logger: i, window: o } = r;
          return e.pipe(
            (0, y.g)(n.INIT, k.N7),
            (0, b.E)(t),
            (0, O.p)((e) => {
              let [{ type: t }, r] = e;
              return (0, p.A)([
                (0, g.A)(n.INIT),
                (0, l.A)([(0, g.A)(k.N7), () => U(r.router.activeRoute.name)]),
              ])(t);
            }),
            (0, C.n)(() =>
              (0, f.R)(o, "scroll").pipe(
                (0, F.Q)(e.pipe((0, y.g)(n.CLEAN))),
                (0, L.B)(200),
                (0, b.E)(t),
                (0, O.p)((e) => {
                  let [t, r] = e;
                  return !r.router.isRestoringScrollPosition;
                }),
                (0, O.p)((e) => {
                  let [t, r] = e;
                  return !r.pagination.isFetching;
                }),
                (0, O.p)((e) => {
                  let [t, r] = e;
                  return Object.keys(r.pagination.pages).length > 0;
                }),
                (0, O.p)((e) => {
                  let [t, r] = e;
                  return r.pagination.totalPages > r.pagination.page;
                }),
                (0, m.T)(() => a.querySelector("#loader-placeholder-next")),
                (0, O.p)((0, c.A)(E.A)),
                (0, m.T)((e) => e.getBoundingClientRect().bottom),
                (0, O.p)((e) => e < +o.innerHeight),
                (0, b.E)(t),
                (0, m.T)(n.fetchNextPage),
                (0, H.qn)("pagination :: loadNextPageOnScrollEpic", i)
              )
            )
          );
        },
        Q = (e, t, r) => {
          let { logger: a } = r;
          return e.pipe(
            (0, y.g)(n.RECEIVED_PAGE),
            (0, b.E)(t),
            (0, m.T)(n.cleanExtraPages),
            (0, H.qn)("pagination :: cleanExtraPagesEpic", a)
          );
        },
        X = (e, t, r) => {
          let { logger: a, document: i, window: o } = r;
          return e.pipe(
            (0, y.g)(n.RECEIVED_PAGE, k.N7),
            (0, b.E)(t),
            (0, O.p)((e) => {
              let [{ type: t }, r] = e;
              return (0, p.A)([
                (0, g.A)(n.RECEIVED_PAGE),
                (0, l.A)([(0, g.A)(k.N7), () => U(r.router.activeRoute.name)]),
              ])(t);
            }),
            (0, O.p)((e) => {
              let [t, r] = e;
              return !r.router.isRestoringScrollPosition;
            }),
            (0, O.p)((e) => {
              let [t, r] = e;
              return 1 !== r.pagination.page;
            }),
            (0, O.p)((e) => {
              let [{ page: t }, r] = e;
              return r.pagination.page === t;
            }),
            (0, O.p)((e) => {
              let [t, r] = e;
              return 1 === Object.keys(r.pagination.pages).length;
            }),
            (0, O.p)(() => 0 === i.documentElement.scrollTop),
            (0, V.M)(() => {
              const e = i.querySelector(".header-navbar");
              o.scrollTo(i.documentElement.scrollLeft, e.offsetHeight);
            }),
            (0, G.w)(),
            (0, H.qn)("pagination :: scrollToPageEpic", a)
          );
        },
        Y = (e, t, r) => {
          let { logger: a, document: i } = r;
          return e.pipe(
            (0, y.g)(n.FREEZE_SCROLL_POSITION),
            (0, b.E)(t),
            (0, O.p)((e) => {
              let [t, r] = e;
              return Object.keys(r.pagination.pages).length > 1;
            }),
            (0, V.M)((e) => {
              let [t, r] = e;
              const n = i.querySelector("html");
              n.scrollTop =
                r.pagination.scrollTop +
                (n.scrollHeight - r.pagination.scrollHeight);
            }),
            (0, m.T)(n.restoreScrollBehavior),
            (0, H.qn)("pagination :: restoreScrollPositionEpic", a)
          );
        },
        z = (e, t, r) => {
          let { location: a, document: i, logger: o } = r;
          return e.pipe(
            (0, y.g)(n.RECEIVED_PAGE),
            (0, w.s)(1),
            (0, O.p)(() => !(0, E.A)(i.head)),
            (0, b.E)(t),
            (0, m.T)((e) => {
              let [t, { pagination: r }] = e;
              return T(["page", "totalPages"])(r);
            }),
            (0, V.M)(
              (0, d.A)(
                (e) => {
                  let [t] = e;
                  return t > 1;
                },
                (e) => {
                  let [t] = e;
                  return $(i, (0, q.ZL)(a.href, (0, I.A)(t, 1)));
                }
              )
            ),
            (0, V.M)(
              (0, d.A)(
                (e) => {
                  let [t, r] = e;
                  return t < r;
                },
                (e) => {
                  let [t] = e;
                  return K(i, (0, q.ZL)(a.href, (0, h.A)(t, 1)));
                }
              )
            ),
            (0, G.w)(),
            (0, H.qn)("pagination :: addSEOLinkEpic", o)
          );
        },
        J = (e) => (t, r) => {
          var n = t.createElement("link");
          (n.rel = e), (n.href = r), t.head.appendChild(n);
        },
        $ = J("prev"),
        K = J("next"),
        W = (e, t, r) => {
          let { intersectionObserversRegistry: a, logger: i, document: o } = r;
          return e.pipe(
            (0, y.g)(k.N7, n.RECEIVED_PAGE),
            (0, O.p)(() => a.isSupported()),
            (0, b.E)(t),
            (0, O.p)((e) => {
              let [{ type: t }, r] = e;
              return (0, p.A)([
                (0, g.A)(n.RECEIVED_PAGE),
                (0, l.A)([(0, g.A)(k.N7), () => U(r.router.activeRoute.name)]),
              ])(t);
            }),
            (0, V.M)((e) => {
              let [t, r] = e;
              const n = o.querySelector("#page-".concat(r.pagination.page)),
                i = a.get(x.S9);
              n && i && i.observe(n);
            }),
            (0, G.w)(),
            (0, H.qn)("pagination :: observeArticlePageEpic", i)
          );
        },
        ee = (e, t, r) => {
          let { intersectionObserversRegistry: n, logger: a } = r;
          return e.pipe(
            (0, y.g)(D.Ty),
            (0, O.p)(() => n.isSupported()),
            (0, V.M)(() => {
              const e = n.get(x.S9);
              e && e.disconnect();
            }),
            (0, G.w)(),
            (0, H.qn)("pagination :: removeUnusedPageObserversEpic", a)
          );
        },
        te = (e, t, r) => {
          let { logger: a } = r;
          return B.PR.pipe(
            (0, O.p)((0, R.A)(x.S9, "observerName")),
            (0, m.T)((e) => {
              let { observedItem: t } = e;
              return (0, n.updatePageVisibility)(
                t.target.dataset.page,
                t.isIntersecting
              );
            }),
            (0, H.qn)("pagination :: updatePageIntersectionEpic", a)
          );
        },
        re = (0, o.A)(
          (0, _.A)((0, R.A)(!0, "isVisible")),
          S.A,
          (0, N.A)(I.A),
          A.A
        ),
        ne = (e, t, r) => {
          let { location: a, logger: i, history: p } = r;
          return e.pipe(
            (0, y.g)(n.UPDATE_PAGE_VISIBILITY),
            (0, b.E)(t),
            (0, V.M)(
              (0, o.A)(
                (e) => {
                  let [t, r] = e;
                  return re(r.pagination.pages);
                },
                (0, d.A)((0, c.A)(E.A), (e) =>
                  p.replaceState(p.state, "", (0, q.ZL)(a.href, e))
                )
              )
            ),
            (0, G.w)(),
            (0, H.qn)("pagination :: updatePageUrlEpic", i)
          );
        },
        ae = (e, t, r) => {
          let { location: a, logger: i } = r;
          return e.pipe(
            (0, y.g)(n.RECEIVED_PAGE),
            (0, O.p)((e) => {
              let { totalPages: t, page: r } = e;
              return r > t;
            }),
            (0, m.T)(n.redirectToFirstPage),
            (0, H.qn)("pagination :: checkIfPageIsValidEpic", i)
          );
        },
        ie = (e, t, r) => {
          let { location: a, logger: i } = r;
          return e.pipe(
            (0, y.g)(n.REDIRECT_TO_FIRST_PAGE),
            (0, m.T)(() => (0, D.V2)(a.pathname)),
            (0, H.qn)("pagination :: redirectToFirstPageEpic", i)
          );
        },
        oe = (0, v.E)(M, Z, j, Q, X, Y, z, W, te, ee, ne, ae, ie);
    },
    70090: (e, t, r) => {
      r.r(t),
        r.d(t, {
          CLEAN: () => D,
          CLEAN_EXTRA_PAGES: () => V,
          ERROR: () => k,
          FETCH_NEXT_PAGE: () => F,
          FETCH_PAGE: () => C,
          FETCH_PREV_PAGE: () => f,
          FREEZE_SCROLL_POSITION: () => G,
          INIT: () => O,
          INITIAL_STATE: () => m,
          RECEIVED_PAGE: () => L,
          REDIRECT_TO_FIRST_PAGE: () => q,
          RESTORE_SCROLL_BEHAVIOR: () => w,
          UPDATE_PAGE_VISIBILITY: () => H,
          clean: () => J,
          cleanExtraPages: () => j,
          default: () => ne,
          error: () => re,
          fetchNextPage: () => Z,
          fetchPage: () => U,
          fetchPrevPage: () => M,
          freezeScrollPosition: () => Q,
          getPageNumbers: () => te,
          init: () => x,
          receivedPage: () => B,
          redirectToFirstPage: () => z,
          restoreScrollBehavior: () => X,
          updatePageVisibility: () => Y,
        });
      var n = r(48500),
        a = r(20045),
        i = r(48098),
        o = r(52527),
        p = r(14321),
        g = r(94473),
        l = r(18587),
        s = r(8135),
        A = r(57416),
        c = r(14825),
        E = r(64749),
        u = r(75377),
        P = r(82635),
        T = r(4258),
        d = r(82130),
        I = r(84003),
        h = r(58116),
        R = r(25854),
        _ = r(61888),
        S = r(80982),
        N = r(33981),
        y = r(83645),
        v = r(90371),
        b = r(42435);
      const m = {
          pages: {},
          page: 1,
          isFetching: !0,
          totalPages: null,
          scrollHeight: null,
          scrollTop: null,
          error: !1,
        },
        O = "pagination/INIT",
        C = "pagination/FETCH_PAGE",
        f = "pagination/FETCH_PREV_PAGE",
        F = "pagination/FETCH_NEXT_PAGE",
        L = "pagination/RECEIVED_PAGE",
        V = "pagination/CLEAN_EXTRA_PAGES",
        G = "pagination/FREEZE_SCROLL_POSITION",
        w = "pagination/RESTORE_SCROLL_BEHAVIOR",
        H = "pagination/UPDATE_PAGE_VISIBILITY",
        q = "pagination/REDIRECT_TO_FIRST_PAGE",
        D = "pagination/CLEAN",
        k = "pagination/ERROR",
        x = (0, n.A)({ type: O }),
        B = function () {
          return {
            type: L,
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
        U = function () {
          return {
            type: C,
            page:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
          };
        },
        M = (0, n.A)({ type: f }),
        Z = (0, n.A)({ type: F }),
        j = (0, n.A)({ type: V }),
        Q = (0, n.A)({ type: G }),
        X = (0, n.A)({ type: w }),
        Y = (e, t) => ({ type: H, page: e, isVisible: t }),
        z = (0, n.A)({ type: q }),
        J = (0, n.A)({ type: D }),
        $ = (0, a.A)((0, i.A)(o.A, 2), p.A, g.A),
        K = (0, s.A)(
          (e) => e.page <= (0, a.A)(l.A, te)(e.pages),
          (e) => ee(e.pages),
          (e) => W(e.pages)
        ),
        W = (e) => (0, A.A)([(0, a.A)(l.A, te)(e)], e),
        ee = (e) => (0, A.A)([(0, a.A)(c.A, te)(e)], e),
        te = (0, a.A)(
          (0, E.A)(u.A),
          (0, P.A)((e) => Number(e)),
          g.A
        ),
        re = (0, n.A)({ type: k }),
        ne = (0, b.vy)(m, {
          [q]: (e) => ({ ...e, page: 1 }),
          [C]: (e, t) => {
            let { page: r } = t;
            return {
              ...e,
              isFetching: !0,
              page: Number(r),
              pages: { [r]: { isVisible: !1 } },
              error: !1,
            };
          },
          [f]: (e) => ({
            ...e,
            isFetching: !0,
            ...(e.page > 1
              ? {
                  page: (0, a.A)((0, u.A)(o.A, 1), l.A, te)(e.pages),
                  pages: (0, a.A)(
                    (0, T.A)(o.A, { isVisible: !1 }, e.pages),
                    (0, u.A)(o.A, 1),
                    l.A,
                    te
                  )(e.pages),
                }
              : {}),
            error: !1,
          }),
          [F]: (e) => ({
            ...e,
            isFetching: !0,
            ...(e.page < e.totalPages
              ? {
                  page: (0, a.A)((0, d.A)(1), c.A, te)(e.pages),
                  pages: (0, a.A)(
                    (0, T.A)(o.A, { isVisible: !1 }, e.pages),
                    (0, d.A)(1),
                    c.A,
                    te
                  )(e.pages),
                }
              : {}),
            error: !1,
          }),
          [L]: (e, t) => {
            let { totalPages: r, scrollHeight: n, scrollTop: i } = t;
            return {
              ...e,
              isFetching: !1,
              totalPages: r,
              scrollHeight: (0, I.A)([
                (0, a.A)(h.A, R.A, (0, _.A)("pages")),
                (e) => {
                  let { pages: t, page: r } = e;
                  return (0, a.A)((0, S.A)(r, o.A), l.A, te)(t);
                },
              ])(e)
                ? n
                : e.scrollHeight,
              scrollTop: (0, I.A)([
                (0, a.A)(h.A, N.A, (0, _.A)("pages")),
                (e) => {
                  let { pages: t, page: r } = e;
                  return (0, a.A)((0, S.A)(r, o.A), l.A, te)(t);
                },
              ])(e)
                ? i
                : e.scrollTop,
              error: !1,
            };
          },
          [V]: (e) => ({ ...e, pages: (0, y.A)($, () => K(e))(e.pages) }),
          [w]: (e) => ({ ...e, scrollTop: null, scrollHeight: null }),
          [H]: (e, t) => {
            let { page: r, isVisible: n } = t;
            return { ...e, pages: (0, v.A)([r, "isVisible"], n, e.pages) };
          },
          [k]: (e) => ({ ...e, isFetching: !1, error: !0 }),
          [D]: (0, n.A)(m),
        });
    },
    79070: (e, t, r) => {
      r.d(t, { AT: () => u, JU: () => P, Q3: () => d, ZL: () => I });
      var n = r(84003),
        a = r(58089),
        i = r(36169),
        o = r(4036),
        p = r(48098),
        g = r(52527),
        l = r(8761),
        s = r(83645),
        A = r(48500),
        c = r(80367),
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
        P = (e, t) => Math.ceil(e / t),
        T = (0, n.A)([
          (0, a.A)(Number),
          (0, i.A)((0, o.A)(NaN)),
          (0, p.A)(g.A, 0),
        ]),
        d = (e) =>
          (0, l.A)(
            (e) => new URL(e.href).searchParams.get("page"),
            (e) => Number(e),
            (0, s.A)((0, i.A)(T), (0, A.A)(e))
          ),
        I = (e, t) =>
          (0, s.A)(() => t > 1, (0, c.f_)({ page: t }))((0, E.u$)("?")(e));
    },
    58089: (e, t, r) => {
      r.d(t, { A: () => n });
      const n = (0, r(7573).A)(function (e, t) {
        return (
          t instanceof e ||
          (null != t &&
            (t.constructor === e ||
              ("Object" === e.name && "object" === typeof t)))
        );
      });
    },
    64749: (e, t, r) => {
      r.d(t, { A: () => n });
      const n = (0, r(7573).A)(function (e, t) {
        return Array.prototype.slice.call(t, 0).sort(e);
      });
    },
    75377: (e, t, r) => {
      r.d(t, { A: () => n });
      const n = (0, r(7573).A)(function (e, t) {
        return Number(e) - Number(t);
      });
    },
  },
]);
//# sourceMappingURL=5370.5c4afaa5.chunk.js.map
