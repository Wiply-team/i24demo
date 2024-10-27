"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [3318, 167, 2385],
  {
    60425: (e, t, s) => {
      s.d(t, { A: () => r });
      s(65043);
      var n = s(7489),
        a = s(70579);
      const r = (e) => {
        let {
          width: t = 8,
          height: s = 13,
          "aria-label": r,
          className: i = "",
        } = e;
        return (0, a.jsx)(n.A, {
          className: i,
          width: t,
          height: s,
          viewBox: "0 0 512 1024",
          "aria-label": r,
          children: (0, a.jsx)("path", {
            d: "M146 600h-146l481-600-117 433h148l-483 591z",
          }),
        });
      };
    },
    34654: (e, t, s) => {
      s.d(t, { A: () => r });
      var n = s(1690),
        a = (s(65043), s(70579));
      const r = (e) =>
        (0, a.jsx)(n.A, {
          ...e,
          width: 750,
          sources: [
            { renditions: [{ width: 750 }], media: "(min-width: 480px)" },
            { renditions: [{ width: 350 }], media: "(max-width: 480px)" },
          ],
        });
    },
    50270: (e, t, s) => {
      s.d(t, { A: () => a });
      s(65043);
      var n = s(70579);
      const a = (e) => {
        let { className: t = "", inversed: s = !1 } = e;
        return (0, n.jsx)("figure", {
          className: "loader-wrapper "
            .concat(t, " ")
            .concat(s ? "inverse" : ""),
          children: (0, n.jsx)("div", { className: "loader-overlay" }),
        });
      };
    },
    13318: (e, t, s) => {
      s.r(t), s.d(t, { default: () => ne });
      var n = s(65043),
        a = s(20045),
        r = s(8761),
        i = s(79070),
        l = s(74596),
        c = s(54175),
        o = s(4258),
        d = s(94473),
        u = s(98123),
        h = s(32777),
        g = s(58015),
        p = s(95605),
        A = s(29874),
        m = s(12816),
        w = s(58116),
        v = s(77701),
        N = s(98079),
        f = s(60425),
        j = s(34654),
        x = s(29157);
      const E = {
        english: {
          slug: "news",
          title: "News feed",
          more: "More news",
          content: "Read more...",
          breaking: "Breaking news",
          metaDescription:
            "i24NEWS - breaking news headlines today from the Middle East, Israel, and around the world - latest stories, news items, and more",
          metaTitle:
            "Breaking News headlines today from the Middle East Israel and Worldwide",
        },
        french: {
          slug: "fil-info",
          title: "Fil info",
          more: "Toute l'actu",
          content: "En savoir plus...",
          breaking: "\xc9dition sp\xe9ciale",
          metaDescription:
            "i24NEWS - Toute l'actualit\xe9 du jour avec les derni\xe8res nouvelles et les nouveaux sujets du Moyen-Orient, d'Isra\xebl et du monde entier",
          metaTitle:
            "Les titres aujourd'hui au Moyen-Orient, en Isra\xebl et dans le monde entier",
        },
        arabic: {
          slug: "\u0622\u062e\u0631-\u0627\u0644\u0627\u062e\u0628\u0627\u0631",
          title:
            "\u0645\u0644\u062e\u0635 \u0627\u0644\u0623\u062e\u0628\u0627\u0631",
          more: "\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0623\u062e\u0628\u0627\u0631",
          content:
            "\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0645\u0632\u064a\u062f...",
          breaking:
            "\u0623\u062e\u0628\u0627\u0631 \u0639\u0627\u062c\u0644\u0629",
          metaDescription:
            "\u062a\u0631\u0642\u0628\u0648\u0627 \u0623\u0647\u0645 \u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629 \u0645\u0646 \u0642\u0646\u0627\u0629 i24NEWS \u0645\u0646 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637 \u0648\u0625\u0633\u0631\u0627\u0626\u064a\u0644 \u0648\u062f\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645",
          metaTitle:
            "\u062a\u0631\u0642\u0628\u0648\u0627 \u0639\u0646\u0627\u0648\u064a\u0646 \u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0639\u0627\u062c\u0644\u0629 \u0627\u0644\u064a\u0648\u0645\u064a\u0629 \u0645\u0646 \u0642\u0646\u0627\u0629 i24NEWS \u0645\u0646 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637 \u0648\u0625\u0633\u0631\u0627\u0626\u064a\u0644 \u0648\u062f\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645",
        },
        hebrew: {
          slug: "news",
          title: "\u05e2\u05d3\u05db\u05d5\u05e0\u05d9\u05dd",
          more: "\u05e2\u05d5\u05d3 \u05d7\u05d3\u05e9\u05d5\u05ea",
          content: "\u05e7\u05e8\u05d0 \u05e2\u05d5\u05d3..",
          breaking:
            "\u05d7\u05d3\u05e9\u05d5\u05ea \u05de\u05ea\u05e4\u05e8\u05e6\u05d5\u05ea",
          metaDescription:
            "i24NWES - \u05d7\u05d3\u05e9\u05d5\u05ea \u05de\u05ea\u05e4\u05e8\u05e6\u05d5\u05ea \u05d5\u05db\u05d5\u05ea\u05e8\u05d5\u05ea \u05d4\u05d9\u05d5\u05dd \u05de\u05d4\u05de\u05d6\u05e8\u05d7 \u05d4\u05ea\u05d9\u05db\u05d5\u05df, \u05de\u05d9\u05e9\u05e8\u05d0\u05dc \u05d5\u05de\u05e1\u05d1\u05d9\u05d1 \u05dc\u05e2\u05d5\u05dc\u05dd - \u05d4\u05e1\u05d9\u05e4\u05d5\u05e8\u05d9\u05dd \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd, \u05db\u05ea\u05d1\u05d5\u05ea \u05d5\u05e2\u05d5\u05d3",
          metaTitle:
            "\u05d7\u05d3\u05e9\u05d5\u05ea \u05de\u05ea\u05e4\u05e8\u05e6\u05d5\u05ea \u05d5\u05db\u05d5\u05ea\u05e8\u05d5\u05ea \u05d4\u05d9\u05d5\u05dd \u05de\u05d4\u05de\u05d6\u05e8\u05d7 \u05d4\u05ea\u05d9\u05db\u05d5\u05df, \u05d9\u05e9\u05e8\u05d0\u05dc \u05d5\u05d4\u05e2\u05d5\u05dc\u05dd",
        },
      };
      var F = s(11539),
        y = s(25249),
        P = s(75806),
        b = s(70579);
      const I = (e, t) =>
          (0, r.A)(
            (0, u.A)((e) => (0, N.V_)(e.startedAt, "-")),
            (0, h.A)((t, s) => ({
              at: (0, N.u)(s),
              feed: t,
              renderDate: T(e, (0, N.u)(s)),
            })),
            g.A
          )(t),
        T = (e, t) =>
          (0, r.A)(
            g.A,
            (0, m.A)(
              (
                (e) => (t) =>
                  (0, p.A)((0, A.A)(e, "at"))(t)
              )(t)
            ),
            w.A
          )(e),
        _ = (0, x.A)(E),
        k = (e) => {
          let { newsList: t, locale: s } = e;
          return (0, b.jsx)(n.Fragment, {
            children: t.map((e) =>
              (0, b.jsxs)(
                "div",
                {
                  className: "piece-of-news",
                  children: [
                    (0, b.jsxs)("aside", {
                      className: "news-hour",
                      children: [
                        (0, b.jsx)("span", { className: "bullet" }),
                        (0, b.jsx)(y.A, { date: e.startedAt, locale: s }),
                        "breaking" === e.status
                          ? (0, b.jsxs)("span", {
                              className: "breaking",
                              children: [
                                (0, b.jsx)("span", {
                                  className: "breaking-icon",
                                  children: (0, b.jsx)(f.A, {}),
                                }),
                                _(s)("breaking"),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, b.jsx)("div", {
                      className: "news-content",
                      children: e.content
                        ? (0, b.jsx)(l.A, {
                            href: e.content.frontendUrl,
                            variant: "block",
                            children: (0, b.jsxs)("div", {
                              className: "news-content-link",
                              children: [
                                (0, b.jsx)("p", { children: e.title }),
                                e.content.image
                                  ? (0, b.jsx)(j.A, {
                                      src: e.content.image.src,
                                      alt: e.content.image.alt,
                                    })
                                  : null,
                                (0, b.jsx)("span", {
                                  className: "more-information",
                                  children: _(s)("content"),
                                }),
                              ],
                            }),
                          })
                        : (0, b.jsx)("p", { children: e.title }),
                    }),
                  ],
                },
                "news_".concat(e.id)
              )
            ),
          });
        },
        S = (e) => {
          let { pages: t, page: s, locale: a } = e;
          const r = (0, n.useMemo)(
            () =>
              ((e) =>
                (0, c.A)(
                  (t, s) => (0, o.A)(s, I(t, e[s]), t),
                  {},
                  (0, d.A)(e)
                ))(t),
            [t]
          );
          return (0, b.jsx)(n.Fragment, {
            children: (0, v.A)([], s, r).map((e, t) =>
              (0, b.jsxs)(
                n.Fragment,
                {
                  children: [
                    !0 === e.renderDate
                      ? (0, b.jsx)(
                          "div",
                          {
                            className: "news-of-day",
                            children: (0, b.jsx)(F.A, {
                              date: e.at,
                              locale: a,
                            }),
                          },
                          "day_".concat(t)
                        )
                      : null,
                    (0, b.jsx)(k, { newsList: e.feed, locale: a }),
                  ],
                },
                "group_".concat(t)
              )
            ),
          });
        },
        D = (e) => {
          let { pages: t, page: s, locale: n } = e;
          return (0, b.jsx)(k, { newsList: (0, v.A)([], s, t), locale: n });
        },
        L = (e) => {
          let { locale: t, pages: s, page: n } = e;
          return (0, b.jsx)(P.A, {
            fallback: (0, b.jsx)(D, { pages: s, page: n, locale: t }),
            children: (0, b.jsx)(S, { pages: s, page: n, locale: t }),
          });
        };
      var C = s(83003);
      const W = (0, C.Ng)((e, t) => ({ locale: e.router.locale }))(L);
      var O = s(50270),
        M = s(5995);
      const R = (0, x.A)(E);
      var G = s(96277),
        U = s(90167);
      const V = (0, r.A)(
          (0, G.y3)((e) => {
            let { initialize: t } = e;
            return t();
          }),
          (0, G.qm)((e) => {
            let { clean: t } = e;
            return t();
          })
        )((e) => {
          let { locale: t, isFetching: s, newsFeed: n } = e;
          return (0, b.jsxs)("section", {
            "data-is": "aside-newsfeed",
            children: [
              (0, b.jsx)(M.A, { level: "2", children: R(t)("title") }),
              (0, b.jsx)("div", {
                className: "timeline",
                children: (0, i.AT)(s, n)
                  ? (0, b.jsx)(O.A, {})
                  : (0, b.jsx)(W, { pages: { 1: n }, page: 1 }),
              }),
              (0, i.AT)(s, n)
                ? null
                : (0, b.jsx)("div", {
                    className: "more white",
                    children: (0, b.jsx)(l.A, {
                      href: "/".concat(t, "/").concat(R(t)("slug")),
                      children: R(t)("more"),
                    }),
                  }),
            ],
          });
        }),
        z = (0, C.Ng)(
          (e) => ({
            locale: e.router.locale,
            isFetching: e.asideNewsFeed.isFetching,
            newsFeed: e.asideNewsFeed.newsFeed,
          }),
          (e) => ({
            initialize: (0, a.A)(e, U.initialize),
            clean: (0, a.A)(e, U.clean),
          })
        )(V);
      var B = s(43602);
      const H = (e) =>
        (0, b.jsx)(B.A, {
          reducers: ["asideNewsFeed"],
          epics: ["asideNewsFeed"],
          children: (0, b.jsx)(z, { ...e }),
        });
      var q = s(10892),
        Q = s(52385);
      const Z = (0, a.A)(
          (0, G.y3)((e) => {
            let { fetchNewsPage: t, page: s } = e;
            return t(s);
          }),
          (0, G.qm)((e) => {
            let { removeNewsPage: t, page: s } = e;
            return t(s);
          })
        )((e) => {
          let { pages: t, page: s } = e;
          return (0, b.jsx)(W, { pages: t, page: s });
        }),
        $ = (0, C.Ng)(null, (e) => ({
          fetchNewsPage: (0, a.A)(e, Q.fetchNewsPage),
          removeNewsPage: (0, a.A)(e, Q.removeNewsPage),
        }))(Z);
      var J = s(65955),
        K = s(22123),
        X = s(78837);
      const Y = (0, x.A)(E),
        ee = (0, a.A)(
          (0, G.qm)((e) => {
            let { clean: t } = e;
            return t();
          })
        )((e) => {
          let { locale: t, pages: s } = e;
          return (0, b.jsx)("div", {
            "data-is": "fullpage-newsfeed",
            className: "page-content",
            children: (0, b.jsx)(q.A, {
              title: Y(t)("metaTitle"),
              description: Y(t)("metaDescription"),
              children: (0, b.jsxs)("div", {
                className: "container container-page",
                children: [
                  (0, b.jsxs)("div", {
                    className: "ads-horizontal",
                    children: [(0, b.jsx)(X.M6, {}), (0, b.jsx)(X.Ir, {})],
                  }),
                  (0, b.jsxs)("div", {
                    className: "columns",
                    children: [
                      (0, b.jsxs)("div", {
                        className: "column col-8 col-md-12",
                        children: [
                          (0, b.jsx)(M.A, {
                            level: "1",
                            children: Y(t)("title"),
                          }),
                          (0, b.jsx)("div", {
                            className: "column col-8 col-md-12",
                            children: (0, b.jsx)("div", {
                              className: "timeline",
                              children: (0, b.jsx)(J.Ay, {
                                renderPage: (e) =>
                                  (0, b.jsx)($, { pages: s, page: e }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, b.jsx)("div", {
                        className: "column col-4 col-md-12 d-flex",
                        children: (0, b.jsxs)(K.A, {
                          className: "sticky-ads-newsfeed",
                          children: [
                            (0, b.jsx)(X.uP, {}),
                            (0, b.jsx)(X.cN, {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }),
        te = (0, C.Ng)(
          (e) => ({
            locale: e.router.locale,
            page: e.pagination.page,
            pages: e.newsFeed.newsPages,
          }),
          (e) => ({ clean: (0, a.A)(e, Q.clean) })
        )(ee),
        se = (e) =>
          (0, b.jsx)(B.A, {
            reducers: ["newsFeed", "pagination"],
            epics: ["newsFeed", "pagination"],
            children: (0, b.jsx)(te, { ...e }),
          }),
        ne = (e) => {
          let { aside: t, className: s = "" } = e;
          return (0, b.jsx)("div", {
            "data-is": "newsfeed",
            className: s,
            children: t ? (0, b.jsx)(H, {}) : (0, b.jsx)(se, {}),
          });
        };
    },
    90167: (e, t, s) => {
      s.r(t),
        s.d(t, {
          CLEAN: () => o,
          FETCH_NEWS_FEED: () => l,
          INITIALIZE: () => i,
          INITIAL_STATE: () => r,
          RECEIVED_NEWS_FEED: () => c,
          clean: () => g,
          default: () => p,
          fetchNewsFeed: () => u,
          initialize: () => d,
          receivedNewsFeed: () => h,
        });
      var n = s(48500),
        a = s(42435);
      const r = { isFetching: !1, newsFeed: [] },
        i = "asideNewsFeed/INITIALIZE",
        l = "asideNewsFeed/FETCH",
        c = "asideNewsFeed/RECEIVED",
        o = "asideNewsFeed/CLEAN",
        d = (0, n.A)({ type: i }),
        u = (0, n.A)({ type: l }),
        h = (e) => ({ type: c, newsFeed: e || [] }),
        g = (0, n.A)({ type: o }),
        p = (0, a.vy)(r, {
          [l]: (e) => ({ ...e, isFetching: !0 }),
          [c]: (e, t) => {
            let { newsFeed: s } = t;
            return { ...e, newsFeed: s, isFetching: !1 };
          },
          [o]: (0, n.A)(r),
        });
    },
    52385: (e, t, s) => {
      s.r(t),
        s.d(t, {
          CLEAN: () => u,
          FETCH_NEWS_PAGE: () => c,
          INITIAL_STATE: () => l,
          RECEIVED_NEWS_PAGE: () => o,
          REMOVE_NEWS_PAGE: () => d,
          clean: () => A,
          default: () => m,
          fetchNewsPage: () => h,
          receivedNewsPage: () => p,
          removeNewsPage: () => g,
        });
      var n = s(48500),
        a = s(4258),
        r = s(94233),
        i = s(42435);
      const l = { isFetching: !0, limit: 24, newsPages: {} },
        c = "newsFeed/FETCH_NEWS_PAGE",
        o = "newsFeed/RECEIVED_NEWS_PAGE",
        d = "newsFeed/REMOVE_NEWS_PAGE",
        u = "newsFeed/CLEAN",
        h = (e) => ({ type: c, page: e }),
        g = (e) => ({ type: d, page: e }),
        p = function (e, t, s, n) {
          return {
            type: o,
            page: e,
            totalPages: t,
            scrollHeight: s,
            scrollTop: n,
            newsFeed:
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : [],
          };
        },
        A = (0, n.A)({ type: u }),
        m = (0, i.vy)(l, {
          [c]: (e) => ({ ...e, isFetching: !0 }),
          [o]: (e, t) => {
            let { page: s, newsFeed: n } = t;
            return {
              ...e,
              isFetching: !1,
              newsPages: (0, a.A)(s, n, e.newsPages),
            };
          },
          [d]: (e, t) => {
            let { page: s } = t;
            return { ...e, newsPages: (0, r.A)(s, e.newsPages) };
          },
          [u]: (0, n.A)(l),
        });
    },
    79070: (e, t, s) => {
      s.d(t, { AT: () => p, JU: () => A, Q3: () => w, ZL: () => v });
      var n = s(84003),
        a = s(58089),
        r = s(36169),
        i = s(4036),
        l = s(48098),
        c = s(52527),
        o = s(8761),
        d = s(83645),
        u = s(48500),
        h = s(80367),
        g = s(18558);
      const p = function () {
          return (
            arguments.length > 0 &&
            void 0 !== arguments[0] &&
            arguments[0] &&
            0 ===
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : []
              ).length
          );
        },
        A = (e, t) => Math.ceil(e / t),
        m = (0, n.A)([
          (0, a.A)(Number),
          (0, r.A)((0, i.A)(NaN)),
          (0, l.A)(c.A, 0),
        ]),
        w = (e) =>
          (0, o.A)(
            (e) => new URL(e.href).searchParams.get("page"),
            (e) => Number(e),
            (0, d.A)((0, r.A)(m), (0, u.A)(e))
          ),
        v = (e, t) =>
          (0, d.A)(() => t > 1, (0, h.f_)({ page: t }))((0, g.u$)("?")(e));
    },
    11539: (e, t, s) => {
      s.d(t, { A: () => c });
      s(65043);
      var n = s(75806),
        a = s(98079),
        r = s(85556),
        i = s(70579);
      const l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.QF;
          return (0, a.u)(e).toLocaleDateString((0, a.$s)(t), {
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
        },
        c = (e) => {
          let { date: t, locale: s, itemProp: r } = e;
          return (0, i.jsx)("time", {
            dateTime: (0, a.EG)(t),
            itemProp: r,
            children: (0, i.jsx)(n.A, { children: l(t, s) }),
          });
        };
    },
    25249: (e, t, s) => {
      s.d(t, { A: () => c });
      s(65043);
      var n = s(75806),
        a = s(98079),
        r = s(85556),
        i = s(70579);
      const l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.QF;
          return (0, a.u)(e).toLocaleTimeString((0, a.$s)(t), {
            hour: "2-digit",
            minute: "2-digit",
          });
        },
        c = (e) => {
          let { date: t, locale: s, itemProp: r } = e;
          return (0, i.jsx)("time", {
            dateTime: (0, a.EG)(t),
            itemProp: r,
            children: (0, i.jsx)(n.A, { children: l(t, s) }),
          });
        };
    },
    98123: (e, t, s) => {
      s.d(t, { A: () => N });
      var n = s(17012),
        a = s(7573),
        r = s(54732),
        i = s(4317);
      function l(e, t, s) {
        if (
          (s || (s = new c()),
          (function (e) {
            var t = typeof e;
            return null == e || ("object" != t && "function" != t);
          })(e))
        )
          return e;
        var n = function (n) {
          var a = s.get(e);
          if (a) return a;
          for (var r in (s.set(e, n), e))
            Object.prototype.hasOwnProperty.call(e, r) &&
              (n[r] = t ? l(e[r], !0, s) : e[r]);
          return n;
        };
        switch ((0, i.A)(e)) {
          case "Object":
            return n(Object.create(Object.getPrototypeOf(e)));
          case "Array":
            return n(Array(e.length));
          case "Date":
            return new Date(e.valueOf());
          case "RegExp":
            return (0, r.A)(e);
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
            return e.slice();
          default:
            return e;
        }
      }
      var c = (function () {
          function e() {
            (this.map = {}), (this.length = 0);
          }
          return (
            (e.prototype.set = function (e, t) {
              var s = this.hash(e),
                n = this.map[s];
              n || (this.map[s] = n = []), n.push([e, t]), (this.length += 1);
            }),
            (e.prototype.hash = function (e) {
              var t = [];
              for (var s in e) t.push(Object.prototype.toString.call(e[s]));
              return t.join();
            }),
            (e.prototype.get = function (e) {
              if (this.length <= 180)
                for (var t in this.map)
                  for (var s = this.map[t], n = 0; n < s.length; n += 1) {
                    if ((r = s[n])[0] === e) return r[1];
                  }
              else {
                var a = this.hash(e);
                if ((s = this.map[a]))
                  for (n = 0; n < s.length; n += 1) {
                    var r;
                    if ((r = s[n])[0] === e) return r[1];
                  }
              }
            }),
            e
          );
        })(),
        o = s(36785),
        d = s(24260),
        u = s(16072),
        h = s(51290),
        g = s(1202),
        p = s(113),
        A = (function () {
          function e(e, t, s, n) {
            (this.valueFn = e),
              (this.valueAcc = t),
              (this.keyFn = s),
              (this.xf = n),
              (this.inputs = {});
          }
          return (
            (e.prototype["@@transducer/init"] = p.A.init),
            (e.prototype["@@transducer/result"] = function (e) {
              var t;
              for (t in this.inputs)
                if (
                  (0, u.A)(t, this.inputs) &&
                  (e = this.xf["@@transducer/step"](e, this.inputs[t]))[
                    "@@transducer/reduced"
                  ]
                ) {
                  e = e["@@transducer/value"];
                  break;
                }
              return (this.inputs = null), this.xf["@@transducer/result"](e);
            }),
            (e.prototype["@@transducer/step"] = function (e, t) {
              var s = this.keyFn(t);
              return (
                (this.inputs[s] = this.inputs[s] || [s, l(this.valueAcc, !1)]),
                (this.inputs[s][1] = this.valueFn(this.inputs[s][1], t)),
                e
              );
            }),
            e
          );
        })();
      function m(e, t, s) {
        return function (n) {
          return new A(e, t, s, n);
        };
      }
      var w = s(34836);
      const v = (0, o.A)(
        4,
        [],
        (0, d.A)([], m, function (e, t, s, n) {
          var a = (0, w.A)(function (n, a) {
            var r = s(a),
              i = e((0, u.A)(r, n) ? n[r] : l(t, !1), a);
            return i && i["@@transducer/reduced"]
              ? (0, h.A)(n)
              : ((n[r] = i), n);
          });
          return (0, g.A)(a, {}, n);
        })
      );
      const N = (0, a.A)(
        (0, n.A)(
          "groupBy",
          v(function (e, t) {
            return e.push(t), e;
          }, [])
        )
      );
    },
  },
]);
//# sourceMappingURL=3318.af4a373c.chunk.js.map
