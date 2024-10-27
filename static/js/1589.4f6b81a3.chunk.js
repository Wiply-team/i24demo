"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [1589, 9874],
  {
    43602: (e, r, t) => {
      t.d(r, { A: () => v });
      var s = t(33981),
        i = t(96637),
        o = t(20045),
        a = t(8761),
        c = (t(65043), t(96277)),
        l = t(83003),
        d = t(53975),
        n = t(70579);
      const u = (0, a.A)(
          (0, c.y3)((e) => {
            let { reducers: r, epics: t, loadResources: s } = e;
            return s(r, t);
          })
        )((e) => {
          let { children: r, areResourcesLoaded: t } = e;
          return t ? (0, n.jsx)(n.Fragment, { children: r }) : null;
        }),
        v = (0, l.Ng)(
          (e, r) => {
            let { reducers: t = [], epics: o = [] } = r;
            return {
              areResourcesLoaded:
                (0, s.A)((0, i.A)(e.lazyResources.reducers, t)) &&
                (0, s.A)((0, i.A)(e.lazyResources.epics, o)),
            };
          },
          (e) => ({ loadResources: (0, o.A)(e, d._H) })
        )(u);
    },
    21589: (e, r, t) => {
      t.r(r), t.d(r, { default: () => z });
      var s = t(20045),
        i = t(77701),
        o = t(65325),
        a = t(95605),
        c = t(8761),
        l = t(49874),
        d = t(1690),
        n = (t(65043), t(43602)),
        u = t(7639),
        v = t(96277),
        A = t(83003),
        h = t(27222),
        b = t(45411),
        y = t(29157),
        p = t(22203);
      const I = "VideoPlayButton_wrapper__E8Upk",
        g = "VideoPlayButton_button__C+iOv";
      var E = t(82975),
        m = t(70579);
      const V = (e) => {
          let { onClick: r, "aria-label": t } = e;
          return (0, m.jsx)("div", {
            className: I,
            children: (0, m.jsx)("button", {
              className: g,
              onClick: r,
              "aria-label": t,
              children: (0, m.jsx)(E.A, {}),
            }),
          });
        },
        _ = (0, y.A)(p.A),
        O = (0, b.A)("BrightcoveVideoPlayer"),
        j = (0, c.A)(
          (0, v.y3)((e) => {
            let { initBrightcoveLazyVideo: r, videoId: t } = e;
            return r(t);
          }, !0)
        )((e) => {
          let {
            autoPlay: r = !1,
            className: t = "",
            initBrightcoveLazyVideo: s,
            lazy: i,
            muted: o,
            playBrightcoveLazyVideo: a,
            posterSrc: c,
            videoId: l,
            locale: n,
            variant: v = "default",
            ...A
          } = e;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(u.A, { videoId: l }),
              i
                ? (0, m.jsxs)("div", {
                    className: "brightcove-lazy-player",
                    "data-video-id": l,
                    "data-video-auto-play": r,
                    children: [
                      (0, m.jsx)(d.A, {
                        lazy: !0,
                        src: c,
                        alt: "Video poster",
                        className: "video-poster",
                      }),
                      (0, h.lB)(l)
                        ? (0, m.jsx)("div", {
                            className: "poster-live ".concat(v),
                            children: _(n)("live"),
                          })
                        : null,
                      (0, m.jsx)("div", {
                        className: "play-button-wrapper",
                        children: (0, m.jsx)(V, {
                          onClick: () => a(l),
                          "aria-label": _(n)("play"),
                        }),
                      }),
                    ],
                  })
                : (0, m.jsx)(O, {
                    injectSchema: !1,
                    ...A,
                    locale: n,
                    videoId: l,
                    muted: !!r || o,
                    lazy: !0,
                    className: "".concat(t, " brightcove-lazy-player"),
                  }),
            ],
          });
        }),
        S = (0, A.Ng)(
          (e, r) => {
            let { videoId: t } = r;
            return {
              posterSrc: (0, h.ho)(e.router.locale, t),
              lazy: (0, s.A)(
                (0, i.A)(!0, "lazy"),
                (0, o.A)({}),
                (0, a.A)((e) => e.id === t)
              )(e.brightcoveVideo.videos),
              locale: e.router.locale,
            };
          },
          (e) => ({
            initBrightcoveLazyVideo: (0, s.A)(e, l.initBrightcoveLazyVideo),
            playBrightcoveLazyVideo: (0, s.A)(e, l.playBrightcoveLazyVideo),
          })
        )(j),
        N = (e) =>
          (0, m.jsx)(n.A, {
            reducers: ["brightcoveVideo"],
            epics: ["brightcoveVideo"],
            children: (0, m.jsx)(S, { ...e }),
          });
      N.Placeholder = () =>
        (0, m.jsx)("div", { className: "brightcove-lazy-player" });
      const z = N;
    },
    7639: (e, r, t) => {
      t.d(r, { A: () => l });
      var s = t(96277),
        i = t(20045),
        o = t(83003),
        a = t(79495);
      const c = (0, s.y3)((e) => {
          let { injectBrightcoveVideoSchema: r, videoId: t } = e;
          return r(t);
        })(() => null),
        l = (0, o.Ng)(null, (e) => ({
          injectBrightcoveVideoSchema: (0, i.A)(e, a.TX),
        }))(c);
    },
    22203: (e, r, t) => {
      t.d(r, { A: () => s });
      const s = {
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
    82975: (e, r, t) => {
      t.d(r, { A: () => o });
      t(65043);
      var s = t(7489),
        i = t(70579);
      const o = (e) => {
        let {
          width: r = 25,
          height: t = 25,
          "aria-label": o,
          className: a = "",
        } = e;
        return (0, i.jsx)(s.A, {
          className: a,
          width: r,
          height: t,
          viewBox: "0 0 1024 1024",
          "aria-label": o,
          children: (0, i.jsx)("path", {
            d: "M252.003 200l520.003 312-520.003 312z",
          }),
        });
      };
    },
    1690: (e, r, t) => {
      t.d(r, { A: () => re });
      var s = t(65043),
        i = t(8761),
        o = t(95518),
        a = t(83645),
        c = t(25854),
        l = t(88313),
        d = t(37068),
        n = t(61888),
        u = t(33373),
        v = t(48500),
        A = t(12224),
        h = t(94856),
        b = t(96188),
        y = t(36169),
        p = t(1393),
        I = t(82635),
        g = t(83317),
        E = t(33981),
        m = t(99185),
        V = t(4258),
        _ = t(80367),
        O = t(96277),
        j = t(20045),
        S = t(83003),
        N = t(79495);
      const z = (0, j.A)(
          (0, O.y3)((e) => {
            let {
              injectImagePreloadHints: r,
              preload: t = !1,
              src: s,
              sources: i,
            } = e;
            return t && r(s, i);
          })
        )(() => null),
        B = (0, S.Ng)(null, (e) => ({
          injectImagePreloadHints: (0, j.A)(e, N.yc),
        }))(z);
      var f = t(70579);
      const L = (0, l.A)([
          [(0, d.A)(String, "descriptor"), (0, n.A)("descriptor")],
          [u.A, (0, v.A)(null)],
        ]),
        x = (e, r) =>
          (0, i.A)(
            (0, A.A)(["width", "height"]),
            (0, a.A)(
              () => "image/webp" === r,
              (e) => ({ type: "webp", ...e })
            ),
            (r) => (0, _.f_)(r)(e)
          ),
        w = (e, r) =>
          (0, i.A)(
            (0, I.A)(
              ((e, r) =>
                (0, i.A)(
                  (0, h.A)([x(e, r), L]),
                  (0, b.A)((0, y.A)(c.A)),
                  (0, p.A)(" ")
                ))(e, r)
            ),
            (0, p.A)(", ")
          ),
        R = (e) =>
          (0, g.A)(
            (0, i.A)(
              (0, a.A)(E.A, (0, m.A)({})),
              (0, I.A)((0, V.A)("type", "image/webp"))
            )(e),
            e
          ),
        T = (0, s.forwardRef)((e, r) => {
          let {
            alt: t,
            dispatch: s,
            injectImagePreloadHints: o,
            preload: a,
            src: c,
            sources: l = [],
            ...d
          } = e;
          const n = ((e) =>
            (0, i.A)(
              R,
              (0, I.A)((r) => ({
                ...r,
                srcSet: r.renditions
                  ? w(e, r.type)(r.renditions)
                  : x(e, r.type)({}),
              }))
            ))(c)(l);
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(B, { preload: a, src: c, sources: n }),
              (0, f.jsxs)("picture", {
                children: [
                  n.map((e, r) =>
                    (0, f.jsx)(
                      "source",
                      {
                        type: e.type,
                        media: e.media,
                        sizes: e.sizes,
                        srcSet: e.srcSet,
                      },
                      r
                    )
                  ),
                  (0, f.jsx)("img", { alt: t, src: c, ...d, ref: r }),
                ],
              }),
            ],
          });
        });
      var D = t(28563);
      const C = (e) => {
        let {
          alt: r = "",
          className: t = "",
          fallbackSrc: l,
          onLoad: d,
          onError: n,
          src: u,
          ...v
        } = e;
        const A = (0, D.A)(),
          h = (0, s.useRef)(null),
          [b, y] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            h &&
              h.current &&
              h.current.src &&
              h.current.complete &&
              0 === h.current.naturalHeight &&
              y(!0);
          }, []),
          A && b
            ? (0, f.jsx)(T, { alt: r, className: t, src: l, ...v })
            : (0, f.jsx)(T, {
                alt: r,
                className: t,
                onLoad: d,
                onError: (0, i.A)(
                  (0, o.A)(() => y(!0)),
                  (0, a.A)(() => !(0, c.A)(n), n)
                ),
                src: u,
                ...v,
                ref: h,
              })
        );
      };
      var H = t(76426),
        P = t(71517),
        k = t(77701),
        G = t(35846),
        Y = t(8135),
        U = t(27266);
      const F = (0, k.A)(!1, "isIntersecting"),
        Z = (0, k.A)(!0, "isIntersecting"),
        K = (0, k.A)(!1, "isLoaded"),
        M = (0, k.A)(!1, "isLoadedWithErrors"),
        W = (0, G.A)([K, M]),
        X = (e, r) =>
          (0, Y.A)(W, (0, v.A)("".concat(r, " visible")), (0, v.A)(r))(e),
        q = (e, r) => (0, Y.A)(F, (0, v.A)(r), (0, v.A)(void 0))(e),
        J = (e, r) => (0, Y.A)(Z, (0, v.A)(r), (0, v.A)(void 0))(e),
        Q = (0, j.A)(
          (0, O.y3)((e) => {
            let { observe: r, observedItemId: t } = e;
            return r(U.lg, t);
          }, !0)
        )((e) => {
          let {
            className: r = "",
            dispatch: t,
            observe: s,
            observedItem: i = {},
            observedItemId: o,
            onError: a,
            onLoad: c,
            sources: l,
            src: d,
            fallbackSrc: n,
            ...u
          } = e;
          return (0, f.jsx)("div", {
            className: "lazyImageContainer",
            children: (0, f.jsx)(C, {
              "data-is": "lazy-image",
              "data-observed-item-id": o,
              className: X(i, r),
              src: q(i, d),
              sources: J(i, l),
              fallbackSrc: n,
              onError: () => a(U.lg, o),
              onLoad: () => c(U.lg, o),
              ...u,
            }),
          });
        }),
        $ = (0, S.Ng)(
          (e, r) => {
            let { src: t } = r;
            return {
              observedItemId: t,
              observedItem: (0, H.A)(
                ["intersectionObserver", "observedItems", U.lg, t],
                e
              ),
            };
          },
          (e) => ({
            onLoad: (0, j.A)(e, P.Kc),
            onError: (0, j.A)(e, P.Hj),
            observe: (0, j.A)(e, P.lB),
          })
        )(Q);
      var ee = t(52304);
      const re = (e) => {
        let {
          src: r,
          width: t,
          height: s,
          alt: i = "",
          className: o = "",
          lazy: a = !1,
          fallbackSrc: c = ee.bc,
          ...l
        } = e;
        return a
          ? (0, f.jsx)($, {
              src: (0, _.f_)({ width: t, height: s })(r),
              fallbackSrc: c,
              alt: i,
              className: o,
              ...l,
            })
          : (0, f.jsx)(C, {
              src: (0, _.f_)({ width: t, height: s })(r),
              fallbackSrc: c,
              alt: i,
              className: o,
              ...l,
            });
      };
    },
    49874: (e, r, t) => {
      t.r(r),
        t.d(r, {
          BRIGHTCOVE_VIDEO_DISPOSED: () => g,
          BRIGHTCOVE_VIDEO_PLAYED: () => E,
          BRIGHTCOVE_VIDEO_READY: () => p,
          CLEAR: () => V,
          DISPOSE_BRIGHTCOVE_VIDEO: () => I,
          INITIAL_STATE: () => h,
          INIT_BRIGHTCOVE_LAZY_VIDEO: () => b,
          INIT_BRIGHTCOVE_VIDEO: () => y,
          PLAY_BRIGHTCOVE_LAZY_VIDEO: () => m,
          clear: () => B,
          default: () => x,
          disposeBrightcoveVideo: () => N,
          initBrightcoveLazyVideo: () => _,
          initBrightcoveVideo: () => O,
          playBrightcoveLazyVideo: () => j,
          videoDisposed: () => f,
          videoPlayed: () => z,
          videoReady: () => S,
        });
      var s = t(48500),
        i = t(8761),
        o = t(56802),
        a = t(8135),
        c = t(87723),
        l = t(52527),
        d = t(52104),
        n = t(99185),
        u = t(37283),
        v = t(95605),
        A = t(42435);
      const h = { videos: [] },
        b = "brightcove-video/INIT_BRIGHTCOVE_LAZY_VIDEO",
        y = "brightcove-video/INIT_BRIGHTCOVE_VIDEO",
        p = "brightcove-video/BRIGHTCOVE_VIDEO_READY",
        I = "brightcove-video/DISPOSE_BRIGHTCOVE_VIDEO",
        g = "brightcove-video/BRIGHTCOVE_VIDEO_DISPOSED",
        E = "brightcove-video/BRIGHTCOVE_VIDEO_PLAYED",
        m = "brightcove-video/PLAY_BRIGHTCOVE_LAZY_VIDEO",
        V = "brightcove-video/CLEAR",
        _ = (e) => ({ type: b, videoId: e }),
        O = function (e) {
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
        j = (e) => ({ type: m, videoId: e }),
        S = (e, r, t, s) => ({
          type: p,
          videoId: e,
          lazy: r,
          autoPlay: t,
          muted: s,
        }),
        N = (e) => ({ type: I, videoId: e }),
        z = (e, r, t) => ({
          type: E,
          playerId: e,
          videoId: r,
          endScreenType: t,
        }),
        B = (0, s.A)({ type: V }),
        f = (0, s.A)({ type: g }),
        L = function (e) {
          let r =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (t) =>
            (0, i.A)(
              (0, o.A)((r) => r.id === e),
              (0, a.A)(
                (0, c.A)(l.A, 0),
                (r) => (0, d.A)(r, { id: e, lazy: !1 }, t),
                () => (0, n.A)({ id: e, lazy: r }, t)
              )
            )(t);
        },
        x = (0, A.vy)(h, {
          [V]: (0, s.A)(h),
          [b]: (e, r) => {
            let { videoId: t } = r;
            return {
              ...e,
              videos: (0, u.A)(
                (0, v.A)((e) => e.id === t),
                (0, n.A)({ id: t, lazy: !0 })
              )(e.videos),
            };
          },
          [y]: (e, r) => {
            let { videoId: t, lazy: s } = r;
            return { ...e, videos: L(t, s)(e.videos) };
          },
          [m]: (e, r) => {
            let { videoId: t } = r;
            return { ...e, videos: L(t)(e.videos) };
          },
        });
    },
    58089: (e, r, t) => {
      t.d(r, { A: () => s });
      const s = (0, t(7573).A)(function (e, r) {
        return (
          r instanceof e ||
          (null != r &&
            (r.constructor === e ||
              ("Object" === e.name && "object" === typeof r)))
        );
      });
    },
    37068: (e, r, t) => {
      t.d(r, { A: () => a });
      var s = t(89334),
        i = t(61888),
        o = t(58089);
      const a = (0, s.A)(function (e, r, t) {
        return (0, o.A)(e, (0, i.A)(r, t));
      });
    },
    52104: (e, r, t) => {
      t.d(r, { A: () => a });
      var s = t(89334),
        i = t(24314),
        o = t(48500);
      const a = (0, s.A)(function (e, r, t) {
        return (0, i.A)(e, (0, o.A)(r), t);
      });
    },
    96637: (e, r, t) => {
      t.d(r, { A: () => a });
      var s = t(7573),
        i = t(22216),
        o = t(76173);
      const a = (0, s.A)(function (e, r) {
        for (var t = new i.A(), s = 0; s < e.length; s += 1) t.add(e[s]);
        return (0, o.A)(t.has.bind(t), r);
      });
    },
  },
]);
//# sourceMappingURL=1589.4f6b81a3.chunk.js.map
