"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [167],
  {
    90167: (e, s, d) => {
      d.r(s),
        d.d(s, {
          CLEAN: () => I,
          FETCH_NEWS_FEED: () => t,
          INITIALIZE: () => n,
          INITIAL_STATE: () => F,
          RECEIVED_NEWS_FEED: () => w,
          clean: () => r,
          default: () => A,
          fetchNewsFeed: () => a,
          initialize: () => N,
          receivedNewsFeed: () => c,
        });
      var E = d(48500),
        i = d(42435);
      const F = { isFetching: !1, newsFeed: [] },
        n = "asideNewsFeed/INITIALIZE",
        t = "asideNewsFeed/FETCH",
        w = "asideNewsFeed/RECEIVED",
        I = "asideNewsFeed/CLEAN",
        N = (0, E.A)({ type: n }),
        a = (0, E.A)({ type: t }),
        c = (e) => ({ type: w, newsFeed: e || [] }),
        r = (0, E.A)({ type: I }),
        A = (0, i.vy)(F, {
          [t]: (e) => ({ ...e, isFetching: !0 }),
          [w]: (e, s) => {
            let { newsFeed: d } = s;
            return { ...e, newsFeed: d, isFetching: !1 };
          },
          [I]: (0, E.A)(F),
        });
    },
  },
]);
//# sourceMappingURL=167.3bde8d20.chunk.js.map
