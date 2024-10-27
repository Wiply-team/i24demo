"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [6465, 4818, 9874],
  {
    76465: (e, t, r) => {
      r.r(t),
        r.d(t, {
          deactivateCategoryEpic: () => oe,
          default: () => ne,
          displayShareButtonOnScrollEpic: () => W,
          fetchArticleEpic: () => j,
          injectArticleSchemaEpic: () => te,
          observeBrightcoveLazyVideoEpic: () => ee,
          scrollToCommentBoxEpic: () => re,
          updateActiveCategoryEpic: () => ie,
          updateArticleUrl: () => Q,
          updateProgressiveReadingBarEpic: () => K,
        });
      var i = r(34818),
        o = r(49874),
        n = r(71144),
        c = r(52527),
        l = r(61888),
        d = r(36169),
        a = r(25854),
        E = r(35846),
        A = r(4036),
        p = r(84003),
        s = r(88313),
        u = r(32709),
        g = r(48500),
        I = r(48098),
        v = r(33373),
        R = r(20828),
        C = r(8761),
        T = r(12224),
        h = r(59184),
        _ = r(75377),
        O = r(58015),
        m = r(86053),
        y = r(65892);
      const D = (0, r(7573).A)(function (e, t) {
        return e * t;
      });
      var S = r(91199),
        V = r(14807),
        L = r(36140),
        B = r(43472),
        b = r(25722),
        H = r(51198),
        N = r(43879),
        f = r(64631),
        w = r(58468),
        P = r(16114),
        G = r(47727),
        U = r(89697),
        Y = r(89159),
        q = r(21220),
        z = r(86490),
        F = r(71846),
        M = r(91307),
        x = r(27266),
        Z = r(79495),
        k = r(98079);
      const X = (0, n.A)(c.A, [
          "articleAr",
          "articleEn",
          "articleFr",
          "articleHe",
        ]),
        j = (e, t, r) => {
          let { fetchApi: o, location: n, logger: c } = r;
          return e.pipe(
            (0, L.g)(i.FETCH_ARTICLE),
            (0, b.E)(t),
            (0, H.Z)((e) => {
              let [{ slug: t }, r] = e;
              return o("/v2/".concat(r.router.locale, "/contents/").concat(t));
            }),
            (0, N.T)((0, l.A)("body")),
            (0, f.p)((0, d.A)(a.A)),
            (0, N.T)((e) =>
              (0, i.articleReceived)(
                ((e) => ({
                  title: e.title,
                  id: e.id,
                  image: e.image
                    ? {
                        src: e.image.href,
                        alt: e.coverCaption || e.image.legend,
                        credit: e.image.credit,
                      }
                    : { src: "", alt: "", credit: "" },
                  videoCover: e.videoCover
                    ? {
                        id: e.videoCover.id,
                        description: e.coverCaption || e.videoCover.description,
                        credit: e.videoCover.credit,
                      }
                    : null,
                  signatures: e.signatures || [],
                  frontendUrl: e.frontendUrl,
                  updatedAt: (0, k.u)(e.updatedAt),
                  createdAt: (0, k.u)(e.createdAt),
                  publishedAt: (0, k.u)(e.publishedAt),
                  metaTitle: e.metaTitle || e.title,
                  metaDescription: e.metaDescription || e.title,
                  commentsDisabled: e.commentsDisabled,
                  numberOfComments: e.numberOfComments,
                  tags: e.tags || [],
                  category: e.category,
                  hasEvents: e.hasEvents,
                  excerpt: e.excerpt,
                  readingTime: e.readingTime,
                  slug: e.slug,
                  components: e.parsedBody,
                }))(e),
                ((e, t) =>
                  decodeURI(new URL(t.frontendUrl).pathname) !==
                  decodeURI(e.pathname))(n, e)
              )
            ),
            (0, z.d$)("article :: fetchArticleEpic", i.error, c)
          );
        },
        Q = (e, t, r) => {
          let { logger: o, history: n } = r;
          return e.pipe(
            (0, L.g)(i.ARTICLE_RECEIVED),
            (0, f.p)((e) => {
              let { shouldRedirect: t } = e;
              return t;
            }),
            (0, N.T)((e) => {
              let { content: t } = e;
              return new URL(t.frontendUrl);
            }),
            (0, w.M)((e) => n.replaceState(n.state, "", e.pathname)),
            (0, P.w)(),
            (0, z.qn)("article :: updateArticleUrl", o)
          );
        },
        W = (e, t, r) => {
          let { document: o, logger: n, window: c } = r;
          return e.pipe(
            (0, L.g)(i.ARTICLE_RECEIVED, M.N7),
            (0, b.E)(t),
            (0, f.p)((e) => {
              let [{ type: t }, r] = e;
              return (0, E.A)([
                (0, A.A)(i.ARTICLE_RECEIVED),
                (0, p.A)([(0, A.A)(M.N7), () => X(r.router.activeRoute.name)]),
              ])(t);
            }),
            (0, G.n)(() =>
              (0, U.R)(c, "scroll").pipe(
                (0, Y.B)(15),
                (0, q.Q)(e.pipe((0, L.g)(i.CLEAN))),
                (0, N.T)(() => o.querySelector("article .components")),
                (0, f.p)((0, d.A)(a.A)),
                (0, N.T)((e) => e.getBoundingClientRect()),
                (0, N.T)((e) =>
                  e.top < 80 && e.bottom > 240
                    ? (0, i.showShareIcons)()
                    : (0, i.hideShareIcons)()
                ),
                (0, z.qn)("article :: displayShareButtonOnScrollEpic", n)
              )
            )
          );
        },
        $ = (e) => 1 - e,
        J = (0, s.A)([
          [(0, u.A)(c.A, 0), (0, g.A)(0)],
          [(0, I.A)(c.A, 1), (0, g.A)(1)],
          [v.A, R.A],
        ]),
        K = (e, t, r) => {
          let { document: o, window: n } = r;
          return e.pipe(
            (0, L.g)(i.ARTICLE_RECEIVED, M.N7),
            (0, b.E)(t),
            (0, f.p)((e) => {
              let [{ type: t }, r] = e;
              return (0, E.A)([
                (0, A.A)(i.ARTICLE_RECEIVED),
                (0, p.A)([(0, A.A)(M.N7), () => X(r.router.activeRoute.name)]),
              ])(t);
            }),
            (0, G.n)(() =>
              (0, U.R)(n, "scroll").pipe(
                (0, q.Q)(e.pipe((0, L.g)(i.CLEAN))),
                (0, N.T)(() => o.querySelector("section.cover-and-content")),
                (0, f.p)((0, d.A)(a.A)),
                (0, N.T)(
                  (0, C.A)(
                    (e) => e.getBoundingClientRect(),
                    (0, T.A)(["bottom", "height"]),
                    (0, h.A)({
                      bottom: (0, _.A)(n.innerHeight),
                      height: (0, _.A)(n.innerHeight),
                    }),
                    O.A,
                    (0, m.A)(y.A),
                    $,
                    J,
                    D(100),
                    i.updateReadingProgress
                  )
                )
              )
            )
          );
        },
        ee = (e, t, r) => {
          let { intersectionObserversRegistry: i, logger: n, document: c } = r;
          return e.pipe(
            (0, L.g)(o.INIT_BRIGHTCOVE_LAZY_VIDEO),
            (0, f.p)(() => i.isSupported()),
            (0, b.E)(t),
            (0, w.M)((e) => {
              let [{ videoId: t }, r] = e;
              const o = c.querySelector(
                  '#article .brightcove-lazy-player[data-video-id="'.concat(
                    t,
                    '"]'
                  )
                ),
                n = i.get(x.dv);
              o && n && n.observe(o);
            }),
            (0, P.w)(),
            (0, z.qn)("article :: observeBrightcoveLazyVideoEpic", n)
          );
        },
        te = (e, t, r) => {
          let { logger: o } = r;
          return e.pipe(
            (0, L.g)(i.ARTICLE_RECEIVED),
            (0, N.T)((e) => {
              let { content: t } = e;
              return (0, Z.Df)(t);
            }),
            (0, z.qn)("article :: injectArticleSchemaEpic", o)
          );
        },
        re = (e, t, r) => {
          let { document: o, logger: n, window: c } = r;
          return e.pipe(
            (0, L.g)(i.SCROLL_TO_COMMENT_BOX),
            (0, N.T)(() => o.querySelector("#article-comments")),
            (0, f.p)((0, d.A)(a.A)),
            (0, N.T)((e) => c.scrollY + e.getBoundingClientRect().top - 150),
            (0, w.M)((e) => c.scroll({ top: e, behavior: "smooth" })),
            (0, P.w)(),
            (0, z.qn)("article :: scrollToCommentBoxEpic", n)
          );
        },
        ie = (e, t, r) => {
          let { logger: o } = r;
          return e.pipe(
            (0, L.g)(i.ARTICLE_RECEIVED),
            (0, b.E)(t),
            (0, f.p)((e) => {
              let [t, r] = e;
              return (0, C.A)(
                (0, S.A)("", ["router", "activeRoute", "name"]),
                (0, V.A)(/^article(En|Fr|Ar)$/)
              )(r);
            }),
            (0, N.T)((e) => {
              let [{ content: t }] = e;
              return (0, F.iE)(
                t.category.id,
                t.category.parent ? t.category.parent.id : null
              );
            }),
            (0, z.qn)("article :: updateActiveCategoryEpic", o)
          );
        },
        oe = (e, t, r) => {
          let { logger: o } = r;
          return e.pipe(
            (0, L.g)(i.CLEAN),
            (0, N.T)(F.BJ),
            (0, z.qn)("article :: deactivateCategoryEpic", o)
          );
        },
        ne = (0, B.E)(j, W, K, Q, ee, te, re, ie, oe);
    },
    34818: (e, t, r) => {
      r.r(t),
        r.d(t, {
          ARTICLE_RECEIVED: () => l,
          CLEAN: () => p,
          ERROR: () => s,
          FETCH_ARTICLE: () => c,
          HIDE_SHARE_ICONS: () => A,
          INITIAL_STATE: () => n,
          SCROLL_TO_COMMENT_BOX: () => d,
          SHOW_SHARE_ICONS: () => E,
          UPDATE_READING_PROGRESS: () => a,
          articleReceived: () => g,
          clean: () => T,
          default: () => _,
          error: () => h,
          fetchArticle: () => u,
          hideShareIcons: () => C,
          scrollToCommentBox: () => I,
          showShareIcons: () => R,
          updateReadingProgress: () => v,
        });
      var i = r(48500),
        o = r(42435);
      const n = {
          isFetching: !0,
          content: {
            category: { parent: null },
            createdAt: null,
            components: [],
            excerpt: null,
            id: null,
            image: null,
            link: null,
            metaDescription: null,
            metaTitle: null,
            publishedAt: null,
            readingTime: 0,
            signatures: [],
            title: null,
            hasEvents: !1,
            updatedAt: null,
            video: null,
            numberOfComments: 0,
            commentsDisabled: !1,
          },
          redirected: !1,
          readingProgress: 0,
          showShareIcons: !1,
          error: null,
        },
        c = "article/FETCH_ARTICLE",
        l = "article/ARTICLE_RECEIVED",
        d = "article/SCROLL_TO_COMMENT_BOX",
        a = "article/UPDATE_READING_PROGRESS",
        E = "article/SHOW_SHARE_ICONS",
        A = "article/HIDE_SHARE_ICONS",
        p = "article/CLEAN",
        s = "article/ERROR",
        u = (e) => ({ type: c, slug: e }),
        g = (e, t) => ({ type: l, content: e, shouldRedirect: t }),
        I = (0, i.A)({ type: d }),
        v = (e) => ({ type: a, percentage: e }),
        R = (0, i.A)({ type: E }),
        C = (0, i.A)({ type: A }),
        T = (0, i.A)({ type: p }),
        h = (e) => ({ type: s, error: e }),
        _ = (0, o.vy)(n, {
          [c]: (e) => ({ ...e, isFetching: !0, error: null }),
          [l]: (e, t) => {
            let { content: r, shouldRedirect: i } = t;
            return {
              ...e,
              isFetching: !1,
              content: r,
              redirected: i,
              error: null,
            };
          },
          [a]: (e, t) => {
            let { percentage: r } = t;
            return { ...e, readingProgress: r };
          },
          [E]: (e) => ({ ...e, showShareIcons: !0 }),
          [A]: (e) => ({ ...e, showShareIcons: !1 }),
          [s]: (e, t) => {
            let { error: r } = t;
            return { ...e, isFetching: !1, error: r };
          },
          [p]: (0, i.A)(n),
        });
    },
    49874: (e, t, r) => {
      r.r(t),
        r.d(t, {
          BRIGHTCOVE_VIDEO_DISPOSED: () => C,
          BRIGHTCOVE_VIDEO_PLAYED: () => T,
          BRIGHTCOVE_VIDEO_READY: () => v,
          CLEAR: () => _,
          DISPOSE_BRIGHTCOVE_VIDEO: () => R,
          INITIAL_STATE: () => u,
          INIT_BRIGHTCOVE_LAZY_VIDEO: () => g,
          INIT_BRIGHTCOVE_VIDEO: () => I,
          PLAY_BRIGHTCOVE_LAZY_VIDEO: () => h,
          clear: () => L,
          default: () => H,
          disposeBrightcoveVideo: () => S,
          initBrightcoveLazyVideo: () => O,
          initBrightcoveVideo: () => m,
          playBrightcoveLazyVideo: () => y,
          videoDisposed: () => B,
          videoPlayed: () => V,
          videoReady: () => D,
        });
      var i = r(48500),
        o = r(8761),
        n = r(56802),
        c = r(8135),
        l = r(87723),
        d = r(52527),
        a = r(52104),
        E = r(99185),
        A = r(37283),
        p = r(95605),
        s = r(42435);
      const u = { videos: [] },
        g = "brightcove-video/INIT_BRIGHTCOVE_LAZY_VIDEO",
        I = "brightcove-video/INIT_BRIGHTCOVE_VIDEO",
        v = "brightcove-video/BRIGHTCOVE_VIDEO_READY",
        R = "brightcove-video/DISPOSE_BRIGHTCOVE_VIDEO",
        C = "brightcove-video/BRIGHTCOVE_VIDEO_DISPOSED",
        T = "brightcove-video/BRIGHTCOVE_VIDEO_PLAYED",
        h = "brightcove-video/PLAY_BRIGHTCOVE_LAZY_VIDEO",
        _ = "brightcove-video/CLEAR",
        O = (e) => ({ type: g, videoId: e }),
        m = function (e) {
          return {
            type: I,
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
        y = (e) => ({ type: h, videoId: e }),
        D = (e, t, r, i) => ({
          type: v,
          videoId: e,
          lazy: t,
          autoPlay: r,
          muted: i,
        }),
        S = (e) => ({ type: R, videoId: e }),
        V = (e, t, r) => ({
          type: T,
          playerId: e,
          videoId: t,
          endScreenType: r,
        }),
        L = (0, i.A)({ type: _ }),
        B = (0, i.A)({ type: C }),
        b = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (r) =>
            (0, o.A)(
              (0, n.A)((t) => t.id === e),
              (0, c.A)(
                (0, l.A)(d.A, 0),
                (t) => (0, a.A)(t, { id: e, lazy: !1 }, r),
                () => (0, E.A)({ id: e, lazy: t }, r)
              )
            )(r);
        },
        H = (0, s.vy)(u, {
          [_]: (0, i.A)(u),
          [g]: (e, t) => {
            let { videoId: r } = t;
            return {
              ...e,
              videos: (0, A.A)(
                (0, p.A)((e) => e.id === r),
                (0, E.A)({ id: r, lazy: !0 })
              )(e.videos),
            };
          },
          [I]: (e, t) => {
            let { videoId: r, lazy: i } = t;
            return { ...e, videos: b(r, i)(e.videos) };
          },
          [h]: (e, t) => {
            let { videoId: r } = t;
            return { ...e, videos: b(r)(e.videos) };
          },
        });
    },
    65892: (e, t, r) => {
      r.d(t, { A: () => i });
      const i = (0, r(7573).A)(function (e, t) {
        return e / t;
      });
    },
    75377: (e, t, r) => {
      r.d(t, { A: () => i });
      const i = (0, r(7573).A)(function (e, t) {
        return Number(e) - Number(t);
      });
    },
    52104: (e, t, r) => {
      r.d(t, { A: () => c });
      var i = r(89334),
        o = r(24314),
        n = r(48500);
      const c = (0, i.A)(function (e, t, r) {
        return (0, o.A)(e, (0, n.A)(t), r);
      });
    },
  },
]);
//# sourceMappingURL=6465.a08cc8a3.chunk.js.map
