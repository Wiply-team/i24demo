"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [2772, 5065],
  {
    12772: (e, t, r) => {
      r.r(t),
        r.d(t, {
          default: () => f,
          fetchHeadlinesEpic: () => R,
          initializeAutoRefreshHeadlinesEpic: () => g,
          initializeHeadlinesEpic: () => C,
        });
      var n = r(75065),
        i = r(36140),
        l = r(43472),
        o = r(43879),
        a = r(64631),
        s = r(47727),
        c = r(99216),
        E = r(21220),
        d = r(25722),
        u = r(51198),
        h = r(8761),
        T = r(65325),
        p = r(82635),
        I = r(86490),
        N = r(42435);
      const C = (e, t, r) => {
          let { logger: l } = r;
          return e.pipe(
            (0, i.g)(n.INITIALIZE),
            (0, o.T)((e) => {
              let { categoryId: t } = e;
              return (0, n.fetchContents)(t);
            }),
            (0, I.qn)("headlines :: initializeHeadlinesEpic", l)
          );
        },
        g = (e, t, r) => {
          let { logger: l } = r;
          return e.pipe(
            (0, i.g)(n.INITIALIZE),
            (0, a.p)((e) => {
              let { autoRefresh: t } = e;
              return t;
            }),
            (0, s.n)((t) => {
              let { categoryId: r } = t;
              return (0, c.Y)(12e4).pipe(
                (0, E.Q)(e.pipe((0, i.g)(n.CLEAN))),
                (0, o.T)(() => (0, n.refreshContents)(r))
              );
            }),
            (0, I.qn)("headlines :: initializeAutoRefreshHeadlinesEpic", l)
          );
        },
        R = (e, t, r) => {
          let { fetchApi: l, logger: a } = r;
          return e.pipe(
            (0, i.g)(n.FETCH_CONTENTS, n.REFRESH_CONTENTS),
            (0, d.E)(t),
            (0, u.Z)((e) => {
              let [{ categoryId: t }, r] = e;
              return Promise.all([
                l(
                  t
                    ? "/v2/".concat(r.router.locale, "/headlines/").concat(t)
                    : "/v2/".concat(r.router.locale, "/headlines")
                ),
                r.router.locale,
              ]);
            }),
            (0, o.T)((e) => {
              let [t, r] = e;
              return (0, h.A)(
                (0, T.A)([]),
                (0, p.A)((e) => (0, N.W0)(r, e)),
                n.contentsReceived
              )(t.body);
            }),
            (0, I.d$)("headlines :: fetchHeadlinesEpic", n.error, a)
          );
        },
        f = (0, l.E)(C, g, R);
    },
    75065: (e, t, r) => {
      r.r(t),
        r.d(t, {
          CLEAN: () => d,
          CONTENTS_RECEIVED: () => c,
          ERROR: () => E,
          FETCH_CONTENTS: () => a,
          INITIALIZE: () => o,
          INITIAL_STATE: () => l,
          REFRESH_CONTENTS: () => s,
          clean: () => N,
          contentsReceived: () => p,
          default: () => C,
          error: () => I,
          fetchContents: () => h,
          initialize: () => u,
          refreshContents: () => T,
        });
      var n = r(48500),
        i = r(42435);
      const l = { isFetching: !1, contents: [], error: null },
        o = "headlines/INITIALIZE",
        a = "headlines/FETCH_CONTENTS",
        s = "headlines/REFRESH_CONTENTS",
        c = "headlines/CONTENTS_RECEIVED",
        E = "headlines/ERROR",
        d = "headlines/CLEAN",
        u = function (e) {
          return {
            type: o,
            categoryId: e,
            autoRefresh:
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          };
        },
        h = (e) => ({ type: a, categoryId: e }),
        T = (e) => ({ type: s, categoryId: e }),
        p = (e) => ({ type: c, contents: e }),
        I = (e) => ({ type: E, error: e }),
        N = (0, n.A)({ type: d }),
        C = (0, i.vy)(l, {
          [a]: (e) => ({ ...e, isFetching: !0, error: null }),
          [s]: (e) => ({ ...e, error: null }),
          [c]: (e, t) => {
            let { contents: r } = t;
            return { ...e, isFetching: !1, error: null, contents: r };
          },
          [E]: (e, t) => {
            let { error: r } = t;
            return { ...e, isFetching: !1, error: r };
          },
          [d]: (0, n.A)(l),
        });
    },
    99216: (e, t, r) => {
      r.d(t, { Y: () => l });
      var n = r(62977),
        i = r(24380);
      function l(e, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = n.E),
          e < 0 && (e = 0),
          (0, i.O)(e, e, t)
        );
      }
    },
  },
]);
//# sourceMappingURL=2772.88a2719d.chunk.js.map
