"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [3125],
  {
    79716: (e, a, r) => {
      r.d(a, { A: () => m });
      r(65043);
      var t = r(36278),
        l = r(29157);
      var i = r(7489),
        s = r(70579);
      const n = (e) => {
        let {
          width: a = 17,
          height: r = 17,
          "aria-label": t,
          className: l = "",
        } = e;
        return (0, s.jsx)(i.A, {
          className: l,
          width: a,
          height: r,
          viewBox: "0 0 1024 1024",
          "aria-label": t,
          children: (0, s.jsx)("path", {
            d: "M512.002 218.117v-60.117h118v-59c0-32.586-26.414-59-59.002-59h-176.998c-32.586 0-59 26.414-59 59v59h118v60.117c-198.018 15.063-354 180.507-354 382.383 0 211.8 171.7 383.5 383.5 383.5s383.5-171.7 383.5-383.5c0-201.874-155.982-367.318-354-382.383zM691.096 809.094c-55.722 55.72-129.798 86.406-208.594 86.406s-152.879-30.686-208.594-86.406c-55.72-55.72-86.406-129.8-86.406-208.594s30.686-152.879 86.406-208.594c53.505-53.503 123.943-83.908 199.229-86.238l-19.983 289.485c-1.715 24.235 11.489 34.847 29.351 34.847s31.063-10.612 29.351-34.847l-19.981-289.487c75.286 2.332 145.726 32.737 199.231 86.24 55.72 55.72 86.405 129.8 86.405 208.594s-30.686 152.879-86.405 208.594z",
          }),
        });
      };
      var c = r(89118);
      const o = (0, l.A)({
          english: { readingTime: "{{ time }} min" },
          french: { readingTime: "{{ time }} min" },
          arabic: { readingTime: "\u062f\u0642\u064a\u0642\u0629 {{ time }}" },
          hebrew: { readingTime: "{{ time }} \u05d3\u05e7\u05d5\u05ea" },
        }),
        d = (e) => {
          let { time: a, locale: r } = e;
          return a
            ? (0, s.jsxs)("div", {
                className: "widget-reading-time",
                children: [
                  (0, s.jsx)(n, {}),
                  (0, s.jsx)(c.A, {
                    size: "small",
                    children: o(r)("readingTime", { time: a }),
                  }),
                ],
              })
            : null;
        };
      var h = r(1376);
      r(85556);
      const u = (e) => {
        let {
          article: a,
          lazy: r,
          size: l = "default",
          variant: i = "default",
          locale: n,
        } = e;
        return (0, s.jsxs)("div", {
          className: "article-cover-wrapper size-".concat(l),
          children: [
            (0, s.jsx)(t.A, {
              variant: i,
              children: (0, s.jsx)(h.A, {
                src: a.image.src,
                alt: a.image.alt,
                lazy: r,
                size: l,
              }),
            }),
            (0, s.jsx)("div", {
              className: "article-reading-time-wrapper",
              children: (0, s.jsx)(d, { time: a.readingTime, locale: n }),
            }),
          ],
        });
      };
      u.Placeholder = (e) => {
        let { variant: a, size: r = "default" } = e;
        return (0, s.jsx)("div", {
          className: "article-cover-wrapper placeholder size-".concat(r),
          children: (0, s.jsx)(t.A, { variant: a }),
        });
      };
      const m = u;
    },
    42773: (e, a, r) => {
      r.d(a, { A: () => R });
      var t = r(65043),
        l = r(70579);
      const i = (e) => {
          let { variant: a = "default", children: r } = e;
          return (0, l.jsx)("div", {
            className: "widget-typography-tag ".concat(a),
            children: r,
          });
        },
        s = (e) => {
          let { size: a = "default", children: r } = e;
          return (0, l.jsx)("h3", {
            className: "widget-typography-title size-".concat(a),
            children:
              r instanceof Array
                ? r.map((e) => e.replace(/\s/g, " "))
                : r.replace(/\s/g, " "),
          });
        };
      var n = r(44376),
        c = r(20955);
      const o = (e) => {
        let { date: a, locale: r, itemProp: t, variant: i = "default" } = e;
        return (0, l.jsxs)("div", {
          className: "widget-temporal-relative-time-with-icon",
          children: [
            (0, l.jsx)(n.A, { height: 16 }),
            (0, l.jsx)(c.A, { date: a, locale: r, itemProp: t, variant: i }),
          ],
        });
      };
      var d = r(60929);
      const h = "ShareButton_wrapper__+ZBLo",
        u = "ShareButton_toggle__tKRBK",
        m = "ShareButton_open__MZ0eB",
        p = "ShareButton_menu__JDImU",
        x = "ShareButton_list__enLoj",
        v = "ShareButton_button-wrapper__c0pgV",
        j = "ShareButton_triangle-with-shadow__8X8wB";
      var g = r(78587),
        w = r(90748),
        f = r(30858),
        A = r(83318),
        N = r(78876),
        z = r(7489);
      const y = (e) => {
        let {
          width: a = 16,
          height: r = 20,
          "aria-label": t,
          className: i = "",
        } = e;
        return (0, l.jsx)(z.A, {
          className: i,
          width: a,
          height: r,
          viewBox: "0 0 840 1062",
          "aria-label": t,
          children: (0, l.jsxs)("g", {
            transform: "translate(0,1062) scale(0.1,-0.1)",
            stroke: "none",
            children: [
              (0, l.jsx)("path", {
                d: "M4136 10203 c-11 -3 -36 -16 -55 -28 -20 -13 -347 -335 -727 -717 -738 -740 -714 -713 -714 -810 0 -51 46 -135 93 -169 59 -42 110 -54 177 -39 l55 12 500 499 c275 274 504 499 508 499 4 0 7 -1196 7 -2658 l0 -2659 23 -44 c13 -24 43 -57 66 -74 40 -28 49 -30 131 -30 82 0 91 2 131 30 23 17 53 50 66 74 l23 44 0 2659 c0 1462 3 2658 8 2658 4 0 228 -221 497 -491 270 -270 504 -498 520 -506 17 -10 56 -17 91 -17 51 -1 68 4 110 29 89 55 130 155 104 252 -12 45 -60 95 -714 752 -479 481 -714 709 -741 722 -38 18 -114 23 -159 12z",
              }),
              (0, l.jsx)("path", {
                d: "M977 7529 c-170 -40 -308 -192 -336 -369 -15 -90 -15 -6279 -1 -6370 23 -147 118 -271 257 -338 l78 -37 3195 -3 c2151 -1 3211 1 3243 8 174 37 319 191 347 370 14 91 14 6280 -1 6370 -28 180 -166 329 -340 369 -28 7 -379 11 -961 11 l-918 0 0 -225 0 -225 890 0 890 0 0 -3120 0 -3120 -3117 2 -3118 3 -3 3118 -2 3117 890 0 890 0 0 225 0 225 -922 -1 c-508 -1 -940 -5 -961 -10z",
              }),
            ],
          }),
        });
      };
      var b = r(48434);
      const _ = (e) => {
        let {
          onKeyDown: a,
          onClick: r,
          height: t,
          width: i,
          "aria-label": s,
        } = e;
        return (0, l.jsx)(b.A, {
          "aria-label": s,
          onClick: r,
          onKeyDown: a,
          children: (0, l.jsx)(y, { height: t, width: i }),
        });
      };
      r(85556);
      var T = r(29157);
      var S = r(7816),
        B = r(80367);
      const M = (0, T.A)({
          english: { open: "Open sharing menu", close: "Close sharing menu" },
          french: {
            open: "Ouvrir le menu de partage",
            close: "Fermer le menu de partage",
          },
          arabic: {
            open: "\u0641\u062a\u062d \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629",
            close:
              "\u0625\u063a\u0644\u0627\u0642 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629",
          },
          hebrew: {
            open: "\u05e4\u05ea\u05d7 \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e9\u05d9\u05ea\u05d5\u05e3",
            close:
              "\u05e1\u05d2\u05d5\u05e8 \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e9\u05d9\u05ea\u05d5\u05e3",
          },
        }),
        k = (e) => {
          let {
            title: a,
            excerpt: r,
            url: i,
            height: s,
            width: n,
            locale: c,
          } = e;
          const [o, d] = (0, t.useState)(!1),
            z = (0, B.xB)(c, i);
          (0, S.A)(() => d(!1));
          return (0, l.jsxs)("div", {
            className: "".concat(h, " ").concat(o ? m : ""),
            children: [
              (0, l.jsx)("div", {
                className: u,
                children: (0, l.jsx)(_, {
                  height: s,
                  width: n,
                  onKeyDown: (e) => {
                    ("Enter" !== e.key && " " !== e.key) ||
                      (e.preventDefault(), e.stopPropagation(), d(!o));
                  },
                  onClick: () => d(!o),
                  "aria-label": o ? M(c)("close") : M(c)("open"),
                }),
              }),
              o
                ? (0, l.jsxs)("div", {
                    className: p,
                    children: [
                      (0, l.jsxs)("ul", {
                        className: x,
                        onClick: (e) => e.stopPropagation(),
                        "aria-hidden": !0,
                        children: [
                          (0, l.jsx)("li", {
                            children: (0, l.jsx)("div", {
                              className: v,
                              children: (0, l.jsx)(g.A, { url: z }),
                            }),
                          }),
                          (0, l.jsx)("li", {
                            children: (0, l.jsx)("div", {
                              className: v,
                              children: (0, l.jsx)(w.A, { url: z, title: a }),
                            }),
                          }),
                          (0, l.jsx)("li", {
                            children: (0, l.jsx)("div", {
                              className: v,
                              children: (0, l.jsx)(f.A, {
                                url: z,
                                title: a,
                                summary: r,
                              }),
                            }),
                          }),
                          (0, l.jsx)("li", {
                            children: (0, l.jsx)("div", {
                              className: v,
                              children: (0, l.jsx)(A.A, { url: z, title: a }),
                            }),
                          }),
                          (0, l.jsx)("li", {
                            children: (0, l.jsx)("div", {
                              className: v,
                              children: (0, l.jsx)(N.A, { url: z }),
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", { className: j }),
                    ],
                  })
                : null,
            ],
          });
        };
      const P = (0, r(83003).Ng)((e) => ({ locale: e.router.locale }))(k);
      var D = r(89118),
        C = r(18558);
      const I = (0, T.A)({
          arabic: {
            sponsored: "\u0645\u0645\u0648\u0644",
            readingTime:
              "\u0648\u0642\u062a \u0627\u0644\u0642\u0631\u0627\u0621\u0629: {{ time }}} \u062f\u0642\u064a\u0642\u0629.",
          },
          english: {
            sponsored: "Sponsored",
            readingTime: "Read time: {{ time }} min.",
          },
          french: {
            sponsored: "Sponsoris\xe9",
            readingTime: "Temps de lecture : {{ time }} min.",
          },
          hebrew: {
            sponsored: "\u05de\u05de\u05d5\u05de\u05df",
            readingTime:
              "\u05d6\u05de\u05df \u05e7\u05e8\u05d9\u05d0\u05d4: {{ time }} \u05d3\u05e7\u05d5\u05ea.",
          },
        }),
        K = { large: "extra-large" },
        O = (e, a) => {
          const r = ((e) =>
            e.positionedContents.filter((e) => {
              const a = new Date();
              return (
                e.isSponsored &&
                a >= new Date(e.startedAt) &&
                a <= new Date(e.finishedAt)
              );
            }))(e);
          return 1 === r.length
            ? (0, l.jsx)(i, {
                variant: "sponsored",
                children: (0, C.O9)(r[0].sponsoredTitle)
                  ? r[0].sponsoredTitle
                  : I(a)("sponsored"),
              })
            : r.length > 1
            ? (0, l.jsx)(i, {
                variant: "sponsored",
                children: I(a)("sponsored"),
              })
            : (0, l.jsx)(i, { children: e.category.name });
        },
        L = (e) => {
          let {
            article: a,
            locale: r,
            size: t = "default",
            variant: n = "default",
            showSponsored: c = !1,
          } = e;
          return (0, l.jsxs)("div", {
            className: "article-information-wrapper size-"
              .concat(t, " variant-")
              .concat(n),
            children: [
              (0, l.jsxs)("div", {
                className: "article-information",
                children: [
                  (0, l.jsx)("div", {
                    className: "article-category",
                    children: c
                      ? O(a, r)
                      : (0, l.jsx)(i, { children: a.category.name }),
                  }),
                  (0, l.jsx)(s, { size: K[t], children: a.title }),
                  (0, l.jsx)("div", {
                    className: "article-excerpt",
                    children: (0, l.jsx)(D.A, { children: a.excerpt }),
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "article-bottom",
                children: [
                  ["author", "author-full-date"].includes(n)
                    ? (0, l.jsx)("span", {
                        className: "signature-name",
                        children: a.signatures
                          .map((e) => e.authorName)
                          .join(", "),
                      })
                    : null,
                  (0, l.jsxs)("div", {
                    className: "date-wrapper",
                    children: [
                      (0, l.jsx)("div", {
                        className: "sr-only",
                        children: (0, l.jsx)(D.A, {
                          size: "small",
                          children: I(r)("readingTime", {
                            time: a.readingTime,
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "date",
                        children: (0, l.jsx)(o, {
                          date: a.updatedAt,
                          locale: r,
                          variant: ["author-full-date", "full-date"].includes(n)
                            ? "full"
                            : "default",
                        }),
                      }),
                      ["author-full-date", "full-date"].includes(n)
                        ? (0, l.jsx)("div", {
                            className: "mobile-date",
                            children: (0, l.jsx)(o, {
                              date: a.updatedAt,
                              locale: r,
                            }),
                          })
                        : null,
                      (0, l.jsxs)("div", {
                        className: "article-actions",
                        children: [
                          (0, l.jsx)(d.A, {
                            articleId: a.id,
                            height: 16,
                            width: 16,
                          }),
                          (0, l.jsx)(P, {
                            url: a.frontendUrl,
                            title: a.title.replace(/\s/g, " "),
                            excerpt: a.excerpt,
                            height: 16,
                            width: 16,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      L.Placeholder = (e) => {
        let { size: a = "default" } = e;
        return (0, l.jsx)("div", {
          className: "article-information-wrapper placeholder size-".concat(a),
        });
      };
      const R = L;
    },
    93125: (e, a, r) => {
      r.d(a, { A: () => v });
      r(65043);
      var t = r(74596),
        l = r(12419),
        i = r(42773),
        s = r(65173),
        n = r.n(s),
        c = (r(85556), r(79716)),
        o = r(29157),
        d = r(93089),
        h = r(70579);
      const u = { large: "large" },
        m = (0, o.A)(d.A),
        p = (e) => {
          let {
            article: a,
            locale: r,
            size: s = "default",
            variant: n = "default",
            lazy: o = !0,
            showSponsored: d = !1,
          } = e;
          return (0, h.jsxs)("div", {
            className: "article-list-vertical size-".concat(s),
            children: [
              (0, h.jsx)(t.A, {
                href: a.frontendUrl,
                "aria-label": m(r)("label", { title: a.title }),
                variant: "block",
                role: "group",
                children: (0, h.jsxs)("div", {
                  className: "article-list-vertical-wrapper",
                  children: [
                    (0, h.jsx)("div", {
                      className: "cover-wrapper",
                      children: (0, h.jsx)(c.A, {
                        article: a,
                        lazy: o,
                        size: u[s],
                        variant: "squared" === n ? n : "default",
                        locale: r,
                      }),
                    }),
                    (0, h.jsx)(i.A, {
                      article: a,
                      locale: r,
                      size: s,
                      variant: [
                        "author-full-date",
                        "author",
                        "full-date",
                      ].includes(n)
                        ? n
                        : "default",
                      showSponsored: d,
                    }),
                  ],
                }),
              }),
              (0, h.jsx)(l.A, {}),
            ],
          });
        };
      (p.Placeholder = (e) => {
        let { size: a = "default", variant: r = "default" } = e;
        return (0, h.jsxs)("div", {
          className: "article-list-vertical placeholder size-".concat(a),
          children: [
            (0, h.jsxs)("div", {
              className: "article-list-vertical-wrapper",
              children: [
                (0, h.jsx)(c.A.Placeholder, { variant: r, size: u[a] }),
                (0, h.jsx)(i.A.Placeholder, { size: a }),
              ],
            }),
            (0, h.jsx)(l.A, {}),
          ],
        });
      }).propTypes = {
        size: n().oneOf(["large", "default", "small"]),
        variant: n().oneOf(["squared", "default"]),
      };
      const x = p;
      const v = (0, r(83003).Ng)((e) => ({ locale: e.router.locale }))(x);
    },
    93089: (e, a, r) => {
      r.d(a, { A: () => t });
      const t = {
        english: { label: 'Read "{{ title }}" article.' },
        french: { label: 'Lisez l\'article "{{ title }}".' },
        arabic: {
          label:
            '\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0642\u0627\u0644 "{{ title }}".',
        },
        hebrew: {
          label: '\u05e7\u05e8\u05d0 "{{ title }}" \u05db\u05ea\u05d1\u05d4',
        },
      };
    },
    20955: (e, a, r) => {
      r.d(a, { A: () => v });
      r(65043);
      var t = r(98079),
        l = r(8761),
        i = r(88313),
        s = r(33373),
        n = r(29157);
      var c = r(85556),
        o = r(75806),
        d = r(70579);
      const h = 6e4,
        u = 36e5,
        m = (e, a) => e - a,
        p = (0, n.A)({
          english: {
            now: "Now",
            hour: "1 hour ago",
            hours: "{{ hours }} hours ago",
            minute: "1 minute ago",
            minutes: "{{ minutes }} minutes ago",
          },
          french: {
            now: "Maintenant",
            hour: "Il y a 1 heure",
            hours: "Il y a {{ hours }} heures",
            minute: "Il y a 1 minute",
            minutes: "Il y a {{ minutes }} minutes",
          },
          arabic: {
            now: "\u062d\u0627\u0644\u064a\u0627",
            hour: "\u0645\u0646\u0630 1 \u0633\u0627\u0639\u0629",
            hours:
              "\u0645\u0646\u0630 \u0633\u0627\u0639\u0627\u062a {{ hours }}",
            minute: "\u0645\u0646\u0630 1 \u062f\u0642\u064a\u0642\u0629",
            minutes:
              "\u062f\u0642\u0627\u0626\u0642 \u0645\u0636\u062a {{ minutes }}",
          },
          hebrew: {
            now: "\u05e2\u05db\u05e9\u05d9\u05d5",
            hour: "\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e2\u05d4",
            hours:
              "\u05dc\u05e4\u05e0\u05d9 {{ hours }} \u05e9\u05e2\u05d5\u05ea",
            minute: "\u05dc\u05e4\u05e0\u05d9 \u05d3\u05e7\u05d4",
            minutes:
              "\u05dc\u05e4\u05e0\u05d9 {{ minutes }} \u05d3\u05e7\u05d5\u05ea",
          },
        }),
        x = (e, a, r, n) =>
          (0, l.A)(
            m,
            (0, i.A)([
              [
                (e) => 0 === Math.round(e / 1e3) || Math.round(e / h) < 1,
                () => p(r)("now"),
              ],
              [(e) => e < u && 1 === Math.round(e / h), (e) => p(r)("minute")],
              [
                (e) => e < u,
                (e) => p(r)("minutes", { minutes: Math.round(e / h) }),
              ],
              [
                (e) => Math.round(e / u) <= 12 && 1 === Math.round(e / u),
                (e) => p(r)("hour"),
              ],
              [
                (e) => Math.round(e / u) <= 12,
                (e) => p(r)("hours", { hours: Math.round(e / u) }),
              ],
              [
                s.A,
                () =>
                  (function (e) {
                    let a =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : c.QF,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : "default";
                    return (0, t.u)(e).toLocaleDateString(
                      (0, t.$s)(a),
                      "full" === r
                        ? {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          }
                        : { day: "2-digit", month: "short", year: "numeric" }
                    );
                  })(a, r, n),
              ],
            ])
          )(e, a),
        v = (e) => {
          let { date: a, locale: r, itemProp: l, variant: i } = e;
          return (0, d.jsx)("time", {
            dateTime: (0, t.EG)(a),
            itemProp: l,
            children: (0, d.jsx)(o.A, {
              children: x(Date.now(), (0, t.u)(a).getTime(), r, i),
            }),
          });
        };
    },
    89118: (e, a, r) => {
      r.d(a, { A: () => l });
      r(65043);
      var t = r(70579);
      const l = (e) => {
        let { size: a, children: r } = e;
        return (0, t.jsx)("p", {
          className: "widget-typography-text ".concat(
            a ? "size-".concat(a) : ""
          ),
          children: r.replace(/\s/g, " "),
        });
      };
    },
  },
]);
//# sourceMappingURL=3125.a363b8df.chunk.js.map
