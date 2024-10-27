"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [2736, 1068],
  {
    43602: (e, t, r) => {
      r.d(t, { A: () => A });
      var n = r(33981),
        d = r(96637),
        s = r(20045),
        i = r(8761),
        o = (r(65043), r(96277)),
        l = r(83003),
        u = r(53975),
        a = r(70579);
      const c = (0, i.A)(
          (0, o.y3)((e) => {
            let { reducers: t, epics: r, loadResources: n } = e;
            return n(t, r);
          })
        )((e) => {
          let { children: t, areResourcesLoaded: r } = e;
          return r ? (0, a.jsx)(a.Fragment, { children: t }) : null;
        }),
        A = (0, l.Ng)(
          (e, t) => {
            let { reducers: r = [], epics: s = [] } = t;
            return {
              areResourcesLoaded:
                (0, n.A)((0, d.A)(e.lazyResources.reducers, r)) &&
                (0, n.A)((0, d.A)(e.lazyResources.epics, s)),
            };
          },
          (e) => ({ loadResources: (0, s.A)(e, u._H) })
        )(c);
    },
    72736: (e, t, r) => {
      r.r(t), r.d(t, { default: () => E });
      r(65043);
      var n = r(20045),
        d = r(87211),
        s = r(96277),
        i = r(83003),
        o = r(41068),
        l = r(70579);
      const u = (0, n.A)(
          (0, s.y3)((e) => {
            let { requestTweetRendering: t, tweetId: r, options: n } = e;
            return t(r, n);
          }),
          (0, s.EF)(d.A)
        )((e) => {
          let { tweetId: t } = e;
          return (0, l.jsx)("div", { id: "tweet-".concat(t) });
        }),
        a = (0, i.Ng)(null, (e) => ({
          requestTweetRendering: (t, r) =>
            e((0, o.requestTweetRendering)(t, r)),
        }))(u);
      var c = r(43602);
      const A = (0, s.y3)((e) => {
          let { loadSdk: t } = e;
          return t();
        })(() => null),
        T = (0, i.Ng)(null, (e) => ({ loadSdk: (0, n.A)(e, o.loadSdk) }))(A),
        E = (e) =>
          (0, l.jsxs)(c.A, {
            reducers: ["x"],
            epics: ["x"],
            children: [(0, l.jsx)(T, {}), (0, l.jsx)(a, { ...e })],
          });
    },
    41068: (e, t, r) => {
      r.r(t),
        r.d(t, {
          INITIAL_STATE: () => i,
          LOAD_SDK: () => o,
          RENDER_TWEET: () => c,
          REQUEST_TWEET_RENDERING: () => u,
          SDK_INITIALIZED: () => l,
          WAIT_FOR_SDK: () => a,
          default: () => R,
          loadSdk: () => A,
          renderTweet: () => w,
          requestTweetRendering: () => E,
          sdkInitialized: () => T,
          waitForSdk: () => I,
        });
      var n = r(48500),
        d = r(99185),
        s = r(42435);
      const i = { initialized: !1, pendingTweets: [] },
        o = "x/LOAD_SDK",
        l = "x/SDK_INITIALIZED",
        u = "x/REQUEST_TWEET_RENDERING",
        a = "x/WAIT_FOR_SDK",
        c = "x/RENDER_TWEET",
        A = (0, n.A)({ type: o }),
        T = (0, n.A)({ type: l }),
        E = (e, t) => ({ type: u, tweetId: e, options: t }),
        I = (e, t) => ({ type: a, tweetId: e, options: t }),
        w = (e, t) => ({ type: c, tweetId: e, options: t }),
        R = (0, s.vy)(i, {
          [l]: (e) => ({ ...e, initialized: !0 }),
          [a]: (e, t) => {
            let { tweetId: r, options: n } = t;
            return {
              ...e,
              pendingTweets: (0, d.A)(
                { tweetId: r, options: n },
                e.pendingTweets
              ),
            };
          },
        });
    },
    96637: (e, t, r) => {
      r.d(t, { A: () => i });
      var n = r(7573),
        d = r(22216),
        s = r(76173);
      const i = (0, n.A)(function (e, t) {
        for (var r = new d.A(), n = 0; n < e.length; n += 1) r.add(e[n]);
        return (0, s.A)(r.has.bind(r), t);
      });
    },
  },
]);
//# sourceMappingURL=2736.cebbc9fa.chunk.js.map
