"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [4859, 9874],
  {
    43602: (e, r, i) => {
      i.d(r, { A: () => v });
      var o = i(33981),
        t = i(96637),
        d = i(20045),
        s = i(8761),
        c = (i(65043), i(96277)),
        n = i(83003),
        l = i(53975),
        a = i(70579);
      const u = (0, s.A)(
          (0, c.y3)((e) => {
            let { reducers: r, epics: i, loadResources: o } = e;
            return o(r, i);
          })
        )((e) => {
          let { children: r, areResourcesLoaded: i } = e;
          return i ? (0, a.jsx)(a.Fragment, { children: r }) : null;
        }),
        v = (0, n.Ng)(
          (e, r) => {
            let { reducers: i = [], epics: d = [] } = r;
            return {
              areResourcesLoaded:
                (0, o.A)((0, t.A)(e.lazyResources.reducers, i)) &&
                (0, o.A)((0, t.A)(e.lazyResources.epics, d)),
            };
          },
          (e) => ({ loadResources: (0, d.A)(e, l._H) })
        )(u);
    },
    54859: (e, r, i) => {
      i.r(r), i.d(r, { default: () => A, guessLiveVideoPlayerId: () => v });
      var o = i(40474),
        t = (i(65043), i(25113)),
        d = i(70579);
      const s = (e) => {
        let { autoPlay: r = !0, muted: i = !0, ...o } = e;
        return (0, d.jsx)(t.A, { autoPlay: r, muted: i, ...o });
      };
      var c = i(43602),
        n = i(85556),
        l = i(88313),
        a = i(48500),
        u = i(33373);
      const v = (0, l.A)([
          [n.bn, (0, a.A)("qwDfmQydf")],
          [n.L6, (0, a.A)("S77JEhYlPz")],
          [n.uP, (0, a.A)("NwpCHKlKW")],
          [u.A, (0, a.A)("oHEyVVUhv")],
        ]),
        A = (e) =>
          (0, d.jsx)(c.A, {
            reducers: ["brightcoveVideo"],
            epics: ["brightcoveVideo"],
            children: (0, d.jsx)(o.A, {
              playerId: v(e.locale),
              children: (0, d.jsx)(s, {
                ...e,
                playerId: v(e.locale),
                accountId: "5377161796001",
              }),
            }),
          });
    },
    40474: (e, r, i) => {
      i.d(r, { A: () => E });
      i(65043);
      var o = i(8761),
        t = i(95605),
        d = i(29874),
        s = i(8135),
        c = i(25854),
        n = i(87211),
        l = i(61888),
        a = i(20045),
        u = i(76435),
        v = i(96277),
        A = i(83003),
        p = i(29792),
        I = i(70579);
      const y = (0, v.y3)((e) => {
          let { loadScript: r, src: i } = e;
          return r(i);
        }, !0)((e) => {
          let { ready: r, children: i } = e;
          return r ? i : (0, I.jsx)(u.A, {});
        }),
        b = (0, A.Ng)(
          (e, r) => ({
            ready: (0, o.A)(
              (0, t.A)((0, d.A)(r.src, "src")),
              (0, s.A)(c.A, n.A, (0, l.A)("ready"))
            )(e.scripts.scripts),
          }),
          (e) => ({ loadScript: (0, a.A)(e, p.k0) })
        )(y),
        h = (e) =>
          "https://players.brightcove.net/"
            .concat("5377161796001", "/")
            .concat(e, "_default/index.min.js"),
        E = (e) => {
          let { playerId: r, children: i } = e;
          return (0, I.jsx)(b, { src: h(r), children: i });
        };
    },
    25113: (e, r, i) => {
      i.d(r, { A: () => b });
      var o = i(96277),
        t = i(20045),
        d = i(8761),
        s = i(49874),
        c = i(88313),
        n = i(33373),
        l = i(57079),
        a = (i(65043), i(29157)),
        u = i(22203),
        v = i(70579);
      const A = (e, r) =>
          (0, c.A)([
            [() => "pinned" === r, (e) => "".concat(e, " video-wrapper-pip")],
            [n.A, (e) => "".concat(e, " video-wrapper")],
          ])(e),
        p = (0, a.A)(u.A);
      var I = i(83003);
      const y = (0, d.A)(
          (0, o.y3)((e) => {
            let {
              initBrightcoveVideo: r,
              videoId: i,
              lazy: o,
              autoPlay: t,
              muted: d,
              endScreenType: s,
              onEnd: c,
            } = e;
            return r(i, o, t, d, s, c);
          }),
          (0, o.qm)((e) => {
            let { disposeBrightcoveVideo: r, videoId: i } = e;
            return r(i);
          })
        )((e) => {
          let {
            locale: r,
            className: i = "",
            accountId: o,
            playerId: t,
            videoId: d,
            pictureInPicture: s,
            onClose: c,
          } = e;
          return (0, v.jsxs)("div", {
            className: A(i, s),
            children: [
              (0, v.jsx)("video", {
                "data-video-id": d,
                "data-player": t,
                "data-account": o,
                "data-embed": "default",
                "data-application-id": !0,
                className: "brightcove-video video-js",
                controls: !0,
                playsInline: !0,
              }),
              c
                ? (0, v.jsx)("button", {
                    className: "video-close-button",
                    onClick: c,
                    "aria-label": p(r)("close"),
                    children: (0, v.jsx)(l.A, { width: 10, height: 10 }),
                  })
                : null,
            ],
          });
        }),
        b = (0, I.Ng)(
          (e) => ({ locale: e.router.locale }),
          (e) => ({
            initBrightcoveVideo: (0, t.A)(e, s.initBrightcoveVideo),
            disposeBrightcoveVideo: (0, t.A)(e, s.disposeBrightcoveVideo),
          })
        )(y);
    },
    22203: (e, r, i) => {
      i.d(r, { A: () => o });
      const o = {
        english: {
          subscribeToOurNewsletter: "Subscribe to our newsletter",
          stayUpdated: "Stay updated",
          subscribe: "Subscribe",
          subscriptionError: "An error occurred",
          subscriptionSuccess: "Subscribed",
          play: "Play the video",
          link: "/en/newsletter",
          live: "Live",
          close: "Close video",
        },
        french: {
          subscribeToOurNewsletter: "Abonnez-vous \xe0 notre newsletter",
          stayUpdated: "Restez \xe0 jour",
          subscribe: "S'abonner",
          subscriptionError: "Une erreur est survenue",
          subscriptionSuccess: "Abonn\xe9",
          play: "Lancer la video",
          link: "/fr/newsletter",
          live: "En direct",
          close: "Fermer la vid\xe9o",
        },
        arabic: {
          subscribeToOurNewsletter:
            "\u0627\u0634\u062a\u0631\u0643 \u0641\u064a \u0627\u0644\u0646\u0634\u0631\u0629 \u0627\u0644\u0625\u062e\u0628\u0627\u0631\u064a\u0629",
          stayUpdated:
            "\u0627\u0628\u0642\u0649 \u0639\u0644\u0649 \u0625\u0637\u0644\u0627\u0639",
          subscribe: "\u0625\u0634\u062a\u0631\u0643",
          subscriptionError: "\u062d\u062f\u062b \u062e\u0637\u0623",
          subscriptionSuccess: "\u0645\u0634\u062a\u0631\u0643",
          play: "\u0642\u0645 \u0628\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648",
          link: "/ar/\u0627\u0644\u0646\u0634\u0631\u0629 \u0627\u0644\u0625\u062e\u0628\u0627\u0631\u064a\u0629",
          live: "\u0645\u0628\u0627\u0634\u0631",
          close:
            "\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0641\u064a\u062f\u064a\u0648",
        },
        hebrew: {
          subscribeToOurNewsletter:
            "\u05d4\u05d9\u05e8\u05e9\u05dd \u05dc\u05e0\u05d9\u05d5\u05d6\u05dc\u05d8\u05e8",
          stayUpdated:
            "\u05d4\u05d9\u05e9\u05d0\u05e8 \u05de\u05e2\u05d5\u05d3\u05db\u05df",
          subscribe: "\u05d4\u05d9\u05e8\u05e9\u05dd",
          subscriptionError:
            "\u05d0\u05d9\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4",
          subscriptionSuccess: "\u05e0\u05e8\u05e9\u05dd",
          play: "\u05e0\u05d2\u05df \u05d0\u05ea \u05d4\u05e1\u05e8\u05d8\u05d5\u05df",
          link: "/he/newsletter",
          live: "\u05d7\u05d9",
          close: "\u05e1\u05d2\u05d5\u05e8 \u05d5\u05d9\u05d3\u05d0\u05d5",
        },
      };
    },
    49874: (e, r, i) => {
      i.r(r),
        i.d(r, {
          BRIGHTCOVE_VIDEO_DISPOSED: () => E,
          BRIGHTCOVE_VIDEO_PLAYED: () => V,
          BRIGHTCOVE_VIDEO_READY: () => b,
          CLEAR: () => g,
          DISPOSE_BRIGHTCOVE_VIDEO: () => h,
          INITIAL_STATE: () => p,
          INIT_BRIGHTCOVE_LAZY_VIDEO: () => I,
          INIT_BRIGHTCOVE_VIDEO: () => y,
          PLAY_BRIGHTCOVE_LAZY_VIDEO: () => _,
          clear: () => C,
          default: () => P,
          disposeBrightcoveVideo: () => B,
          initBrightcoveLazyVideo: () => O,
          initBrightcoveVideo: () => T,
          playBrightcoveLazyVideo: () => D,
          videoDisposed: () => w,
          videoPlayed: () => S,
          videoReady: () => R,
        });
      var o = i(48500),
        t = i(8761),
        d = i(56802),
        s = i(8135),
        c = i(87723),
        n = i(52527),
        l = i(52104),
        a = i(99185),
        u = i(37283),
        v = i(95605),
        A = i(42435);
      const p = { videos: [] },
        I = "brightcove-video/INIT_BRIGHTCOVE_LAZY_VIDEO",
        y = "brightcove-video/INIT_BRIGHTCOVE_VIDEO",
        b = "brightcove-video/BRIGHTCOVE_VIDEO_READY",
        h = "brightcove-video/DISPOSE_BRIGHTCOVE_VIDEO",
        E = "brightcove-video/BRIGHTCOVE_VIDEO_DISPOSED",
        V = "brightcove-video/BRIGHTCOVE_VIDEO_PLAYED",
        _ = "brightcove-video/PLAY_BRIGHTCOVE_LAZY_VIDEO",
        g = "brightcove-video/CLEAR",
        O = (e) => ({ type: I, videoId: e }),
        T = function (e) {
          return {
            type: y,
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
        D = (e) => ({ type: _, videoId: e }),
        R = (e, r, i, o) => ({
          type: b,
          videoId: e,
          lazy: r,
          autoPlay: i,
          muted: o,
        }),
        B = (e) => ({ type: h, videoId: e }),
        S = (e, r, i) => ({
          type: V,
          playerId: e,
          videoId: r,
          endScreenType: i,
        }),
        C = (0, o.A)({ type: g }),
        w = (0, o.A)({ type: E }),
        L = function (e) {
          let r =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (i) =>
            (0, t.A)(
              (0, d.A)((r) => r.id === e),
              (0, s.A)(
                (0, c.A)(n.A, 0),
                (r) => (0, l.A)(r, { id: e, lazy: !1 }, i),
                () => (0, a.A)({ id: e, lazy: r }, i)
              )
            )(i);
        },
        P = (0, A.vy)(p, {
          [g]: (0, o.A)(p),
          [I]: (e, r) => {
            let { videoId: i } = r;
            return {
              ...e,
              videos: (0, u.A)(
                (0, v.A)((e) => e.id === i),
                (0, a.A)({ id: i, lazy: !0 })
              )(e.videos),
            };
          },
          [y]: (e, r) => {
            let { videoId: i, lazy: o } = r;
            return { ...e, videos: L(i, o)(e.videos) };
          },
          [_]: (e, r) => {
            let { videoId: i } = r;
            return { ...e, videos: L(i)(e.videos) };
          },
        });
    },
    52104: (e, r, i) => {
      i.d(r, { A: () => s });
      var o = i(89334),
        t = i(24314),
        d = i(48500);
      const s = (0, o.A)(function (e, r, i) {
        return (0, t.A)(e, (0, d.A)(r), i);
      });
    },
    96637: (e, r, i) => {
      i.d(r, { A: () => s });
      var o = i(7573),
        t = i(22216),
        d = i(76173);
      const s = (0, o.A)(function (e, r) {
        for (var i = new t.A(), o = 0; o < e.length; o += 1) i.add(e[o]);
        return (0, d.A)(i.has.bind(i), r);
      });
    },
  },
]);
//# sourceMappingURL=4859.0c73a6b6.chunk.js.map
