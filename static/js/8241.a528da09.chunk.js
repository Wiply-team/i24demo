"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [8241, 1068],
  {
    98241: (e, t, n) => {
      n.r(t),
        n.d(t, {
          default: () => c,
          renderPendingTweetsEpic: () => _,
          requestTweetRenderingEpic: () => g,
        });
      var r = n(41068),
        i = n(36140),
        d = n(43472),
        E = n(25722),
        p = n(64631),
        o = n(89159),
        s = n(51198),
        w = n(43879),
        T = n(16114),
        l = n(8135),
        I = n(82635),
        a = n(84281),
        u = n(86490);
      const g = (e, t, n) => {
          let { logger: d } = n;
          return e.pipe(
            (0, i.g)(r.REQUEST_TWEET_RENDERING),
            (0, E.E)(t),
            (0, w.T)(
              (0, l.A)(
                (e) => {
                  let [t, n] = e;
                  return n.x.initialized;
                },
                (e) => {
                  let [{ tweetId: t, options: n }] = e;
                  return (0, r.renderTweet)(t, n);
                },
                (e) => {
                  let [{ tweetId: t, options: n }] = e;
                  return (0, r.waitForSdk)(t, n);
                }
              )
            ),
            (0, u.qn)("x :: requestTweetRenderingEpic", d)
          );
        },
        _ = (e, t, n) => {
          let { logger: d } = n;
          return e.pipe(
            (0, i.g)(r.SDK_INITIALIZED),
            (0, E.E)(t),
            (0, s.Z)((e) => {
              let [t, n] = e;
              return (0, I.A)((e) => {
                let { tweetId: t, options: n } = e;
                return (0, r.renderTweet)(t, n);
              }, n.x.pendingTweets);
            }),
            (0, u.qn)("x :: renderPendingTweetsEpic", d)
          );
        },
        c = (0, d.E)(
          (e, t, n) => {
            let { logger: d, window: T } = n;
            return e.pipe(
              (0, i.g)(a.xN, r.LOAD_SDK),
              (0, E.E)(t),
              (0, p.p)((e) => {
                let [t, n] = e;
                return n.consentManagement.nonIABVendorsAuthorized;
              }),
              (0, p.p)((e) => {
                let [t, n] = e;
                return !n.x.initialized;
              }),
              (0, o.B)(200),
              (0, s.Z)(
                () =>
                  new Promise((e) => {
                    T.twttr = (function (t, n, r) {
                      var i,
                        d = t.getElementsByTagName(n)[0],
                        E = T.twttr || {};
                      return (
                        t.getElementById(r) ||
                          (((i = t.createElement(n)).id = r),
                          (i.src = "https://platform.twitter.com/widgets.js"),
                          d.parentNode.insertBefore(i, d),
                          (E._e = []),
                          (E.ready = function (e) {
                            E._e.push(e);
                          }),
                          E.ready(e)),
                        E
                      );
                    })(document, "script", "twitter-wjs");
                  })
              ),
              (0, w.T)(r.sdkInitialized),
              (0, u.qn)("x :: initializeXEpic", d)
            );
          },
          _,
          g,
          (e, t, n) => {
            let { document: d, logger: E, x: o } = n;
            return e.pipe(
              (0, i.g)(r.RENDER_TWEET),
              (0, w.T)((e) => ({
                ...e,
                element: d.getElementById("tweet-".concat(e.tweetId)),
              })),
              (0, p.p)((e) => {
                let { element: t } = e;
                return t;
              }),
              (0, s.Z)((e) => {
                let { tweetId: t, options: n, element: r } = e;
                return o().widgets.createTweet(t, r, n);
              }),
              (0, T.w)(),
              (0, u.qn)("x :: renderTweetEpic", E)
            );
          }
        );
    },
    41068: (e, t, n) => {
      n.r(t),
        n.d(t, {
          INITIAL_STATE: () => E,
          LOAD_SDK: () => p,
          RENDER_TWEET: () => T,
          REQUEST_TWEET_RENDERING: () => s,
          SDK_INITIALIZED: () => o,
          WAIT_FOR_SDK: () => w,
          default: () => _,
          loadSdk: () => l,
          renderTweet: () => g,
          requestTweetRendering: () => a,
          sdkInitialized: () => I,
          waitForSdk: () => u,
        });
      var r = n(48500),
        i = n(99185),
        d = n(42435);
      const E = { initialized: !1, pendingTweets: [] },
        p = "x/LOAD_SDK",
        o = "x/SDK_INITIALIZED",
        s = "x/REQUEST_TWEET_RENDERING",
        w = "x/WAIT_FOR_SDK",
        T = "x/RENDER_TWEET",
        l = (0, r.A)({ type: p }),
        I = (0, r.A)({ type: o }),
        a = (e, t) => ({ type: s, tweetId: e, options: t }),
        u = (e, t) => ({ type: w, tweetId: e, options: t }),
        g = (e, t) => ({ type: T, tweetId: e, options: t }),
        _ = (0, d.vy)(E, {
          [o]: (e) => ({ ...e, initialized: !0 }),
          [w]: (e, t) => {
            let { tweetId: n, options: r } = t;
            return {
              ...e,
              pendingTweets: (0, i.A)(
                { tweetId: n, options: r },
                e.pendingTweets
              ),
            };
          },
        });
    },
  },
]);
//# sourceMappingURL=8241.a528da09.chunk.js.map
