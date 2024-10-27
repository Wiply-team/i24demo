"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [9874],
  {
    49874: (e, d, i) => {
      i.r(d),
        i.d(d, {
          BRIGHTCOVE_VIDEO_DISPOSED: () => T,
          BRIGHTCOVE_VIDEO_PLAYED: () => h,
          BRIGHTCOVE_VIDEO_READY: () => a,
          CLEAR: () => u,
          DISPOSE_BRIGHTCOVE_VIDEO: () => c,
          INITIAL_STATE: () => l,
          INIT_BRIGHTCOVE_LAZY_VIDEO: () => y,
          INIT_BRIGHTCOVE_VIDEO: () => D,
          PLAY_BRIGHTCOVE_LAZY_VIDEO: () => s,
          clear: () => H,
          default: () => S,
          disposeBrightcoveVideo: () => p,
          initBrightcoveLazyVideo: () => R,
          initBrightcoveVideo: () => g,
          playBrightcoveLazyVideo: () => B,
          videoDisposed: () => L,
          videoPlayed: () => G,
          videoReady: () => C,
        });
      var o = i(48500),
        I = i(8761),
        t = i(56802),
        v = i(8135),
        E = i(87723),
        r = i(52527),
        _ = i(52104),
        n = i(99185),
        O = i(37283),
        V = i(95605),
        A = i(42435);
      const l = { videos: [] },
        y = "brightcove-video/INIT_BRIGHTCOVE_LAZY_VIDEO",
        D = "brightcove-video/INIT_BRIGHTCOVE_VIDEO",
        a = "brightcove-video/BRIGHTCOVE_VIDEO_READY",
        c = "brightcove-video/DISPOSE_BRIGHTCOVE_VIDEO",
        T = "brightcove-video/BRIGHTCOVE_VIDEO_DISPOSED",
        h = "brightcove-video/BRIGHTCOVE_VIDEO_PLAYED",
        s = "brightcove-video/PLAY_BRIGHTCOVE_LAZY_VIDEO",
        u = "brightcove-video/CLEAR",
        R = (e) => ({ type: y, videoId: e }),
        g = function (e) {
          return {
            type: D,
            videoId: e,
            lazy:
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            autoPlay:
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            muted:
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            endScreenType:
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null,
            onEnd:
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : () => {},
          };
        },
        B = (e) => ({ type: s, videoId: e }),
        C = (e, d, i, o) => ({
          type: a,
          videoId: e,
          lazy: d,
          autoPlay: i,
          muted: o,
        }),
        p = (e) => ({ type: c, videoId: e }),
        G = (e, d, i) => ({
          type: h,
          playerId: e,
          videoId: d,
          endScreenType: i,
        }),
        H = (0, o.A)({ type: u }),
        L = (0, o.A)({ type: T }),
        P = function (e) {
          let d =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (i) =>
            (0, I.A)(
              (0, t.A)((d) => d.id === e),
              (0, v.A)(
                (0, E.A)(r.A, 0),
                (d) => (0, _.A)(d, { id: e, lazy: !1 }, i),
                () => (0, n.A)({ id: e, lazy: d }, i)
              )
            )(i);
        },
        S = (0, A.vy)(l, {
          [u]: (0, o.A)(l),
          [y]: (e, d) => {
            let { videoId: i } = d;
            return {
              ...e,
              videos: (0, O.A)(
                (0, V.A)((e) => e.id === i),
                (0, n.A)({ id: i, lazy: !0 })
              )(e.videos),
            };
          },
          [D]: (e, d) => {
            let { videoId: i, lazy: o } = d;
            return { ...e, videos: P(i, o)(e.videos) };
          },
          [s]: (e, d) => {
            let { videoId: i } = d;
            return { ...e, videos: P(i)(e.videos) };
          },
        });
    },
    52104: (e, d, i) => {
      i.d(d, { A: () => v });
      var o = i(89334),
        I = i(24314),
        t = i(48500);
      const v = (0, o.A)(function (e, d, i) {
        return (0, I.A)(e, (0, t.A)(d), i);
      });
    },
  },
]);
//# sourceMappingURL=9874.4b745cfc.chunk.js.map
