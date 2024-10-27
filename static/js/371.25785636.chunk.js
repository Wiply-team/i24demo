"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [371, 3472, 3044, 7348, 5662, 9784],
  {
    95600: (e, l, s) => {
      s.r(l), s.d(l, { default: () => E });
      s(65043);
      var a = s(96277),
        i = s(53472),
        n = s(43677),
        c = s(63842),
        r = s(93125),
        t = s(88313),
        o = s(4036);
      const d = "ArticlesWidgets_wrapper__iyZjv",
        h = "ArticlesWidgets_custom-wrapper__S77gw";
      var m = s(70579);
      const x = (e) => {
          let { article: l } = e;
          return (0, m.jsx)(c.A, { article: l, variant: "author-full-date" });
        },
        A = (e) => {
          let { articles: l } = e;
          return (0, m.jsx)("div", {
            className: "columns",
            children: l.map((e) =>
              (0, m.jsx)(
                "div",
                {
                  className: "column col-6 col-sm-12 col-xs-12",
                  children: (0, m.jsx)(r.A, {
                    article: e,
                    variant: "squared",
                    size: "small",
                  }),
                },
                e.id
              )
            ),
          });
        },
        j = (e) => {
          let { articles: l } = e;
          return (0, m.jsx)("div", {
            className: "columns",
            children: l.map((e) =>
              (0, m.jsx)(
                "div",
                {
                  className: "column col-4 col-sm-12 col-xs-12",
                  children: (0, m.jsx)(r.A, {
                    article: e,
                    variant: "squared",
                    size: "small",
                  }),
                },
                e.id
              )
            ),
          });
        },
        p = (e) => {
          let { widgets: l } = e;
          return l.map((e) =>
            (0, m.jsxs)(
              "div",
              {
                className: "".concat(d, " ").concat(e.backgroundColor ? h : ""),
                style: e.backgroundColor
                  ? { backgroundColor: e.backgroundColor }
                  : null,
                children: [
                  (0, m.jsx)(n.A, { level: "2", children: e.title }),
                  (0, t.A)([
                    [
                      (0, o.A)(1),
                      () => (0, m.jsx)(x, { article: e.articles[0] }),
                    ],
                    [
                      (0, o.A)(2),
                      () => (0, m.jsx)(A, { articles: e.articles }),
                    ],
                    [
                      (0, o.A)(3),
                      () => (0, m.jsx)(j, { articles: e.articles }),
                    ],
                    [
                      (0, o.A)(4),
                      () => (0, m.jsx)(A, { articles: e.articles }),
                    ],
                  ])(e.articles.length),
                ],
              },
              e.id
            )
          );
        };
      var g = s(20045),
        u = s(83003);
      const v = (0, g.A)(
          (0, a.y3)((e) => {
            let { fetch: l } = e;
            return l();
          }),
          (0, a.qm)((e) => {
            let { clean: l } = e;
            return l();
          })
        )(p),
        N = (0, u.Ng)(
          (e) => ({ widgets: e.articlesWidgets.widgets }),
          (e) => ({ fetch: (0, g.A)(e, i.fetch), clean: (0, g.A)(e, i.clean) })
        )(v);
      var b = s(43602);
      const E = (e) =>
        (0, m.jsx)(b.A, {
          reducers: ["articlesWidgets"],
          epics: ["articlesWidgets"],
          children: (0, m.jsx)(N, { ...e }),
        });
    },
    9180: (e, l, s) => {
      s.d(l, { A: () => x });
      var a = s(76426),
        i = s(20045),
        n = s(77701),
        c = s(71517),
        r = s(27266),
        t = (s(65043), s(96277)),
        o = s(70579);
      const d = (0, i.A)(
        (0, t.y3)((e) => {
          let { onLoad: l } = e;
          return l();
        }, !0)
      )((e) => {
        let { component: l, onLoad: s, ...a } = e;
        return (0, o.jsx)(l, { ...a });
      });
      var h = s(83003);
      const m = (0, i.A)(
          (0, t.y3)((e) => {
            let { observe: l, componentId: s } = e;
            return l(r.nS, s);
          }, !0)
        )((e) => {
          let {
            componentId: l,
            observedItem: s,
            component: a,
            loaded: i,
            ...c
          } = e;
          return (0, o.jsx)("div", {
            "data-observed-item-id": l,
            id: l,
            children: (0, n.A)(!1, "isIntersecting", s)
              ? (0, o.jsx)(d, { component: a, onLoad: () => i(r.nS, l), ...c })
              : null,
          });
        }),
        x = (0, h.Ng)(
          (e, l) => {
            let { componentId: s } = l;
            return {
              observedItem: (0, a.A)(
                ["intersectionObserver", "observedItems", r.nS, s],
                e
              ),
            };
          },
          (e) => ({ observe: (0, i.A)(e, c.lB), loaded: (0, i.A)(e, c.Kc) })
        )(m);
    },
    85668: (e, l, s) => {
      s.d(l, { A: () => d });
      s(65043);
      var a = s(74596),
        i = s(43677),
        n = s(29157);
      s(85556);
      var c = s(70579);
      const r = (0, n.A)({
          english: { seeAll: "See all" },
          french: { seeAll: "Tout voir" },
          arabic: { seeAll: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644" },
          hebrew: { seeAll: "\u05e8\u05d0\u05d4 \u05d4\u05db\u05dc" },
        }),
        t = (e) => {
          let { locale: l, label: s, link: n } = e;
          return (0, c.jsxs)("div", {
            className: "homepage-section-header",
            children: [
              (0, c.jsx)(a.A, {
                href: n,
                children: (0, c.jsx)(i.A, { level: "2", children: s }),
              }),
              (0, c.jsx)("div", {
                className: "direct-link",
                children: (0, c.jsx)(a.A, {
                  href: n,
                  children: r(l)("seeAll"),
                }),
              }),
            ],
          });
        };
      (t.Placeholder = () =>
        (0, c.jsx)("div", {
          className: "homepage-section-header placeholder",
        })).propTypes = {};
      const o = t;
      const d = (0, s(83003).Ng)((e) => ({ locale: e.router.locale }))(o);
    },
    38967: (e, l, s) => {
      s.d(l, { A: () => E });
      var a = s(39784),
        i = s(96277),
        n = s(88313),
        c = s(33373),
        r = s(20491),
        t = s(35213),
        o = s(74596),
        d = (s(65043), s(29157));
      var h = s(78837),
        m = s(70579);
      const x = (0, d.A)({
          english: { link: { href: "special", label: "Find out now" } },
          french: {
            link: { href: "special", label: "Voir les derniers articles" },
          },
          arabic: {
            link: {
              href: "\u0645\u0645\u064a\u0632",
              label: "\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0622\u0646",
            },
          },
          hebrew: {
            link: {
              href: "\u05de\u05d9\u05d5\u05d7\u05d3",
              label: "\u05d2\u05dc\u05d4 \u05e2\u05db\u05e9\u05d9\u05d5",
            },
          },
        }),
        A = (e) => {
          let {
            bannerImage: l,
            bannerAlternateText: s,
            openInNewPage: a,
            locale: i,
            slug: n,
          } = e;
          return a
            ? (0, m.jsx)(r.A, {
                title: x(i)("link.label"),
                href: "/"
                  .concat(i, "/")
                  .concat(x(i)("link.href"), "/")
                  .concat(n),
                variant: "block",
                children: (0, m.jsx)("div", {
                  "data-is": "special-banner",
                  children: (0, m.jsx)("div", {
                    className: "special-banner-wrapper",
                    children: (0, m.jsx)(t.A, {
                      src: l.href,
                      alt: null !== s && void 0 !== s ? s : "",
                    }),
                  }),
                }),
              })
            : (0, m.jsx)(o.A, {
                title: x(i)("link.label"),
                href: "/"
                  .concat(i, "/")
                  .concat(x(i)("link.href"), "/")
                  .concat(n),
                variant: "block",
                children: (0, m.jsx)("div", {
                  "data-is": "special-banner",
                  children: (0, m.jsx)("div", {
                    className: "special-banner-wrapper",
                    children: (0, m.jsx)(t.A, {
                      src: l.href,
                      alt: null !== s && void 0 !== s ? s : "",
                    }),
                  }),
                }),
              });
        },
        j = (e) => {
          let {
            bannerImage: l,
            bannerAlternateText: s,
            externalUrl: a,
            openInNewPage: i,
            locale: n,
          } = e;
          return (0, m.jsx)(r.A, {
            title: x(n)("link.label"),
            href: a,
            openInNewPage: i,
            variant: "block",
            children: (0, m.jsx)("div", {
              "data-is": "special-banner",
              children: (0, m.jsx)("div", {
                className: "special-banner-wrapper",
                children: (0, m.jsx)(t.A, {
                  src: l.href,
                  alt: null !== s && void 0 !== s ? s : "",
                }),
              }),
            }),
          });
        },
        p = () =>
          (0, m.jsxs)("div", {
            "data-is": "special-banner-ads",
            children: [(0, m.jsx)(h.Fn, {}), (0, m.jsx)(h.TA, {})],
          }),
        g = (0, n.A)([
          [
            (e) => {
              let { isFetching: l } = e;
              return l;
            },
            () =>
              (0, m.jsx)("div", { "data-is": "special-banner-placeholder" }),
          ],
          [
            (e) => {
              let { specialPage: l } = e;
              return l && "content-list" === l.type;
            },
            (e) => {
              let { locale: l, specialPage: s } = e;
              return (0, m.jsx)(A, {
                locale: l,
                slug: s.slug,
                bannerImage: s.bannerImage,
                bannerAlternateText: s.imageAlternateText,
                openInNewPage: s.openInNewPage,
              });
            },
          ],
          [
            (e) => {
              let { specialPage: l } = e;
              return l && "external" === l.type;
            },
            (e) => {
              let { locale: l, specialPage: s } = e;
              return (0, m.jsx)(j, {
                locale: l,
                externalUrl: s.externalUrl,
                bannerImage: s.bannerImage,
                bannerAlternateText: s.imageAlternateText,
                openInNewPage: s.openInNewPage,
              });
            },
          ],
          [c.A, () => (0, m.jsx)(p, {})],
        ]),
        u = g;
      var v = s(20045),
        N = s(83003);
      const b = (0, v.A)(
          (0, i.y3)((e) => {
            let { fetchSpecialPage: l } = e;
            return l();
          }),
          (0, i.qm)((e) => {
            let { clear: l } = e;
            return l();
          })
        )(u),
        E = (0, N.Ng)(
          (e) => ({
            specialPage: e.specialPage.metadata,
            isFetching: e.specialPage.isFetching,
            locale: e.router.locale,
          }),
          (e) => ({
            clear: (0, v.A)(e, a.clear),
            fetchSpecialPage: (0, v.A)(e, a.fetchSpecialPage),
          })
        )(b);
    },
    10891: (e, l, s) => {
      s.r(l), s.d(l, { default: () => Pe });
      var a = s(65043),
        i = s(95600),
        n = s(9180),
        c = s(10892),
        r = s(45411),
        t = s(70579);
      const o = (e) => {
        let { pageId: l } = e;
        return (0, t.jsx)("div", { id: "minute_".concat(l) });
      };
      var d = s(13318),
        h = s(38967),
        m = s(29157);
      const x = {
        english: {
          breakingTitle: "Breaking news",
          quickCategoryNav: "Must see",
          metaDescription:
            "i24NEWS brings you the biggest news and stories from the Middle East, Israel and around the world",
          title:
            "i24NEWS - Breaking news from the Middle East, Israel and around the world",
          close: "Close",
          link: { label: "See more >>" },
        },
        french: {
          breakingTitle: "\xc9dition sp\xe9ciale",
          quickCategoryNav: "\xc0 voir",
          metaDescription:
            "i24NEWS vous informe des derni\xe8res nouvelles sur le Moyen-Orient, Isra\xebl et le monde entier",
          title:
            "i24NEWS - Toute l'actualit\xe9 du Moyen-Orient, d'Isra\xebl et du monde entier",
          close: "Fermer",
          link: { label: "Voir plus >>" },
        },
        arabic: {
          breakingTitle:
            "\u0623\u062e\u0628\u0627\u0631 \u0639\u0627\u062c\u0644\u0629",
          quickCategoryNav: "\u064a\u062c\u0628 \u0631\u0624\u064a\u062a\u0647",
          metaDescription:
            "\u0642\u0646\u0627\u0629 i24NEWS \u062a\u0642\u062f\u0645 \u0644\u0643\u0645 \u0623\u0647\u0645 \u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0648\u0627\u0644\u0642\u0635\u0635 \u0645\u0646 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637 \u0648\u0625\u0633\u0631\u0627\u0626\u064a\u0644 \u0648\u062f\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645",
          title:
            "\u0642\u0646\u0627\u0629 i24NEWS \u062a\u0642\u062f\u0645 \u0644\u0643\u0645 \u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0639\u0627\u062c\u0644\u0629 \u0645\u0646 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637 \u0648\u0625\u0633\u0631\u0627\u0626\u064a\u0644 \u0648\u062f\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645",
          close: "\u0623\u063a\u0644\u0642",
          link: {
            label:
              "\u0634\u0627\u0647\u062f \u0627\u0644\u0645\u0632\u064a\u062f >>",
          },
        },
        hebrew: {
          breakingTitle:
            "\u05d7\u05d3\u05e9\u05d5\u05ea \u05de\u05ea\u05e4\u05e8\u05e6\u05d5\u05ea",
          quickCategoryNav:
            "\u05d7\u05d5\u05d1\u05ea \u05e6\u05e4\u05d9\u05d9\u05d4",
          metaDescription:
            "i24NEWS \u05de\u05d1\u05d9\u05d0 \u05dc\u05db\u05dd \u05d0\u05ea \u05d4\u05d7\u05d3\u05e9\u05d5\u05ea \u05d5\u05d4\u05e1\u05d9\u05e4\u05d5\u05e8\u05d9\u05dd \u05d4\u05db\u05d9 \u05d2\u05d3\u05d5\u05dc\u05d9\u05dd \u05de\u05d4\u05de\u05d6\u05e8\u05d7 \u05d4\u05ea\u05d9\u05db\u05d5\u05df, \u05de\u05d9\u05e9\u05e8\u05d0\u05dc \u05d5\u05de\u05e1\u05d1\u05d9\u05d1 \u05dc\u05e2\u05d5\u05dc\u05dd",
          title:
            "i24NEWS - \u05d7\u05d3\u05e9\u05d5\u05ea \u05de\u05ea\u05e4\u05e8\u05e6\u05d5\u05ea \u05de\u05d4\u05de\u05d6\u05e8\u05d7 \u05d4\u05ea\u05d9\u05db\u05d5\u05df, \u05d9\u05e9\u05e8\u05d0\u05dc \u05d5\u05de\u05e1\u05d1\u05d9\u05d1 \u05dc\u05e2\u05d5\u05dc\u05dd",
          close: "\u05e1\u05d2\u05d5\u05e8",
          link: { label: "\u05e8\u05d0\u05d4 \u05e2\u05d5\u05d3 >>" },
        },
      };
      var A = s(75065),
        j = s(96277),
        p = (s(75879), s(88313)),
        g = s(33373),
        u = s(90864),
        v = s(57624),
        N = s(71796),
        b = s(12419),
        E = s(93125),
        w = (s(85556), s(13044)),
        k = s(4036),
        I = s(20491),
        T = s(57079),
        C = s(7489);
      const f = (e) => {
          let {
            width: l = 20,
            height: s = 20,
            "aria-label": a,
            className: i = "",
          } = e;
          return (0, t.jsx)(C.A, {
            className: i,
            width: l,
            height: s,
            viewBox: "0 0 1024 1024",
            "aria-label": a,
            children: (0, t.jsx)("path", {
              d: "M856 282.665v-114.665h-802.665v630.665c0 31.666 25.669 57.335 57.335 57.335h774c47.497 0 86-38.503 86-86v-487.335h-114.665zM798.665 798.665h-688v-573.335h688v573.335zM168 340h573.335v57.335h-573.335zM512 454.665h229.335v57.335h-229.335zM512 569.335h229.335v57.335h-229.335zM512 684h172v57.335h-172zM168 454.665h286.665v286.665h-286.665z",
            }),
          });
        },
        y = (e) => {
          let {
            width: l = 20,
            height: s = 20,
            "aria-label": a,
            className: i = "",
          } = e;
          return (0, t.jsx)(C.A, {
            className: i,
            width: l,
            height: s,
            viewBox: "0 0 1024 1024",
            "aria-label": a,
            children: (0, t.jsx)("path", {
              d: "M985.385 777.5c0-265.5-236-206.5-236-413 0-17.11-1.648-31.73-4.653-44.183-15.515-104.188-84.956-187.805-174.947-213.285 0.797-3.638 1.215-7.405 1.215-11.255 0-30.678-26.55-55.777-59-55.777s-59 25.099-59 55.775c0 3.855 0.421 7.619 1.215 11.255-100.92 28.578-175.999 130.258-178.154 252.078-0.035 1.77-0.061 3.564-0.061 5.391 0 206.502-236 147.502-236 413.002 0 70.271 157.264 129.061 367.8 143.885 19.844 37.249 59.051 62.615 104.2 62.615s84.358-25.366 104.2-62.615c210.54-14.829 367.8-73.614 367.8-143.885 0-0.208-0.026-0.421-0.028-0.627l1.408 0.627zM801.696 827.371c-49.995 13.34-108.928 22.931-172.178 28.253-5.259-60.308-55.847-107.624-117.518-107.624s-112.259 47.316-117.518 107.624c-63.248-5.322-122.183-14.913-172.178-28.253-68.8-18.359-101.69-38.895-113.728-49.871 12.038-10.976 44.928-31.512 113.728-49.871 79.992-21.342 182.872-33.099 289.696-33.099s209.704 11.757 289.696 33.099c68.8 18.359 101.69 38.895 113.728 49.871-12.038 10.976-44.928 31.512-113.728 49.871z",
            }),
          });
        },
        L = (e) => {
          let {
            width: l = 20,
            height: s = 20,
            "aria-label": a,
            className: i = "",
          } = e;
          return (0, t.jsx)(C.A, {
            className: i,
            width: l,
            height: s,
            viewBox: "0 0 1024 1024",
            "aria-label": a,
            children: (0, t.jsx)("path", {
              d: "M512 158c-228.094 0-413 184.906-413 413s184.906 413 413 413 413-184.906 413-413-184.906-413-413-413zM512 902.875c-183.289 0-331.875-148.588-331.875-331.875 0-183.289 148.586-331.875 331.875-331.875 183.287 0 331.875 148.586 331.875 331.875 0 183.287-148.588 331.875-331.875 331.875zM901.754 304.739c14.787-25.862 23.246-55.812 23.246-87.739 0-97.755-79.245-177-177-177-56.988 0-107.677 26.937-140.050 68.766 121.579 25.106 226.051 96.978 293.804 195.968v0zM416.050 108.766c-32.371-41.829-83.062-68.766-140.050-68.766-97.755 0-177 79.245-177 177 0 31.927 8.459 61.877 23.246 87.739 67.76-98.99 172.227-170.862 293.804-195.968zM512 571v-236h-59v295h236v-59z",
            }),
          });
        },
        P = (e) => {
          let {
            width: l = 20,
            height: s = 20,
            "aria-label": a,
            className: i = "",
          } = e;
          return (0, t.jsx)(C.A, {
            className: i,
            width: l,
            height: s,
            viewBox: "0 0 1024 1024",
            "aria-label": a,
            children: (0, t.jsx)("path", {
              d: "M978.285 436.646c0-182.986-53.542-331.443-119.742-332.616 0.267-0.006 0.528-0.025 0.792-0.025h-75.537c0 0-177.405 133.271-432.8 185.562-7.795 41.247-12.775 90.409-12.775 147.082s4.976 105.833 12.775 147.080c255.388 52.293 432.8 185.562 432.8 185.562h75.537c-0.267 0-0.528-0.024-0.792-0.027 66.206-1.173 119.742-149.628 119.742-332.614zM833.323 718.962c-8.542 0-17.787-8.872-22.536-14.158-11.5-12.809-22.577-32.75-32.048-57.673-21.181-55.767-32.846-130.515-32.846-210.489 0-79.97 11.665-154.72 32.846-210.487 9.464-24.923 20.547-44.866 32.048-57.673 4.749-5.292 13.994-14.162 22.536-14.162s17.791 8.874 22.534 14.162c11.504 12.809 22.581 32.748 32.048 57.673 21.183 55.765 32.848 130.517 32.848 210.487 0 79.964-11.665 154.718-32.848 210.489-9.46 24.923-20.547 44.864-32.048 57.673-4.743 5.286-13.99 14.158-22.534 14.158zM275.042 436.646c0-47.31 3.47-93.285 10.067-135.784-43.142 5.969-81.002 9.404-127.81 9.404-61.072 0-61.072 0-61.072 0l-50.515 86.231v80.299l50.51 86.231c0 0 0 0 61.072 0 46.808 0 84.668 3.439 127.81 9.404-6.591-42.499-10.063-88.471-10.063-135.786zM380.995 630.549l-116.568-22.32 74.536 292.834c3.856 15.149 18.894 22.803 33.411 16.989l107.971-43.217c14.519-5.806 20.333-21.824 12.928-35.594l-112.276-208.692zM833.323 545.45c-3.293 0-6.858-3.419-8.688-5.457-4.435-4.935-8.701-12.622-12.352-22.228-8.162-21.495-12.66-50.304-12.66-81.123s4.498-59.633 12.66-81.123c3.646-9.608 7.921-17.293 12.352-22.228 1.83-2.040 5.39-5.459 8.688-5.459 3.291 0 6.859 3.421 8.688 5.459 4.435 4.935 8.701 12.622 12.35 22.228 8.164 21.493 12.662 50.304 12.662 81.123s-4.498 59.633-12.662 81.123c-3.646 9.608-7.921 17.293-12.35 22.228-1.828 2.038-5.39 5.457-8.688 5.457z",
            }),
          });
        },
        _ = (e) => {
          let {
            width: l = 20,
            height: s = 20,
            "aria-label": a,
            className: i = "",
          } = e;
          return (0, t.jsx)(C.A, {
            className: i,
            width: l,
            height: s,
            viewBox: "0 0 1024 1024",
            "aria-label": a,
            children: (0, t.jsx)("path", {
              d: "M944.533 305.598c-81.868-11.771-169.057-20.296-260.041-25.095l152.008-152.008-59-59-207.013 207.011c-19.366-0.338-38.861-0.511-58.487-0.511v0l-236-236-59 59 179.026 179.026c-111.477 3.912-217.873 13.389-316.561 27.577-25.382 99.311-39.465 209.037-39.465 324.402s14.083 225.091 39.459 324.4c132.422 19.037 278.72 29.6 432.541 29.6s300.115-10.563 432.533-29.6c25.384-99.309 39.467-209.035 39.467-324.4s-14.083-225.091-39.467-324.402zM836.402 846.266c-99.315 12.691-209.035 19.736-324.402 19.736s-225.091-7.045-324.402-19.736c-19.033-66.206-29.598-139.356-29.598-216.265s10.563-150.065 29.598-216.266c99.311-12.691 209.035-19.734 324.402-19.734 115.361 0 225.087 7.043 324.396 19.734 19.041 66.206 29.604 139.356 29.604 216.266 0 76.908-10.563 150.063-29.598 216.265z",
            }),
          });
        };
      var S = s(16951),
        R = s(65476),
        F = s(18558),
        z = s(48434),
        M = s(75061);
      const O = (0, p.A)([
          [(0, k.A)("tv"), () => (0, t.jsx)(_, {})],
          [(0, k.A)("speaker"), () => (0, t.jsx)(P, {})],
          [(0, k.A)("facebook"), () => (0, t.jsx)(S.A, {})],
          [(0, k.A)("x"), () => (0, t.jsx)(M.A, {})],
          [(0, k.A)("youtube"), () => (0, t.jsx)(R.A, {})],
          [(0, k.A)("article"), () => (0, t.jsx)(f, {})],
          [(0, k.A)("bell"), () => (0, t.jsx)(y, {})],
          [(0, k.A)("clock"), () => (0, t.jsx)(L, {})],
        ]),
        B = (0, m.A)(x),
        D = (e) => {
          let { banner: l, close: s, locale: a } = e;
          return (0, t.jsx)(I.A, {
            href: l.linkUrl,
            children: (0, t.jsxs)("div", {
              className: "container container-page",
              style: { backgroundColor: l.backgroundColor },
              children: [
                (0, t.jsx)("div", {
                  className: "close-button",
                  children: (0, t.jsx)(z.A, {
                    onClick: s,
                    "aria-label": B(a)("close"),
                    children: (0, t.jsx)(T.A, { width: 14, height: 14 }),
                  }),
                }),
                (0, t.jsxs)("p", {
                  className: "content",
                  children: [
                    (0, t.jsx)("span", {
                      className: "banner-icon",
                      children: O(l.icon),
                    }),
                    (0, t.jsxs)("span", {
                      className: "title",
                      children: [l.title, ":\xa0"],
                    }),
                    l.body,
                    (0, t.jsx)("span", {
                      className: "see-more-separator",
                      children: "\xa0\xa0|\xa0",
                    }),
                    (0, t.jsx)("span", {
                      className: "see-more",
                      children: (0, F.O9)(l.linkLabel)
                        ? l.linkLabel
                        : B(a)("link.label"),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        W = (e) => {
          let { banner: l, close: s, locale: a } = e;
          return (0, t.jsxs)("div", {
            className: "container container-page",
            style: { backgroundColor: l.backgroundColor },
            children: [
              (0, t.jsx)("div", {
                className: "close-button",
                children: (0, t.jsx)(z.A, {
                  onClick: s,
                  "aria-label": B(a)("close"),
                  children: (0, t.jsx)(T.A, { width: 14, height: 14 }),
                }),
              }),
              (0, t.jsxs)("p", {
                className: "content",
                children: [
                  (0, t.jsx)("span", {
                    className: "banner-icon",
                    children: O(l.icon),
                  }),
                  (0, t.jsxs)("span", {
                    className: "title",
                    children: [l.title, ":\xa0"],
                  }),
                  l.body,
                ],
              }),
            ],
          });
        },
        V = (e) => {
          let { banner: l, close: s, opened: a, locale: i } = e;
          return a
            ? (0, t.jsxs)("div", {
                "data-is": "banner",
                children: [
                  (0, F.O9)(l.linkUrl)
                    ? D({ banner: l, close: s, locale: i })
                    : W({ banner: l, close: s, locale: i }),
                  (0, t.jsx)(b.A, {}),
                ],
              })
            : null;
        };
      var q = s(20045),
        H = s(83003);
      const G = (0, q.A)(
          (0, j.y3)((e) => {
            let { fetchLatestBanner: l } = e;
            return l();
          }),
          (0, j.qm)((e) => {
            let { clean: l } = e;
            return l();
          })
        )(V),
        U = (0, H.Ng)(
          (e) => ({
            opened: e.banner.opened,
            banner: e.banner.banner,
            locale: e.router.locale,
          }),
          (e) => ({
            close: (0, q.A)(e, w.close),
            clean: (0, q.A)(e, w.clean),
            fetchLatestBanner: (0, q.A)(e, w.fetchLatestBanner),
          })
        )(G);
      var K = s(44967),
        Z = s(57348),
        J = s(74596),
        Q = s(60425);
      const X = (0, m.A)(x),
        Y = (e) => {
          let { close: l, locale: s, news: a } = e;
          return (0, t.jsx)(J.A, {
            href: a.content.frontendUrl,
            children: (0, t.jsxs)("div", {
              className: "container container-page",
              children: [
                (0, t.jsx)("div", {
                  className: "close-button",
                  children: (0, t.jsx)(z.A, {
                    onClick: l,
                    "aria-label": X(s)("close"),
                    children: (0, t.jsx)(T.A, { width: 14, height: 14 }),
                  }),
                }),
                (0, t.jsxs)("p", {
                  className: "content",
                  children: [
                    (0, t.jsx)("span", {
                      className: "banner-icon",
                      children: (0, t.jsx)(Q.A, { width: 9, height: 20 }),
                    }),
                    (0, t.jsxs)("span", {
                      className: "title",
                      children: [X(s)("breakingTitle"), ":\xa0"],
                    }),
                    a.title,
                    (0, t.jsx)("span", {
                      className: "see-more-separator",
                      children: "\xa0\xa0|\xa0",
                    }),
                    (0, t.jsx)("span", {
                      className: "see-more",
                      children: (0, F.O9)(a.linkLabel)
                        ? a.linkLabel
                        : X(s)("link.label"),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        $ = (e) => {
          let { close: l, locale: s, news: a } = e;
          return (0, t.jsxs)("div", {
            className: "container container-page",
            children: [
              (0, t.jsx)("div", {
                className: "close-button",
                children: (0, t.jsx)(z.A, {
                  onClick: l,
                  "aria-label": X(s)("close"),
                  children: (0, t.jsx)(T.A, { width: 14, height: 14 }),
                }),
              }),
              (0, t.jsxs)("p", {
                className: "content",
                children: [
                  (0, t.jsx)("span", {
                    className: "banner-icon",
                    children: (0, t.jsx)(Q.A, { width: 9, height: 20 }),
                  }),
                  (0, t.jsxs)("span", {
                    className: "title",
                    children: [X(s)("breakingTitle"), ":\xa0"],
                  }),
                  a.title,
                ],
              }),
            ],
          });
        },
        ee = (e) => {
          let { close: l, locale: s, news: a, opened: i } = e;
          return i && null !== a
            ? (0, t.jsxs)("div", {
                "data-is": "banner",
                children: [
                  null !== a.content
                    ? Y({ close: l, locale: s, news: a })
                    : $({ close: l, locale: s, news: a }),
                  (0, t.jsx)("div", {
                    className: "show-sm",
                    children: (0, t.jsx)(b.A, {}),
                  }),
                  (0, t.jsx)("div", {
                    className: "hide-sm",
                    children: (0, t.jsx)(b.A, { variant: "thin" }),
                  }),
                ],
              })
            : null;
        },
        le = (0, q.A)(
          (0, j.y3)((e) => {
            let { fetchBreakingNews: l } = e;
            return l();
          }),
          (0, j.qm)((e) => {
            let { clean: l } = e;
            return l();
          })
        )(ee),
        se = (0, H.Ng)(
          (e) => ({
            locale: e.router.locale,
            news: e.breakingNews.news,
            opened: e.breakingNews.opened,
          }),
          (e) => ({
            fetchBreakingNews: (0, q.A)(e, Z.fetchBreakingNews),
            clean: (0, q.A)(e, Z.clean),
            close: (0, q.A)(e, Z.close),
          })
        )(le);
      var ae = s(78837);
      const ie = (0, m.A)(N.A),
        ne = () =>
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: "headline-articles",
                children: [
                  (0, t.jsxs)("div", {
                    className: "headline-article-hero",
                    children: [
                      (0, t.jsx)(u.A.Placeholder, {}),
                      (0, t.jsxs)("div", {
                        className: "show-sm",
                        children: [(0, t.jsx)(ae.y1, {}), (0, t.jsx)(b.A, {})],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "headline-side-articles",
                    children: [
                      (0, t.jsx)("div", {
                        className: "headline-side-article",
                        children: (0, t.jsx)(E.A.Placeholder, {
                          size: "small",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "headline-side-article",
                        children: (0, t.jsx)(E.A.Placeholder, {
                          size: "small",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "headline-side-article",
                        children: (0, t.jsx)(E.A.Placeholder, {
                          size: "small",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "headline-side-article",
                        children: (0, t.jsx)(E.A.Placeholder, {
                          size: "small",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "hide-sm",
                children: [(0, t.jsx)(ae.cO, {}), (0, t.jsx)(b.A, {})],
              }),
            ],
          }),
        ce = (e) => {
          let { articles: l, locale: s } = e;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(b.A, { variant: "thin" }),
              (0, t.jsx)("div", {
                className: "hide-sm",
                children: (0, t.jsx)(se, {}),
              }),
              (0, t.jsxs)("div", {
                className: "headline-articles",
                children: [
                  (0, t.jsxs)("div", {
                    className: "headline-article-hero",
                    children: [
                      (0, t.jsx)(u.A, { article: l[0], lazy: !1 }),
                      (0, t.jsxs)("div", {
                        className: "show-sm",
                        children: [
                          (0, t.jsx)(se, {}),
                          (0, t.jsx)(U, {}),
                          (0, t.jsx)(ae.y1, {}),
                          (0, t.jsx)(b.A, {}),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "headline-side-articles",
                    children: l
                      .slice(1)
                      .map((e) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className: "headline-side-article",
                            children: (0, t.jsx)(E.A, {
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
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(K.A.Counters, { locale: s }),
                  (0, t.jsx)(b.A, {}),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "hide-sm",
                children: [
                  (0, t.jsx)(ae.cO, {}),
                  (0, t.jsx)(b.A, {}),
                  (0, t.jsx)(U, {}),
                ],
              }),
            ],
          });
        },
        re = (e) => {
          let { isFetching: l, articles: s, locale: a, error: i } = e;
          return (0, t.jsxs)("section", {
            className: "headlines",
            children: [
              i
                ? (0, t.jsx)(v.A, { message: ie(a)("error"), level: "error" })
                : null,
              (0, p.A)([
                [() => l, () => (0, t.jsx)(ne, {})],
                [() => 0 === s.length, () => null],
                [g.A, () => (0, t.jsx)(ce, { articles: s, locale: a })],
              ])(s),
            ],
          });
        },
        te = (0, q.A)(
          (0, j.y3)((e) => {
            let { initialize: l, id: s } = e;
            return l(s, !0);
          }),
          (0, j.qm)((e) => {
            let { clean: l } = e;
            return l();
          })
        )(re),
        oe = (0, H.Ng)(
          (e) => ({
            isFetching: e.headlines.isFetching,
            articles: e.headlines.contents,
            error: e.headlines.error,
            locale: e.router.locale,
          }),
          (e) => ({
            initialize: (0, q.A)(e, A.initialize),
            clean: (0, q.A)(e, A.clean),
          })
        )(te);
      var de = s(8761),
        he = s(45662),
        me = s(85668);
      const xe = (0, m.A)({
          english: { label: "More news", link: "/en/news/more-news" },
          french: {
            label: "Plus d'actualit\xe9s",
            link: "/fr/actu/plus-d-actualites",
          },
          arabic: {
            label:
              "\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0623\u062e\u0628\u0627\u0631",
            link: "/ar/\u0623\u062e\u0628\u0627\u0631/\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0623\u062e\u0628\u0627\u0631",
          },
          hebrew: {
            label: "\u05e2\u05d5\u05d3 \u05d7\u05d3\u05e9\u05d5\u05ea",
            link: "/he/news/more-news",
          },
        }),
        Ae = (e) => {
          let { length: l } = e;
          return (0, t.jsx)("section", {
            className: "columns vertical-top-articles",
            children: Array.from({ length: l }).map((e, l) =>
              (0, t.jsx)(
                "div",
                {
                  className: "column col-6 col-sm-12",
                  children: (0, t.jsx)(E.A.Placeholder, { size: "small" }),
                },
                l
              )
            ),
          });
        },
        je = (e) => {
          let { locale: l, articles: s = [], isFetching: a } = e;
          return (0, t.jsxs)("div", {
            className: "homepage-top-articles",
            children: [
              (0, t.jsx)(me.A, { label: xe(l)("label"), link: xe(l)("link") }),
              a
                ? (0, t.jsx)(Ae, { length: 6 })
                : (0, t.jsx)("section", {
                    className: "columns",
                    children: s.map((e) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className: "column col-6 col-sm-12",
                          children: (0, t.jsx)(E.A, {
                            showSponsored: !0,
                            article: e,
                            size: "small",
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
            ],
          });
        },
        pe = (0, de.A)(
          (0, j.y3)((e) => {
            let { fetchTopArticles: l } = e;
            return l();
          }),
          (0, j.qm)((e) => {
            let { cleanTopArticles: l } = e;
            return l();
          })
        )(je),
        ge = (0, H.Ng)(
          (e) => ({
            locale: e.router.locale,
            articles: e.homepage.topArticles,
            isFetching: e.homepage.isFetchingTopArticles,
          }),
          (e) => ({
            fetchTopArticles: (0, q.A)(e, he.fetchTopArticles),
            cleanTopArticles: (0, q.A)(e, he.cleanTopArticles),
          })
        )(pe),
        ue = (0, r.A)("BrightcoveLiveVideoPlayer"),
        ve = (e) => {
          let { locale: l, id: s } = e;
          const [i, n] = (0, a.useState)(!1);
          return i
            ? null
            : (0, t.jsx)(ue, {
                pictureInPicture: "pinned",
                locale: l,
                muted: !0,
                autoPlay: !1,
                videoId: s,
                onClose: () => n(!0),
              });
        };
      var Ne = s(27222);
      const be = (0, H.Ng)((e) => ({
          locale: e.router.locale,
          id: (0, Ne.S1)(e.router.locale),
        }))(ve),
        Ee = () =>
          (0, t.jsx)("div", {
            className: "sticky-bottom",
            children: (0, t.jsx)("div", {
              className: "sticky-bottom-content hide-xl",
              children: (0, t.jsx)(be, {}),
            }),
          }),
        we = (0, m.A)(x),
        ke = (0, r.A)("LatestVideos"),
        Ie = (0, r.A)("FeaturedCategories"),
        Te = (e) => {
          let { locale: l } = e;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(c.A, {
                title: we(l)("title"),
                description: we(l)("metaDescription"),
                withDefaultTitle: !1,
                children: (0, t.jsx)(ae.uN, {
                  children: (0, t.jsxs)("div", {
                    id: "homepage",
                    className: "page-content",
                    children: [
                      (0, t.jsx)("section", {
                        className: "container container-page banners special",
                        children: (0, t.jsx)(h.A, {}),
                      }),
                      (0, t.jsx)("div", {
                        className: "container container-page",
                        children: (0, t.jsx)(oe, {}),
                      }),
                      (0, t.jsx)("section", {
                        className: "latest-videos banner-section",
                        children: (0, t.jsx)("div", {
                          className: "wrapper",
                          children: (0, t.jsx)("div", {
                            className: "container container-page",
                            children: (0, t.jsx)(n.A, {
                              componentId: "latest-videos",
                              component: ke,
                            }),
                          }),
                        }),
                      }),
                      (0, t.jsx)("section", {
                        className: "top-articles banner-section",
                        children: (0, t.jsx)("div", {
                          className: "container container-page",
                          children: (0, t.jsxs)("div", {
                            className: "columns",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "column col-8 col-md-12 main-column",
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "columns",
                                    children: (0, t.jsx)("div", {
                                      className: "column col-12",
                                      children: (0, t.jsx)(ge, {}),
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "columns",
                                    children: (0, t.jsx)("div", {
                                      className: "column col-12",
                                      children: (0, t.jsx)(o, {
                                        pageId: "home",
                                      }),
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "columns",
                                    children: (0, t.jsxs)("div", {
                                      className:
                                        "column col-6 col-sm-12 show-sm",
                                      children: [
                                        (0, t.jsx)(b.A, {}),
                                        (0, t.jsx)("div", {
                                          className: "ads",
                                          children: (0, t.jsx)(ae.rA, {}),
                                        }),
                                        (0, t.jsx)(b.A, {}),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "column col-4 col-md-12 aside-column",
                                children: [
                                  (0, t.jsx)(d.default, { aside: !0 }),
                                  (0, t.jsx)("div", {
                                    className: "aside-ads",
                                    children: (0, t.jsx)(ae.xR, {}),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, t.jsx)("section", {
                        className: "column-ads banner-section",
                        children: (0, t.jsx)("div", {
                          className: "container container-page taboola-ads",
                          children: (0, t.jsx)(ae.Z_, {}),
                        }),
                      }),
                      (0, t.jsx)("section", {
                        className:
                          "featured-categories articles-widgets banner-section",
                        children: (0, t.jsx)("div", {
                          className: "container container-page",
                          children: (0, t.jsxs)("div", {
                            className: "columns",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "column col-8 col-md-12",
                                children: [
                                  (0, t.jsx)(n.A, {
                                    componentId: "articles-widgets",
                                    component: i.default,
                                  }),
                                  (0, t.jsx)(n.A, {
                                    componentId: "featured-categories",
                                    component: Ie,
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className: "column col-4 col-md-12 d-flex",
                                children: (0, t.jsxs)("div", {
                                  className: "featured-category-ads",
                                  children: [
                                    (0, t.jsx)(ae.RO, {}),
                                    (0, t.jsx)(ae.JN, {}),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)(Ee, {}),
            ],
          });
        },
        Ce = (0, H.Ng)((e) => ({
          locale: e.router.locale,
          liveVideoId: (0, Ne.S1)(e.router.locale),
        }))(Te);
      var fe = s(43602);
      const ye = [
          "banner",
          "breakingNews",
          "featuredCategories",
          "headlines",
          "homepage",
          "latestVideos",
          "specialPage",
          "topArticles",
        ],
        Le = [
          "banner",
          "breakingNews",
          "featuredCategories",
          "headlines",
          "homepage",
          "latestVideos",
          "specialPage",
          "topArticles",
        ],
        Pe = (e) =>
          (0, t.jsx)(fe.A, {
            reducers: ye,
            epics: Le,
            children: (0, t.jsx)(Ce, { ...e }),
          });
    },
    35213: (e, l, s) => {
      s.d(l, { A: () => n });
      var a = s(1690),
        i = (s(65043), s(70579));
      const n = (e) =>
        (0, i.jsx)(a.A, {
          ...e,
          width: 1e3,
          sources: [
            { renditions: [{ width: 1e3 }], media: "(min-width: 1000px)" },
            {
              renditions: [{ width: 750 }],
              media: "(min-width: 480px) and (max-width: 1000px)",
            },
            { renditions: [{ width: 480 }], media: "(max-width: 480px)" },
          ],
        });
    },
    53472: (e, l, s) => {
      s.r(l),
        s.d(l, {
          CLEAN: () => o,
          ERROR: () => t,
          FETCH: () => c,
          INITIAL_STATE: () => n,
          RECEIVED: () => r,
          clean: () => x,
          default: () => A,
          error: () => m,
          fetch: () => d,
          received: () => h,
        });
      var a = s(48500),
        i = s(42435);
      const n = { isFetching: !0, widgets: [], error: !1 },
        c = "articlesWidgets/FETCH",
        r = "articlesWidgets/RECEIVED",
        t = "articlesWidgets/ERROR",
        o = "articlesWidgets/CLEAN",
        d = (0, a.A)({ type: c }),
        h = (e) => ({ type: r, widgets: null !== e && void 0 !== e ? e : [] }),
        m = (0, a.A)({ type: t }),
        x = (0, a.A)({ type: o }),
        A = (0, i.vy)(n, {
          [c]: (e) => ({ ...e, isFetching: !0, error: !1 }),
          [r]: (e, l) => {
            let { widgets: s } = l;
            return { ...e, isFetching: !1, error: !1, widgets: s };
          },
          [t]: (e) => ({ ...e, isFetching: !1, error: !0 }),
          [o]: (0, a.A)(n),
        });
    },
    13044: (e, l, s) => {
      s.r(l),
        s.d(l, {
          BANNER_RECEIVED: () => o,
          CLEAN: () => c,
          CLOSE: () => r,
          FETCH_LATEST_BANNER: () => t,
          INITIAL_STATE: () => n,
          bannerReceived: () => x,
          clean: () => d,
          close: () => h,
          default: () => A,
          fetchLatestBanner: () => m,
        });
      var a = s(48500),
        i = s(42435);
      const n = { opened: !1, banner: null },
        c = "banner/CLEAN",
        r = "banner/CLOSE",
        t = "banner/FETCH_LATEST_BANNER",
        o = "banner/BANNER_RECEIVED",
        d = (0, a.A)({ type: c }),
        h = (0, a.A)({ type: r }),
        m = (0, a.A)({ type: t }),
        x = (e) => ({ type: o, banner: e }),
        A = (0, i.vy)(n, {
          [c]: (0, a.A)(n),
          [r]: (e) => ({ ...e, opened: !1 }),
          [o]: (e, l) => {
            let { banner: s } = l;
            return { ...e, opened: !0, banner: s };
          },
        });
    },
    57348: (e, l, s) => {
      s.r(l),
        s.d(l, {
          BREAKING_NEWS_RECEIVED: () => r,
          CLEAN: () => o,
          CLOSE: () => t,
          FETCH_BREAKING_NEWS: () => c,
          INITIAL_STATE: () => n,
          breakingNewsReceived: () => h,
          clean: () => x,
          close: () => m,
          default: () => A,
          fetchBreakingNews: () => d,
        });
      var a = s(48500),
        i = s(42435);
      const n = { opened: !0, news: null },
        c = "breakingNews/FETCH_BREAKING_NEWS",
        r = "breakingNews/BREAKING_NEWS_RECEIVED",
        t = "breakingNews/CLOSE",
        o = "breakingNews/CLEAN",
        d = (0, a.A)({ type: c }),
        h = (e) => ({ type: r, news: e }),
        m = (0, a.A)({ type: t }),
        x = (0, a.A)({ type: o }),
        A = (0, i.vy)(n, {
          [r]: (e, l) => {
            let { news: s } = l;
            return { ...e, news: s };
          },
          [t]: (e) => ({ ...e, opened: !1 }),
          [o]: (0, a.A)(n),
        });
    },
    45662: (e, l, s) => {
      s.r(l),
        s.d(l, {
          CLEAN_TOP_ARTICLES: () => t,
          FETCH_TOP_ARTICLES: () => c,
          INITIAL_STATE: () => n,
          RECEIVED_TOP_ARTICLES: () => r,
          cleanTopArticles: () => h,
          default: () => m,
          fetchTopArticles: () => o,
          receivedTopArticles: () => d,
        });
      var a = s(48500),
        i = s(42435);
      const n = {
          topArticles: [],
          isFetchingTopArticles: !0,
          topArticlesLimit: 6,
        },
        c = "homepage/FETCH_TOP_ARTICLES",
        r = "homepage/RECEIVED_TOP_ARTICLES",
        t = "homepage/CLEAN_TOP_ARTICLES",
        o = (0, a.A)({ type: c }),
        d = (e) => ({ type: r, articles: e }),
        h = (0, a.A)({ type: t }),
        m = (0, i.vy)(n, {
          [c]: (e) => ({ ...e, isFetchingTopArticles: !0 }),
          [r]: (e, l) => {
            let { articles: s } = l;
            return { ...e, topArticles: s, isFetchingTopArticles: !1 };
          },
          [t]: (e, l) => {
            let { articles: s } = l;
            return { ...e, topArticles: [] };
          },
        });
    },
    39784: (e, l, s) => {
      s.r(l),
        s.d(l, {
          ARTICLES_LOADED: () => d,
          CLEAR: () => x,
          ERROR: () => h,
          FETCH_SPECIAL_PAGE: () => r,
          INITIAL_STATE: () => c,
          LOAD_ARTICLES: () => o,
          LOAD_MORE: () => m,
          SPECIAL_PAGE_RECEIVED: () => t,
          articlesLoaded: () => g,
          clear: () => N,
          default: () => b,
          error: () => u,
          fetchSpecialPage: () => A,
          loadArticles: () => p,
          loadMore: () => v,
          specialPageReceived: () => j,
        });
      var a = s(83317),
        i = s(14321),
        n = s(42435);
      const c = {
          articles: [],
          canLoadMore: !1,
          error: !1,
          isFetching: !0,
          isFetchingArticles: !0,
          limit: 20,
          page: 1,
          metadata: {
            type: "",
            title: "",
            slug: "",
            externalUrl: null,
            imageAlternateText: null,
            metaTitle: null,
            metaDescription: null,
            visible: !1,
            headerImage: { href: null },
            bannerImage: { href: null },
            tags: [],
          },
        },
        r = "specialPage/FETCH_SPECIAL_PAGE",
        t = "specialPage/SPECIAL_PAGE_RECEIVED",
        o = "specialPage/LOAD_ARTICLES",
        d = "specialPage/ARTICLES_LOADED",
        h = "specialPage/ERROR",
        m = "specialPage/LOAD_MORE",
        x = "specialPage/CLEAR",
        A = () => ({ type: r }),
        j = (e) => ({ type: t, specialPage: e }),
        p = () => ({ type: o }),
        g = (e, l) => ({ type: d, articles: e || [], total: Number(l) || 0 }),
        u = () => ({ type: h }),
        v = () => ({ type: m }),
        N = () => ({ type: x }),
        b = (0, n.vy)(c, {
          [r]: (e) => ({ ...e, isFetching: !0 }),
          [t]: (e, l) => {
            let { specialPage: s } = l;
            return { ...e, isFetching: !1, metadata: { ...s } };
          },
          [o]: (e) => ({ ...e, isFetchingArticles: !0 }),
          [d]: (e, l) => {
            let { articles: s, total: n } = l;
            return {
              ...e,
              isFetchingArticles: !1,
              error: !1,
              articles: (0, a.A)(e.articles, s),
              canLoadMore: n > (0, i.A)((0, a.A)(e.articles, s)),
            };
          },
          [h]: (e) => ({
            ...e,
            isFetching: !1,
            isFetchingArticles: !1,
            error: !0,
          }),
          [m]: (e) => ({
            ...e,
            isFetchingArticles: !0,
            error: !1,
            page: e.page + 1,
          }),
          [x]: () => c,
        });
    },
  },
]);
//# sourceMappingURL=371.25785636.chunk.js.map
