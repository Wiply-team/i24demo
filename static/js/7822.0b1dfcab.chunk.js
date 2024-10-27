"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [7822, 167],
  {
    27822: (e, i, s) => {
      s.r(i),
        s.d(i, {
          autoLoadFreshNewsEpic: () => u,
          default: () => h,
          fetchNewsFeedEpic: () => g,
          initializeAsideNewsFeedEpic: () => o,
        });
      var d = s(90167),
        t = s(36140),
        E = s(43472),
        r = s(77701),
        n = s(20045),
        F = s(82635),
        N = s(86490),
        a = s(42435),
        c = s(43879),
        w = s(25722),
        p = s(47727),
        l = s(99216),
        I = s(21220),
        A = s(51198);
      const o = (e, i, s) => {
          let { logger: E } = s;
          return e.pipe(
            (0, t.g)(d.INITIALIZE),
            (0, c.T)(d.fetchNewsFeed),
            (0, N.qn)("asideNewsFeed :: initializeAsideNewsFeedEpic", E)
          );
        },
        u = (e, i, s) => {
          let { logger: E } = s;
          return e.pipe(
            (0, t.g)(d.INITIALIZE),
            (0, w.E)(i),
            (0, p.n)(() =>
              (0, l.Y)(6e4).pipe(
                (0, I.Q)(e.pipe((0, t.g)(d.CLEAN))),
                (0, c.T)(() => (0, d.fetchNewsFeed)())
              )
            ),
            (0, N.qn)("asideNewsFeed :: autoLoadFreshNewsEpic", E)
          );
        },
        g = (e, i, s) => {
          let { fetchApi: E, logger: p } = s;
          return e.pipe(
            (0, t.g)(d.FETCH_NEWS_FEED),
            (0, w.E)(i),
            (0, A.Z)((e) => {
              let [i, s] = e;
              return E("/v2/".concat(s.router.locale, "/news?web=1&page=1"));
            }),
            (0, c.T)((0, r.A)([], "body")),
            (0, w.E)(i),
            (0, c.T)((e) => {
              let [i, s] = e;
              return (0, n.A)(
                d.receivedNewsFeed,
                (0, F.A)((e) => (0, a.LB)(s.router.locale, e))
              )(i);
            }),
            (0, N.qn)("asideNewsFeed :: fetchNewsFeedEpic", p)
          );
        },
        h = (0, E.E)(o, u, g);
    },
    90167: (e, i, s) => {
      s.r(i),
        s.d(i, {
          CLEAN: () => N,
          FETCH_NEWS_FEED: () => n,
          INITIALIZE: () => r,
          INITIAL_STATE: () => E,
          RECEIVED_NEWS_FEED: () => F,
          clean: () => p,
          default: () => l,
          fetchNewsFeed: () => c,
          initialize: () => a,
          receivedNewsFeed: () => w,
        });
      var d = s(48500),
        t = s(42435);
      const E = { isFetching: !1, newsFeed: [] },
        r = "asideNewsFeed/INITIALIZE",
        n = "asideNewsFeed/FETCH",
        F = "asideNewsFeed/RECEIVED",
        N = "asideNewsFeed/CLEAN",
        a = (0, d.A)({ type: r }),
        c = (0, d.A)({ type: n }),
        w = (e) => ({ type: F, newsFeed: e || [] }),
        p = (0, d.A)({ type: N }),
        l = (0, t.vy)(E, {
          [n]: (e) => ({ ...e, isFetching: !0 }),
          [F]: (e, i) => {
            let { newsFeed: s } = i;
            return { ...e, newsFeed: s, isFetching: !1 };
          },
          [N]: (0, d.A)(E),
        });
    },
    99216: (e, i, s) => {
      s.d(i, { Y: () => E });
      var d = s(62977),
        t = s(24380);
      function E(e, i) {
        return (
          void 0 === e && (e = 0),
          void 0 === i && (i = d.E),
          e < 0 && (e = 0),
          (0, t.O)(e, e, i)
        );
      }
    },
  },
]);
//# sourceMappingURL=7822.0b1dfcab.chunk.js.map
