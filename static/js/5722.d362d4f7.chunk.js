"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [5722],
  {
    35213: (e, r, s) => {
      s.d(r, { A: () => c });
      var t = s(1690),
        a = (s(65043), s(70579));
      const c = (e) =>
        (0, a.jsx)(t.A, {
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
    1690: (e, r, s) => {
      s.d(r, { A: () => re });
      var t = s(65043),
        a = s(8761),
        c = s(95518),
        n = s(83645),
        i = s(25854),
        l = s(88313),
        o = s(37068),
        d = s(61888),
        A = s(33373),
        u = s(48500),
        m = s(12224),
        h = s(94856),
        p = s(96188),
        b = s(36169),
        g = s(1393),
        f = s(82635),
        v = s(83317),
        j = s(33981),
        x = s(99185),
        w = s(4258),
        I = s(80367),
        y = s(96277),
        N = s(20045),
        S = s(83003),
        k = s(79495);
      const E = (0, N.A)(
          (0, y.y3)((e) => {
            let {
              injectImagePreloadHints: r,
              preload: s = !1,
              src: t,
              sources: a,
            } = e;
            return s && r(t, a);
          })
        )(() => null),
        L = (0, S.Ng)(null, (e) => ({
          injectImagePreloadHints: (0, N.A)(e, k.yc),
        }))(E);
      var z = s(70579);
      const H = (0, l.A)([
          [(0, o.A)(String, "descriptor"), (0, d.A)("descriptor")],
          [A.A, (0, u.A)(null)],
        ]),
        _ = (e, r) =>
          (0, a.A)(
            (0, m.A)(["width", "height"]),
            (0, n.A)(
              () => "image/webp" === r,
              (e) => ({ type: "webp", ...e })
            ),
            (r) => (0, I.f_)(r)(e)
          ),
        C = (e, r) =>
          (0, a.A)(
            (0, f.A)(
              ((e, r) =>
                (0, a.A)(
                  (0, h.A)([_(e, r), H]),
                  (0, p.A)((0, b.A)(i.A)),
                  (0, g.A)(" ")
                ))(e, r)
            ),
            (0, g.A)(", ")
          ),
        P = (e) =>
          (0, v.A)(
            (0, a.A)(
              (0, n.A)(j.A, (0, x.A)({})),
              (0, f.A)((0, w.A)("type", "image/webp"))
            )(e),
            e
          ),
        O = (0, t.forwardRef)((e, r) => {
          let {
            alt: s,
            dispatch: t,
            injectImagePreloadHints: c,
            preload: n,
            src: i,
            sources: l = [],
            ...o
          } = e;
          const d = ((e) =>
            (0, a.A)(
              P,
              (0, f.A)((r) => ({
                ...r,
                srcSet: r.renditions
                  ? C(e, r.type)(r.renditions)
                  : _(e, r.type)({}),
              }))
            ))(i)(l);
          return (0, z.jsxs)(z.Fragment, {
            children: [
              (0, z.jsx)(L, { preload: n, src: i, sources: d }),
              (0, z.jsxs)("picture", {
                children: [
                  d.map((e, r) =>
                    (0, z.jsx)(
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
                  (0, z.jsx)("img", { alt: s, src: i, ...o, ref: r }),
                ],
              }),
            ],
          });
        });
      var R = s(28563);
      const B = (e) => {
        let {
          alt: r = "",
          className: s = "",
          fallbackSrc: l,
          onLoad: o,
          onError: d,
          src: A,
          ...u
        } = e;
        const m = (0, R.A)(),
          h = (0, t.useRef)(null),
          [p, b] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            h &&
              h.current &&
              h.current.src &&
              h.current.complete &&
              0 === h.current.naturalHeight &&
              b(!0);
          }, []),
          m && p
            ? (0, z.jsx)(O, { alt: r, className: s, src: l, ...u })
            : (0, z.jsx)(O, {
                alt: r,
                className: s,
                onLoad: o,
                onError: (0, a.A)(
                  (0, c.A)(() => b(!0)),
                  (0, n.A)(() => !(0, i.A)(d), d)
                ),
                src: A,
                ...u,
                ref: h,
              })
        );
      };
      var D = s(76426),
        F = s(71517),
        K = s(77701),
        W = s(35846),
        q = s(8135),
        G = s(27266);
      const J = (0, K.A)(!1, "isIntersecting"),
        M = (0, K.A)(!0, "isIntersecting"),
        Q = (0, K.A)(!1, "isLoaded"),
        T = (0, K.A)(!1, "isLoadedWithErrors"),
        U = (0, W.A)([Q, T]),
        V = (e, r) =>
          (0, q.A)(U, (0, u.A)("".concat(r, " visible")), (0, u.A)(r))(e),
        X = (e, r) => (0, q.A)(J, (0, u.A)(r), (0, u.A)(void 0))(e),
        Y = (e, r) => (0, q.A)(M, (0, u.A)(r), (0, u.A)(void 0))(e),
        Z = (0, N.A)(
          (0, y.y3)((e) => {
            let { observe: r, observedItemId: s } = e;
            return r(G.lg, s);
          }, !0)
        )((e) => {
          let {
            className: r = "",
            dispatch: s,
            observe: t,
            observedItem: a = {},
            observedItemId: c,
            onError: n,
            onLoad: i,
            sources: l,
            src: o,
            fallbackSrc: d,
            ...A
          } = e;
          return (0, z.jsx)("div", {
            className: "lazyImageContainer",
            children: (0, z.jsx)(B, {
              "data-is": "lazy-image",
              "data-observed-item-id": c,
              className: V(a, r),
              src: X(a, o),
              sources: Y(a, l),
              fallbackSrc: d,
              onError: () => n(G.lg, c),
              onLoad: () => i(G.lg, c),
              ...A,
            }),
          });
        }),
        $ = (0, S.Ng)(
          (e, r) => {
            let { src: s } = r;
            return {
              observedItemId: s,
              observedItem: (0, D.A)(
                ["intersectionObserver", "observedItems", G.lg, s],
                e
              ),
            };
          },
          (e) => ({
            onLoad: (0, N.A)(e, F.Kc),
            onError: (0, N.A)(e, F.Hj),
            observe: (0, N.A)(e, F.lB),
          })
        )(Z);
      var ee = s(52304);
      const re = (e) => {
        let {
          src: r,
          width: s,
          height: t,
          alt: a = "",
          className: c = "",
          lazy: n = !1,
          fallbackSrc: i = ee.bc,
          ...l
        } = e;
        return n
          ? (0, z.jsx)($, {
              src: (0, I.f_)({ width: s, height: t })(r),
              fallbackSrc: i,
              alt: a,
              className: c,
              ...l,
            })
          : (0, z.jsx)(B, {
              src: (0, I.f_)({ width: s, height: t })(r),
              fallbackSrc: i,
              alt: a,
              className: c,
              ...l,
            });
      };
    },
    65722: (e, r, s) => {
      s.r(r), s.d(r, { default: () => n });
      var t = s(35213),
        a = (s(65043), s(33981)),
        c = s(70579);
      const n = (e) => {
        let {
          alt: r = "",
          credit: s = "",
          src: n,
          shouldDisplayCaption: i = !0,
        } = e;
        return (0, c.jsxs)("figure", {
          "data-is": "image-cover",
          children: [
            (0, c.jsx)(t.A, { src: n, alt: r, preload: !0 }),
            i
              ? (0, c.jsxs)("figcaption", {
                  children: [
                    (0, c.jsx)("span", { className: "caption", children: r }),
                    (0, a.A)(s) || r === s
                      ? null
                      : (0, c.jsx)("span", {
                          className: "credit",
                          children: s,
                        }),
                  ],
                })
              : null,
          ],
        });
      };
    },
    58089: (e, r, s) => {
      s.d(r, { A: () => t });
      const t = (0, s(7573).A)(function (e, r) {
        return (
          r instanceof e ||
          (null != r &&
            (r.constructor === e ||
              ("Object" === e.name && "object" === typeof r)))
        );
      });
    },
    37068: (e, r, s) => {
      s.d(r, { A: () => n });
      var t = s(89334),
        a = s(61888),
        c = s(58089);
      const n = (0, t.A)(function (e, r, s) {
        return (0, c.A)(e, (0, a.A)(r, s));
      });
    },
  },
]);
//# sourceMappingURL=5722.d362d4f7.chunk.js.map
