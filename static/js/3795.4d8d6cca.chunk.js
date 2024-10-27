"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [3795, 7348],
  {
    83795: (e, r, n) => {
      n.r(r), n.d(r, { default: () => b, fetchBreakingNewsEpic: () => _ });
      var s = n(57348),
        t = n(1393),
        E = n(61888),
        a = n(36169),
        i = n(25854),
        N = n(20045),
        A = n(18587),
        w = n(25722),
        c = n(51198),
        p = n(43879),
        k = n(64631),
        l = n(43472),
        g = n(86490),
        d = n(36140);
      const _ = (e, r, n) => {
          let { fetchApi: l, logger: _ } = n;
          return e.pipe(
            (0, d.g)(s.FETCH_BREAKING_NEWS),
            (0, w.E)(r),
            (0, c.Z)((e) => {
              let [r, n] = e;
              return l(
                (0, t.A)("", [
                  "/v2/".concat(n.router.locale, "/news"),
                  "?limit=1",
                  "&web=1",
                  "&expired=0",
                  "&status=breaking",
                  "&sort=-startedAt",
                ])
              );
            }),
            (0, p.T)((0, E.A)("body")),
            (0, k.p)((0, a.A)(i.A)),
            (0, p.T)((0, N.A)(s.breakingNewsReceived, A.A)),
            (0, g.qn)("breakingNews :: fetchBreakingNewsEpic", _)
          );
        },
        b = (0, l.E)(_);
    },
    57348: (e, r, n) => {
      n.r(r),
        n.d(r, {
          BREAKING_NEWS_RECEIVED: () => i,
          CLEAN: () => A,
          CLOSE: () => N,
          FETCH_BREAKING_NEWS: () => a,
          INITIAL_STATE: () => E,
          breakingNewsReceived: () => c,
          clean: () => k,
          close: () => p,
          default: () => l,
          fetchBreakingNews: () => w,
        });
      var s = n(48500),
        t = n(42435);
      const E = { opened: !0, news: null },
        a = "breakingNews/FETCH_BREAKING_NEWS",
        i = "breakingNews/BREAKING_NEWS_RECEIVED",
        N = "breakingNews/CLOSE",
        A = "breakingNews/CLEAN",
        w = (0, s.A)({ type: a }),
        c = (e) => ({ type: i, news: e }),
        p = (0, s.A)({ type: N }),
        k = (0, s.A)({ type: A }),
        l = (0, t.vy)(E, {
          [i]: (e, r) => {
            let { news: n } = r;
            return { ...e, news: n };
          },
          [N]: (e) => ({ ...e, opened: !1 }),
          [A]: (0, s.A)(E),
        });
    },
  },
]);
//# sourceMappingURL=3795.4d8d6cca.chunk.js.map
