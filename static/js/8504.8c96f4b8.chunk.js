"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [8504],
  {
    38504: (e, t, i) => {
      i.r(t),
        i.d(t, {
          CLEAN: () => f,
          ERROR: () => x,
          FETCH_LATEST_VIDEOS: () => u,
          FOCUS_VIDEO: () => T,
          INITIAL_STATE: () => p,
          NEXT: () => _,
          PLAY_NEXT_VIDEO: () => y,
          PLAY_VIDEO: () => L,
          PREVIOUS: () => O,
          RECEIVE_LATEST_VIDEOS: () => h,
          clean: () => R,
          default: () => U,
          error: () => g,
          fetchLatestVideos: () => w,
          focusVideo: () => N,
          next: () => D,
          playNextVideo: () => P,
          playVideo: () => W,
          previous: () => S,
          receiveLatestVideos: () => C,
        });
      var d = i(48500),
        s = i(88313),
        l = i(48098),
        n = i(52527),
        o = i(32709),
        r = i(33373),
        A = i(20828),
        I = i(87723),
        a = i(80982),
        V = i(20045);
      const v = (0, i(82130).A)(-1);
      var E = i(42435),
        c = i(12040);
      const p = {
          focusedVideo: null,
          playedVideo: null,
          fetching: !0,
          list: [],
          activeIndex: 0,
          error: !1,
        },
        u = "latestVideos/FETCH",
        h = "latestVideos/RECEIVE",
        f = "latestVideos/CLEAN",
        x = "latestVideos/ERROR",
        _ = "latestVideos/next",
        y = "latestVideos/PLAY_NEXT_VIDEO",
        O = "latestVideos/previous",
        T = "latestVideos/FOCUS_VIDEO",
        L = "latestVideos/PLAY_VIDEO",
        w = (0, d.A)({ type: u }),
        C = (e) => ({ type: h, videos: e || [] }),
        R = (0, d.A)({ type: f }),
        g = (0, d.A)({ type: x }),
        D = (e) => ({ type: _, viewportWidth: e }),
        S = (e) => ({ type: O, viewportWidth: e }),
        N = (e) => ({ type: T, videoId: e }),
        W = (e) => ({ type: L, videoId: e }),
        P = (e, t) => ({ type: y, currentVideoId: e, viewportWidth: t }),
        k = (e) =>
          (0, s.A)([
            [(0, l.A)(n.A, e - 1), (0, d.A)(0)],
            [(0, o.A)(n.A, 0), (0, d.A)(e - 1)],
            [r.A, A.A],
          ]),
        F = (e, t) =>
          (0, s.A)([
            [(0, I.A)(600), (0, d.A)(e.length)],
            [(0, I.A)(1280), (0, d.A)(e.length - 1)],
            [r.A, (0, d.A)(e.length - 2)],
          ])(t),
        U = (0, E.vy)(p, {
          [u]: (e) => ({ ...e, fetching: !0 }),
          [h]: (e, t) => {
            let { videos: i } = t;
            return { ...e, list: i, activeIndex: 0, fetching: !1, error: !1 };
          },
          [f]: (0, d.A)(p),
          [_]: (e, t) => {
            let { viewportWidth: i } = t;
            return { ...e, activeIndex: k(F(e.list, i))(e.activeIndex + 1) };
          },
          [O]: (e, t) => {
            let { viewportWidth: i } = t;
            return { ...e, activeIndex: k(F(e.list, i))(e.activeIndex - 1) };
          },
          [T]: (e, t) => {
            let { videoId: i } = t;
            return { ...e, focusedVideo: i };
          },
          [L]: (e, t) => {
            let { videoId: i } = t;
            return { ...e, playedVideo: i };
          },
          [y]: (e, t) => {
            let { currentVideoId: i, viewportWidth: l } = t;
            return {
              ...e,
              activeIndex: (0, c.U_)(l)
                ? k(F(e.list, l))(e.activeIndex + 1)
                : ((o = F(e.list, l)),
                  (0, s.A)([
                    [(0, a.A)(n.A, 1), (0, d.A)(0)],
                    [(0, I.A)(n.A, o), (0, d.A)(o - 1)],
                    [r.A, (0, V.A)(v, A.A)],
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
            var o;
          },
          [x]: (e) => ({ ...e, error: !0 }),
        });
    },
  },
]);
//# sourceMappingURL=8504.8c96f4b8.chunk.js.map
