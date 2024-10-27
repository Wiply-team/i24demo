"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [231, 4818, 6768],
  {
    34032: (e, s, r) => {
      r.r(s), r.d(s, { default: () => S });
      r(65043);
      var t = r(96277),
        n = r(56768),
        i = r(65865),
        a = r(88313),
        l = r(33981),
        c = r(33373),
        o = r(57624);
      var d = r(29157),
        m = (r(85556), r(1376)),
        h = r(36278),
        u = r(25854),
        p = r(70579);
      const x = (e) => {
        let { person: s } = e;
        return (0, p.jsxs)("div", {
          className: "missing-person-card",
          children: [
            (0, p.jsx)("div", {
              className: "missing-person-card-image",
              children: (0, p.jsx)(h.A, {
                variant: "squared",
                children: (0, p.jsx)(m.A, {
                  src: (0, u.A)(s.image)
                    ? "https://cdn.i24news.tv/uploads/missing/placeholder.png"
                    : s.image.href,
                  alt: s.name,
                  lazy: !0,
                }),
              }),
            }),
            (0, p.jsxs)("div", {
              className: "missing-person-card-information",
              children: [
                (0, p.jsx)("div", {
                  className: "missing-person-card-title",
                  children: (0, u.A)(s.age)
                    ? (0, p.jsx)("span", { children: s.name })
                    : (0, p.jsxs)("span", { children: [s.name, ", ", s.age] }),
                }),
                (0, u.A)(s.location) || (0, l.A)(s.location)
                  ? null
                  : (0, p.jsx)("div", {
                      className: "missing-person-card-location",
                      children: s.location,
                    }),
                (0, u.A)(s.description) || (0, l.A)(s.description)
                  ? null
                  : (0, p.jsx)("p", {
                      className: "missing-person-card-description",
                      children: s.description,
                    }),
              ],
            }),
          ],
        });
      };
      x.Placeholder = () =>
        (0, p.jsxs)("div", {
          className: "missing-person-card missing-person-card-placeholder",
          children: [
            (0, p.jsx)("div", {
              className: "missing-person-card-image",
              children: (0, p.jsx)(h.A, { variant: "squared" }),
            }),
            (0, p.jsx)("div", { className: "missing-person-card-information" }),
          ],
        });
      const j = x;
      var g = r(12419);
      const A = (0, d.A)({
          english: { error: "An error occurred. Please try again later." },
          french: {
            error: "Une erreur est survenue. Veuillez r\xe9essayer plus tard.",
          },
          arabic: {
            error:
              "\u062d\u062f\u062b \u062e\u0637\u0623. \u064a\u0631\u062c\u0649 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627.",
          },
          hebrew: {
            error:
              "\u05d0\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4. \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05de\u05d0\u05d5\u05d7\u05e8 \u05d9\u05d5\u05ea\u05e8",
          },
        }),
        v = () =>
          (0, p.jsxs)("section", {
            className: "missing-persons-list",
            children: [
              (0, p.jsx)("div", {
                className: "missing-persons missing-persons-placeholder",
                children: (0, p.jsxs)("ul", {
                  children: [
                    (0, p.jsx)("li", {
                      children: (0, p.jsx)(j.Placeholder, {}),
                    }),
                    (0, p.jsx)("li", {
                      children: (0, p.jsx)(j.Placeholder, {}),
                    }),
                    (0, p.jsx)("li", {
                      children: (0, p.jsx)(j.Placeholder, {}),
                    }),
                    (0, p.jsx)("li", {
                      children: (0, p.jsx)(j.Placeholder, {}),
                    }),
                  ],
                }),
              }),
              (0, p.jsx)(g.A, { variant: "thin" }),
            ],
          }),
        N = (e) => {
          let { persons: s } = e;
          return (0, p.jsx)("div", {
            className: "missing-persons",
            children: (0, p.jsx)("ul", {
              children: s.map((e) =>
                (0, p.jsx)(
                  "li",
                  { children: (0, p.jsx)(j, { person: e }) },
                  e.id
                )
              ),
            }),
          });
        },
        b = (e) => {
          let { isFetching: s, persons: r, locale: t, error: n } = e;
          return (0, p.jsxs)("section", {
            className: "missing-persons-list",
            children: [
              n
                ? (0, p.jsx)(o.A, { message: A(t)("error"), level: "error" })
                : null,
              (0, i.A)(
                (0, a.A)([
                  [() => s, () => (0, p.jsx)(v, {})],
                  [() => !s && (0, l.A)(r), () => null],
                  [c.A, () => (0, p.jsx)(N, { persons: r, locale: t })],
                ])
              ),
            ],
          });
        };
      b.Placeholder = v;
      const w = b;
      var C = r(20045),
        f = r(83003);
      const y = (0, C.A)(
          (0, t.y3)((e) => {
            let { fetch: s } = e;
            return s();
          }),
          (0, t.qm)((e) => {
            let { clean: s } = e;
            return s();
          })
        )(w),
        _ = (0, f.Ng)(
          (e) => ({
            isFetching: e.missingPersons.isFetching,
            persons: e.missingPersons.missingPersons,
            error: e.missingPersons.error,
            locale: e.router.locale,
          }),
          (e) => ({ fetch: (0, C.A)(e, n.fetch), clean: (0, C.A)(e, n.clean) })
        )(y);
      var k = r(43602);
      const S = (e) =>
        (0, p.jsx)(k.A, {
          reducers: ["missingPersons"],
          epics: ["missingPersons"],
          children: (0, p.jsx)(_, { ...e }),
        });
    },
    43602: (e, s, r) => {
      r.d(s, { A: () => h });
      var t = r(33981),
        n = r(96637),
        i = r(20045),
        a = r(8761),
        l = (r(65043), r(96277)),
        c = r(83003),
        o = r(53975),
        d = r(70579);
      const m = (0, a.A)(
          (0, l.y3)((e) => {
            let { reducers: s, epics: r, loadResources: t } = e;
            return t(s, r);
          })
        )((e) => {
          let { children: s, areResourcesLoaded: r } = e;
          return r ? (0, d.jsx)(d.Fragment, { children: s }) : null;
        }),
        h = (0, c.Ng)(
          (e, s) => {
            let { reducers: r = [], epics: i = [] } = s;
            return {
              areResourcesLoaded:
                (0, t.A)((0, n.A)(e.lazyResources.reducers, r)) &&
                (0, t.A)((0, n.A)(e.lazyResources.epics, i)),
            };
          },
          (e) => ({ loadResources: (0, i.A)(e, o._H) })
        )(m);
    },
    26745: (e, s, r) => {
      r.d(s, { A: () => t });
      const t = {
        english: {
          title: "Comments",
          writeNewComment: "Write a comment ...",
          noComments: "No comments have been written yet. Be the first!",
          beingModerated: "Your comment is under moderation.",
          error: "An error occurred, please retry later.",
          yes: "Yes",
          no: "No",
          areYouSure: "Are you sure to delete the comment?",
          reply: "Reply",
          replies: "{{ count }} replies",
          hideReplies: "Hide replies",
          deletedComment: "This comment has been deleted.",
          like: "like",
          dislike: "dislike",
          unlike: "Unlike",
          undislike: "Undislike",
          sendNewComment: "Send new comment",
          deleteComment: "Delete comment",
        },
        french: {
          title: "Commentaires",
          writeNewComment: "\xc9crire un commentaire ...",
          noComments:
            "Aucun commentaire n'a \xe9t\xe9 post\xe9. Soyez le premier !",
          beingModerated: "Votre commentaire est en cours de mod\xe9ration.",
          error:
            "Une erreur s'est produite, veuillez r\xe9essayer ult\xe9rieurement.",
          yes: "Oui",
          no: "Non",
          areYouSure:
            "\xcates vous s\xfbr de vouloir supprimer le commentaire?",
          reply: "R\xe9pondre",
          replies: "{{ count }} r\xe9ponses",
          hideReplies: "Masquer les r\xe9ponses",
          deletedComment: "Ce commentaire a \xe9t\xe9 supprim\xe9.",
          like: "J'aime",
          dislike: "Je n'aime pas",
          unlike: "J'aime",
          undislike: "Je n'aime pas",
          sendNewComment: "Envoyer un nouveau commentaire",
          deleteComment: "Supprimer le commentaire",
        },
        arabic: {
          title: "\u062a\u0639\u0644\u064a\u0642\u0627\u062a",
          writeNewComment:
            "\u0627\u0643\u062a\u0628 \u062a\u0639\u0644\u064a\u0642\u064b\u0627 \u062c\u062f\u064a\u062f\u064b\u0627 ...",
          noComments:
            "\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0645\u0643\u062a\u0648\u0628\u0629 \u062d\u062a\u0649 \u0627\u0644\u0622\u0646. \u0643\u0646 \u0627\u0644\u0623\u0648\u0644!",
          beingModerated:
            "\u062a\u0639\u0644\u064a\u0642\u0643 \u062a\u062d\u062a \u0627\u0644\u0627\u0639\u062a\u062f\u0627\u0644.",
          error:
            "\u062d\u062f\u062b \u062e\u0637\u0623 \u060c \u064a\u0631\u062c\u0649 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u064b\u0627",
          yes: "\u0646\u0639\u0645",
          no: "\u0644\u0627",
          areYouSure:
            "\u0647\u0644 \u0623\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0627\u0644\u062a\u0639\u0644\u064a\u0642\u061f",
          reply: "\u0644\u0644\u0631\u062f",
          replies: "\u0631\u064f\u062f\u0648\u062f {{ count }}",
          hideReplies:
            "\u0627\u062e\u0641\u0627\u0621 \u0627\u0644\u0631\u062f\u0648\u062f",
          deletedComment:
            "\u062a\u0645 \u062d\u0630\u0641\u064f \u0647\u0630\u0627 \u0627\u0644\u062a\u0639\u0644\u064a\u0642.",
          like: "\u0645\u062b\u0644",
          dislike: "\u0644\u0645 \u064a\u0639\u062c\u0628\u0646\u0649",
          unlike: "\u0645\u062b\u0644",
          undislike: "\u0644\u0645 \u064a\u0639\u062c\u0628\u0646\u0649",
          sendNewComment:
            "\u0625\u0631\u0633\u0627\u0644 \u062a\u0639\u0644\u064a\u0642 \u062c\u062f\u064a\u062f",
          deleteComment: "\u062d\u0630\u0641 \u062a\u0639\u0644\u064a\u0642",
        },
        hebrew: {
          title: "\u05ea\u05d2\u05d5\u05d1\u05d5\u05ea",
          writeNewComment:
            "\u05d4\u05d5\u05e1\u05e3 \u05ea\u05d2\u05d5\u05d1\u05d4",
          noComments:
            "\u05d0\u05d9\u05df \u05e2\u05d3\u05d9\u05d9\u05df \u05ea\u05d2\u05d5\u05d1\u05d5\u05ea. \u05d4\u05d9\u05d4 \u05d4\u05e8\u05d0\u05e9\u05d5\u05df \u05dc\u05d4\u05d2\u05d9\u05d1",
          beingModerated:
            "\u05ea\u05d2\u05d5\u05d1\u05ea\u05da \u05d1\u05d1\u05d3\u05d9\u05e7\u05d4",
          error:
            "\u05d0\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4 \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05de\u05d0\u05d5\u05d7\u05e8 \u05d9\u05d5\u05ea\u05e8",
          yes: "\u05db\u05df",
          no: "\u05dc\u05d0",
          areYouSure:
            "\u05d4\u05d0\u05dd \u05d0\u05ea\u05d4 \u05d1\u05d8\u05d5\u05d7 \u05e9\u05d1\u05e8\u05e6\u05d5\u05e0\u05da \u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05ea \u05d4\u05ea\u05d2\u05d5\u05d1\u05d4?",
          reply: "\u05d4\u05d2\u05d1",
          replies: "{{ count }} \u05ea\u05d2\u05d5\u05d1\u05d5\u05ea",
          hideReplies:
            "\u05d4\u05e1\u05ea\u05e8 \u05ea\u05d2\u05d5\u05d1\u05d5\u05ea",
          deletedComment:
            "\u05ea\u05d2\u05d5\u05d1\u05d4 \u05d6\u05d5 \u05e0\u05de\u05d7\u05e7\u05d4",
          like: "\u05d0\u05d4\u05d1\u05ea\u05d9",
          dislike: "\u05dc\u05d0 \u05d0\u05d4\u05d1\u05ea\u05d9",
          unlike: "\u05d1\u05d9\u05d8\u05d5\u05dc \u05dc\u05d9\u05d9\u05e7",
          undislike:
            "\u05d1\u05d9\u05d8\u05d5\u05dc \u05d3\u05d9\u05e1\u05dc\u05d9\u05d9\u05e7",
          sendNewComment:
            "\u05e9\u05dc\u05d7\u05ea \u05ea\u05d2\u05d5\u05d1\u05d4 \u05d7\u05d3\u05e9\u05d4",
          deleteComment: "\u05de\u05d7\u05e7 \u05ea\u05d2\u05d5\u05d1\u05d4",
        },
      };
    },
    20840: (e, s, r) => {
      r.d(s, { A: () => Q });
      var t = r(15001),
        n = r(8761),
        i = r(20045),
        a = r(12224),
        l = r(61888),
        c = r(48500),
        o = r(33981),
        d = r(876),
        m = r(59738);
      const h = (0, d.A)(function (e) {
        return (0, m.A)(e.length, e);
      });
      var u = r(54175),
        p = r(4258),
        x = r(94473),
        j = r(59184),
        g = r(65325),
        A = r(88313),
        v = r(33373),
        N = r(34654),
        b = r(45411),
        w = r(65043);
      const C = "SocialCookieException_wrapper__kNRze",
        f = "SocialCookieException_link__LV6XD",
        y = "SocialCookieException_link-inner__Gr1rw",
        _ = "SocialCookieException_text__YvjL+";
      var k = r(20491);
      var S = r(29157),
        E = r(13779),
        T = (r(85556), r(70579));
      const R = (0, S.A)({
          english: {
            message:
              "This post can't be displayed because social networks cookies have been deactivated. You can activate them by clicking",
          },
          french: {
            message:
              "Ce post ne peut \xeatre affich\xe9 car les cookies pour les r\xe9seaux sociaux sont d\xe9sactiv\xe9s. Vous pouvez les r\xe9activer en cliquant sur",
          },
          arabic: {
            message:
              "This post can't be displayed because social networks cookies have been deactivated. You can activate them by clicking",
          },
          hebrew: {
            message:
              "\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05e6\u05d9\u05d2 \u05de\u05db\u05d9\u05d5\u05d5\u05df \u05e9\u05e2\u05d5\u05d2\u05d9\u05d5\u05ea \u05e8\u05e9\u05ea\u05d5\u05ea \u05d7\u05d1\u05e8\u05ea\u05d9\u05d5\u05ea \u05d7\u05e1\u05d5\u05de\u05d5\u05ea. \u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05e4\u05e2\u05d9\u05dc \u05d1\u05dc\u05d7\u05d9\u05e6\u05d4 \u05db\u05d0\u05df",
          },
        }),
        I = (e) => {
          let { locale: s, href: r } = e;
          return (0, T.jsxs)("div", {
            className: C,
            children: [
              (0, T.jsx)("p", {
                className: f,
                children: (0, T.jsx)(k.A, {
                  href: r,
                  children: (0, T.jsx)("span", { className: y, children: r }),
                }),
              }),
              (0, T.jsxs)("p", {
                className: _,
                children: [R(s)("message"), " ", (0, T.jsx)(E.A, {}), "."],
              }),
            ],
          });
        };
      var F = r(83003);
      const P = (0, F.Ng)((e) => ({ locale: e.router.locale }))(I);
      var B = r(87211),
        O = r(96277);
      var L = r(79495);
      const D = (0, i.A)(
          (0, O.y3)((e) => {
            let { injectYoutubeSchema: s, src: r } = e;
            return s(r);
          }),
          (0, O.EF)(B.A)
        )((e) => {
          let { src: s } = e;
          return (0, T.jsx)("iframe", {
            "data-is": "component-youtube",
            src: s,
            allowFullScreen: !0,
            title: "i24NEWS Youtube video",
          });
        }),
        V = (0, F.Ng)(null, (e) => ({
          injectYoutubeSchema: (0, i.A)(e, L.CX),
        }))(D);
      var z = r(27222),
        H = r(75806);
      const M = (0, b.A)("BrightcoveVideoLazyPlayer"),
        q = (0, b.A)("FacebookPost"),
        U = (0, b.A)("Tweet"),
        Y = (e) => (s) => {
          let { component: r } = s;
          return e === r.type;
        },
        G = (e, s) =>
          s.map((s, r) =>
            (0, T.jsx)(
              Q,
              { component: s, id: "".concat(e, "-").concat(r) },
              "".concat(e, "-").concat(r)
            )
          ),
        W = (0, t.A)(
          (0, n.A)(
            (e) =>
              new DOMParser()
                .parseFromString(e, "text/html")
                .querySelector("blockquote.twitter-tweet"),
            (0, i.A)((0, a.A)(["cards", "conversation"]), (0, l.A)("dataset"))
          ),
          (0, c.A)({})
        ),
        X = h((e, s) =>
          (0, u.A)((r, t) => (0, p.A)(e[t] || t, s[t], r), {}, (0, x.A)(s))
        )({ class: "className" }),
        J = (0, n.A)(
          (0, j.A)({
            component: (0, j.A)({ props: (0, i.A)(X, (0, g.A)({})) }),
          }),
          (0, A.A)([
            [
              Y("bold"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("b", {
                  className: s.props.className,
                  "data-is": "component-bold",
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("brightcoveVideo"),
              (e) => {
                let { component: s, locale: r } = e;
                return (0, T.jsxs)("figure", {
                  "data-is": "component-video-wrapper",
                  children: [
                    (0, T.jsx)(M, {
                      autoPlay: s.autoPlay,
                      videoId: s.id,
                      endScreenType: z.qM,
                      locale: r,
                    }),
                    (0, T.jsxs)("figcaption", {
                      className: "text-lighten",
                      children: [
                        (0, T.jsx)("span", {
                          className: "caption",
                          children: s.description,
                        }),
                        null === s.credit || (0, o.A)(s.credit)
                          ? null
                          : (0, T.jsx)("span", {
                              className: "credit",
                              children: s.credit,
                            }),
                      ],
                    }),
                  ],
                });
              },
            ],
            [
              Y("emphasis"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("em", {
                  className: s.props.className,
                  "data-is": "component-emphasis",
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("facebookPost"),
              (e) => {
                let { component: s, nonIABVendorsAuthorized: r } = e;
                return (0, T.jsx)(H.A, {
                  fallback: (0, T.jsx)(P, { href: s.href }),
                  children: r
                    ? (0, T.jsx)(q, { href: s.href, props: s.props })
                    : (0, T.jsx)(P, { href: s.href }),
                });
              },
            ],
            [
              Y("figcaption"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("figcaption", {
                  className: s.props.className,
                  "data-is": "component-figcaption",
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("figure"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("figure", {
                  className: s.props.className,
                  "data-is": "component-figure",
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("subHeading"),
              (e) => {
                let { component: s, id: r } = e;
                return w.createElement(
                  "h".concat(s.size),
                  {
                    "data-is": "component-heading",
                    className: s.props.className,
                  },
                  G(r, s.children)
                );
              },
            ],
            [
              Y("captionedImage"),
              (e) => {
                let { component: s } = e;
                return (0, T.jsxs)("figure", {
                  "data-is": "component-image-wrapper",
                  children: [
                    (0, T.jsx)(N.A, { src: s.src, alt: s.credit || s.caption }),
                    (0, T.jsxs)("figcaption", {
                      className: "text-lighten",
                      children: [
                        (0, T.jsx)("span", {
                          className: "caption",
                          children: s.caption,
                        }),
                        (0, T.jsx)("span", {
                          className: "credit",
                          children: s.credit,
                        }),
                      ],
                    }),
                  ],
                });
              },
            ],
            [
              Y("img"),
              (e) => {
                let { component: s } = e;
                return (0, T.jsx)(N.A, {
                  "data-is": "component-img",
                  className: s.props.className,
                  src: s.props.src,
                  alt: s.props.alt,
                  title: s.props.title,
                });
              },
            ],
            [
              Y("italic"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("i", {
                  className: s.props.className,
                  "data-is": "component-italic",
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("link"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("a", {
                  "data-is": "component-link",
                  href: s.props.href,
                  title: s.props.title,
                  target: s.props.target,
                  className: s.props.className,
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("paragraph"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("p", {
                  className: s.props.className,
                  "data-is": "component-paragraph",
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("quote"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("blockquote", {
                  className: s.props.className,
                  "data-is": "component-quote",
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("strong"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("strong", {
                  className: s.props.className,
                  "data-is": "component-strong",
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("text"),
              (e) => {
                let { component: s } = e;
                return s.text;
              },
            ],
            [
              Y("tweet"),
              (e) => {
                let { component: s, nonIABVendorsAuthorized: r } = e;
                return (0, T.jsx)(H.A, {
                  fallback: (0, T.jsx)(P, {
                    href: "https://x.com/i/web/status/".concat(s.id),
                  }),
                  children: r
                    ? (0, T.jsx)("blockquote", {
                        className: "tweet",
                        "data-is": "component-tweet",
                        children: (0, T.jsx)(U, {
                          tweetId: s.id,
                          options: W(s.html),
                        }),
                      })
                    : (0, T.jsx)(P, {
                        href: "https://x.com/i/web/status/".concat(s.id),
                      }),
                });
              },
            ],
            [
              Y("underline"),
              (e) => {
                let { component: s, id: r } = e;
                return (0, T.jsx)("u", {
                  className: s.props.className,
                  "data-is": "component-underline",
                  children: G(r, s.children),
                });
              },
            ],
            [
              Y("youtubeVideo"),
              (e) => {
                let { component: s } = e;
                return (0, T.jsx)(V, { src: s.src });
              },
            ],
            [v.A, (0, c.A)(null)],
          ])
        ),
        Q = (0, F.Ng)((e) => ({
          nonIABVendorsAuthorized: e.consentManagement.nonIABVendorsAuthorized,
          locale: e.router.locale,
        }))(J);
    },
    51408: (e, s, r) => {
      r.r(s), r.d(s, { default: () => gs });
      var t = r(65043),
        n = r(34818),
        i = r(96277),
        a = r(8761),
        l = r(96188),
        c = r(36169),
        o = r(25854),
        d = r(8135),
        m = r(20045),
        h = r(76426),
        u = r(48500),
        p = r(50727),
        x = r(38312),
        j = r(60613),
        g = r(78837),
        A = r(70579);
      const v = () =>
        (0, A.jsx)("span", {
          className: "article-author-separator",
          children: "\u2003\u25a0\u2003",
        });
      var N = r(20491);
      const b = (e) => {
          let { signatures: s } = e;
          return (0, A.jsx)("span", {
            className: "signature-names",
            children: s.map((e, r) =>
              (0, A.jsxs)(
                t.Fragment,
                {
                  children: [
                    e.frontendUrl
                      ? (0, A.jsx)("span", {
                          className: "signature-link",
                          children: (0, A.jsx)(N.A, {
                            href: e.frontendUrl,
                            children: e.authorName,
                          }),
                        })
                      : e.authorName,
                    r < s.length - 1
                      ? (0, A.jsx)(A.Fragment, { children: ",\xa0" })
                      : "",
                  ],
                },
                r
              )
            ),
          });
        },
        w = (e) => {
          let { signatures: s } = e;
          return 1 === s.length
            ? (0, A.jsx)(b, { signatures: s })
            : (0, A.jsxs)(A.Fragment, {
                children: [(0, A.jsx)(v, {}), (0, A.jsx)(b, { signatures: s })],
              });
        };
      var C = r(83097);
      const f = () =>
          (0, A.jsxs)(A.Fragment, {
            children: [
              "\u2003",
              (0, A.jsx)("span", { className: "link-separator" }),
              "\u2003",
            ],
          }),
        y = "Links_signature-links__7WAp3",
        _ = "Links_social-link__ESkoW",
        k = "Links_signature-separator__VmjlE",
        S = (e) => {
          let { links: s = [] } = e;
          return s.length > 0
            ? (0, A.jsxs)(A.Fragment, {
                children: [
                  (0, A.jsx)("span", {
                    className: k,
                    children: (0, A.jsx)(v, {}),
                  }),
                  (0, A.jsx)("span", {
                    className: y,
                    children: s.map((e, s) =>
                      (0, A.jsxs)(
                        t.Fragment,
                        {
                          children: [
                            s > 0 ? (0, A.jsx)(f, {}) : null,
                            (0, A.jsx)("span", {
                              className: _,
                              children: (0, A.jsx)(C.A, {
                                link: e,
                                variant: "block",
                              }),
                            }),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                ],
              })
            : null;
        };
      var E = r(44376),
        T = r(29157);
      const R = (0, T.A)({
          english: { readingTime: "{{ time }} min read" },
          french: { readingTime: "{{ time }} min" },
          arabic: { readingTime: "\u062f\u0642\u064a\u0642\u0629 {{ time }}" },
          hebrew: {
            readingTime:
              "{{ time }} \u05d3\u05e7\u05d5\u05ea \u05e7\u05e8\u05d9\u05d0\u05d4",
          },
        }),
        I = (e) => {
          let { readingTime: s, locale: r } = e;
          return (0, A.jsxs)("div", {
            className: "article-reading-time",
            children: [(0, A.jsx)(E.A, {}), R(r)("readingTime", { time: s })],
          });
        };
      var F = r(83003);
      const P = (0, F.Ng)((e) => ({
        locale: e.router.locale,
        readingTime: e.article.content.readingTime,
      }))(I);
      var B = r(82838);
      const O = (e) => {
          let { publishedAt: s, locale: r } = e;
          return (0, A.jsx)("span", {
            children: (0, A.jsx)(B.A, {
              date: s,
              locale: r,
              itemProp: "datePublished",
            }),
          });
        },
        L = (0, F.Ng)((e) => ({
          locale: e.router.locale,
          publishedAt: e.article.content.publishedAt,
        }))(O);
      var D = r(75806),
        V = r(98079);
      const z = (0, T.A)({
          english: { lastRevision: "latest revision" },
          french: { lastRevision: "derni\xe8re modification" },
          arabic: {
            lastRevision:
              "\u0627\u0644\u062a\u0646\u0642\u064a\u062d \u0627\u0644\u0623\u062e\u064a\u0631",
          },
          hebrew: {
            lastRevision:
              "\u05d2\u05e8\u05e1\u05d4 \u05d0\u05d7\u05e8\u05d5\u05e0\u05d4",
          },
        }),
        H = (e) => {
          let { locale: s, publishedAt: r, updatedAt: t } = e;
          return (0, V.ny)(r, t)
            ? null
            : (0, A.jsx)("span", {
                children: (0, A.jsxs)(D.A, {
                  children: [
                    z(s)("lastRevision"),
                    "\xa0",
                    (0, A.jsx)(B.A, {
                      date: t,
                      locale: s,
                      itemProp: "dateModified",
                    }),
                  ],
                }),
              });
        },
        M = (0, F.Ng)((e) => ({
          locale: e.router.locale,
          updatedAt: e.article.content.updatedAt,
          publishedAt: e.article.content.publishedAt,
        }))(H);
      var q = r(33981);
      const U = (e) => {
        let { jobTitle: s = "" } = e;
        return (0, q.A)(s)
          ? null
          : (0, A.jsxs)(A.Fragment, {
              children: [
                (0, A.jsx)(v, {}),
                (0, A.jsx)("span", {
                  className: "signature-job-title",
                  children: s,
                }),
              ],
            });
      };
      var Y = r(57594),
        G = r(1690);
      const W = (e) => {
          let { signatures: s, variant: r = "default" } = e;
          return (0, A.jsx)("span", {
            className: "signature-images-".concat(r),
            children: s.map((e, s) =>
              (0, A.jsx)(
                t.Fragment,
                {
                  children: (0, A.jsx)(G.A, {
                    src: e.image ? e.image.href : Y.aV,
                    alt: e.authorName,
                    lazy: !1,
                    width: "default" === r ? 36 : 30,
                    height: "default" === r ? 36 : 30,
                  }),
                },
                s
              )
            ),
          });
        },
        X = (e) => {
          let { signatures: s, updatedAt: r, publishedAt: t } = e;
          return (0, A.jsxs)("div", {
            "data-is": "author",
            children: [
              (0, A.jsxs)("div", {
                className: "wrapper",
                children: [
                  1 === s.length
                    ? (0, A.jsxs)(A.Fragment, {
                        children: [
                          (0, A.jsx)("div", {
                            className: "image-wrapper",
                            children: (0, A.jsx)(W, { signatures: [s[0]] }),
                          }),
                          (0, A.jsxs)("div", {
                            className: "information-wrapper",
                            children: [
                              (0, A.jsx)(w, { signatures: [s[0]] }),
                              (0, A.jsx)(U, { jobTitle: s[0].jobTitle }),
                              (0, A.jsx)(S, { links: s[0].links }),
                            ],
                          }),
                        ],
                      })
                    : (0, A.jsxs)("div", {
                        className: "information-with-image-wrapper",
                        children: [
                          (0, A.jsx)(W, { signatures: s, variant: "multiple" }),
                          (0, A.jsx)(w, { signatures: s }),
                        ],
                      }),
                  (0, A.jsx)("div", {
                    className: "reading-time-wrapper hide-md",
                    children: (0, A.jsx)(P, {}),
                  }),
                ],
              }),
              (0, A.jsx)("div", {
                className: "show-md",
                children: (0, A.jsx)(P, {}),
              }),
              (0, A.jsxs)("div", {
                className: "common-information-wrapper",
                children: [
                  (0, A.jsx)(L, {}),
                  (0, V.ny)(t, r) ? null : (0, A.jsx)(v, {}),
                  (0, A.jsx)(M, {}),
                ],
              }),
            ],
          });
        },
        J = (0, F.Ng)((e) => ({
          signatures: e.article.content.signatures,
          updatedAt: e.article.content.updatedAt,
          publishedAt: e.article.content.publishedAt,
        }))(X);
      var Q = r(45411),
        K = r(85556);
      const $ = "ShareBar_wrapper__7t7b4",
        Z = "ShareBar_list__-BTOH",
        ee = "ShareBar_button-wrapper__3svn+";
      var se = r(78587),
        re = r(90748),
        te = r(30858),
        ne = r(83318),
        ie = r(78876),
        ae = r(74659),
        le = r(95537);
      const ce = (e) => {
          let { href: s, onClick: r, "aria-label": t, height: n, width: i } = e;
          return (0, A.jsx)(ae.A, {
            href: s,
            onClick: r,
            "aria-label": t,
            children: (0, A.jsx)(le.A, { height: n, width: i }),
          });
        },
        oe = (0, T.A)({
          english: { label: "Scroll to comments" },
          french: { label: "D\xe9filer jusqu'aux commentaires" },
          arabic: {
            label:
              "\u0627\u0646\u062a\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",
          },
          hebrew: {
            label:
              "\u05d2\u05dc\u05d5\u05dc \u05dc\u05e6\u05e4\u05d9\u05d9\u05d4 \u05d1\u05ea\u05d2\u05d5\u05d1\u05d5\u05ea",
          },
        }),
        de = (e) => {
          let { scrollToCommentBox: s, locale: r, width: t, height: n } = e;
          return (0, A.jsx)(ce, {
            width: t,
            height: n,
            onClick: s,
            href: "#article-comments",
            "aria-label": oe(r)("label"),
          });
        };
      var me = r(98278),
        he = r.n(me);
      const ue = (0, F.Ng)(
        (e, s) => ({ locale: e.router.locale }),
        (e) => ({ scrollToCommentBox: he()(e, n.scrollToCommentBox) })
      )(de);
      var pe = r(60929),
        xe = r(80367);
      const je = (e) => {
          let {
            id: s,
            title: r,
            excerpt: t,
            url: n,
            commentsDisabled: i,
            locale: a,
          } = e;
          const l = (0, xe.xB)(a, n);
          return (0, A.jsx)("div", {
            className: $,
            children: (0, A.jsxs)("ul", {
              className: Z,
              children: [
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: ee,
                    children: (0, A.jsx)(se.A, { url: l }),
                  }),
                }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: ee,
                    children: (0, A.jsx)(re.A, { url: l, title: r }),
                  }),
                }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: ee,
                    children: (0, A.jsx)(te.A, {
                      url: l,
                      title: r,
                      summary: t,
                    }),
                  }),
                }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: ee,
                    children: (0, A.jsx)(ne.A, { url: l, title: r }),
                  }),
                }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: ee,
                    children: (0, A.jsx)(ie.A, { url: l }),
                  }),
                }),
                i
                  ? null
                  : (0, A.jsx)("li", {
                      children: (0, A.jsx)("div", {
                        className: ee,
                        children: (0, A.jsx)(ue, { width: 20, height: 18 }),
                      }),
                    }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: ee,
                    children: (0, A.jsx)(pe.A, {
                      articleId: s,
                      width: 20,
                      height: 17,
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        ge = (0, F.Ng)(
          (e) => ({
            locale: e.router.locale,
            id: e.article.content.id,
            title: e.article.content.title,
            excerpt: e.article.content.excerpt,
            url: e.article.content.frontendUrl,
            commentsDisabled: e.article.content.commentsDisabled,
          }),
          (e) => ({ scrollToCommentBox: (0, m.A)(e, n.scrollToCommentBox) })
        )(je),
        Ae = "Cover_wrapper__Vva68",
        ve = "Cover_content-excerpt__yFjHf",
        Ne = (0, Q.A)("ImageCover"),
        be = (0, Q.A)("ArticleVideoCover"),
        we = (0, F.Ng)((e) => ({
          locale: e.router.locale,
          image: e.article.content.image,
          title: e.article.content.title,
          videoCover: e.article.content.videoCover,
          excerpt: e.article.content.excerpt,
        }))((e) => {
          let { locale: s, image: r, title: t, videoCover: n, excerpt: i } = e;
          return (0, A.jsxs)("section", {
            className: "".concat(Ae),
            "data-is": "article-cover",
            children: [
              (0, A.jsx)("div", {
                className: "container container-page",
                children: (0, A.jsx)("h1", { children: t }),
              }),
              (0, A.jsxs)("div", {
                className: "container container-page",
                children: [
                  (0, A.jsx)("p", {
                    className: "".concat(ve, " excerpt"),
                    children: i,
                  }),
                  (0, A.jsx)(J, {}),
                  n
                    ? (0, A.jsx)(be, {
                        videoId: n.id,
                        caption: n.description,
                        credit: n.credit,
                        locale: s,
                      })
                    : r
                    ? (0, A.jsx)(Ne, { ...r })
                    : null,
                ],
              }),
              (0, A.jsxs)("div", {
                className: "container container-page",
                children: [
                  (0, A.jsx)("div", {
                    className: "show-lg",
                    children: (0, A.jsx)(ge, {}),
                  }),
                  (0, A.jsx)(g.Kl, {}),
                ],
              }),
            ],
          });
        });
      var Ce = r(9180),
        fe = r(26745),
        ye = r(5995);
      const _e = (0, Q.A)("CommentList"),
        ke = (0, T.A)(fe.A),
        Se = (e) => {
          let { locale: s } = e;
          return (0, A.jsxs)("section", {
            "data-is": "article-comments",
            children: [
              (0, A.jsx)(ye.A, { level: "2", children: ke(s)("title") }),
              (0, A.jsx)(Ce.A, { componentId: "comment-list", component: _e }),
            ],
          });
        },
        Ee = (0, F.Ng)((e) => ({ locale: e.router.locale }))(Se),
        Te = "StickyShareBar_wrapper__8u43A",
        Re = "StickyShareBar_visible__5y24s",
        Ie = "StickyShareBar_list__GiCR9",
        Fe = "StickyShareBar_button-wrapper__o8u66",
        Pe = (e) => {
          let {
            id: s,
            title: r,
            excerpt: t,
            url: n,
            commentsDisabled: i,
            locale: a,
            isVisible: l,
          } = e;
          const c = (0, xe.xB)(a, n);
          return (0, A.jsx)("div", {
            className: "".concat(Te, " ").concat(l ? Re : ""),
            children: (0, A.jsxs)("ul", {
              className: Ie,
              children: [
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: Fe,
                    children: (0, A.jsx)(se.A, { url: c }),
                  }),
                }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: Fe,
                    children: (0, A.jsx)(re.A, { url: c, title: r }),
                  }),
                }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: Fe,
                    children: (0, A.jsx)(te.A, {
                      url: c,
                      title: r,
                      summary: t,
                    }),
                  }),
                }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: Fe,
                    children: (0, A.jsx)(ne.A, { url: c, title: r }),
                  }),
                }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: Fe,
                    children: (0, A.jsx)(ie.A, { url: c }),
                  }),
                }),
                i
                  ? null
                  : (0, A.jsx)("li", {
                      children: (0, A.jsx)("div", {
                        className: Fe,
                        children: (0, A.jsx)(ue, { width: 20, height: 18 }),
                      }),
                    }),
                (0, A.jsx)("li", {
                  children: (0, A.jsx)("div", {
                    className: Fe,
                    children: (0, A.jsx)(pe.A, {
                      articleId: s,
                      width: 20,
                      height: 17,
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Be = (0, i.qm)((e) => {
          let { hideShareIcons: s } = e;
          return s();
        })(Pe),
        Oe = (0, F.Ng)(
          (e) => ({
            locale: e.router.locale,
            id: e.article.content.id,
            title: e.article.content.title,
            excerpt: e.article.content.excerpt,
            url: e.article.content.frontendUrl,
            commentsDisabled: e.article.content.commentsDisabled,
            isVisible: e.article.showShareIcons,
          }),
          (e) => ({
            scrollToCommentBox: (0, m.A)(e, n.scrollToCommentBox),
            hideShareIcons: (0, m.A)(e, n.hideShareIcons),
          })
        )(Be);
      var Le = r(20840),
        De = r(42435);
      var Ve = r(76435),
        ze = r(22559);
      const He = (0, T.A)({
          english: {
            add: "Add a comment",
            total: "This article received {{ total }} comments",
          },
          french: {
            add: "Ajouter un commentaire",
            total: "Cet article a re\xe7u {{ total }} commentaires",
          },
          arabic: {
            add: "\u0627\u0636\u0641 \u062a\u0639\u0644\u064a\u0642",
            total:
              "\u062a\u0644\u0642\u062a \u0647\u0630\u0647 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 {{ total }} \u062a\u0639\u0644\u064a\u0642",
          },
          hebrew: {
            add: "\u05d4\u05d5\u05e1\u05e3 \u05ea\u05d2\u05d5\u05d1\u05d4",
            total:
              "\u05d4\u05db\u05ea\u05d1\u05d4 \u05d4\u05d6\u05d5 \u05e7\u05d9\u05d1\u05dc\u05d4 {{ total }} \u05ea\u05d2\u05d5\u05d1\u05d5\u05ea ",
          },
        }),
        Me = (0, F.Ng)(
          (e) => ({
            isFetching: e.article.isFetching,
            numberOfComments: e.article.content.numberOfComments,
            locale: e.router.locale,
          }),
          (e) => ({ scrollToCommentBox: (0, m.A)(e, n.scrollToCommentBox) })
        )((e) => {
          let {
            isFetching: s,
            locale: r,
            numberOfComments: t,
            scrollToCommentBox: n,
          } = e;
          return s
            ? (0, A.jsx)(Ve.A, {})
            : (0, A.jsxs)("div", {
                className: "jump-to-comments",
                children: [
                  (0, A.jsx)("span", {
                    children: He(r)("total", { total: t }),
                  }),
                  (0, A.jsx)(ze.A, {
                    onClick: n,
                    children: (0, A.jsxs)("div", {
                      className: "add-comment",
                      children: [
                        He(r)("add"),
                        (0, A.jsx)(le.A, { className: "comment-icon" }),
                      ],
                    }),
                  }),
                ],
              });
        });
      var qe = r(88313),
        Ue = r(33373),
        Ye = r(82635),
        Ge = r(74596);
      const We = (e, s) =>
          (0, qe.A)([
            [(e) => K.QF === s && "israelatwar" === e, () => "israel-at-war"],
            [Ue.A, (e) => e],
          ])(e),
        Xe = (0, F.Ng)((e) => ({
          locale: e.router.locale,
          tags: e.article.content.tags,
        }))((e) => {
          let { locale: s, tags: r } = e;
          return (0, q.A)(r)
            ? null
            : (0, A.jsx)("div", {
                className: "tags",
                children: (0, A.jsx)("ul", {
                  children: (0, Ye.A)((e) =>
                    (0, A.jsx)(
                      "li",
                      {
                        children: (0, A.jsx)(Ge.A, {
                          href: "/".concat(s, "/tags/").concat(We(e.slug, s)),
                          children: e.name,
                        }),
                      },
                      e.id
                    )
                  )(r),
                }),
              });
        });
      var Je = r(34032),
        Qe = r(12419),
        Ke = r(12040);
      const $e = (0, Q.A)("Events"),
        Ze = (e) => {
          let {
            hasEvents: s,
            components: r,
            locale: n,
            commentsDisabled: i,
            slug: a,
          } = e;
          return (0, A.jsxs)("section", {
            className: "cover-and-content",
            children: [
              (0, A.jsx)(we, {}),
              (0, A.jsx)("div", {
                className: "container container-page ads",
                children: (0, A.jsx)(g.gh, {}),
              }),
              (0, A.jsx)("div", {
                className: "container container-page",
                children: (0, A.jsxs)("div", {
                  className: "columns",
                  children: [
                    (0, A.jsxs)("article", {
                      className: "column col-8 col-md-12",
                      children: [
                        (0, A.jsxs)("div", {
                          className: "components",
                          children: [
                            (0, De.CO)((e, s) =>
                              (0, A.jsxs)(
                                t.Fragment,
                                {
                                  children: [
                                    2 === s ? (0, A.jsx)(g.fg, {}) : null,
                                    8 === s ? (0, A.jsx)(g.XF, {}) : null,
                                    12 === s ? (0, A.jsx)(g.g_, {}) : null,
                                    (0, A.jsx)(Le.A, { component: e, id: s }),
                                  ],
                                },
                                s
                              )
                            )(r),
                            s ? (0, A.jsx)($e, {}) : null,
                            (0, Ke.di)(a)
                              ? (0, A.jsxs)(A.Fragment, {
                                  children: [
                                    (0, A.jsx)(Je.default, {}),
                                    (0, A.jsx)(Qe.A, { variant: "thin" }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                        (0, A.jsx)("div", {
                          className: "hide-lg",
                          children: (0, A.jsx)(Oe, {}),
                        }),
                        (0, A.jsx)("div", {
                          className: "show-lg",
                          children: (0, A.jsx)(ge, {}),
                        }),
                        (0, A.jsx)(Xe, {}),
                        i ? null : (0, A.jsx)(Me, {}),
                        (0, A.jsx)(g.jG, {}),
                        (0, A.jsx)("div", {
                          id: "article-comments",
                          children: i ? null : (0, A.jsx)(Ee, {}),
                        }),
                      ],
                    }),
                    (0, A.jsxs)("aside", {
                      className: "col-4 hide-sm aside-ads",
                      children: [
                        (0, K.VQ)(n)
                          ? null
                          : (0, A.jsx)(g.v_, { align: "end-start" }),
                        (0, A.jsx)(g.HA, { align: "end-start" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        es = (0, F.Ng)((e) => ({
          components: e.article.content.components,
          locale: e.router.locale,
          hasEvents: e.article.content.hasEvents,
          commentsDisabled: e.article.content.commentsDisabled,
          slug: e.article.content.slug,
        }))(Ze);
      var ss = r(10892),
        rs = r(18558),
        ts = r(27222);
      const ns = (0, a.A)(
          (e, s, r) => [is(e, r), as(e, r), { label: s }],
          (0, l.A)((0, c.A)(o.A))
        ),
        is = (e, s) =>
          (0, d.A)(
            (0, m.A)(o.A, (0, h.A)(["parent"])),
            (0, u.A)(null),
            (e) => ({
              link: (0, m.A)(
                (0, p.A)(3),
                (0, x.A)(/^(https?:\/\/)?([^/]+)(\/[^/]+\/[^/]+\/[^/]+)/)
              )(s),
              label: (0, h.A)(["parent", "name"])(e),
            })
          )(e),
        as = (e, s) =>
          (0, d.A)(
            (0, m.A)(o.A, (0, h.A)(["parent"])),
            (e) => ({
              link: (0, m.A)(
                (0, p.A)(3),
                (0, x.A)(/^(https?:\/\/)?([^/]+)(\/[^/]+\/[^/]+\/[^/]+)/)
              )(s),
              label: (0, h.A)(["name"])(e),
            }),
            (e) => ({
              link: (0, m.A)(
                (0, p.A)(3),
                (0, x.A)(/^(https?:\/\/)?([^/]+)(\/[^/]+\/[^/]+\/[^/]+\/[^/]+)/)
              )(s),
              label: (0, h.A)(["name"])(e),
            })
          )(e),
        ls = (e) => {
          let {
            category: s,
            description: r,
            frontendUrl: t,
            image: n,
            pageTitle: i,
            publishedAt: a,
            redirected: l,
            title: c,
            videoCover: o,
          } = e;
          return (0, A.jsx)(A.Fragment, {
            children: (0, A.jsx)(g.Y0, {
              children: (0, A.jsx)(ss.A, {
                description: r,
                imageUrl: !o && n ? n.src : null,
                pubDate: a,
                title: (0, rs.O9)(i) ? i : c,
                type: "article",
                videoUrl: o ? (0, ts._p)(o) : null,
                status: l ? 301 : 200,
                redirectLocation: l ? t : null,
                children: (0, A.jsxs)("div", {
                  id: "article",
                  className: "page-content",
                  children: [
                    (0, A.jsx)(j.A, { crumbs: ns(s, c, t) }),
                    (0, A.jsx)(es, {}),
                  ],
                }),
              }),
            }),
          });
        },
        cs = (0, F.Ng)((e) => ({
          category: e.article.content.category,
          description: e.article.content.metaDescription,
          frontendUrl: e.article.content.frontendUrl,
          image: e.article.content.image,
          redirected: e.article.redirected,
          pageTitle: e.article.content.metaTitle,
          publishedAt: e.article.content.publishedAt,
          title: e.article.content.title,
          videoCover: e.article.content.videoCover,
        }))(ls);
      var os = r(1723),
        ds = r(50270);
      const ms = () =>
          (0, A.jsxs)("div", {
            className: "article-overlay",
            id: "article",
            children: [
              (0, A.jsx)("div", {
                className: "container container-page",
                children: (0, A.jsx)(ds.A, { className: "title" }),
              }),
              (0, A.jsx)("div", {
                className: "container container-page",
                children: (0, A.jsx)(ds.A, { className: "signature" }),
              }),
              (0, A.jsx)("div", {
                className: "container container-page",
                children: (0, A.jsx)(ds.A, { className: "cover" }),
              }),
              (0, A.jsx)("div", {
                className: "container container-page",
                children: (0, A.jsx)(ds.A, { className: "cover-caption" }),
              }),
              (0, A.jsx)("div", {
                className: "container container-page show-lg",
                children: (0, A.jsx)(ds.A, { className: "share-bar" }),
              }),
              (0, A.jsx)("div", {
                className: "banner-section",
                children: (0, A.jsx)("div", {
                  className: "container container-reader",
                  children: (0, A.jsx)(ds.A, { className: "content" }),
                }),
              }),
            ],
          }),
        hs = (0, Q.A)("PageNotFound"),
        us = (e) => {
          let { status: s = 500 } = e;
          return 404 === s ? (0, A.jsx)(hs, {}) : (0, A.jsx)(os.A, { code: s });
        },
        ps = (0, m.A)(
          (0, i.y3)((e) => {
            let { fetchArticle: s, routeSlug: r } = e;
            return s(r);
          }),
          (0, i.qm)((e) => {
            let { clean: s } = e;
            return s();
          })
        )((e) => {
          let { error: s, isLoading: r } = e;
          return s
            ? (0, A.jsx)(us, { status: s.status })
            : r
            ? (0, A.jsx)(ms, {})
            : (0, A.jsx)(cs, {});
        }),
        xs = (0, F.Ng)(
          (e) => ({
            isLoading:
              e.article.isFetching ||
              e.router.activeRoute.params.article !== e.article.content.slug,
            error: e.article.error,
            routeSlug: e.router.activeRoute.params.article,
          }),
          (e) => ({
            fetchArticle: (0, m.A)(e, n.fetchArticle),
            clean: (0, m.A)(e, n.clean),
          })
        )(ps);
      var js = r(43602);
      const gs = (e) =>
        (0, A.jsx)(js.A, {
          reducers: ["article"],
          epics: ["article"],
          children: (0, A.jsx)(xs, { ...e }),
        });
    },
    9180: (e, s, r) => {
      r.d(s, { A: () => u });
      var t = r(76426),
        n = r(20045),
        i = r(77701),
        a = r(71517),
        l = r(27266),
        c = (r(65043), r(96277)),
        o = r(70579);
      const d = (0, n.A)(
        (0, c.y3)((e) => {
          let { onLoad: s } = e;
          return s();
        }, !0)
      )((e) => {
        let { component: s, onLoad: r, ...t } = e;
        return (0, o.jsx)(s, { ...t });
      });
      var m = r(83003);
      const h = (0, n.A)(
          (0, c.y3)((e) => {
            let { observe: s, componentId: r } = e;
            return s(l.nS, r);
          }, !0)
        )((e) => {
          let {
            componentId: s,
            observedItem: r,
            component: t,
            loaded: n,
            ...a
          } = e;
          return (0, o.jsx)("div", {
            "data-observed-item-id": s,
            id: s,
            children: (0, i.A)(!1, "isIntersecting", r)
              ? (0, o.jsx)(d, { component: t, onLoad: () => n(l.nS, s), ...a })
              : null,
          });
        }),
        u = (0, m.Ng)(
          (e, s) => {
            let { componentId: r } = s;
            return {
              observedItem: (0, t.A)(
                ["intersectionObserver", "observedItems", l.nS, r],
                e
              ),
            };
          },
          (e) => ({ observe: (0, n.A)(e, a.lB), loaded: (0, n.A)(e, a.Kc) })
        )(h);
    },
    95537: (e, s, r) => {
      r.d(s, { A: () => i });
      r(65043);
      var t = r(7489),
        n = r(70579);
      const i = (e) => {
        let {
          width: s = 25,
          height: r = 25,
          "aria-label": i,
          className: a = "",
        } = e;
        return (0, n.jsx)(t.A, {
          className: a,
          width: s,
          height: r,
          viewBox: "0 0 18 16",
          "aria-label": i,
          children: (0, n.jsx)("path", {
            d: "M15,0.2c1.5,0,2.7,1.2,2.7,2.8c0,0,0,0,0,0v7.3c0,1.5-1.2,2.7-2.7,2.7H6.6l-3.1,2.7V13H3c-1.5,0-2.7-1.2-2.7-2.7V3c0-1.5,1.2-2.8,2.7-2.8c0,0,0,0,0,0H15z M9,5.7c-0.6,0-1.2,0.5-1.2,1.1C7.8,7.5,8.3,8,8.9,8c0.6,0,1.2-0.5,1.2-1.1c0,0,0,0,0,0C10.1,6.2,9.6,5.7,9,5.7z M13.5,5.7c-0.6,0-1.2,0.5-1.2,1.1c0,0.6,0.5,1.2,1.1,1.2c0.6,0,1.2-0.5,1.2-1.1c0,0,0,0,0,0C14.6,6.2,14.1,5.7,13.5,5.7z M4.5,5.7c-0.6,0-1.2,0.5-1.2,1.1C3.3,7.5,3.8,8,4.4,8c0.6,0,1.2-0.5,1.2-1.1c0,0,0,0,0,0C5.6,6.2,5.1,5.7,4.5,5.7z",
          }),
        });
      };
    },
    34654: (e, s, r) => {
      r.d(s, { A: () => i });
      var t = r(1690),
        n = (r(65043), r(70579));
      const i = (e) =>
        (0, n.jsx)(t.A, {
          ...e,
          width: 750,
          sources: [
            { renditions: [{ width: 750 }], media: "(min-width: 480px)" },
            { renditions: [{ width: 350 }], media: "(max-width: 480px)" },
          ],
        });
    },
    50270: (e, s, r) => {
      r.d(s, { A: () => n });
      r(65043);
      var t = r(70579);
      const n = (e) => {
        let { className: s = "", inversed: r = !1 } = e;
        return (0, t.jsx)("figure", {
          className: "loader-wrapper "
            .concat(s, " ")
            .concat(r ? "inverse" : ""),
          children: (0, t.jsx)("div", { className: "loader-overlay" }),
        });
      };
    },
    57624: (e, s, r) => {
      r.d(s, { A: () => d });
      var t = r(13884),
        n = r(8761),
        i = r(87211),
        a = r(96277),
        l = r(969),
        c = r(83003);
      const o = (0, n.A)(
          (0, a.y3)((e) => {
            let { add: s, duration: r, level: t, message: n, nbToasts: i } = e;
            return s({
              id: Date.now() + i,
              duration: r || 5e3,
              level: t || "warning",
              message: n,
            });
          }),
          (0, a.EF)(i.A)
        )(() => null),
        d = (0, c.Ng)(
          (e) => ({ nbToasts: e.toastr.toasts.length }),
          (e) => ({ add: (0, t.A)(e, l.$U) })
        )(o);
    },
    34818: (e, s, r) => {
      r.r(s),
        r.d(s, {
          ARTICLE_RECEIVED: () => l,
          CLEAN: () => h,
          ERROR: () => u,
          FETCH_ARTICLE: () => a,
          HIDE_SHARE_ICONS: () => m,
          INITIAL_STATE: () => i,
          SCROLL_TO_COMMENT_BOX: () => c,
          SHOW_SHARE_ICONS: () => d,
          UPDATE_READING_PROGRESS: () => o,
          articleReceived: () => x,
          clean: () => N,
          default: () => w,
          error: () => b,
          fetchArticle: () => p,
          hideShareIcons: () => v,
          scrollToCommentBox: () => j,
          showShareIcons: () => A,
          updateReadingProgress: () => g,
        });
      var t = r(48500),
        n = r(42435);
      const i = {
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
        a = "article/FETCH_ARTICLE",
        l = "article/ARTICLE_RECEIVED",
        c = "article/SCROLL_TO_COMMENT_BOX",
        o = "article/UPDATE_READING_PROGRESS",
        d = "article/SHOW_SHARE_ICONS",
        m = "article/HIDE_SHARE_ICONS",
        h = "article/CLEAN",
        u = "article/ERROR",
        p = (e) => ({ type: a, slug: e }),
        x = (e, s) => ({ type: l, content: e, shouldRedirect: s }),
        j = (0, t.A)({ type: c }),
        g = (e) => ({ type: o, percentage: e }),
        A = (0, t.A)({ type: d }),
        v = (0, t.A)({ type: m }),
        N = (0, t.A)({ type: h }),
        b = (e) => ({ type: u, error: e }),
        w = (0, n.vy)(i, {
          [a]: (e) => ({ ...e, isFetching: !0, error: null }),
          [l]: (e, s) => {
            let { content: r, shouldRedirect: t } = s;
            return {
              ...e,
              isFetching: !1,
              content: r,
              redirected: t,
              error: null,
            };
          },
          [o]: (e, s) => {
            let { percentage: r } = s;
            return { ...e, readingProgress: r };
          },
          [d]: (e) => ({ ...e, showShareIcons: !0 }),
          [m]: (e) => ({ ...e, showShareIcons: !1 }),
          [u]: (e, s) => {
            let { error: r } = s;
            return { ...e, isFetching: !1, error: r };
          },
          [h]: (0, t.A)(i),
        });
    },
    56768: (e, s, r) => {
      r.r(s),
        r.d(s, {
          CLEAN: () => o,
          ERROR: () => c,
          FETCH: () => a,
          INITIAL_STATE: () => i,
          RECEIVED: () => l,
          clean: () => u,
          default: () => p,
          error: () => h,
          fetch: () => d,
          received: () => m,
        });
      var t = r(48500),
        n = r(42435);
      const i = { isFetching: !0, missingPersons: [], error: !1 },
        a = "missingPersons/FETCH",
        l = "missingPersons/RECEIVED",
        c = "missingPersons/ERROR",
        o = "missingPersons/CLEAN",
        d = (0, t.A)({ type: a }),
        m = (e) => ({
          type: l,
          missingPersons: null !== e && void 0 !== e ? e : [],
        }),
        h = (0, t.A)({ type: c }),
        u = (0, t.A)({ type: o }),
        p = (0, n.vy)(i, {
          [a]: (e) => ({ ...e, isFetching: !0, error: !1 }),
          [l]: (e, s) => {
            let { missingPersons: r } = s;
            return { ...e, isFetching: !1, error: !1, missingPersons: r };
          },
          [c]: (e) => ({ ...e, isFetching: !1, error: !0 }),
          [o]: (0, t.A)(i),
        });
    },
    83097: (e, s, r) => {
      r.d(s, { A: () => A });
      var t = r(20045),
        n = r(58116),
        i = r(33981),
        a = r(38312),
        l = r(37283),
        c = r(50727),
        o = r(88313),
        d = r(33373),
        m = r(20491),
        h = (r(65043), r(16951)),
        u = r(75061),
        p = r(70579);
      const x = (0, t.A)(
          n.A,
          i.A,
          (0, a.A)(/^(?:https?:\/\/)?(?:www\.)?facebook\.[a-z]{2,3}/i)
        ),
        j = (0, t.A)(
          n.A,
          i.A,
          (0, a.A)(/^(?:https?:\/\/)?(?:www\.)?(?:twitter|x)\.[a-z]{2,3}/i)
        ),
        g = (0, t.A)(
          (0, l.A)(i.A, (0, c.A)(1)),
          (0, a.A)(/^(?:https?:\/\/)?(?:www\.)?([^:/\s]+)/i)
        ),
        A = (e) => {
          let { link: s, variant: r } = e;
          return (0, p.jsx)(m.A, {
            href: s,
            variant: r,
            "aria-label": (0, o.A)([
              [x, () => "Facebook"],
              [j, () => "Twitter/X"],
              [d.A, (e) => g(e)],
            ])(s),
            children: (0, o.A)([
              [x, () => (0, p.jsx)(h.A, {})],
              [j, () => (0, p.jsx)(u.A, {})],
              [d.A, (e) => g(e)],
            ])(s),
          });
        };
    },
    22559: (e, s, r) => {
      r.d(s, { A: () => i });
      r(65043);
      const t = "SecondaryButton_button__sjHIi";
      var n = r(70579);
      const i = (e) => {
        let { children: s, onClick: r } = e;
        return (0, n.jsx)("button", {
          type: "button",
          className: t,
          onClick: (e) => {
            e.preventDefault(), e.stopPropagation(), r(e);
          },
          children: s,
        });
      };
    },
    82838: (e, s, r) => {
      r.d(s, { A: () => c });
      r(65043);
      var t = r(75806),
        n = r(98079),
        i = r(85556),
        a = r(70579);
      const l = function (e) {
          let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : i.QF;
          return (0, n.u)(e).toLocaleString((0, n.$s)(s), {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
        },
        c = (e) => {
          let { date: s, locale: r, itemProp: i } = e;
          return (0, a.jsx)("time", {
            dateTime: (0, n.EG)(s),
            itemProp: i,
            children: (0, a.jsx)(t.A, { children: l(s, r) }),
          });
        };
    },
    43677: (e, s, r) => {
      r.d(s, { A: () => c });
      var t = r(65043),
        n = r(65173),
        i = r.n(n),
        a = r(70579);
      const l = (e) => {
        let {
          level: s,
          color: r = "default",
          size: n = "medium",
          children: i,
        } = e;
        return t.createElement(
          "h".concat(s),
          {
            className: "widget-typography-heading size-"
              .concat(n, " color-")
              .concat(r),
          },
          i
        );
      };
      (l.Sub = (e) => {
        let { children: s } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("span", {
              className: "widget-typography-heading-separator",
              children: "/",
            }),
            (0, a.jsx)("span", {
              className: "widget-typography-heading-subtitle",
              children: s,
            }),
          ],
        });
      }).propTypes = {
        children: i().oneOfType([i().string, i().arrayOf(i().string)])
          .isRequired,
      };
      const c = l;
    },
    5995: (e, s, r) => {
      r.d(s, { A: () => t.A });
      var t = r(43677);
    },
    38312: (e, s, r) => {
      r.d(s, { A: () => t });
      const t = (0, r(7573).A)(function (e, s) {
        return s.match(e) || [];
      });
    },
    96637: (e, s, r) => {
      r.d(s, { A: () => a });
      var t = r(7573),
        n = r(22216),
        i = r(76173);
      const a = (0, t.A)(function (e, s) {
        for (var r = new n.A(), t = 0; t < e.length; t += 1) r.add(e[t]);
        return (0, i.A)(r.has.bind(r), s);
      });
    },
  },
]);
//# sourceMappingURL=231.4a67fbbe.chunk.js.map
