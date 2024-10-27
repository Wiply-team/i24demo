"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [5979, 6234],
  {
    7310: (e, a, l) => {
      l.d(a, { A: () => h });
      var s = l(83003),
        r = l(41662),
        i = l(74596),
        c = (l(65043), l(48434)),
        t = l(29157);
      var n = l(7816),
        o = l(70579);
      const d = (0, t.A)({
          english: {
            toggle: "Press the spacebar to open and close the dropdown menu",
          },
          french: {
            toggle:
              "Appuyez sur la barre d'espace pour ouvrir et fermer le menu d\xe9roulant",
          },
          arabic: {
            toggle:
              "\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0645\u0641\u062a\u0627\u062d \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0641\u062a\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u0633\u062f\u0644\u0629 \u0648\u0625\u063a\u0644\u0627\u0642\u0647\u0627",
          },
          hebrew: {
            toggle:
              "\u05dc\u05d7\u05e5 \u05e2\u05dc \u05de\u05e7\u05e9 \u05d4\u05e8\u05d5\u05d5\u05d7 \u05d1\u05db\u05d3\u05d9 \u05dc\u05e4\u05ea\u05d5\u05d7 \u05d5\u05dc\u05e1\u05d2\u05d5\u05e8 \u05d0\u05ea \u05d4\u05ea\u05e4\u05e8\u05d9\u05d8",
          },
        }),
        g = (e) => {
          let {
            className: a = "",
            items: l = [],
            activeItem: s,
            isOpen: t = !1,
            close: g,
            open: h,
            collapsed: m = !1,
            locale: u,
          } = e;
          return (
            (0, n.A)(g),
            l.length > 0
              ? (0, o.jsx)("div", {
                  className: "page-menu-dropdown "
                    .concat(a, " ")
                    .concat(t ? "is-expanded" : "", " ")
                    .concat(m ? "collapsed" : ""),
                  children: (0, o.jsx)("div", {
                    className: "wrapper",
                    children: (0, o.jsx)("div", {
                      className: "container container-page",
                      children: (0, o.jsxs)("ul", {
                        className: t ? "" : "not-expanded",
                        children: [
                          (0, o.jsxs)("li", {
                            className: "show-xl toggler active",
                            children: [
                              s ? s.label : "",
                              (0, o.jsx)("div", {
                                className: "toggler-button",
                                children: (0, o.jsx)(c.A, {
                                  onClick: () => (t ? g() : h()),
                                  "aria-label": d(u)("toggle"),
                                  children: (0, o.jsx)(r.A, {}),
                                }),
                              }),
                            ],
                          }),
                          l.map((e) => {
                            let { key: a, label: l, link: r } = e;
                            return (0, o.jsx)(
                              "li",
                              {
                                className: a === s.key ? "active hide-xl" : "",
                                children: (0, o.jsx)(i.A, {
                                  href: r,
                                  children: l,
                                }),
                              },
                              a
                            );
                          }),
                        ],
                      }),
                    }),
                  }),
                })
              : null
          );
        },
        h = (0, s.Ng)((e) => ({ locale: e.router.locale }))(g);
    },
    15109: (e, a, l) => {
      l.d(a, { A: () => p });
      var s = l(96277),
        r = l(20045),
        i = l(65043),
        c = l(12419),
        t = l(63842),
        n = l(93125),
        o = l(42435),
        d = l(12040),
        g = l(44967),
        h = l(78837),
        m = l(70579);
      const u = (e) => {
          let {
            page: a,
            articles: l = [],
            variant: s = "default",
            id: r = null,
            locale: u = null,
          } = e;
          return (0, m.jsx)("div", {
            id: "category-page-".concat(a),
            className: "component-article-list",
            "data-page": a,
            children: (0, m.jsx)("section", {
              className: "columns",
              children: l.map((e, l) =>
                (0, m.jsxs)(
                  i.Fragment,
                  {
                    children: [
                      (0, m.jsx)("div", {
                        className: "column col-12",
                        children:
                          1 === a && 0 === l
                            ? (0, m.jsxs)(m.Fragment, {
                                children: [
                                  (0, m.jsx)("div", {
                                    className: "hide-sm",
                                    children: (0, m.jsx)(t.A, {
                                      article: e,
                                      variant: s,
                                    }),
                                  }),
                                  (0, m.jsx)("div", {
                                    className: "show-sm",
                                    children: (0, m.jsx)(n.A, {
                                      size: "large",
                                      article: e,
                                      variant: s,
                                    }),
                                  }),
                                ],
                              })
                            : (0, m.jsx)(t.A, { article: e, variant: s }),
                      }),
                      1 === a && 2 === l && (0, d.O5)(r)
                        ? (0, m.jsxs)("div", {
                            className: "column col-12 hide-sm show-xl",
                            children: [
                              (0, m.jsx)("div", {
                                className: "widget-wrapper",
                                children: (0, m.jsx)(g.A.Counters, {
                                  locale: u,
                                }),
                              }),
                              (0, m.jsx)(c.A, {}),
                            ],
                          })
                        : null,
                      1 === a && 3 === l && (0, d.O5)(r)
                        ? (0, m.jsxs)("div", {
                            className: "column col-12 col-sm-12 show-sm",
                            children: [
                              (0, m.jsx)("div", {
                                className: "widget-wrapper",
                                children: (0, m.jsx)(g.A.Counters, {
                                  locale: u,
                                }),
                              }),
                              (0, m.jsx)(c.A, {}),
                            ],
                          })
                        : null,
                      1 === a && 3 !== l && (0, o.Wi)(l + 1) && (0, d.O5)(r)
                        ? (0, m.jsxs)("div", {
                            className: "column col-12 col-sm-12 show-sm",
                            children: [
                              (0, m.jsx)("div", {
                                className: "ads",
                                children: (0, m.jsx)(h.vd, {}),
                              }),
                              (0, m.jsx)(c.A, {}),
                            ],
                          })
                        : null,
                      a > 1 && (0, o.Wi)(l + 1) && (0, d.O5)(r)
                        ? (0, m.jsxs)("div", {
                            className: "column col-12 col-sm-12 show-sm",
                            children: [
                              (0, m.jsx)("div", {
                                className: "ads",
                                children: (0, m.jsx)(h.vd, {}),
                              }),
                              (0, m.jsx)(c.A, {}),
                            ],
                          })
                        : null,
                      (0, o.Wi)(l + 1) && !(0, d.O5)(r)
                        ? (0, m.jsxs)("div", {
                            className: "column col-12 col-sm-12 show-sm",
                            children: [
                              (0, m.jsx)("div", {
                                className: "ads",
                                children: (0, m.jsx)(h.vd, {}),
                              }),
                              (0, m.jsx)(c.A, {}),
                            ],
                          })
                        : null,
                    ],
                  },
                  e.id
                )
              ),
            }),
          });
        },
        p = (0, r.A)(
          (0, s.y3)((e) => {
            let { fetchPage: a, page: l, size: s } = e;
            return a(l, s);
          }),
          (0, s.qm)((e) => {
            let { removePage: a, page: l, size: s } = e;
            return a(l, s);
          })
        )(u);
    },
    17128: (e, a, l) => {
      l.d(a, { A: () => _ });
      var s = l(60613),
        r = l(10892),
        i = (l(65043), l(22123)),
        c = l(29157);
      var t = l(5995),
        n = l(75065),
        o = l(96277),
        d = (l(75879), l(88313)),
        g = l(33373),
        h = l(90864),
        m = l(57624),
        u = l(71796),
        p = l(12419),
        A = l(93125),
        x = (l(85556), l(78837)),
        v = l(70579);
      const j = (0, c.A)(u.A),
        E = (e) => {
          let { articles: a } = e;
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsxs)("div", {
                className: "headline-articles",
                children: [
                  (0, v.jsxs)("div", {
                    className: "headline-article-hero",
                    children: [
                      (0, v.jsx)(h.A, { article: a[0], lazy: !1 }),
                      (0, v.jsxs)("div", {
                        className: "show-sm",
                        children: [(0, v.jsx)(x.y1, {}), (0, v.jsx)(p.A, {})],
                      }),
                    ],
                  }),
                  (0, v.jsx)("div", {
                    className: "headline-side-articles",
                    children: a
                      .slice(1)
                      .map((e) =>
                        (0, v.jsx)(
                          "div",
                          {
                            className: "headline-side-article",
                            children: (0, v.jsx)(A.A, {
                              size: "small",
                              article: e,
                              lazy: !1,
                            }),
                          },
                          e.id
                        )
                      ),
                  }),
                ],
              }),
              (0, v.jsx)(x.w7, {}),
              (0, v.jsx)(x.cO, {}),
              (0, v.jsx)(p.A, {}),
            ],
          });
        },
        N = (e) => {
          let { isFetching: a, articles: l, locale: s, error: r } = e;
          return (0, v.jsxs)("section", {
            className: "headlines",
            children: [
              r
                ? (0, v.jsx)(m.A, { message: j(s)("error"), level: "error" })
                : null,
              (0, d.A)([
                [() => a, () => null],
                [() => 0 === l.length, () => null],
                [g.A, () => (0, v.jsx)(E, { articles: l })],
              ])(l),
            ],
          });
        };
      var y = l(20045),
        R = l(83003);
      const C = (0, y.A)(
          (0, o.y3)((e) => {
            let { initialize: a, id: l } = e;
            return a(l);
          }),
          (0, o.qm)((e) => {
            let { clean: a } = e;
            return a();
          })
        )(N),
        b = (0, R.Ng)(
          (e) => ({
            isFetching: e.headlines.isFetching,
            articles: e.headlines.contents,
            error: e.headlines.error,
            locale: e.router.locale,
          }),
          (e) => ({
            initialize: (0, y.A)(e, n.initialize),
            clean: (0, y.A)(e, n.clean),
          })
        )(C);
      var I = l(12040),
        P = l(44967),
        w = l(82838),
        f = l(75806);
      const O = (0, c.A)({
          english: { page: "page", lastRevision: "Latest revision" },
          french: { page: "page", lastRevision: "Derni\xe8re modification" },
          arabic: {
            page: "\u0635\u0641\u062d\u0629",
            lastRevision:
              "\u0627\u0644\u062a\u0646\u0642\u064a\u062d \u0627\u0644\u0623\u062e\u064a\u0631",
          },
          hebrew: {
            page: "\u05e2\u05de\u05d5\u05d3",
            lastRevision:
              "\u05d2\u05e8\u05e1\u05d4 \u05d0\u05d7\u05e8\u05d5\u05e0\u05d4",
          },
        }),
        T = (e) => {
          let {
            locale: a,
            className: l,
            metaTitle: c,
            metaDescription: n,
            crumbs: o,
            title: d,
            subTitle: g,
            children: h,
            page: m,
            id: u,
            headlinesId: p,
            lastRevision: A,
            frontendUrl: j = null,
            redirected: E = !1,
          } = e;
          return (0, v.jsx)(x.SR, {
            children: (0, v.jsxs)("section", {
              id: "category",
              className: "page-content ".concat(
                null !== l && void 0 !== l ? l : ""
              ),
              children: [
                (0, v.jsx)(r.A, {
                  title: ""
                    .concat(c, " ")
                    .concat(
                      1 === m
                        ? ""
                        : "(".concat(O(a)("page"), " ").concat(m, ")")
                    ),
                  description: ""
                    .concat(n, " ")
                    .concat(
                      1 === m
                        ? ""
                        : "(".concat(O(a)("page"), " ").concat(m, ")")
                    ),
                  status: E ? 301 : 200,
                  redirectLocation: E ? j : null,
                }),
                (0, v.jsx)(s.A, { crumbs: o }),
                (0, v.jsxs)("div", {
                  className: "container container-page",
                  children: [
                    1 === m
                      ? (0, I.O5)(u)
                        ? (0, v.jsx)("div", {
                            className: "columns hide-xl",
                            children: (0, v.jsx)("div", {
                              className: "widget-wrapper column col-12",
                              children: (0, v.jsx)(P.A.Counters, { locale: a }),
                            }),
                          })
                        : (0, v.jsx)("div", {
                            className: "columns",
                            children: (0, v.jsx)("div", {
                              className: "adapex-wrapper column col-12",
                              children: (0, v.jsx)(x.h3, {}),
                            }),
                          })
                      : null,
                    1 === m && (0, I.O5)(u)
                      ? (0, v.jsx)("div", {
                          className: "columns show-xl",
                          children: (0, v.jsx)("div", {
                            className: "adapex-wrapper column col-12",
                            children: (0, v.jsx)(x.h3, {}),
                          }),
                        })
                      : null,
                    (0, v.jsxs)(t.A, {
                      level: "1",
                      children: [
                        d,
                        g ? (0, v.jsx)(t.A.Sub, { children: g }) : null,
                      ],
                    }),
                    p ? (0, v.jsx)(b, { id: p }) : null,
                    A
                      ? (0, v.jsxs)("div", {
                          className: "last-revision-date",
                          children: [
                            O(a)("lastRevision"),
                            (0, v.jsxs)(f.A, {
                              children: [
                                "\xa0",
                                (0, v.jsx)(w.A, {
                                  date: A,
                                  locale: a,
                                  isoProp: "lastRevision",
                                }),
                              ],
                            }),
                          ],
                        })
                      : null,
                    (0, v.jsxs)("div", {
                      className: "columns",
                      children: [
                        (0, v.jsx)("div", {
                          className: "column col-8 col-md-12",
                          children: h,
                        }),
                        (0, v.jsx)("aside", {
                          className: "column col-4 col-md-12 d-flex ads-aside",
                          children: (0, v.jsxs)(i.A, {
                            children: [
                              (0, v.jsx)(x.fr, {}),
                              (0, v.jsx)(x.hx, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        _ = (0, R.Ng)((e) => ({
          page: e.pagination.page,
          locale: e.router.locale,
        }))(T);
    },
    85396: (e, a, l) => {
      l.r(a), l.d(a, { default: () => z });
      l(65043);
      var s = l(20045),
        r = l(26234),
        i = l(96277),
        c = l(8135),
        t = l(25854),
        n = l(76426),
        o = l(8761),
        d = l(14825),
        g = l(33981),
        h = l(96188),
        m = l(29874),
        u = l(72712),
        p = l(61888),
        A = l(82635),
        x = l(7310),
        v = l(70579);
      var j = l(83003);
      const E = (e) => ({ key: e.id, label: e.name, link: e.frontendUrl }),
        N = (0, o.A)(
          (0, h.A)((0, m.A)(!0, "navbar")),
          (0, u.A)((0, p.A)("navbarPosition")),
          (0, A.A)(E)
        ),
        y = (0, j.Ng)(
          (e) => ({
            activeItem: E(e.category.category),
            menuItems: (0, g.A)(e.category.category.tree.children)
              ? []
              : [
                  E(e.category.category.tree.parent),
                  ...N(e.category.category.tree.children),
                ],
            isOpen: e.category.subCategoriesMenuOpened,
            collapsed: e.header.collapsed,
          }),
          (e) => ({
            open: (0, s.A)(e, r.openSubCategories),
            close: (0, s.A)(e, r.closeSubCategories),
          })
        )((e) => {
          let {
            menuItems: a,
            activeItem: l,
            open: s,
            close: r,
            isOpen: i,
            collapsed: c,
          } = e;
          return (0, v.jsx)(x.A, {
            items: a,
            activeItem: l,
            open: s,
            close: r,
            isOpen: i,
            collapsed: c,
            className: "show-xl",
          });
        });
      var R = l(17128),
        C = l(77701),
        b = l(15109);
      const I = (0, j.Ng)(
        (e, a) => {
          let { page: l } = a;
          return { articles: (0, C.A)([], l, e.category.articlePages) };
        },
        (e) => ({
          fetchPage: (0, s.A)(e, r.fetchArticlePage),
          removePage: (0, s.A)(e, r.removeArticlePage),
        })
      )(b.A);
      var P = l(45411),
        w = l(76435),
        f = l(65955),
        O = l(29157);
      const T = (0, P.A)("PageNotFound"),
        _ = (0, O.A)({
          english: { liveUpdates: "LIVE UPDATES" },
          french: { liveUpdates: "LIVE UPDATES" },
          arabic: { liveUpdates: "LIVE UPDATES" },
          hebrew: {
            liveUpdates:
              "\u05e2\u05d3\u05db\u05d5\u05e0\u05d9\u05dd \u05e9\u05d5\u05d8\u05e4\u05d9\u05dd",
          },
        }),
        S = (0, c.A)(
          (0, s.A)(t.A, (0, n.A)(["parent"])),
          (e) => [{ label: e.name }],
          (e) => [
            { label: e.parent.name, link: e.parent.frontendUrl },
            { label: e.name },
          ]
        ),
        L = (e, a) =>
          (0, o.A)(
            (e) => (e.parent ? e.parent.name : e.name),
            (l) =>
              "israel-at-war" ===
              (0, d.A)(new URL(e.frontendUrl).pathname.split("/"))
                ? "".concat(l, " - ").concat(_(a)("liveUpdates"))
                : l
          )(e),
        F = (e) => {
          let {
            isFetching: a,
            category: l,
            lastRevision: s,
            redirected: r,
            locale: i,
          } = e;
          return a
            ? (0, v.jsx)(w.A, {})
            : l
            ? (0, v.jsxs)(v.Fragment, {
                children: [
                  (0, v.jsx)(y, {}),
                  (0, v.jsx)(R.A, {
                    className: (0, g.A)(l.tree.children)
                      ? null
                      : "with-page-menu-hide-xl",
                    metaTitle: l.metaTitle,
                    metaDescription: l.metaDescription,
                    crumbs: S(l),
                    title: L(l, i),
                    subTitle: l.parent ? l.name : null,
                    headlinesId: l.id,
                    id: l.id,
                    lastRevision: s,
                    redirected: r,
                    frontendUrl: l.frontendUrl,
                    children: (0, v.jsx)(f.Ay, {
                      renderPage: (e) =>
                        (0, v.jsx)(I, {
                          id: l.id,
                          locale: i,
                          page: e,
                          size: 24,
                          variant: "author-full-date",
                        }),
                    }),
                  }),
                ],
              })
            : (0, v.jsx)(T, {});
        },
        U = (0, s.A)(
          (0, i.y3)((e) => {
            let { fetch: a } = e;
            return a();
          }),
          (0, i.qm)((e) => {
            let { clean: a } = e;
            return a();
          })
        )(F),
        D = (0, j.Ng)(
          (e) => ({
            isFetching: e.category.isFetching,
            category: e.category.category,
            lastRevision: e.category.lastRevision,
            redirected: e.category.redirected,
            locale: e.router.locale,
          }),
          (e) => ({ fetch: (0, s.A)(e, r.fetch), clean: (0, s.A)(e, r.clean) })
        )(U);
      var V = l(43602);
      const z = (e) =>
        (0, v.jsx)(V.A, {
          reducers: ["category", "headlines", "pagination"],
          epics: ["category", "headlines", "pagination"],
          children: (0, v.jsx)(D, { ...e }),
        });
    },
    26234: (e, a, l) => {
      l.r(a),
        l.d(a, {
          CLEAN: () => m,
          CLOSE_SUB_CATEGORIES: () => A,
          ERROR: () => u,
          FETCH: () => n,
          FETCH_ARTICLE_PAGE: () => d,
          INITIAL_STATE: () => t,
          LAST_REVISION_RECEIVED: () => x,
          OPEN_SUB_CATEGORIES: () => p,
          RECEIVED: () => o,
          RECEIVED_ARTICLE_PAGE: () => g,
          REMOVE_ARTICLE_PAGE: () => h,
          clean: () => C,
          closeSubCategories: () => P,
          default: () => w,
          error: () => b,
          fetch: () => v,
          fetchArticlePage: () => E,
          lastRevisionReceived: () => R,
          openSubCategories: () => I,
          received: () => j,
          receivedArticlePage: () => y,
          removeArticlePage: () => N,
        });
      var s = l(48500),
        r = l(4258),
        i = l(94233),
        c = l(42435);
      const t = {
          isFetching: !0,
          category: null,
          articlePages: {},
          lastRevision: null,
          subCategoriesMenuOpened: !1,
          redirected: !1,
          error: !1,
        },
        n = "category/FETCH",
        o = "category/RECEIVED",
        d = "category/FETCH_ARTICLE_PAGE",
        g = "category/RECEIVED_ARTICLE_PAGE",
        h = "category/REMOVE_ARTICLE_PAGE",
        m = "category/CLEAN",
        u = "category/ERROR",
        p = "categories/OPEN_SUB_CATEGORIES",
        A = "categories/CLOSE_SUB_CATEGORIES",
        x = "category/LAST_REVISION_RECEIVED",
        v = (0, s.A)({ type: n }),
        j = (e, a) => ({ type: o, category: e, shouldRedirect: a }),
        E = (e, a) => ({ type: d, page: e, size: a }),
        N = (e) => ({ type: h, page: e }),
        y = function (e, a, l, s) {
          return {
            type: g,
            page: e,
            totalPages: a,
            scrollHeight: l,
            scrollTop: s,
            articles:
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : [],
          };
        },
        R = (e) => {
          let { lastRevision: a } = e;
          return { type: x, lastRevision: a };
        },
        C = (0, s.A)({ type: m }),
        b = (0, s.A)({ type: u }),
        I = (0, s.A)({ type: p }),
        P = (0, s.A)({ type: A }),
        w = (0, c.vy)(t, {
          [n]: () => ({ ...t }),
          [o]: (e, a) => {
            let { category: l, shouldRedirect: s } = a;
            return {
              ...e,
              isFetching: !1,
              redirected: s,
              error: !1,
              category: l,
            };
          },
          [g]: (e, a) => {
            let { page: l, articles: s } = a;
            return { ...e, articlePages: (0, r.A)(l, s, e.articlePages) };
          },
          [x]: (e, a) => {
            let { lastRevision: l } = a;
            return { ...e, lastRevision: l };
          },
          [h]: (e, a) => {
            let { page: l } = a;
            return { ...e, articlePages: (0, i.A)(l, e.articlePages) };
          },
          [m]: (0, s.A)(t),
          [u]: (e) => ({ ...e, isFetching: !1, error: !0 }),
          [p]: (e) => ({ ...e, subCategoriesMenuOpened: !0 }),
          [A]: (e) => ({ ...e, subCategoriesMenuOpened: !1 }),
        });
    },
    82838: (e, a, l) => {
      l.d(a, { A: () => n });
      l(65043);
      var s = l(75806),
        r = l(98079),
        i = l(85556),
        c = l(70579);
      const t = function (e) {
          let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : i.QF;
          return (0, r.u)(e).toLocaleString((0, r.$s)(a), {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
        },
        n = (e) => {
          let { date: a, locale: l, itemProp: i } = e;
          return (0, c.jsx)("time", {
            dateTime: (0, r.EG)(a),
            itemProp: i,
            children: (0, c.jsx)(s.A, { children: t(a, l) }),
          });
        };
    },
  },
]);
//# sourceMappingURL=5979.728ff9dd.chunk.js.map
