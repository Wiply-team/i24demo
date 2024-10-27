"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [9591],
  {
    89591: (e, t, i) => {
      i.r(t),
        i.d(t, {
          attachEndscreenNavigationEvents: () => ae,
          autoplayVideoEpic: () => ce,
          clearBrightcoveVideosEpic: () => Ae,
          default: () => ge,
          disposeVideoEpic: () => le,
          endscreenVideoWithPlaylistEpic: () => ve,
          endscreenVideoWithSubscriptionEpic: () => ue,
          generatePageNode: () => ie,
          generatePlaylistOverlayNode: () => te,
          generateSubscriptionOverlayNode: () => ee,
          generateVideoNode: () => re,
          initVideoEpic: () => se,
          pauseOtherVideosEpic: () => pe,
          videoPlayedEpic: () => de,
        });
      var r = i(49874),
        o = i(84003),
        a = i(36169),
        n = i(25854),
        d = i(61888),
        s = i(8761),
        l = i(13884),
        c = i(83645),
        p = i(95518),
        v = i(42235),
        u = i(91199),
        A = i(18316),
        g = i(82635),
        y = i(34778),
        h = i(4258),
        b = i(35846),
        E = i(94473),
        I = i(96188),
        V = i(48426),
        O = i(76426),
        T = i(2169),
        S = i(4036),
        _ = i(1393),
        D = i(20045),
        P = i(17070),
        m = (i(65043), i(66885)),
        w = i(25406),
        B = i(36140),
        R = i(43472),
        C = i(43879),
        f = i(58468),
        x = i(51198),
        L = i(64631),
        N = i(16114),
        H = i(25722),
        G = i(12040),
        k = i(86490),
        q = i(52304),
        M = i(27222),
        z = i(90645),
        Y = i(22203),
        j = i(49732),
        F = i(75243),
        U = i(5995),
        Z = i(41662),
        W = i(82975),
        Q = i(2050),
        $ = i(70579);
      const J = (e, t) =>
          e.querySelector('video[data-video-id="'.concat(t, '"]')),
        K = (0, o.A)([
          (0, a.A)(n.A),
          (0, d.A)("overlay"),
          (e) => e.overlays_ && 0 === e.overlays_.length,
        ]),
        X = (e, t) =>
          (0, s.A)(
            (0, l.A)(t, M.rd),
            (0, c.A)((0, a.A)(n.A), (t) => t.getPlayer(e))
          )(e),
        ee = (e, t) =>
          (0, s.A)(
            () =>
              new DOMParser().parseFromString(
                '<div class="bclsOverlay subscription-overlay">\n      <div class="container">\n        <span class="logo">\n          '
                  .concat(
                    (0, m.F0)((0, $.jsx)(Q.A, { width: 49, height: 28 })),
                    "\n        </span>\n        <h4>"
                  )
                  .concat(t("stayUpdated"), "</h4>\n        <p>")
                  .concat(
                    t("subscribeToOurNewsletter"),
                    '</p>\n        <a class="subscribe" href='
                  )
                  .concat(t("link"), ">")
                  .concat(t("subscribe"), "</a>\n      </div>\n    </div>"),
                "text/html"
              ).body.firstChild,
            (0, p.A)((t) =>
              t.querySelector(".subscribe").addEventListener("click", (t) => {
                e.isFullscreen() && e.exitFullscreen();
              })
            )
          )(),
        te = (e, t, i, r) =>
          (0, s.A)(
            () =>
              new DOMParser().parseFromString(
                '<div class="bclsOverlay playlist-overlay">\n      <div class="navigation">\n        <button class="previous" aria-label="'
                  .concat(i.previous, '">\n          ')
                  .concat(
                    (0, m.F0)((0, $.jsx)(Z.A, { height: 20 })),
                    '\n        </button>\n      </div>\n      <div class="last-videos">\n        '
                  )
                  .concat(
                    r
                      ? ""
                      : (0, m.F0)(
                          (0, $.jsx)(U.A, {
                            level: "2",
                            size: "small",
                            color: "light",
                            children: i.title,
                          })
                        ),
                    '\n      </div>\n      <div class="navigation">\n        <button class="next" aria-label="'
                  )
                  .concat(i.next, '">\n          ')
                  .concat(
                    (0, m.F0)((0, $.jsx)(Z.A, { height: 20 })),
                    "\n        </button>\n      </div>\n    </div>"
                  ),
                "text/html"
              ).body.firstChild,
            (0, p.A)(ae),
            (0, p.A)((o) => oe(o.querySelector(".last-videos"), e, t, r, i))
          )(),
        ie = (e, t, i, r) =>
          (0, s.A)(
            () =>
              new DOMParser().parseFromString(
                '<div class="page '
                  .concat(1 === t ? "active" : "", '" data-page=')
                  .concat((0, z.inDoubleQuotedAttr)(t), "></div>"),
                "text/html"
              ).body.firstChild,
            (0, p.A)((t) => (0, v.A)((e) => t.append(re(e, i, r)))(e))
          )(),
        re = (e, t, i) =>
          (0, s.A)(
            () =>
              new DOMParser().parseFromString(
                '<a>\n      <figure class="video-figure">\n        <img src="'
                  .concat(
                    (0, z.inDoubleQuotedAttr)(
                      (0, u.A)(q.bc, ["images", "poster", "src"], e)
                    ),
                    '" />\n        <figcaption>'
                  )
                  .concat(
                    (0, z.inHTMLData)(e.name),
                    '</figcaption>\n        <p class="video-player">\n          <button aria-label="'
                  )
                  .concat(i.play, '">')
                  .concat(
                    (0, m.F0)((0, $.jsx)(W.A, {})),
                    "</button>\n        </p>\n      </figure>\n    </a>"
                  ),
                "text/html"
              ).body.firstChild,
            (0, p.A)((i) =>
              i.addEventListener("click", (i) => {
                i.preventDefault(),
                  t.catalog.getVideo(e.id, (e, i) => {
                    e || (t.catalog.load(i), t.on("loadstart", t.play));
                  });
              })
            )
          )(),
        oe = (e, t, i, r, o) =>
          (0, A.A)(g.A)(
            (0, s.A)(
              (e, t) => ie(e, t + 1, i, o),
              (t) => e.append(t)
            )
          )((0, y.A)(r ? 1 : 3, t)),
        ae = (0, s.A)(
          (0, p.A)((e) =>
            e
              .querySelector(".navigation .previous")
              .addEventListener("click", ne(e, !1))
          ),
          (0, p.A)((e) =>
            e
              .querySelector(".navigation .next")
              .addEventListener("click", ne(e, !0))
          )
        ),
        ne = (e, t) => (i) => {
          const r = e.querySelector(".page.active"),
            o = t ? parseInt(r.dataset.page) + 1 : parseInt(r.dataset.page) - 1,
            a = e.querySelector('.page[data-page="'.concat(o, '"]'));
          r.classList.remove("active"),
            a
              ? a.classList.add("active")
              : e
                  .querySelector(
                    t ? '.page[data-page="1"]' : ".page:last-child"
                  )
                  .classList.add("active");
        },
        de = (e, t, i) => {
          let { logger: o } = i;
          return w.MM.pipe(
            (0, C.T)((e) => {
              let { playerId: t, videoId: i, endScreenType: o } = e;
              return (0, r.videoPlayed)(t, i, o);
            }),
            (0, k.qn)("brightcoveVideo :: videoPlayedEpic", o)
          );
        },
        se = (e, t, i) => {
          let { getBrightcoveSdk: o, document: d, logger: p } = i;
          return e.pipe(
            (0, B.g)(r.INIT_BRIGHTCOVE_VIDEO),
            (0, C.T)((e) =>
              (0, h.A)(
                "players",
                (0, g.A)(
                  (e) =>
                    ((e, t) =>
                      (0, s.A)(
                        (0, l.A)(t, M.rd),
                        (0, c.A)((0, a.A)(n.A), (t) => t(e))
                      )(e))(e, o),
                  ((e, t) =>
                    e.querySelectorAll(
                      'video[data-video-id="'.concat(t, '"]')
                    ))(d, e.videoId)
                ),
                e
              )
            ),
            (0, f.M)((e) => {
              let {
                videoId: t,
                autoPlay: i,
                players: r,
                endScreenType: o,
                onEnd: a,
              } = e;
              return (0, v.A)((e) => {
                e.on("play", (e) =>
                  w.MM.next({
                    playerId: e.target.id,
                    videoId: t,
                    autoPlay: i,
                    endScreenType: o,
                  })
                ),
                  e.off("ended"),
                  e.on("ended", () => a(e));
              }, r);
            }),
            (0, x.Z)((e) => {
              let { players: t, ...i } = e;
              return Promise.all([
                i,
                ...(0, g.A)((e) => new Promise((t) => e.ready(() => t(e))), t),
              ]);
            }),
            (0, C.T)((e) => {
              let [{ videoId: t, lazy: i, autoPlay: o, muted: a }] = e;
              return (0, r.videoReady)(t, i, o, a);
            }),
            (0, k.qn)("brightcoveVideo :: initVideoEpic", p)
          );
        },
        le = (e, t, i) => {
          let { document: o, logger: d, getBrightcovePlayerSdk: p } = i;
          return e.pipe(
            (0, B.g)(r.DISPOSE_BRIGHTCOVE_VIDEO),
            (0, C.T)((e) => {
              let { videoId: t } = e;
              return J(o, t);
            }),
            (0, L.p)((0, a.A)(n.A)),
            (0, f.M)((e) =>
              (0, s.A)(
                (0, l.A)(p, M.rd),
                (0, c.A)((0, a.A)(n.A), (t) => t(e).dispose())
              )(e)
            ),
            (0, C.T)(r.videoDisposed),
            (0, k.qn)("brightcoveVideo :: disposeVideoEpic", d)
          );
        },
        ce = (e, t, i) => {
          let { document: o, getBrightcovePlayerSdk: s, logger: c } = i;
          return e.pipe(
            (0, B.g)(r.BRIGHTCOVE_VIDEO_READY),
            (0, L.p)((0, b.A)([(0, d.A)("lazy"), (0, d.A)("autoPlay")])),
            (0, C.T)((e) => (0, h.A)("player", X(J(o, e.videoId), s), e)),
            (0, L.p)((0, l.A)((0, a.A)(n.A), (0, d.A)("player"))),
            (0, f.M)((e) => {
              let { muted: t, player: i } = e;
              return i.muted(t);
            }),
            (0, f.M)((e) => {
              let { player: t } = e;
              return t.play();
            }),
            (0, N.w)(),
            (0, k.qn)("brightcoveVideo :: autoplayVideoEpic", c)
          );
        },
        pe = (e, t, i) => {
          let { logger: o, getBrightcoveRootSdk: d } = i;
          return e.pipe(
            (0, B.g)(r.BRIGHTCOVE_VIDEO_PLAYED),
            (0, C.T)((e) => {
              let { playerId: t } = e;
              return (0, s.A)(
                () => (0, E.A)(d()),
                (0, I.A)((e) => (0, V.A)([e, "videojs"], d())),
                (0, g.A)((e) => (0, O.A)([e, "videojs"], d())),
                (0, v.A)(
                  (0, s.A)(
                    (e) => e.getPlayers(),
                    (0, I.A)((0, a.A)(n.A)),
                    (0, T.A)(
                      (0, c.A)(
                        (e) => !(0, S.A)(t, e.id()),
                        (e) => e.pause()
                      )
                    )
                  )
                )
              )();
            }),
            (0, N.w)(),
            (0, k.qn)("brightcoveVideo :: pauseOtherVideosEpic", o)
          );
        },
        ve = (e, t, i) => {
          let {
            window: o,
            document: a,
            getBrightcovePlayerSdk: n,
            fetchApi: d,
            logger: l,
            translate: c,
          } = i;
          return e.pipe(
            (0, B.g)(r.BRIGHTCOVE_VIDEO_PLAYED),
            (0, L.p)((e) => {
              let { endScreenType: t } = e;
              return t === M.qM;
            }),
            (0, C.T)((e) => {
              let { _: t, videoId: i } = e;
              return J(a, i);
            }),
            (0, C.T)((e) => X(e, n)),
            (0, L.p)(K),
            (0, H.E)(t),
            (0, x.Z)(
              (e) => {
                let [t, i] = e;
                return d(
                  (0, _.A)("", [
                    "/v2/".concat(i.router.locale, "/brightcove/playlists"),
                    "/".concat((0, M.Vd)(i.router.locale), "/videos"),
                    "?limit=13",
                  ])
                );
              },
              (e, t) => {
                let [i, r] = e;
                return [
                  (0, D.A)(
                    (0, P.A)(12),
                    (0, I.A)((e) => e.id !== i.mediainfo.id)
                  )(t.body),
                  i,
                  r.router.locale,
                ];
              }
            ),
            (0, f.M)((e) => {
              let [t, i, r] = e;
              return (0, s.A)(
                (e) =>
                  te(
                    e,
                    i,
                    {
                      previous: c(j.A)(r)("previous"),
                      next: c(j.A)(r)("next"),
                      play: c(Y.A)(r)("play"),
                      title: c(j.A)(r)("topVideos"),
                    },
                    (0, G.$B)(o)
                  ),
                (e) =>
                  i.overlay({
                    overlays: [
                      { align: "top", content: e, start: "ended", end: "play" },
                    ],
                  })
              )(t);
            }),
            (0, N.w)(),
            (0, k.qn)("brightcoveVideo :: endscreenVideoWithPlaylistEpic", l)
          );
        },
        ue = (e, t, i) => {
          let {
            document: o,
            getBrightcovePlayerSdk: a,
            logger: d,
            translate: l,
          } = i;
          return e.pipe(
            (0, B.g)(r.BRIGHTCOVE_VIDEO_PLAYED),
            (0, L.p)((e) => {
              let { endScreenType: t } = e;
              return t === M.r4;
            }),
            (0, H.E)(t),
            (0, L.p)((e) => {
              let [t, i] = e;
              return (0, b.A)([n.A, (e) => e && !e.newsletterSubscription])(
                i.session.user
              );
            }),
            (0, C.T)((e) => {
              let [{ _: t, videoId: i }] = e;
              return J(o, i);
            }),
            (0, C.T)((e) => X(e, a)),
            (0, L.p)(K),
            (0, H.E)(t),
            (0, f.M)((e) => {
              let [t, i] = e;
              return (0, s.A)(
                () => ee(t, l(Y.A)(i.router.locale)),
                (e) =>
                  t.overlay({
                    overlays: [
                      { align: "top", content: e, start: "ended", end: "play" },
                    ],
                  })
              )();
            }),
            (0, N.w)(),
            (0, k.qn)(
              "brightcoveVideo :: endscreenVideoWithSubscriptionEpic",
              d
            )
          );
        },
        Ae = (e, t, i) => {
          let { logger: o } = i;
          return e.pipe(
            (0, B.g)(F.L3),
            (0, C.T)(r.clear),
            (0, k.qn)("brightcoveVideo :: clearBrightcoveVideosEpic", o)
          );
        },
        ge = (0, R.E)(ce, le, se, pe, de, ve, ue, Ae);
    },
    22203: (e, t, i) => {
      i.d(t, { A: () => r });
      const r = {
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
    49732: (e, t, i) => {
      i.d(t, { A: () => r });
      const r = {
        english: {
          topVideos: "Top videos",
          next: "Next",
          previous: "Previous",
        },
        french: {
          topVideos: "Top videos",
          next: "Suivant",
          previous: "Pr\xe9c\xe9dent",
        },
        arabic: {
          topVideos:
            "\u0623\u0641\u0636\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a",
          next: "\u0627\u0644\u062a\u0627\u0644\u064a",
          previous: "\u0627\u0644\u0633\u0627\u0628\u0642",
        },
        hebrew: {
          topVideos:
            "\u05d4\u05e0\u05e6\u05e4\u05d9\u05dd \u05d1\u05d9\u05d5\u05ea\u05e8",
          next: "\u05d4\u05d1\u05d0",
          previous: "\u05d4\u05e7\u05d5\u05d3\u05dd",
        },
      };
    },
    82975: (e, t, i) => {
      i.d(t, { A: () => a });
      i(65043);
      var r = i(7489),
        o = i(70579);
      const a = (e) => {
        let {
          width: t = 25,
          height: i = 25,
          "aria-label": a,
          className: n = "",
        } = e;
        return (0, o.jsx)(r.A, {
          className: n,
          width: t,
          height: i,
          viewBox: "0 0 1024 1024",
          "aria-label": a,
          children: (0, o.jsx)("path", {
            d: "M252.003 200l520.003 312-520.003 312z",
          }),
        });
      };
    },
    49874: (e, t, i) => {
      i.r(t),
        i.d(t, {
          BRIGHTCOVE_VIDEO_DISPOSED: () => E,
          BRIGHTCOVE_VIDEO_PLAYED: () => I,
          BRIGHTCOVE_VIDEO_READY: () => h,
          CLEAR: () => O,
          DISPOSE_BRIGHTCOVE_VIDEO: () => b,
          INITIAL_STATE: () => A,
          INIT_BRIGHTCOVE_LAZY_VIDEO: () => g,
          INIT_BRIGHTCOVE_VIDEO: () => y,
          PLAY_BRIGHTCOVE_LAZY_VIDEO: () => V,
          clear: () => w,
          default: () => C,
          disposeBrightcoveVideo: () => P,
          initBrightcoveLazyVideo: () => T,
          initBrightcoveVideo: () => S,
          playBrightcoveLazyVideo: () => _,
          videoDisposed: () => B,
          videoPlayed: () => m,
          videoReady: () => D,
        });
      var r = i(48500),
        o = i(8761),
        a = i(56802),
        n = i(8135),
        d = i(87723),
        s = i(52527),
        l = i(52104),
        c = i(99185),
        p = i(37283),
        v = i(95605),
        u = i(42435);
      const A = { videos: [] },
        g = "brightcove-video/INIT_BRIGHTCOVE_LAZY_VIDEO",
        y = "brightcove-video/INIT_BRIGHTCOVE_VIDEO",
        h = "brightcove-video/BRIGHTCOVE_VIDEO_READY",
        b = "brightcove-video/DISPOSE_BRIGHTCOVE_VIDEO",
        E = "brightcove-video/BRIGHTCOVE_VIDEO_DISPOSED",
        I = "brightcove-video/BRIGHTCOVE_VIDEO_PLAYED",
        V = "brightcove-video/PLAY_BRIGHTCOVE_LAZY_VIDEO",
        O = "brightcove-video/CLEAR",
        T = (e) => ({ type: g, videoId: e }),
        S = function (e) {
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
        _ = (e) => ({ type: V, videoId: e }),
        D = (e, t, i, r) => ({
          type: h,
          videoId: e,
          lazy: t,
          autoPlay: i,
          muted: r,
        }),
        P = (e) => ({ type: b, videoId: e }),
        m = (e, t, i) => ({
          type: I,
          playerId: e,
          videoId: t,
          endScreenType: i,
        }),
        w = (0, r.A)({ type: O }),
        B = (0, r.A)({ type: E }),
        R = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (i) =>
            (0, o.A)(
              (0, a.A)((t) => t.id === e),
              (0, n.A)(
                (0, d.A)(s.A, 0),
                (t) => (0, l.A)(t, { id: e, lazy: !1 }, i),
                () => (0, c.A)({ id: e, lazy: t }, i)
              )
            )(i);
        },
        C = (0, u.vy)(A, {
          [O]: (0, r.A)(A),
          [g]: (e, t) => {
            let { videoId: i } = t;
            return {
              ...e,
              videos: (0, p.A)(
                (0, v.A)((e) => e.id === i),
                (0, c.A)({ id: i, lazy: !0 })
              )(e.videos),
            };
          },
          [y]: (e, t) => {
            let { videoId: i, lazy: r } = t;
            return { ...e, videos: R(i, r)(e.videos) };
          },
          [V]: (e, t) => {
            let { videoId: i } = t;
            return { ...e, videos: R(i)(e.videos) };
          },
        });
    },
    43677: (e, t, i) => {
      i.d(t, { A: () => s });
      var r = i(65043),
        o = i(65173),
        a = i.n(o),
        n = i(70579);
      const d = (e) => {
        let {
          level: t,
          color: i = "default",
          size: o = "medium",
          children: a,
        } = e;
        return r.createElement(
          "h".concat(t),
          {
            className: "widget-typography-heading size-"
              .concat(o, " color-")
              .concat(i),
          },
          a
        );
      };
      (d.Sub = (e) => {
        let { children: t } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", {
              className: "widget-typography-heading-separator",
              children: "/",
            }),
            (0, n.jsx)("span", {
              className: "widget-typography-heading-subtitle",
              children: t,
            }),
          ],
        });
      }).propTypes = {
        children: a().oneOfType([a().string, a().arrayOf(a().string)])
          .isRequired,
      };
      const s = d;
    },
    5995: (e, t, i) => {
      i.d(t, { A: () => r.A });
      var r = i(43677);
    },
  },
]);
//# sourceMappingURL=9591.57e9a980.chunk.js.map
