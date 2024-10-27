"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [5276],
  {
    60929: (e, a, r) => {
      r.d(a, { A: () => k });
      var s = r(88313),
        l = r(33373),
        t = r(65865),
        i = (r(65043), r(7489)),
        c = r(70579);
      const n = (e) => {
        let {
          width: a = 25,
          height: r = 25,
          "aria-label": s,
          className: l = "",
        } = e;
        return (0, c.jsx)(i.A, {
          className: l,
          width: a,
          height: r,
          viewBox: "0 0 12 16",
          "aria-label": s,
          "aria-hidden": "true",
          focusable: "false",
          children: (0, c.jsx)("path", {
            d: "M10.5 0H1.5C0.671562 0 0 0.671562 0 1.5V14.9969C0 15.7688 0.837187 16.2494 1.50375 15.8606L6 13.2375L10.4969 15.8603C11.1625 16.2219 12 15.7688 12 14.9969V1.5C12 0.671562 11.3281 0 10.5 0ZM10.5 14.125L6 11.5L1.5 14.125V1.6875C1.5 1.58219 1.58219 1.5 1.65937 1.5H10.2844C10.4187 1.5 10.5 1.58219 10.5 1.6875V14.125Z",
          }),
        });
      };
      var o = r(48434);
      const d = "BookmarkButton_active__jManF",
        h = (e) => {
          let {
            onClick: a,
            disabled: r = !1,
            isActive: s = !1,
            "aria-label": l,
            height: t,
            width: i,
          } = e;
          return (0, c.jsx)(o.A, {
            disabled: r,
            onClick: a,
            "aria-label": l,
            children: (0, c.jsx)("div", {
              className: s ? d : "",
              children: (0, c.jsx)(n, { height: t, width: i }),
            }),
          });
        };
      var A = r(29157);
      r(85556);
      const u = (0, A.A)({
          english: {
            signIn: "Sign in in order to bookmark the article",
            mark: "Add to favorites",
            unmark: "Remove from favorites",
          },
          french: {
            signIn: "Connectez-vous pour ajouter l'article \xe0 vos favoris",
            mark: "Ajouter aux favoris",
            unmark: "Supprimer des favoris",
          },
          arabic: {
            signIn:
              "\u0642\u0645 \u0628\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0648\u0636\u0639 \u0625\u0634\u0627\u0631\u0629 \u0645\u0631\u062c\u0639\u064a\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0642\u0627\u0644\u0629",
            mark: "\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629",
            unmark:
              "\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629",
          },
          hebrew: {
            signIn:
              "\u05e4\u05ea\u05d7 \u05d0\u05ea \u05e2\u05de\u05d5\u05d3 \u05d4\u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea",
            mark: "\u05d4\u05d5\u05e1\u05e3 \u05dc\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd",
            unmark:
              "\u05d4\u05e1\u05e8 \u05de\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd",
          },
        }),
        b = (e) => {
          let {
            isSignedIn: a,
            isMarked: r,
            mark: i,
            unmark: n,
            signIn: o,
            articleId: d,
            isFetching: A,
            locale: b,
            width: m,
            height: g,
          } = e;
          return (0, c.jsx)(h, {
            disabled: A,
            isActive: r,
            width: m,
            height: g,
            onClick: (0, s.A)([
              [() => a && r, () => n(d)],
              [() => a && !r, () => i(d)],
              [l.A, () => o()],
            ]),
            "aria-label": (0, t.A)(
              (0, s.A)([
                [() => a && r, () => u(b)("unmark")],
                [() => a && !r, () => u(b)("mark")],
                [l.A, () => u(b)("signIn")],
              ])
            ),
          });
        };
      var m = r(83003),
        g = r(25854),
        v = r(71144),
        x = r(34004),
        j = r(98278),
        w = r.n(j);
      const k = (0, m.Ng)(
        (e, a) => ({
          isSignedIn: !(0, g.A)(e.session.user),
          isMarked: (0, v.A)(a.articleId, e.session.bookmarks),
          isFetching:
            !(0, g.A)(e.session.user) &&
            (e.session.isFetching || e.session.isSubmitting),
          locale: e.router.locale,
        }),
        (e) => ({
          signIn: w()(e, x.mj),
          mark: w()(e, x.S8),
          unmark: w()(e, x.r7),
        })
      )(b);
    },
    78587: (e, a, r) => {
      r.d(a, { A: () => d });
      var s = r(519),
        l = (r(65043), r(16951)),
        t = r(29157);
      r(85556);
      var i = r(40243),
        c = r(70579);
      const n = (0, t.A)({
          english: { label: "Share on Facebook" },
          french: { label: "Partager sur Facebook" },
          arabic: {
            label: "\u0627\u0646\u0634\u0631 \u0639\u0644\u0649 Facebook",
          },
          hebrew: { label: "\u05e9\u05ea\u05e3 \u05d1Meta" },
        }),
        o = (e) => {
          let { locale: a, url: r } = e;
          return (0, c.jsx)("div", {
            className: i.A.button,
            children: (0, c.jsx)(s.uI, {
              url: r,
              resetButtonStyle: !0,
              "aria-label": n(a)("label"),
              children: (0, c.jsx)(l.A, {}),
            }),
          });
        };
      const d = (0, r(83003).Ng)((e) => ({ locale: e.router.locale }))(o);
    },
    30858: (e, a, r) => {
      r.d(a, { A: () => d });
      var s = r(519),
        l = (r(65043), r(49565)),
        t = r(29157);
      r(85556);
      var i = r(40243),
        c = r(70579);
      const n = (0, t.A)({
          english: { label: "Share on Linkedin" },
          french: { label: "Partager sur Linkedin" },
          arabic: {
            label: "\u0627\u0646\u0634\u0631 \u0639\u0644\u0649 Linkedin",
          },
          hebrew: { label: "\u05e9\u05ea\u05e3 \u05d1Linkdin" },
        }),
        o = (e) => {
          let { locale: a, excerpt: r, title: t, url: o } = e;
          return (0, c.jsx)("div", {
            className: i.A.button,
            children: (0, c.jsx)(s.wk, {
              source: "i24NEWS",
              summary: r,
              title: t,
              url: o,
              resetButtonStyle: !0,
              "aria-label": n(a)("label"),
              children: (0, c.jsx)(l.A, {}),
            }),
          });
        };
      const d = (0, r(83003).Ng)((e) => ({ locale: e.router.locale }))(o);
    },
    83318: (e, a, r) => {
      r.d(a, { A: () => h });
      r(65043);
      var s = r(519),
        l = r(7489),
        t = r(70579);
      const i = (e) => {
        let {
          width: a = 20,
          height: r = 20,
          "aria-label": s,
          className: i = "",
        } = e;
        return (0, t.jsx)(l.A, {
          className: i,
          width: a,
          height: r,
          viewBox: "0 0 1024 1024",
          "aria-label": s,
          children: (0, t.jsx)("path", {
            d: "M278.855 628.57c0-32.191 26.094-58.285 58.285-58.285s58.285 26.094 58.285 58.285c0 32.191-26.094 58.285-58.285 58.285s-58.285-26.094-58.285-58.285zM628.57 628.57c0-32.191 26.094-58.285 58.285-58.285s58.285 26.094 58.285 58.285c0 32.191-26.094 58.285-58.285 58.285s-58.285-26.094-58.285-58.285zM631.407 753.138c15.012-11.826 36.771-9.249 48.599 5.767s9.247 36.773-5.769 48.601c-41.796 32.928-105.482 54.209-162.237 54.209-56.757 0-120.438-21.281-162.239-54.207-15.016-11.83-17.595-33.587-5.767-48.603 11.83-15.012 33.587-17.593 48.601-5.767 24.062 18.958 71.692 39.362 119.405 39.362s95.343-20.404 119.407-39.362zM978.285 512c0-64.382-52.193-116.57-116.57-116.57-43.821 0-81.957 24.2-101.867 59.945-59.917-32.779-132.922-53.956-212.45-58.838l69.562-156.211 133.139 38.43c11.977 34.007 44.368 58.389 82.471 58.389 48.285 0 87.43-39.143 87.43-87.43s-39.143-87.43-87.43-87.43c-33.295 0-62.242 18.617-77.004 46.004l-148.361-42.824c-16.599-4.788-34.188 3.392-41.212 19.172l-94.505 212.221c-77.538 5.461-148.687 26.432-207.311 58.501-19.914-35.745-58.071-59.929-101.892-59.929-64.382 0-116.57 52.193-116.57 116.57 0 47.642 28.597 88.569 69.552 106.647-7.35 21.883-11.267 44.719-11.267 68.213 0 160.95 182.666 291.43 408 291.43 225.332 0 408-130.48 408-291.43 0-23.487-3.915-46.322-11.263-68.201 40.955-18.080 69.548-59.017 69.548-106.659zM832.57 216.93c18.107 0 32.785 14.678 32.785 32.785s-14.678 32.785-32.785 32.785-32.785-14.678-32.785-32.785 14.678-32.785 32.785-32.785zM104 512c0-32.14 26.145-58.285 58.285-58.285 23.231 0 43.325 13.664 52.681 33.376-30.463 23.101-55.706 49.751-74.376 78.993-21.424-8.625-36.593-29.607-36.593-54.084zM512 909.070c-187.105 0-338.785-99.487-338.785-222.215s151.68-222.215 338.785-222.215c187.105 0 338.785 99.487 338.785 222.215s-151.68 222.215-338.785 222.215zM883.409 566.084c-18.67-29.247-43.913-55.892-74.376-78.993 9.359-19.712 29.453-33.376 52.681-33.376 32.14 0 58.285 26.145 58.285 58.285 0 24.472-15.171 45.459-36.593 54.084z",
          }),
        });
      };
      var c = r(29157);
      r(85556);
      var n = r(40243);
      const o = (0, c.A)({
          english: { label: "Share on Reddit" },
          french: { label: "Partager sur Reddit" },
          arabic: {
            label: "\u0627\u0646\u0634\u0631 \u0639\u0644\u0649 Reddit",
          },
          hebrew: { label: "\u05e9\u05ea\u05e3 \u05d1-Reddit" },
        }),
        d = (e) => {
          let { locale: a, title: r, url: l } = e;
          return (0, t.jsx)("div", {
            className: n.A.button,
            children: (0, t.jsx)(s._G, {
              title: r,
              url: l,
              resetButtonStyle: !0,
              "aria-label": o(a)("label"),
              children: (0, t.jsx)(i, {}),
            }),
          });
        };
      const h = (0, r(83003).Ng)((e) => ({ locale: e.router.locale }))(d);
    },
    78876: (e, a, r) => {
      r.d(a, { A: () => h });
      r(65043);
      var s = r(519),
        l = r(7489),
        t = r(70579);
      const i = (e) => {
        let {
          width: a = 20,
          height: r = 20,
          "aria-label": s,
          className: i = "",
        } = e;
        return (0, t.jsx)(l.A, {
          className: i,
          width: a,
          height: r,
          viewBox: "0 0 1024 1024",
          "aria-label": s,
          children: (0, t.jsx)("path", {
            d: "M844.795 177.175c-88.315-88.5-205.763-137.175-330.955-137.175-257.755 0-467.575 209.82-467.575 467.76 0 82.415 21.57 162.988 62.505 233.788l-66.375 242.455 247.985-65.085c68.405 37.245 145.288 56.97 223.463 56.97h0.185c0 0 0 0 0 0 257.755 0 467.76-209.82 467.76-467.76 0-125.005-48.675-242.455-136.99-330.955zM514.030 896.975v0c-69.88 0-138.28-18.805-198.020-54.205l-14.195-8.48-147.13 38.535 39.27-143.445-9.22-14.75c-39.088-61.765-59.555-133.305-59.555-206.87 0-214.43 174.42-388.845 389.030-388.845 103.805 0 201.52 40.563 274.905 113.945 73.38 73.565 113.76 171.1 113.76 275.088-0.185 214.613-174.605 389.030-388.845 389.030zM727.165 605.663c-11.615-5.9-69.14-34.11-79.835-37.98s-18.438-5.9-26.365 5.9c-7.745 11.615-30.238 37.98-37.060 45.91-6.82 7.745-13.645 8.85-25.26 2.95s-49.413-18.255-94.030-58.080c-34.663-30.975-58.263-69.325-65.085-80.94s-0.738-18.070 5.163-23.785c5.345-5.163 11.615-13.645 17.515-20.465s7.745-11.615 11.615-19.545c3.87-7.745 2.030-14.565-0.92-20.465s-26.365-63.425-35.955-86.84c-9.405-22.863-19.175-19.73-26.365-20.095-6.82-0.37-14.565-0.37-22.31-0.37s-20.465 2.95-31.16 14.565c-10.695 11.615-40.93 40.010-40.93 97.535s41.855 113.020 47.755 120.95c5.9 7.745 82.415 125.93 199.68 176.445 27.84 11.985 49.595 19.175 66.56 24.705 28.025 8.85 53.47 7.56 73.565 4.61 22.495-3.32 69.14-28.21 78.913-55.495s9.77-50.705 6.82-55.495c-2.765-5.163-10.51-8.113-22.31-14.013z",
          }),
        });
      };
      var c = r(29157);
      r(85556);
      var n = r(40243);
      const o = (0, c.A)({
          english: { label: "Share on WhatsApp" },
          french: { label: "Partager sur WhatsApp" },
          arabic: {
            label: "\u0627\u0646\u0634\u0631 \u0639\u0644\u0649 WhatsApp",
          },
          hebrew: {
            label:
              "\u05e9\u05ea\u05e3 \u05d1\u05d5\u05d5\u05d0\u05d8\u05e1\u05d0\u05e4",
          },
        }),
        d = (e) => {
          let { locale: a, title: r, url: l } = e;
          return (0, t.jsx)("div", {
            className: n.A.button,
            children: (0, t.jsx)(s.Kz, {
              title: r,
              url: l,
              resetButtonStyle: !0,
              "aria-label": o(a)("label"),
              children: (0, t.jsx)(i, {}),
            }),
          });
        };
      const h = (0, r(83003).Ng)((e) => ({ locale: e.router.locale }))(d);
    },
    90748: (e, a, r) => {
      r.d(a, { A: () => h });
      r(65043);
      var s = r(519),
        l = r(75061),
        t = r(29157);
      r(85556);
      var i = r(42435),
        c = r(40243),
        n = r(70579);
      const o = (0, t.A)({
          english: { label: "Share on X" },
          french: { label: "Partager sur X" },
          arabic: { label: "\u0627\u0646\u0634\u0631 \u0639\u0644\u0649 X" },
          hebrew: { label: "\u05e9\u05ea\u05e3 \u05d1-X" },
        }),
        d = (e) => {
          let { locale: a, url: r, hashtags: t = [] } = e;
          return (0, n.jsx)("div", {
            className: c.A.button,
            children: (0, n.jsx)(s.r6, {
              url: r,
              via: (0, i.Ln)(a),
              hashtags: t,
              resetButtonStyle: !0,
              "aria-label": o(a)("label"),
              children: (0, n.jsx)(l.A, {}),
            }),
          });
        };
      const h = (0, r(83003).Ng)((e) => ({ locale: e.router.locale }))(d);
    },
    44376: (e, a, r) => {
      r.d(a, { A: () => t });
      r(65043);
      var s = r(7489),
        l = r(70579);
      const t = (e) => {
        let {
          width: a = 14,
          height: r = 14,
          "aria-label": t,
          className: i = "",
        } = e;
        return (0, l.jsxs)(s.A, {
          className: i,
          width: a,
          height: r,
          viewBox: "0 0 13 13",
          "aria-label": t,
          children: [
            (0, l.jsx)("path", {
              d: "M6.5,0A6.5,6.5,0,1,0,13,6.5,6.5,6.5,0,0,0,6.5,0Zm0,12.11A5.61,5.61,0,1,1,12.11,6.5,5.61,5.61,0,0,1,6.5,12.11Z",
            }),
            (0, l.jsx)("path", {
              d: "M9.33,6.64H6.8V3.18a.42.42,0,1,0-.84,0v4.4H9.33a.47.47,0,0,0,0-.94Z",
            }),
          ],
        });
      };
    },
    1376: (e, a, r) => {
      r.d(a, { A: () => A });
      var s = r(1690),
        l = (r(65043), r(88313)),
        t = r(4036),
        i = r(48500),
        c = r(33373),
        n = r(70579);
      const o = (e) => (0, n.jsx)(s.A, { ...e, width: 350 }),
        d = (e) =>
          (0, n.jsx)(s.A, {
            ...e,
            width: 350,
            sources: [
              { renditions: [{ width: 750 }], media: "(min-width: 480px)" },
              { renditions: [{ width: 350 }], media: "(max-width: 480px)" },
            ],
          }),
        h = (e) => (0, n.jsx)(s.A, { ...e, width: 180 }),
        A = (e) => {
          let { size: a = "default", ...r } = e;
          return (0, l.A)([
            [(0, t.A)("large"), (0, i.A)((0, n.jsx)(d, { ...r }))],
            [(0, t.A)("small"), (0, i.A)((0, n.jsx)(h, { ...r }))],
            [c.A, (0, i.A)((0, n.jsx)(o, { ...r }))],
          ])(a);
        };
    },
    1690: (e, a, r) => {
      r.d(a, { A: () => ae });
      var s = r(65043),
        l = r(8761),
        t = r(95518),
        i = r(83645),
        c = r(25854),
        n = r(88313),
        o = r(37068),
        d = r(61888),
        h = r(33373),
        A = r(48500),
        u = r(12224),
        b = r(94856),
        m = r(96188),
        g = r(36169),
        v = r(1393),
        x = r(82635),
        j = r(83317),
        w = r(33981),
        k = r(99185),
        f = r(4258),
        p = r(80367),
        N = r(96277),
        S = r(20045),
        I = r(83003),
        y = r(79495);
      const z = (0, S.A)(
          (0, N.y3)((e) => {
            let {
              injectImagePreloadHints: a,
              preload: r = !1,
              src: s,
              sources: l,
            } = e;
            return r && a(s, l);
          })
        )(() => null),
        M = (0, I.Ng)(null, (e) => ({
          injectImagePreloadHints: (0, S.A)(e, y.yc),
        }))(z);
      var L = r(70579);
      const C = (0, n.A)([
          [(0, o.A)(String, "descriptor"), (0, d.A)("descriptor")],
          [h.A, (0, A.A)(null)],
        ]),
        B = (e, a) =>
          (0, l.A)(
            (0, u.A)(["width", "height"]),
            (0, i.A)(
              () => "image/webp" === a,
              (e) => ({ type: "webp", ...e })
            ),
            (a) => (0, p.f_)(a)(e)
          ),
        _ = (e, a) =>
          (0, l.A)(
            (0, x.A)(
              ((e, a) =>
                (0, l.A)(
                  (0, b.A)([B(e, a), C]),
                  (0, m.A)((0, g.A)(c.A)),
                  (0, v.A)(" ")
                ))(e, a)
            ),
            (0, v.A)(", ")
          ),
        E = (e) =>
          (0, j.A)(
            (0, l.A)(
              (0, i.A)(w.A, (0, k.A)({})),
              (0, x.A)((0, f.A)("type", "image/webp"))
            )(e),
            e
          ),
        H = (0, s.forwardRef)((e, a) => {
          let {
            alt: r,
            dispatch: s,
            injectImagePreloadHints: t,
            preload: i,
            src: c,
            sources: n = [],
            ...o
          } = e;
          const d = ((e) =>
            (0, l.A)(
              E,
              (0, x.A)((a) => ({
                ...a,
                srcSet: a.renditions
                  ? _(e, a.type)(a.renditions)
                  : B(e, a.type)({}),
              }))
            ))(c)(n);
          return (0, L.jsxs)(L.Fragment, {
            children: [
              (0, L.jsx)(M, { preload: i, src: c, sources: d }),
              (0, L.jsxs)("picture", {
                children: [
                  d.map((e, a) =>
                    (0, L.jsx)(
                      "source",
                      {
                        type: e.type,
                        media: e.media,
                        sizes: e.sizes,
                        srcSet: e.srcSet,
                      },
                      a
                    )
                  ),
                  (0, L.jsx)("img", { alt: r, src: c, ...o, ref: a }),
                ],
              }),
            ],
          });
        });
      var F = r(28563);
      const P = (e) => {
        let {
          alt: a = "",
          className: r = "",
          fallbackSrc: n,
          onLoad: o,
          onError: d,
          src: h,
          ...A
        } = e;
        const u = (0, F.A)(),
          b = (0, s.useRef)(null),
          [m, g] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            b &&
              b.current &&
              b.current.src &&
              b.current.complete &&
              0 === b.current.naturalHeight &&
              g(!0);
          }, []),
          u && m
            ? (0, L.jsx)(H, { alt: a, className: r, src: n, ...A })
            : (0, L.jsx)(H, {
                alt: a,
                className: r,
                onLoad: o,
                onError: (0, l.A)(
                  (0, t.A)(() => g(!0)),
                  (0, i.A)(() => !(0, c.A)(d), d)
                ),
                src: h,
                ...A,
                ref: b,
              })
        );
      };
      var R = r(76426),
        V = r(71517),
        W = r(77701),
        Z = r(35846),
        X = r(8135),
        K = r(27266);
      const G = (0, W.A)(!1, "isIntersecting"),
        O = (0, W.A)(!0, "isIntersecting"),
        q = (0, W.A)(!1, "isLoaded"),
        D = (0, W.A)(!1, "isLoadedWithErrors"),
        J = (0, Z.A)([q, D]),
        Q = (e, a) =>
          (0, X.A)(J, (0, A.A)("".concat(a, " visible")), (0, A.A)(a))(e),
        T = (e, a) => (0, X.A)(G, (0, A.A)(a), (0, A.A)(void 0))(e),
        U = (e, a) => (0, X.A)(O, (0, A.A)(a), (0, A.A)(void 0))(e),
        Y = (0, S.A)(
          (0, N.y3)((e) => {
            let { observe: a, observedItemId: r } = e;
            return a(K.lg, r);
          }, !0)
        )((e) => {
          let {
            className: a = "",
            dispatch: r,
            observe: s,
            observedItem: l = {},
            observedItemId: t,
            onError: i,
            onLoad: c,
            sources: n,
            src: o,
            fallbackSrc: d,
            ...h
          } = e;
          return (0, L.jsx)("div", {
            className: "lazyImageContainer",
            children: (0, L.jsx)(P, {
              "data-is": "lazy-image",
              "data-observed-item-id": t,
              className: Q(l, a),
              src: T(l, o),
              sources: U(l, n),
              fallbackSrc: d,
              onError: () => i(K.lg, t),
              onLoad: () => c(K.lg, t),
              ...h,
            }),
          });
        }),
        $ = (0, I.Ng)(
          (e, a) => {
            let { src: r } = a;
            return {
              observedItemId: r,
              observedItem: (0, R.A)(
                ["intersectionObserver", "observedItems", K.lg, r],
                e
              ),
            };
          },
          (e) => ({
            onLoad: (0, S.A)(e, V.Kc),
            onError: (0, S.A)(e, V.Hj),
            observe: (0, S.A)(e, V.lB),
          })
        )(Y);
      var ee = r(52304);
      const ae = (e) => {
        let {
          src: a,
          width: r,
          height: s,
          alt: l = "",
          className: t = "",
          lazy: i = !1,
          fallbackSrc: c = ee.bc,
          ...n
        } = e;
        return i
          ? (0, L.jsx)($, {
              src: (0, p.f_)({ width: r, height: s })(a),
              fallbackSrc: c,
              alt: l,
              className: t,
              ...n,
            })
          : (0, L.jsx)(P, {
              src: (0, p.f_)({ width: r, height: s })(a),
              fallbackSrc: c,
              alt: l,
              className: t,
              ...n,
            });
      };
    },
    12419: (e, a, r) => {
      r.d(a, { A: () => l });
      r(65043);
      var s = r(70579);
      const l = (e) => {
        let { variant: a = "default" } = e;
        return (0, s.jsx)("hr", {
          className: "widget-layout-divider ".concat(a),
        });
      };
    },
    36278: (e, a, r) => {
      r.d(a, { A: () => l });
      r(65043);
      var s = r(70579);
      const l = (e) => {
        let { children: a, variant: r = "default" } = e;
        return (0, s.jsx)("div", {
          className: "widget-layout-media-container ".concat(r),
          children: a,
        });
      };
    },
    40243: (e, a, r) => {
      r.d(a, { A: () => s });
      const s = {
        colors: '"../../../styles/variables/colors.module.css"',
        "color-blue300": "#516681",
        "color-white": "#ffffff",
        button: "SocialNetworks_button__RxwaE",
      };
    },
  },
]);
//# sourceMappingURL=5276.841e899c.chunk.js.map
