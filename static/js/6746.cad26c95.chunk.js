"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [6746, 9874, 8504],
  {
    16746: (e, t, i) => {
      i.r(t),
        i.d(t, {
          default: () => h,
          fetchLatestVideosEpic: () => O,
          focusVideoEpic: () => y,
          playNextVideoEpic: () => T,
        });
      var d = i(38504),
        o = i(36140),
        r = i(43472),
        l = i(86490),
        s = i(8761),
        I = i(65325),
        n = i(82635),
        E = i(87723),
        V = i(14321),
        v = i(50727),
        A = i(61888),
        a = i(25722),
        c = i(51198),
        p = i(43879),
        _ = i(64631),
        u = i(49874);
      const O = (e, t, i) => {
          let { fetchApi: r, logger: E } = i;
          return e.pipe(
            (0, o.g)(d.FETCH_LATEST_VIDEOS),
            (0, a.E)(t),
            (0, c.Z)((e) => {
              let [t, i] = e;
              return r(
                "/v2/".concat(i.router.locale, "/brightcove/top-videos")
              );
            }),
            (0, a.E)(t),
            (0, p.T)((e) => {
              let [t, i] = e;
              return (0, s.A)(
                (0, I.A)([]),
                (0, n.A)((e) => {
                  return {
                    id: (t = e).id,
                    title: t.title,
                    duration: t.duration,
                  };
                  var t;
                }),
                d.receiveLatestVideos
              )(t.body);
            }),
            (0, l.d$)("latestVideos :: fetchLatestVideosEpic", d.error, E)
          );
        },
        y = (e, t) =>
          e.pipe(
            (0, o.g)(d.RECEIVE_LATEST_VIDEOS, d.PREVIOUS, d.NEXT),
            (0, a.E)(t),
            (0, _.p)((e) => {
              let [t, i] = e;
              return (0, E.A)(
                (0, V.A)(i.latestVideos.list),
                i.latestVideos.activeIndex + 1
              );
            }),
            (0, p.T)((e) => {
              let [t, i] = e;
              return (0, s.A)(
                (0, v.A)(i.latestVideos.activeIndex + 1),
                (0, A.A)("id"),
                d.focusVideo
              )(i.latestVideos.list);
            })
          ),
        T = (e, t) =>
          e.pipe(
            (0, o.g)(d.PLAY_NEXT_VIDEO),
            (0, a.E)(t),
            (0, _.p)((e) => {
              let [t, i] = e;
              return i.latestVideos.playedVideo;
            }),
            (0, p.T)((e) => {
              let [t, i] = e;
              return (0, u.playBrightcoveLazyVideo)(i.latestVideos.playedVideo);
            })
          ),
        h = (0, r.E)(O, y, T);
    },
    49874: (e, t, i) => {
      i.r(t),
        i.d(t, {
          BRIGHTCOVE_VIDEO_DISPOSED: () => O,
          BRIGHTCOVE_VIDEO_PLAYED: () => y,
          BRIGHTCOVE_VIDEO_READY: () => _,
          CLEAR: () => h,
          DISPOSE_BRIGHTCOVE_VIDEO: () => u,
          INITIAL_STATE: () => a,
          INIT_BRIGHTCOVE_LAZY_VIDEO: () => c,
          INIT_BRIGHTCOVE_VIDEO: () => p,
          PLAY_BRIGHTCOVE_LAZY_VIDEO: () => T,
          clear: () => S,
          default: () => P,
          disposeBrightcoveVideo: () => C,
          initBrightcoveLazyVideo: () => D,
          initBrightcoveVideo: () => g,
          playBrightcoveLazyVideo: () => L,
          videoDisposed: () => x,
          videoPlayed: () => f,
          videoReady: () => R,
        });
      var d = i(48500),
        o = i(8761),
        r = i(56802),
        l = i(8135),
        s = i(87723),
        I = i(52527),
        n = i(52104),
        E = i(99185),
        V = i(37283),
        v = i(95605),
        A = i(42435);
      const a = { videos: [] },
        c = "brightcove-video/INIT_BRIGHTCOVE_LAZY_VIDEO",
        p = "brightcove-video/INIT_BRIGHTCOVE_VIDEO",
        _ = "brightcove-video/BRIGHTCOVE_VIDEO_READY",
        u = "brightcove-video/DISPOSE_BRIGHTCOVE_VIDEO",
        O = "brightcove-video/BRIGHTCOVE_VIDEO_DISPOSED",
        y = "brightcove-video/BRIGHTCOVE_VIDEO_PLAYED",
        T = "brightcove-video/PLAY_BRIGHTCOVE_LAZY_VIDEO",
        h = "brightcove-video/CLEAR",
        D = (e) => ({ type: c, videoId: e }),
        g = function (e) {
          return {
            type: p,
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
        L = (e) => ({ type: T, videoId: e }),
        R = (e, t, i, d) => ({
          type: _,
          videoId: e,
          lazy: t,
          autoPlay: i,
          muted: d,
        }),
        C = (e) => ({ type: u, videoId: e }),
        f = (e, t, i) => ({
          type: y,
          playerId: e,
          videoId: t,
          endScreenType: i,
        }),
        S = (0, d.A)({ type: h }),
        x = (0, d.A)({ type: O }),
        B = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (i) =>
            (0, o.A)(
              (0, r.A)((t) => t.id === e),
              (0, l.A)(
                (0, s.A)(I.A, 0),
                (t) => (0, n.A)(t, { id: e, lazy: !1 }, i),
                () => (0, E.A)({ id: e, lazy: t }, i)
              )
            )(i);
        },
        P = (0, A.vy)(a, {
          [h]: (0, d.A)(a),
          [c]: (e, t) => {
            let { videoId: i } = t;
            return {
              ...e,
              videos: (0, V.A)(
                (0, v.A)((e) => e.id === i),
                (0, E.A)({ id: i, lazy: !0 })
              )(e.videos),
            };
          },
          [p]: (e, t) => {
            let { videoId: i, lazy: d } = t;
            return { ...e, videos: B(i, d)(e.videos) };
          },
          [T]: (e, t) => {
            let { videoId: i } = t;
            return { ...e, videos: B(i)(e.videos) };
          },
        });
    },
    38504: (e, t, i) => {
      i.r(t),
        i.d(t, {
          CLEAN: () => O,
          ERROR: () => y,
          FETCH_LATEST_VIDEOS: () => _,
          FOCUS_VIDEO: () => g,
          INITIAL_STATE: () => p,
          NEXT: () => T,
          PLAY_NEXT_VIDEO: () => h,
          PLAY_VIDEO: () => L,
          PREVIOUS: () => D,
          RECEIVE_LATEST_VIDEOS: () => u,
          clean: () => f,
          default: () => b,
          error: () => S,
          fetchLatestVideos: () => R,
          focusVideo: () => P,
          next: () => x,
          playNextVideo: () => N,
          playVideo: () => H,
          previous: () => B,
          receiveLatestVideos: () => C,
        });
      var d = i(48500),
        o = i(88313),
        r = i(48098),
        l = i(52527),
        s = i(32709),
        I = i(33373),
        n = i(20828),
        E = i(87723),
        V = i(80982),
        v = i(20045);
      const A = (0, i(82130).A)(-1);
      var a = i(42435),
        c = i(12040);
      const p = {
          focusedVideo: null,
          playedVideo: null,
          fetching: !0,
          list: [],
          activeIndex: 0,
          error: !1,
        },
        _ = "latestVideos/FETCH",
        u = "latestVideos/RECEIVE",
        O = "latestVideos/CLEAN",
        y = "latestVideos/ERROR",
        T = "latestVideos/next",
        h = "latestVideos/PLAY_NEXT_VIDEO",
        D = "latestVideos/previous",
        g = "latestVideos/FOCUS_VIDEO",
        L = "latestVideos/PLAY_VIDEO",
        R = (0, d.A)({ type: _ }),
        C = (e) => ({ type: u, videos: e || [] }),
        f = (0, d.A)({ type: O }),
        S = (0, d.A)({ type: y }),
        x = (e) => ({ type: T, viewportWidth: e }),
        B = (e) => ({ type: D, viewportWidth: e }),
        P = (e) => ({ type: g, videoId: e }),
        H = (e) => ({ type: L, videoId: e }),
        N = (e, t) => ({ type: h, currentVideoId: e, viewportWidth: t }),
        Y = (e) =>
          (0, o.A)([
            [(0, r.A)(l.A, e - 1), (0, d.A)(0)],
            [(0, s.A)(l.A, 0), (0, d.A)(e - 1)],
            [I.A, n.A],
          ]),
        G = (e, t) =>
          (0, o.A)([
            [(0, E.A)(600), (0, d.A)(e.length)],
            [(0, E.A)(1280), (0, d.A)(e.length - 1)],
            [I.A, (0, d.A)(e.length - 2)],
          ])(t),
        b = (0, a.vy)(p, {
          [_]: (e) => ({ ...e, fetching: !0 }),
          [u]: (e, t) => {
            let { videos: i } = t;
            return { ...e, list: i, activeIndex: 0, fetching: !1, error: !1 };
          },
          [O]: (0, d.A)(p),
          [T]: (e, t) => {
            let { viewportWidth: i } = t;
            return { ...e, activeIndex: Y(G(e.list, i))(e.activeIndex + 1) };
          },
          [D]: (e, t) => {
            let { viewportWidth: i } = t;
            return { ...e, activeIndex: Y(G(e.list, i))(e.activeIndex - 1) };
          },
          [g]: (e, t) => {
            let { videoId: i } = t;
            return { ...e, focusedVideo: i };
          },
          [L]: (e, t) => {
            let { videoId: i } = t;
            return { ...e, playedVideo: i };
          },
          [h]: (e, t) => {
            let { currentVideoId: i, viewportWidth: r } = t;
            return {
              ...e,
              activeIndex: (0, c.U_)(r)
                ? Y(G(e.list, r))(e.activeIndex + 1)
                : ((s = G(e.list, r)),
                  (0, o.A)([
                    [(0, V.A)(l.A, 1), (0, d.A)(0)],
                    [(0, E.A)(l.A, s), (0, d.A)(s - 1)],
                    [I.A, (0, v.A)(A, n.A)],
                  ]))(e.list.findIndex((e) => e.id === i) + 1),
              focusedVideo:
                e.list.findIndex((e) => e.id === i) + 1 === e.list.length
                  ? e.list[e.list.findIndex((e) => e.id === i)].id
                  : e.list[e.list.findIndex((e) => e.id === i) + 1].id,
              playedVideo:
                e.list.findIndex((e) => e.id === i) + 1 === e.list.length
                  ? null
                  : e.list[e.list.findIndex((e) => e.id === i) + 1].id,
            };
            var s;
          },
          [y]: (e) => ({ ...e, error: !0 }),
        });
    },
    52104: (e, t, i) => {
      i.d(t, { A: () => l });
      var d = i(89334),
        o = i(24314),
        r = i(48500);
      const l = (0, d.A)(function (e, t, i) {
        return (0, o.A)(e, (0, r.A)(t), i);
      });
    },
  },
]);
//# sourceMappingURL=6746.cad26c95.chunk.js.map
