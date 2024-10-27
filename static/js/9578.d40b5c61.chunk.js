"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [9578, 4620],
  {
    43602: (e, t, i) => {
      i.d(t, { A: () => u });
      var s = i(33981),
        l = i(96637),
        r = i(20045),
        n = i(8761),
        a = (i(65043), i(96277)),
        o = i(83003),
        d = i(53975),
        c = i(70579);
      const m = (0, n.A)(
          (0, a.y3)((e) => {
            let { reducers: t, epics: i, loadResources: s } = e;
            return s(t, i);
          })
        )((e) => {
          let { children: t, areResourcesLoaded: i } = e;
          return i ? (0, c.jsx)(c.Fragment, { children: t }) : null;
        }),
        u = (0, o.Ng)(
          (e, t) => {
            let { reducers: i = [], epics: r = [] } = t;
            return {
              areResourcesLoaded:
                (0, s.A)((0, l.A)(e.lazyResources.reducers, i)) &&
                (0, s.A)((0, l.A)(e.lazyResources.epics, r)),
            };
          },
          (e) => ({ loadResources: (0, r.A)(e, d._H) })
        )(m);
    },
    19578: (e, t, i) => {
      i.r(t), i.d(t, { default: () => ae });
      var s = i(44620),
        l = i(96277),
        r = i(20045),
        n = i(25854),
        a = i(4036),
        o = i(61888),
        d = i(76426),
        c = i(65043),
        m = i(7489),
        u = i(70579);
      const h = (e) => {
        let {
          width: t = 16,
          height: i = 16,
          "aria-label": s,
          className: l = "",
        } = e;
        return (0, u.jsx)(m.A, {
          className: l,
          width: t,
          height: i,
          viewBox: "0 0 1024 1024",
          "aria-label": s,
          children: (0, u.jsx)("path", {
            d: "M128 320v640c0 35.2 28.8 64 64 64h576c35.2 0 64-28.8 64-64v-640h-704zM320 896h-64v-448h64v448zM448 896h-64v-448h64v448zM576 896h-64v-448h64v448zM704 896h-64v-448h64v448zM848 128h-208v-80c0-26.4-21.6-48-48-48h-224c-26.4 0-48 21.6-48 48v80h-208c-26.4 0-48 21.6-48 48v80h832v-80c0-26.4-21.6-48-48-48zM576 128h-192v-63.198h192v63.198z",
          }),
        });
      };
      var A = i(26745),
        p = i(29157),
        g = i(48434),
        k = i(28751),
        v = i(72860);
      const C = (0, p.A)(A.A);
      var x = i(83003);
      const N = (0, x.Ng)(
        (e) => ({
          locale: e.router.locale,
          commentToBeDeleted: e.comments.commentToBeDeleted,
          deleting: e.comments.deleting,
          user: e.session.user,
        }),
        (e) => ({
          confirmDelete: (0, r.A)(e, s.confirmDelete),
          cancelDelete: (0, r.A)(e, s.cancelDelete),
          deleteComment: (0, r.A)(e, s.deleteComment),
        })
      )((e) => {
        let {
          cancelDelete: t,
          confirmDelete: i,
          deleteComment: s,
          commentToBeDeleted: l,
          deleting: r,
          user: c,
          comment: m = null,
          threadId: A = null,
          locale: p,
        } = e;
        return ((e, t) =>
          null !== e &&
          !(0, n.A)(t) &&
          (0, a.A)((0, o.A)("id", t), (0, d.A)(["author", "id"], e)) &&
          !e.isDeleted)(m, c)
          ? (0, u.jsx)("div", {
              className: "deletion",
              children:
                l === m.id
                  ? (0, u.jsxs)("div", {
                      className: "confirm",
                      children: [
                        (0, u.jsx)("p", { children: C(p)("areYouSure") }),
                        (0, u.jsxs)("div", {
                          className: "confirm-buttons",
                          children: [
                            (0, u.jsx)(v.A, {
                              disabled: r,
                              onClick: () => i(m.id, A),
                              children: C(p)("yes"),
                            }),
                            (0, u.jsx)(k.A, {
                              onClick: t,
                              children: C(p)("no"),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, u.jsx)("div", {
                      className: "toggle-wrapper",
                      children: (0, u.jsx)(g.A, {
                        onClick: () => s(m.id),
                        "aria-label": C(p)("deleteComment"),
                        children: (0, u.jsx)(h, {}),
                      }),
                    }),
            })
          : null;
      });
      var j = i(1690);
      const E = (e) => (0, u.jsx)(j.A, { ...e, width: 36, height: 36 }),
        b = "CommentInput_wrapper__T7Dmh",
        I = "CommentInput_placeholder__WlkCf",
        f = "CommentInput_placeholder-text__NmmXn",
        M = "CommentInput_input-wrapper__4bjOF",
        D = "CommentInput_input__bPO6U",
        y = "CommentInput_submit-button__AD+w+",
        w = (e) => {
          let {
            width: t = 25,
            height: i = 25,
            "aria-label": s,
            className: l = "",
          } = e;
          return (0, u.jsx)(m.A, {
            className: l,
            width: t,
            height: i,
            viewBox: "0 0 24 26",
            "aria-label": s,
            children: (0, u.jsx)("path", {
              d: "M23,11.22,2.88.24A1.94,1.94,0,0,0,0,1.94v22a2,2,0,0,0,1,1.67,2,2,0,0,0,1.93,0L23,14.62a1.94,1.94,0,0,0,0-3.4ZM1.85,24V14.23h8.51a1,1,0,0,0,0-2H1.85V1.85l20.3,11.07Z",
            }),
          });
        };
      var L = i(95537),
        _ = i(33981);
      const S = (e) => {
        let {
          label: t,
          buttonLabel: i,
          value: s,
          onChange: l,
          disabled: r = !1,
        } = e;
        const n = (0, c.useRef)(null),
          [a, o] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            a && n && n.current && n.current.focus();
          }, [a]),
          (0, u.jsx)("div", {
            className: b,
            children: a
              ? (0, u.jsxs)("div", {
                  className: M,
                  children: [
                    (0, u.jsx)("input", {
                      ref: n,
                      className: D,
                      type: "text",
                      required: !0,
                      "aria-label": t,
                      onFocus: () => o(!0),
                      onBlur: () =>
                        o(!(0, _.A)(null !== s && void 0 !== s ? s : "")),
                      value: s,
                      onChange: (e) => l(e.target.value),
                    }),
                    (0, u.jsx)("button", {
                      className: y,
                      onClick: () => {},
                      disabled: r,
                      "aria-label": i,
                      children: (0, u.jsx)(w, {}),
                    }),
                  ],
                })
              : (0, u.jsxs)("button", {
                  className: I,
                  onClick: () => o(!0),
                  children: [
                    (0, u.jsx)(L.A, {}),
                    (0, u.jsx)("span", { className: f, children: t }),
                    (0, u.jsx)(w, {}),
                  ],
                }),
          })
        );
      };
      var T = i(25345);
      const O = (0, p.A)(A.A),
        R = (e) => {
          let {
            submit: t,
            signIn: i,
            isSignedIn: s,
            isSending: l,
            threadId: r = null,
            locale: n,
          } = e;
          const [a, o] = (0, c.useState)("");
          return (0, u.jsx)(T.A, {
            onSubmit: () => (s ? t(a, r, () => o("")) : i()),
            children: (0, u.jsx)(S, {
              label: O(n)("writeNewComment"),
              buttonLabel: O(n)("sendNewComment"),
              value: a,
              onChange: o,
              disabled: l,
            }),
          });
        };
      var F = i(34004);
      const z = (0, x.Ng)(
        (e) => ({
          locale: e.router.locale,
          isSending: e.comments.sending,
          isSignedIn: !(0, n.A)(e.session.user),
        }),
        (e) => ({
          signIn: (0, r.A)(e, F.mj),
          submit: (0, r.A)(e, s.sendComment),
        })
      )(R);
      var H = i(72956),
        B = i(76435);
      const V = (0, x.Ng)(null, (e) => ({
        fetchComments: (0, r.A)(e, s.fetchComments),
      }))((e) => {
        let { comment: t, fetchComments: i } = e;
        return (0, u.jsxs)("div", {
          "data-is": "thread",
          children: [
            t.thread.isOpen
              ? (0, u.jsxs)("div", {
                  className: "list",
                  children: [
                    t.thread.list.map((e) =>
                      (0, u.jsx)(
                        $,
                        { comment: e, threadId: t.id },
                        "comment_".concat(e.id)
                      )
                    ),
                    t.thread.loading ? (0, u.jsx)(B.A, {}) : null,
                    t.thread.list.length < t.thread.total && !t.thread.loading
                      ? (0, u.jsx)(H.A, { onClick: () => i(t.id) })
                      : null,
                  ],
                })
              : null,
            t.thread.isFormOpen
              ? (0, u.jsx)("div", {
                  className: "reply-form",
                  children: (0, u.jsx)(z, { threadId: t.id }),
                })
              : null,
          ],
        });
      });
      var K = i(85556),
        U = i(67002);
      const G = (e) => {
          let {
            width: t = 25,
            height: i = 25,
            "aria-label": s,
            className: l = "",
          } = e;
          return (0, u.jsx)(m.A, {
            className: l,
            width: t,
            height: i,
            viewBox: "0 0 21 25",
            "aria-label": s,
            children: (0, u.jsxs)("g", {
              transform: "translate(478.000000, 0.000000)",
              children: [
                (0, u.jsx)("path", {
                  d: "M-457.8,10.4c0.3-0.4,0.5-0.8,0.5-1.4c0-1.1-0.9-2.1-2.1-2.1h-4c0.4-1.2,0.6-2.8,0.6-3.5V2.8c0-1.5-1.2-2.8-2.8-2.8h-0.7c-0.3,0-0.6,0.2-0.7,0.5l-0.4,1.5c-0.5,2.1-2.2,4.4-3.9,4.8c-0.3-0.8-1.1-1.3-1.9-1.3h-4.1c-0.4,0-0.7,0.3-0.7,0.7v12.4c0,0.4,0.3,0.7,0.7,0.7h4.1c0.8,0,1.5-0.5,1.9-1.2l2.4,0.8c0.8,0.3,1.6,0.4,2.4,0.4h5.8c1.1,0,2.1-0.9,2.1-2.1c0-0.3-0.1-0.5-0.1-0.8c0.9-0.2,1.5-1,1.5-2c0-0.5-0.2-1-0.5-1.4c0.3-0.4,0.5-0.8,0.5-1.4C-457.3,11.2-457.5,10.8-457.8,10.4z M-472.5,17.3c0,0.4-0.3,0.7-0.7,0.7h-3.4v-11h3.4c0.4,0,0.7,0.3,0.7,0.7V17.3z M-460.8,11.1h1.4c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-1.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h1.4c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-1.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-5.8c-0.7,0-1.3-0.1-2-0.3l-2.6-0.9V8.3c1.1-0.2,2.1-0.9,3.1-2c0.9-1.1,1.7-2.5,2-3.9l0.2-1h0.2c0.8,0,1.4,0.6,1.4,1.4v0.7c0,0.9-0.3,2.7-0.7,3.5h-1.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h6.9c0.4,0,0.7,0.3,0.7,0.7s-0.3,0.7-0.7,0.7h-1.4c-0.4,0-0.7,0.3-0.7,0.7S-461.1,11.1-460.8,11.1z",
                }),
                (0, u.jsx)("circle", { cx: "-474.6", cy: "15.9", r: "1" }),
              ],
            }),
          });
        },
        P = (e) => {
          let {
            width: t = 25,
            height: i = 25,
            "aria-label": s,
            className: l = "",
          } = e;
          return (0, u.jsxs)(m.A, {
            className: l,
            width: t,
            height: i,
            viewBox: "0 0 21 25",
            "aria-label": s,
            children: [
              (0, u.jsx)("path", {
                d: "M20.8,11.9c0-0.8-0.6-1.5-1.4-1.5c0.8,0,1.4-0.7,1.4-1.5c0-0.8-0.7-2-1.8-2h-5.3c0.9-2.7,0.8-3,0.8-4.7c0-1.2-1-2.2-2.1-2.2H12c-0.3,0-0.6,0.2-0.7,0.6c-0.8,3.1-2.2,5.6-4.5,6.2V18l2.4,0.8c0.7,0.3,1.5,0.4,2.2,0.4H18c0.8,0,1.4-0.7,1.4-1.5c0-0.8-0.6-1.5-1.4-1.5h1.4c0.8,0,1.4-0.7,1.4-1.5s-0.6-1.5-1.4-1.5C20.2,13.4,20.8,12.7,20.8,11.9z",
              }),
              (0, u.jsx)("path", {
                d: "M3.5,5.5H0.7C0.3,5.5,0,5.8,0,6.2v12.4c0,0.4,0.3,0.7,0.7,0.7h2.8c1.1,0,2.1-0.9,2.1-2.1V7.6C5.5,6.4,4.6,5.5,3.5,5.5zM3.4,16.9c-0.6,0-1-0.4-1-1c0-0.5,0.4-1,1-1s1,0.4,1,1C4.4,16.5,4,16.9,3.4,16.9z",
              }),
            ],
          });
        },
        Y = (e) => {
          let {
            width: t = 25,
            height: i = 25,
            "aria-label": s,
            className: l = "",
          } = e;
          return (0, u.jsx)(m.A, {
            className: l,
            width: t,
            height: i,
            viewBox: "0 0 22 25",
            "aria-label": s,
            children: (0, u.jsx)("g", {
              transform: "translate(542.000000, 1.000000)",
              children: (0, u.jsxs)("g", {
                transform:
                  "translate(10.588235, 14.000000) scale(1, -1) translate(-10.588235, -14.000000) translate(0.000000, 4.000000)",
                children: [
                  (0, u.jsx)("path", {
                    d: "M-521.8,10.4c0.3-0.4,0.5-0.8,0.5-1.4c0-1.1-0.9-2.1-2.1-2.1h-4c0.4-1.2,0.6-2.8,0.6-3.5V2.8c0-1.5-1.2-2.8-2.8-2.8h-0.7c-0.3,0-0.6,0.2-0.7,0.5l-0.4,1.5c-0.5,2.1-2.2,4.4-3.9,4.8c-0.3-0.8-1.1-1.3-1.9-1.3h-4.1c-0.4,0-0.7,0.3-0.7,0.7v12.4c0,0.4,0.3,0.7,0.7,0.7h4.1c0.8,0,1.5-0.5,1.9-1.2l2.4,0.8c0.8,0.3,1.6,0.4,2.4,0.4h5.8c1.1,0,2.1-0.9,2.1-2.1c0-0.3-0.1-0.5-0.1-0.8c0.9-0.2,1.5-1,1.5-2c0-0.5-0.2-1-0.5-1.4c0.3-0.4,0.5-0.8,0.5-1.4C-521.3,11.2-521.5,10.8-521.8,10.4z M-536.5,17.3c0,0.4-0.3,0.7-0.7,0.7h-3.4v-11h3.4c0.4,0,0.7,0.3,0.7,0.7V17.3z M-524.8,11.1h1.4c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-1.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h1.4c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-1.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-5.8c-0.7,0-1.3-0.1-2-0.3l-2.6-0.9V8.3c1.1-0.2,2.1-0.9,3.1-2c0.9-1.1,1.7-2.5,2-3.9l0.2-1h0.2c0.8,0,1.4,0.6,1.4,1.4v0.7c0,0.9-0.3,2.7-0.7,3.5h-1.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h6.9c0.4,0,0.7,0.3,0.7,0.7s-0.3,0.7-0.7,0.7h-1.4c-0.4,0-0.7,0.3-0.7,0.7S-525.1,11.1-524.8,11.1z",
                  }),
                  (0, u.jsx)("circle", { cx: "-538.6", cy: "15.9", r: "1" }),
                ],
              }),
            }),
          });
        },
        W = (e) => {
          let {
            width: t = 25,
            height: i = 25,
            "aria-label": s,
            className: l = "",
          } = e;
          return (0, u.jsxs)(m.A, {
            className: l,
            width: t,
            height: i,
            viewBox: "0 0 22 25",
            "aria-label": s,
            children: [
              (0, u.jsx)("path", {
                d: "M20.78,13.14a1.45,1.45,0,0,1-1.4,1.48,1.44,1.44,0,0,1,1.4,1.47,2,2,0,0,1-1.82,2H13.65a11.32,11.32,0,0,1,.84,4.69A2.17,2.17,0,0,1,12.39,25H12a.72.72,0,0,1-.67-.56c-.84-3.1-2.25-5.59-4.51-6.2V7l2.42-.85a6.71,6.71,0,0,1,2.21-.38H18a1.43,1.43,0,0,1,1.39,1.48A1.43,1.43,0,0,1,18,8.71h1.39a1.48,1.48,0,0,1,0,2.95A1.45,1.45,0,0,1,20.78,13.14Z",
              }),
              (0, u.jsx)("path", {
                d: "M3.47,19.51H.69A.69.69,0,0,1,0,18.82V6.44a.68.68,0,0,1,.69-.68H3.47A2.07,2.07,0,0,1,5.55,7.82v9.63A2.08,2.08,0,0,1,3.47,19.51ZM3.41,8.12a1,1,0,1,0,1,1A1,1,0,0,0,3.41,8.12Z",
              }),
            ],
          });
        },
        Z = (e) => {
          let {
            width: t = 30,
            height: i = 20,
            "aria-label": s,
            className: l = "",
          } = e;
          return (0, u.jsx)(m.A, {
            className: l,
            width: t,
            height: i,
            viewBox: "0 0 32 32",
            "aria-label": s,
            children: (0, u.jsx)("path", {
              d: "M5.744 22.241h15.474l-5.747 5.747 1.767 1.767 8.763-8.763-8.763-8.763-1.767 1.767 5.747 5.747h-15.474c-5.098 0-9.245-4.147-9.245-9.245 0-2.397 1.212-4.435 2.229-5.722l0.775-0.98-1.96-1.549-0.775 0.98c-1.263 1.598-2.768 4.156-2.768 7.271 0 6.475 5.268 11.743 11.744 11.743z",
            }),
          });
        };
      var J = i(20955);
      const q = (0, p.A)(A.A),
        Q = (e, t) => !e.validated && t !== e.id,
        $ = (0, x.Ng)(
          (e) => ({
            commentToBeDeleted: e.comments.commentToBeDeleted,
            deleting: e.comments.deleting,
            locale: e.router.locale,
            user: e.session.user,
          }),
          (e) => ({
            likeComment: (0, r.A)(e, s.likeComment),
            dislikeComment: (0, r.A)(e, s.dislikeComment),
            unlikeComment: (0, r.A)(e, s.unlikeComment),
            undislikeComment: (0, r.A)(e, s.undislikeComment),
            toggleCommentThread: (0, r.A)(e, s.toggleCommentThread),
            toggleCommentFormThread: (0, r.A)(e, s.toggleCommentFormThread),
          })
        )((e) => {
          let {
            comment: t,
            commentToBeDeleted: i,
            locale: s = K.QF,
            likeComment: l,
            dislikeComment: r,
            unlikeComment: n,
            undislikeComment: a,
            toggleCommentThread: o,
            toggleCommentFormThread: d,
            threadId: c = null,
          } = e;
          return (0, u.jsxs)("div", {
            className: c ? "is-thread" : "",
            "data-is": "single-comment",
            children: [
              Q(t, i)
                ? (0, u.jsx)("div", {
                    className: "validation-overlay",
                    children: (0, u.jsx)("p", {
                      children: q(s)("beingModerated"),
                    }),
                  })
                : null,
              (0, u.jsx)("div", {
                className: "author",
                children: (0, u.jsxs)("div", {
                  className: "profile-picture",
                  children: [
                    t.author.image
                      ? (0, u.jsx)(E, {
                          lazy: !0,
                          src: t.author.image,
                          alt: t.author.name,
                        })
                      : (0, u.jsx)(U.A, {}),
                    (0, u.jsxs)("p", {
                      className: "by",
                      children: [
                        (0, u.jsx)("span", {
                          className: "name",
                          children: t.author.name
                            ? t.author.name
                            : "Anonymous_".concat(
                                ((m = t.authorHash), m.substring(0, 7))
                              ),
                        }),
                        (0, u.jsx)(J.A, { date: t.at, locale: s }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, u.jsx)("p", { className: "message", children: t.message }),
              (0, u.jsx)(N, { comment: t, threadId: c }),
              t.validated
                ? (0, u.jsxs)("div", {
                    className: "actions",
                    children: [
                      c
                        ? null
                        : (0, u.jsxs)("div", {
                            className: "reply-buttons",
                            children: [
                              (0, u.jsx)(g.A, {
                                onClick: () => d(t.id),
                                children: (0, u.jsxs)("div", {
                                  className: "reply ".concat(
                                    t.thread.isFormOpen ? "active" : ""
                                  ),
                                  children: [(0, u.jsx)(Z, {}), q(s)("reply")],
                                }),
                              }),
                              t.thread.total > 0
                                ? (0, u.jsx)(g.A, {
                                    onClick: () => o(t.id),
                                    children: (0, u.jsx)("div", {
                                      className: "replies ".concat(
                                        t.thread.isOpen
                                          ? "active hide-replies"
                                          : "show-replies"
                                      ),
                                      children: t.thread.isOpen
                                        ? q(s)("hideReplies")
                                        : q(s)("replies", {
                                            count: t.thread.total,
                                          }),
                                    }),
                                  })
                                : null,
                            ],
                          }),
                      (0, u.jsxs)("div", {
                        className: "likes",
                        children: [
                          t.liked
                            ? (0, u.jsx)(g.A, {
                                disabled: t.isFetchingLikeDislike,
                                onClick: () => n(t.id, c),
                                "aria-label": q(s)("unlike"),
                                children: (0, u.jsx)(P, {}),
                              })
                            : (0, u.jsx)(g.A, {
                                disabled: t.isFetchingLikeDislike,
                                onClick: () => l(t.id, c),
                                "aria-label": q(s)("like"),
                                children: (0, u.jsx)(G, {}),
                              }),
                          (0, u.jsx)("span", { children: t.likes }),
                        ],
                      }),
                      (0, u.jsxs)("div", {
                        className: "dislikes",
                        children: [
                          t.disliked
                            ? (0, u.jsx)(g.A, {
                                disabled: t.isFetchingLikeDislike,
                                onClick: () => a(t.id, c),
                                "aria-label": q(s)("undislike"),
                                children: (0, u.jsx)(W, {}),
                              })
                            : (0, u.jsx)(g.A, {
                                disabled: t.isFetchingLikeDislike,
                                onClick: () => r(t.id, c),
                                "aria-label": q(s)("dislike"),
                                children: (0, u.jsx)(Y, {}),
                              }),
                          (0, u.jsx)("span", { children: t.dislikes }),
                        ],
                      }),
                    ],
                  })
                : null,
              c ? null : (0, u.jsx)(V, { comment: t }),
            ],
          });
          var m;
        });
      var X = i(57624);
      const ee = "List_empty-comment__0etfp",
        te = (0, p.A)(A.A),
        ie = (e) => {
          let {
            comments: t = [],
            total: i = 0,
            loading: s = !1,
            error: l,
            fetchComments: r,
            locale: n,
          } = e;
          return (0, u.jsxs)(u.Fragment, {
            children: [
              l ? (0, u.jsx)(X.A, { message: te(n)("error") }) : null,
              0 === i
                ? (0, u.jsx)("p", {
                    className: ee,
                    children: te(n)("noComments"),
                  })
                : null,
              (0, u.jsx)(z, {}),
              i > 0
                ? t.map((e) =>
                    (0, u.jsx)($, { comment: e }, "comment_".concat(e.id))
                  )
                : null,
              s ? (0, u.jsx)(B.A, {}) : null,
              t.length < i && !s
                ? (0, u.jsx)(H.A, { onClick: () => r() })
                : null,
            ],
          });
        },
        se = (0, r.A)(
          (0, l.y3)((e) => {
            let { fetchComments: t } = e;
            return t();
          }, !0),
          (0, l.qm)((e) => {
            let { clean: t } = e;
            return t();
          })
        )(ie),
        le = (0, x.Ng)(
          (e) => ({
            comments: e.comments.list,
            total: e.comments.total,
            loading: e.comments.loading,
            locale: e.router.locale,
            error: e.comments.error,
          }),
          (e) => ({
            fetchComments: (0, r.A)(e, s.fetchComments),
            clean: (0, r.A)(e, s.clean),
          })
        )(se);
      var re = i(43602),
        ne = i(75806);
      const ae = (e) =>
        (0, u.jsx)(ne.A, {
          children: (0, u.jsx)(re.A, {
            reducers: ["comments"],
            epics: ["comment"],
            children: (0, u.jsx)(le, { ...e }),
          }),
        });
    },
    26745: (e, t, i) => {
      i.d(t, { A: () => s });
      const s = {
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
    72956: (e, t, i) => {
      i.d(t, { A: () => a });
      i(65043);
      var s = i(29157);
      var l = i(48434),
        r = i(70579);
      const n = (0, s.A)({
        english: { loadMore: "Load more" },
        french: { loadMore: "Lire plus" },
        arabic: {
          loadMore:
            "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f",
        },
        hebrew: { loadMore: "\u05d8\u05e2\u05df \u05e2\u05d5\u05d3" },
      });
      const a = (0, i(83003).Ng)((e) => ({ locale: e.router.locale }))((e) => {
        let { onClick: t, locale: i } = e;
        return (0, r.jsx)(l.A, {
          onClick: t,
          children: (0, r.jsx)("span", {
            className: "load-more",
            children: n(i)("loadMore"),
          }),
        });
      });
    },
    95537: (e, t, i) => {
      i.d(t, { A: () => r });
      i(65043);
      var s = i(7489),
        l = i(70579);
      const r = (e) => {
        let {
          width: t = 25,
          height: i = 25,
          "aria-label": r,
          className: n = "",
        } = e;
        return (0, l.jsx)(s.A, {
          className: n,
          width: t,
          height: i,
          viewBox: "0 0 18 16",
          "aria-label": r,
          children: (0, l.jsx)("path", {
            d: "M15,0.2c1.5,0,2.7,1.2,2.7,2.8c0,0,0,0,0,0v7.3c0,1.5-1.2,2.7-2.7,2.7H6.6l-3.1,2.7V13H3c-1.5,0-2.7-1.2-2.7-2.7V3c0-1.5,1.2-2.8,2.7-2.8c0,0,0,0,0,0H15z M9,5.7c-0.6,0-1.2,0.5-1.2,1.1C7.8,7.5,8.3,8,8.9,8c0.6,0,1.2-0.5,1.2-1.1c0,0,0,0,0,0C10.1,6.2,9.6,5.7,9,5.7z M13.5,5.7c-0.6,0-1.2,0.5-1.2,1.1c0,0.6,0.5,1.2,1.1,1.2c0.6,0,1.2-0.5,1.2-1.1c0,0,0,0,0,0C14.6,6.2,14.1,5.7,13.5,5.7z M4.5,5.7c-0.6,0-1.2,0.5-1.2,1.1C3.3,7.5,3.8,8,4.4,8c0.6,0,1.2-0.5,1.2-1.1c0,0,0,0,0,0C5.6,6.2,5.1,5.7,4.5,5.7z",
          }),
        });
      };
    },
    1690: (e, t, i) => {
      i.d(t, { A: () => te });
      var s = i(65043),
        l = i(8761),
        r = i(95518),
        n = i(83645),
        a = i(25854),
        o = i(88313),
        d = i(37068),
        c = i(61888),
        m = i(33373),
        u = i(48500),
        h = i(12224),
        A = i(94856),
        p = i(96188),
        g = i(36169),
        k = i(1393),
        v = i(82635),
        C = i(83317),
        x = i(33981),
        N = i(99185),
        j = i(4258),
        E = i(80367),
        b = i(96277),
        I = i(20045),
        f = i(83003),
        M = i(79495);
      const D = (0, I.A)(
          (0, b.y3)((e) => {
            let {
              injectImagePreloadHints: t,
              preload: i = !1,
              src: s,
              sources: l,
            } = e;
            return i && t(s, l);
          })
        )(() => null),
        y = (0, f.Ng)(null, (e) => ({
          injectImagePreloadHints: (0, I.A)(e, M.yc),
        }))(D);
      var w = i(70579);
      const L = (0, o.A)([
          [(0, d.A)(String, "descriptor"), (0, c.A)("descriptor")],
          [m.A, (0, u.A)(null)],
        ]),
        _ = (e, t) =>
          (0, l.A)(
            (0, h.A)(["width", "height"]),
            (0, n.A)(
              () => "image/webp" === t,
              (e) => ({ type: "webp", ...e })
            ),
            (t) => (0, E.f_)(t)(e)
          ),
        S = (e, t) =>
          (0, l.A)(
            (0, v.A)(
              ((e, t) =>
                (0, l.A)(
                  (0, A.A)([_(e, t), L]),
                  (0, p.A)((0, g.A)(a.A)),
                  (0, k.A)(" ")
                ))(e, t)
            ),
            (0, k.A)(", ")
          ),
        T = (e) =>
          (0, C.A)(
            (0, l.A)(
              (0, n.A)(x.A, (0, N.A)({})),
              (0, v.A)((0, j.A)("type", "image/webp"))
            )(e),
            e
          ),
        O = (0, s.forwardRef)((e, t) => {
          let {
            alt: i,
            dispatch: s,
            injectImagePreloadHints: r,
            preload: n,
            src: a,
            sources: o = [],
            ...d
          } = e;
          const c = ((e) =>
            (0, l.A)(
              T,
              (0, v.A)((t) => ({
                ...t,
                srcSet: t.renditions
                  ? S(e, t.type)(t.renditions)
                  : _(e, t.type)({}),
              }))
            ))(a)(o);
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(y, { preload: n, src: a, sources: c }),
              (0, w.jsxs)("picture", {
                children: [
                  c.map((e, t) =>
                    (0, w.jsx)(
                      "source",
                      {
                        type: e.type,
                        media: e.media,
                        sizes: e.sizes,
                        srcSet: e.srcSet,
                      },
                      t
                    )
                  ),
                  (0, w.jsx)("img", { alt: i, src: a, ...d, ref: t }),
                ],
              }),
            ],
          });
        });
      var R = i(28563);
      const F = (e) => {
        let {
          alt: t = "",
          className: i = "",
          fallbackSrc: o,
          onLoad: d,
          onError: c,
          src: m,
          ...u
        } = e;
        const h = (0, R.A)(),
          A = (0, s.useRef)(null),
          [p, g] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            A &&
              A.current &&
              A.current.src &&
              A.current.complete &&
              0 === A.current.naturalHeight &&
              g(!0);
          }, []),
          h && p
            ? (0, w.jsx)(O, { alt: t, className: i, src: o, ...u })
            : (0, w.jsx)(O, {
                alt: t,
                className: i,
                onLoad: d,
                onError: (0, l.A)(
                  (0, r.A)(() => g(!0)),
                  (0, n.A)(() => !(0, a.A)(c), c)
                ),
                src: m,
                ...u,
                ref: A,
              })
        );
      };
      var z = i(76426),
        H = i(71517),
        B = i(77701),
        V = i(35846),
        K = i(8135),
        U = i(27266);
      const G = (0, B.A)(!1, "isIntersecting"),
        P = (0, B.A)(!0, "isIntersecting"),
        Y = (0, B.A)(!1, "isLoaded"),
        W = (0, B.A)(!1, "isLoadedWithErrors"),
        Z = (0, V.A)([Y, W]),
        J = (e, t) =>
          (0, K.A)(Z, (0, u.A)("".concat(t, " visible")), (0, u.A)(t))(e),
        q = (e, t) => (0, K.A)(G, (0, u.A)(t), (0, u.A)(void 0))(e),
        Q = (e, t) => (0, K.A)(P, (0, u.A)(t), (0, u.A)(void 0))(e),
        $ = (0, I.A)(
          (0, b.y3)((e) => {
            let { observe: t, observedItemId: i } = e;
            return t(U.lg, i);
          }, !0)
        )((e) => {
          let {
            className: t = "",
            dispatch: i,
            observe: s,
            observedItem: l = {},
            observedItemId: r,
            onError: n,
            onLoad: a,
            sources: o,
            src: d,
            fallbackSrc: c,
            ...m
          } = e;
          return (0, w.jsx)("div", {
            className: "lazyImageContainer",
            children: (0, w.jsx)(F, {
              "data-is": "lazy-image",
              "data-observed-item-id": r,
              className: J(l, t),
              src: q(l, d),
              sources: Q(l, o),
              fallbackSrc: c,
              onError: () => n(U.lg, r),
              onLoad: () => a(U.lg, r),
              ...m,
            }),
          });
        }),
        X = (0, f.Ng)(
          (e, t) => {
            let { src: i } = t;
            return {
              observedItemId: i,
              observedItem: (0, z.A)(
                ["intersectionObserver", "observedItems", U.lg, i],
                e
              ),
            };
          },
          (e) => ({
            onLoad: (0, I.A)(e, H.Kc),
            onError: (0, I.A)(e, H.Hj),
            observe: (0, I.A)(e, H.lB),
          })
        )($);
      var ee = i(52304);
      const te = (e) => {
        let {
          src: t,
          width: i,
          height: s,
          alt: l = "",
          className: r = "",
          lazy: n = !1,
          fallbackSrc: a = ee.bc,
          ...o
        } = e;
        return n
          ? (0, w.jsx)(X, {
              src: (0, E.f_)({ width: i, height: s })(t),
              fallbackSrc: a,
              alt: l,
              className: r,
              ...o,
            })
          : (0, w.jsx)(F, {
              src: (0, E.f_)({ width: i, height: s })(t),
              fallbackSrc: a,
              alt: l,
              className: r,
              ...o,
            });
      };
    },
    57624: (e, t, i) => {
      i.d(t, { A: () => c });
      var s = i(13884),
        l = i(8761),
        r = i(87211),
        n = i(96277),
        a = i(969),
        o = i(83003);
      const d = (0, l.A)(
          (0, n.y3)((e) => {
            let { add: t, duration: i, level: s, message: l, nbToasts: r } = e;
            return t({
              id: Date.now() + r,
              duration: i || 5e3,
              level: s || "warning",
              message: l,
            });
          }),
          (0, n.EF)(r.A)
        )(() => null),
        c = (0, o.Ng)(
          (e) => ({ nbToasts: e.toastr.toasts.length }),
          (e) => ({ add: (0, s.A)(e, a.$U) })
        )(d);
    },
    44620: (e, t, i) => {
      i.r(t),
        i.d(t, {
          CANCEL_DELETE: () => G,
          CLEAN: () => q,
          COMMENT_DELETED: () => P,
          CONFIRM_DELETE: () => U,
          DELETE_COMMENT: () => K,
          DISLIKE_COMMENT: () => W,
          ERROR: () => H,
          FETCH_COMMENTS: () => S,
          INITIAL_STATE: () => _,
          LIKE_COMMENT: () => Y,
          LIKE_DISLIKE_ERROR: () => B,
          LIKE_DISLIKE_SUCCESS: () => V,
          RECEIVED_COMMENTS: () => T,
          RECEIVE_NEW_COMMENT: () => R,
          SEND_COMMENT: () => O,
          TOGGLE_COMMENT_FORM_THREAD: () => z,
          TOGGLE_COMMENT_THREAD: () => F,
          UNDISLIKE_COMMENT: () => J,
          UNLIKE_COMMENT: () => Z,
          cancelDelete: () => oe,
          clean: () => Ae,
          commentDeleted: () => de,
          confirmDelete: () => ae,
          default: () => xe,
          deleteComment: () => ne,
          dislikeComment: () => me,
          error: () => te,
          fetchComments: () => Q,
          likeComment: () => ce,
          likeDislikeError: () => ie,
          likeDislikeSuccess: () => se,
          receiveNewComment: () => ee,
          receivedComments: () => $,
          sendComment: () => X,
          toggleCommentFormThread: () => re,
          toggleCommentThread: () => le,
          undislikeComment: () => he,
          unlikeComment: () => ue,
        });
      var s = i(48500),
        l = i(91199),
        r = i(8761),
        n = i(56802),
        a = i(29874),
        o = i(83645),
        d = i(61888),
        c = i(24314),
        m = i(4258),
        u = i(52527),
        h = i(8135),
        A = i(25854),
        p = i(82130),
        g = i(83317),
        k = i(82635),
        v = i(63918),
        C = i(7573);
      const x = (0, C.A)(function (e, t) {
        return (0, v.A)([e], t);
      });
      var N = i(24260),
        j = i(17070);
      function E(e, t) {
        return (0, j.A)(e < t.length ? t.length - e : 0, t);
      }
      var b = i(113),
        I = (function () {
          function e(e, t) {
            if (e <= 0) return t;
            (this.xf = t),
              (this.pos = 0),
              (this.full = !1),
              (this.acc = new Array(e));
          }
          return (
            (e.prototype["@@transducer/init"] = b.A.init),
            (e.prototype["@@transducer/result"] = function (e) {
              return (this.acc = null), this.xf["@@transducer/result"](e);
            }),
            (e.prototype["@@transducer/step"] = function (e, t) {
              return (
                this.full &&
                  (e = this.xf["@@transducer/step"](e, this.acc[this.pos])),
                this.store(t),
                e
              );
            }),
            (e.prototype.store = function (e) {
              (this.acc[this.pos] = e),
                (this.pos += 1),
                this.pos === this.acc.length &&
                  ((this.pos = 0), (this.full = !0));
            }),
            e
          );
        })();
      function f(e) {
        return function (t) {
          return new I(e, t);
        };
      }
      const M = (0, C.A)((0, N.A)([], f, E));
      var D = i(75377),
        y = i(57594),
        w = i(98079),
        L = i(42435);
      const _ = {
          total: 0,
          list: [],
          loading: !1,
          deleting: !1,
          page: 0,
          sending: !1,
          error: !1,
          commentToBeDeleted: null,
        },
        S = "article/comments/FETCH",
        T = "article/comments/RECEIVED",
        O = "article/comments/SEND_COMMENT",
        R = "article/comments/RECEIVED_NEW",
        F = "article/comments/TOGGLE_THREAD",
        z = "article/comments/TOGGLE_FORM_THREAD",
        H = "article/comments/ERROR",
        B = "article/comments/LIKE_DISLIKE_ERROR",
        V = "article/comments/LIKE_DISLIKE_SUCCESS",
        K = "article/comments/DELETE_COMMENT",
        U = "article/comments/CONFIRM_DELETE",
        G = "article/comments/CANCEL_DELETE",
        P = "article/comments/COMMENT_DELETED",
        Y = "article/comments/LIKE_COMMENT",
        W = "article/comments/DISLIKE_COMMENT",
        Z = "article/comments/UNLIKE_COMMENT",
        J = "article/comments/UNDISLIKE_COMMENT",
        q = "article/comments/CLEAN",
        Q = function () {
          return {
            type: S,
            threadId:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
          };
        },
        $ = function (e, t) {
          return {
            type: T,
            list: e,
            total: t,
            threadId:
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
          };
        },
        X = function (e) {
          return {
            type: O,
            message: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            onSuccess: arguments.length > 2 ? arguments[2] : void 0,
          };
        },
        ee = function (e) {
          return {
            type: R,
            newComment: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        te = (e) => ({ type: H, error: e }),
        ie = function (e, t) {
          return {
            type: B,
            id: e,
            error: t,
            threadId:
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
          };
        },
        se = function (e) {
          return {
            type: V,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        le = (e) => ({ type: F, commentId: e }),
        re = (e) => ({ type: z, commentId: e }),
        ne = (e) => ({ type: K, id: e }),
        ae = function (e) {
          return {
            type: U,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        oe = (0, s.A)({ type: G }),
        de = function (e) {
          return {
            type: P,
            deletedComment: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        ce = function (e) {
          return {
            type: Y,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        me = function (e) {
          return {
            type: W,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        ue = function (e) {
          return {
            type: Z,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        he = function (e) {
          return {
            type: J,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        Ae = (0, s.A)({ type: q }),
        pe = (e) => ({
          id: e.id,
          isFetchingLikeDislike: !1,
          message: e.message,
          at: (0, w.u)(e.createdAt),
          author: {
            image: (0, l.A)(null, ["user", "image", "href"], e),
            id: (0, l.A)(null, ["user", "id"], e),
            name: e.user ? e.user.name : null,
          },
          authorHash: e.authorHash,
          validated: e.status === y.UN,
          likes: e.likes,
          dislikes: e.dislikes,
          liked: e.liked,
          disliked: e.disliked,
          previousLikes: null,
          previousLikedStatus: null,
          previousDislikes: null,
          previousDislikedStatus: null,
          isDeleted: e.isDeleted,
          thread: {
            list: [],
            isOpen: !1,
            isFormOpen: !1,
            loading: !1,
            sending: !1,
            page: 0,
            total: Number(e.totalReplies),
          },
        }),
        ge = (e, t) => (i) =>
          (0, r.A)((0, n.A)((0, a.A)(e, "id")), (e) =>
            (0, o.A)(
              () => e >= 0,
              (i) => t(e, i)
            )(i)
          )(i),
        ke = (e, t, i) =>
          (0, r.A)(
            (0, d.A)("list"),
            ge(i, (e, i) => (0, c.A)(e, t, i)),
            (0, m.A)("list", u.A, e)
          )(e),
        ve = function (e, t, i) {
          let s =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return (0, h.A)(
            A.A,
            () => ke(e, t, i),
            () =>
              ((e, t, i, s) =>
                (0, r.A)(
                  (0, d.A)("list"),
                  ge(s, (e, s) =>
                    (0, c.A)(
                      e,
                      (e) => ({ ...e, thread: ke(e.thread, t, i) }),
                      s
                    )
                  ),
                  (0, m.A)("list", u.A, e)
                )(e))(e, t, i, s)
          )(s);
        },
        Ce = (e, t) => t < e,
        xe = (0, L.vy)(_, {
          [S]: (e, t) => {
            let { threadId: i } = t;
            return {
              ...e,
              ...(0, h.A)(
                A.A,
                () => ({ ...e, loading: !0, page: (0, p.A)(e.page, 1) }),
                () =>
                  ve(
                    e,
                    (e) => ({
                      ...e,
                      thread: {
                        ...e.thread,
                        loading: !0,
                        page: (0, p.A)(e.thread.page, 1),
                      },
                    }),
                    i
                  )
              )(i),
              error: !1,
            };
          },
          [T]: (e, t) => {
            let { list: i, total: s, threadId: l } = t;
            return {
              ...e,
              ...(0, h.A)(
                A.A,
                () => ({
                  ...e,
                  list: (0, g.A)(e.list, (0, k.A)(pe)(i)),
                  total: s,
                  loading: !1,
                }),
                () =>
                  ve(
                    e,
                    (e) => ({
                      ...e,
                      thread: {
                        ...e.thread,
                        list: (0, g.A)(e.thread.list, (0, k.A)(pe)(i)),
                        isOpen: 0 === e.thread.list.length || e.thread.isOpen,
                        loading: !1,
                        total: s,
                      },
                    }),
                    l
                  )
              )(l),
              error: !1,
            };
          },
          [O]: (e, t) => {
            let { threadId: i } = t;
            return {
              ...e,
              ...(0, h.A)(
                A.A,
                () => ({ ...e, sending: !0 }),
                () =>
                  ve(
                    e,
                    (e) => ({ ...e, thread: { ...e.thread, sending: !0 } }),
                    i
                  )
              )(i),
              error: !1,
            };
          },
          [R]: (e, t) => {
            let { newComment: i, threadId: s } = t;
            return (0, h.A)(
              A.A,
              () => ({
                ...e,
                total: (0, p.A)(e.total, 1),
                sending: !1,
                list: (0, r.A)(
                  x(pe(i)),
                  (0, o.A)(() => Ce(e.total, e.list.length), M(1))
                )(e.list),
              }),
              () =>
                ve(
                  e,
                  (e) => ({
                    ...e,
                    thread: {
                      ...e.thread,
                      list: (0, r.A)(
                        (0, o.A)(() => {
                          return (
                            (t = e.thread.total),
                            !(0 === e.thread.list.length && t > 0)
                          );
                          var t;
                        }, x(pe(i))),
                        (0, o.A)(
                          () => Ce(e.thread.total, e.thread.list.length),
                          M(1)
                        )
                      )(e.thread.list),
                      isOpen: 0 === e.thread.total || e.thread.isOpen,
                      sending: !1,
                      total: (0, p.A)(e.thread.total, 1),
                    },
                  }),
                  s
                )
            )(s);
          },
          [H]: (e) => ({
            ...e,
            error: !0,
            sending: !1,
            loading: !1,
            deleting: !1,
          }),
          [F]: (e, t) => {
            let { commentId: i } = t;
            return ve(
              e,
              (e) => ({
                ...e,
                thread: {
                  ...e.thread,
                  isOpen: !e.thread.isOpen,
                  list: (0, k.A)((e) => ({ ...e }))(e.thread.list),
                },
              }),
              i
            );
          },
          [z]: (e, t) => {
            let { commentId: i } = t;
            return ve(
              e,
              (e) => ({
                ...e,
                thread: { ...e.thread, isFormOpen: !e.thread.isFormOpen },
              }),
              i
            );
          },
          [K]: (e, t) => {
            let { id: i } = t;
            return { ...e, commentToBeDeleted: i };
          },
          [G]: (e) => ({ ...e, commentToBeDeleted: null }),
          [U]: (e) => ({ ...e, error: !1, deleting: !0 }),
          [P]: (e, t) => {
            let { deletedComment: i, threadId: s } = t;
            return {
              ...e,
              ...(0, h.A)(
                A.A,
                () =>
                  i.status !== y.UN
                    ? { page: 0, loading: !0, list: [] }
                    : {
                        list: ge(i.id, (e, t) => (0, c.A)(e, () => pe(i), t))(
                          e.list
                        ),
                      },
                () =>
                  ve(
                    e,
                    (e) => ({
                      ...e,
                      thread:
                        i.status !== y.UN
                          ? { ...e.thread, page: 0, loading: !0, list: [] }
                          : {
                              ...e.thread,
                              list: ge(i.id, (e, t) =>
                                (0, c.A)(e, () => pe(i), t)
                              )(e.thread.list),
                            },
                    }),
                    s
                  )
              )(s),
              commentToBeDeleted: null,
              deleting: !1,
              error: !1,
            };
          },
          [Y]: (e, t) => {
            let { id: i, threadId: s } = t;
            return {
              ...ve(
                e,
                (e) => ({
                  ...e,
                  isFetchingLikeDislike: !0,
                  previousLikes: e.likes,
                  previousDislikes: e.dislikes,
                  previousDislikedStatus: e.disliked,
                  previousLikedStatus: e.liked,
                  likes: (0, p.A)(e.likes, 1),
                  liked: !0,
                  dislikes: e.disliked ? (0, D.A)(e.dislikes, 1) : e.dislikes,
                  disliked: !1,
                }),
                i,
                s
              ),
              error: !1,
            };
          },
          [W]: (e, t) => {
            let { id: i, threadId: s } = t;
            return {
              ...ve(
                e,
                (e) => ({
                  ...e,
                  isFetchingLikeDislike: !0,
                  previousLikes: e.likes,
                  previousDislikes: e.dislikes,
                  previousDislikedStatus: e.disliked,
                  previousLikedStatus: e.liked,
                  likes: e.liked ? (0, D.A)(e.likes, 1) : e.likes,
                  liked: !1,
                  dislikes: (0, p.A)(e.dislikes, 1),
                  disliked: !0,
                }),
                i,
                s
              ),
              error: !1,
            };
          },
          [Z]: (e, t) => {
            let { id: i, threadId: s } = t;
            return {
              ...ve(
                e,
                (e) => ({
                  ...e,
                  isFetchingLikeDislike: !0,
                  previousLikes: e.likes,
                  previousDislikes: e.dislikes,
                  previousDislikedStatus: e.disliked,
                  previousLikedStatus: e.liked,
                  likes: (0, D.A)(e.likes, 1),
                  liked: !1,
                }),
                i,
                s
              ),
              error: !1,
            };
          },
          [J]: (e, t) => {
            let { id: i, threadId: s } = t;
            return {
              ...ve(
                e,
                (e) => ({
                  ...e,
                  isFetchingLikeDislike: !0,
                  previousLikes: e.likes,
                  previousDislikes: e.dislikes,
                  previousDislikedStatus: e.disliked,
                  previousLikedStatus: e.liked,
                  dislikes: (0, D.A)(e.dislikes, 1),
                  disliked: !1,
                }),
                i,
                s
              ),
              error: !1,
            };
          },
          [B]: (e, t) => {
            let { id: i, threadId: s } = t;
            return {
              ...ve(
                e,
                (e) => ({
                  ...e,
                  isFetchingLikeDislike: !1,
                  likes: e.previousLikes,
                  liked: e.previousLikedStatus,
                  dislikes: e.previousDislikes,
                  disliked: e.previousDislikedStatus,
                  previousLikes: null,
                  previousLikedStatus: null,
                  previousDislikes: null,
                  previousDislikedStatus: null,
                }),
                i,
                s
              ),
              error: !0,
            };
          },
          [V]: (e, t) => {
            let { id: i, threadId: s } = t;
            return {
              ...ve(
                e,
                (e) => ({
                  ...e,
                  isFetchingLikeDislike: !1,
                  previousLikes: null,
                  previousLikedStatus: null,
                  previousDislikes: null,
                  previousDislikedStatus: null,
                }),
                i,
                s
              ),
              error: !1,
            };
          },
          [q]: (0, s.A)(_),
        });
    },
    72860: (e, t, i) => {
      i.d(t, { A: () => r });
      i(65043);
      const s = "PrimaryButton_button__w+7Q0";
      var l = i(70579);
      const r = (e) => {
        let { children: t, onClick: i } = e;
        return (0, l.jsx)("button", {
          type: "button",
          className: s,
          onClick: (e) => {
            e.preventDefault(), e.stopPropagation(), i(e);
          },
          children: t,
        });
      };
    },
    20955: (e, t, i) => {
      i.d(t, { A: () => g });
      i(65043);
      var s = i(98079),
        l = i(8761),
        r = i(88313),
        n = i(33373),
        a = i(29157);
      var o = i(85556),
        d = i(75806),
        c = i(70579);
      const m = 6e4,
        u = 36e5,
        h = (e, t) => e - t,
        A = (0, a.A)({
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
        p = (e, t, i, a) =>
          (0, l.A)(
            h,
            (0, r.A)([
              [
                (e) => 0 === Math.round(e / 1e3) || Math.round(e / m) < 1,
                () => A(i)("now"),
              ],
              [(e) => e < u && 1 === Math.round(e / m), (e) => A(i)("minute")],
              [
                (e) => e < u,
                (e) => A(i)("minutes", { minutes: Math.round(e / m) }),
              ],
              [
                (e) => Math.round(e / u) <= 12 && 1 === Math.round(e / u),
                (e) => A(i)("hour"),
              ],
              [
                (e) => Math.round(e / u) <= 12,
                (e) => A(i)("hours", { hours: Math.round(e / u) }),
              ],
              [
                n.A,
                () =>
                  (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : o.QF,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : "default";
                    return (0, s.u)(e).toLocaleDateString(
                      (0, s.$s)(t),
                      "full" === i
                        ? {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          }
                        : { day: "2-digit", month: "short", year: "numeric" }
                    );
                  })(t, i, a),
              ],
            ])
          )(e, t),
        g = (e) => {
          let { date: t, locale: i, itemProp: l, variant: r } = e;
          return (0, c.jsx)("time", {
            dateTime: (0, s.EG)(t),
            itemProp: l,
            children: (0, c.jsx)(d.A, {
              children: p(Date.now(), (0, s.u)(t).getTime(), i, r),
            }),
          });
        };
    },
    58089: (e, t, i) => {
      i.d(t, { A: () => s });
      const s = (0, i(7573).A)(function (e, t) {
        return (
          t instanceof e ||
          (null != t &&
            (t.constructor === e ||
              ("Object" === e.name && "object" === typeof t)))
        );
      });
    },
    37068: (e, t, i) => {
      i.d(t, { A: () => n });
      var s = i(89334),
        l = i(61888),
        r = i(58089);
      const n = (0, s.A)(function (e, t, i) {
        return (0, r.A)(e, (0, l.A)(t, i));
      });
    },
    75377: (e, t, i) => {
      i.d(t, { A: () => s });
      const s = (0, i(7573).A)(function (e, t) {
        return Number(e) - Number(t);
      });
    },
    96637: (e, t, i) => {
      i.d(t, { A: () => n });
      var s = i(7573),
        l = i(22216),
        r = i(76173);
      const n = (0, s.A)(function (e, t) {
        for (var i = new l.A(), s = 0; s < e.length; s += 1) i.add(e[s]);
        return (0, r.A)(i.has.bind(i), t);
      });
    },
  },
]);
//# sourceMappingURL=9578.d40b5c61.chunk.js.map
