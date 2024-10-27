"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [7236, 4620],
  {
    37236: (e, t, i) => {
      i.r(t),
        i.d(t, {
          default: () => P,
          deleteCommentEpic: () => b,
          fetchCommentsEpic: () => F,
          fetchCommentsWhenCommentDeletedEpic: () => U,
          fetchThreadCommentsIfEmptyWhenToggleThreadEpic: () => H,
          likeDislikeCommentEpic: () => G,
          sendCommentEpic: () => w,
        });
      var r = i(44620),
        l = i(8135),
        n = i(25854),
        s = i(20045),
        d = i(91199),
        o = i(95605),
        a = i(29874),
        c = i(1393),
        u = i(77701),
        m = i(65325),
        E = i(88313),
        h = i(4036),
        p = i(52527),
        k = i(33373),
        A = i(8761),
        g = i(84003),
        C = i(36169),
        I = i(2492),
        T = i(33981),
        D = i(76426),
        L = i(36140),
        M = i(43472),
        v = i(25722),
        N = i(64631),
        O = i(51198),
        _ = i(43879),
        f = i(58468),
        S = i(57594),
        y = i(86490),
        R = i(18558);
      const K = (e, t) =>
          (0, l.A)(
            n.A,
            () => e.page,
            () =>
              (0, s.A)(
                (0, d.A)(1, ["thread", "page"]),
                (0, o.A)((0, a.A)(t, "id"))
              )(e.list)
          )(t),
        F = (e, t, i) => {
          let { fetchApi: l, logger: n } = i;
          return e.pipe(
            (0, L.g)(r.FETCH_COMMENTS),
            (0, v.E)(t),
            (0, N.p)((e) => {
              let [t, i] = e;
              return i.article.content.id;
            }),
            (0, O.Z)((e) => {
              let [{ threadId: t }, i] = e;
              return Promise.all([
                l(
                  (0, c.A)("", [
                    "/v2/".concat(i.router.locale, "/comments"),
                    "?page=".concat(K(i.comments, t)),
                    "&contentId=".concat(i.article.content.id),
                    "&limit=3",
                    "&sort=-createdAt",
                    "&countable=1",
                    t ? "&threadId=".concat(t) : "",
                  ])
                ),
                t,
              ]);
            }),
            (0, _.T)((e) => {
              let [t, i] = e;
              return {
                comments: (0, u.A)([], "body")(t),
                total: (0, m.A)(0, t.headers.get("Total-Result")),
                threadId: i,
              };
            }),
            (0, _.T)((e) => {
              let { comments: t, total: i, threadId: l } = e;
              return (0, r.receivedComments)(t, i, l);
            }),
            (0, y.d$)("comment :: fetchCommentsEpic", r.error, n)
          );
        },
        U = (e, t, i) => {
          let { logger: l } = i;
          return e.pipe(
            (0, L.g)(r.COMMENT_DELETED),
            (0, N.p)((e) => {
              let { deletedComment: t } = e;
              return t.status !== S.UN;
            }),
            (0, _.T)((e) => {
              let { threadId: t } = e;
              return (0, r.fetchComments)(t);
            }),
            (0, y.qn)("comment :: fetchCommentsWhenCommentDeletedEpic", l)
          );
        },
        w = (e, t, i) => {
          let { fetchApi: l, logger: n } = i;
          return e.pipe(
            (0, L.g)(r.SEND_COMMENT),
            (0, v.E)(t),
            (0, O.Z)((e) => {
              let [{ message: t, threadId: i, onSuccess: r }, n] = e;
              return Promise.all([
                l("/v2/".concat(n.router.locale, "/comments"), {
                  method: "POST",
                  body: (0, R.sX)({
                    message: t,
                    content: n.article.content.id,
                    thread: i,
                  }),
                }),
                i,
                r,
              ]);
            }),
            (0, f.M)((e) => {
              let [t, i, r] = e;
              return r();
            }),
            (0, _.T)((e) => {
              let [t, i] = e;
              return (0, r.receiveNewComment)(t.body, i);
            }),
            (0, y.d$)("comment :: sendCommentEpic", r.error, n)
          );
        },
        b = (e, t, i) => {
          let { fetchApi: l, logger: n } = i;
          return e.pipe(
            (0, L.g)(r.CONFIRM_DELETE),
            (0, v.E)(t),
            (0, O.Z)((e) => {
              let [{ id: t, threadId: i }, r] = e;
              return Promise.all([
                l("/v2/".concat(r.router.locale, "/comments/").concat(t), {
                  method: "DELETE",
                }),
                i,
              ]);
            }),
            (0, _.T)((e) => {
              let [t, i] = e;
              return (0, r.commentDeleted)(t.body, i);
            }),
            (0, y.d$)("comment :: deleteCommentEpic", r.error, n)
          );
        },
        G = (e, t, i) => {
          let { fetchApi: l, logger: n } = i;
          return e.pipe(
            (0, L.g)(
              r.LIKE_COMMENT,
              r.DISLIKE_COMMENT,
              r.UNLIKE_COMMENT,
              r.UNDISLIKE_COMMENT
            ),
            (0, v.E)(t),
            (0, O.Z)((e) => {
              let [{ id: t, threadId: i, type: n }, s] = e;
              return ((e) =>
                (0, E.A)([
                  [
                    (0, h.A)(p.A, r.LIKE_COMMENT),
                    (t, i, r) =>
                      e("/v2/".concat(i, "/comments/").concat(r, "/like"), {
                        method: "POST",
                      }),
                  ],
                  [
                    (0, h.A)(p.A, r.DISLIKE_COMMENT),
                    (t, i, r) =>
                      e("/v2/".concat(i, "/comments/").concat(r, "/dislike"), {
                        method: "POST",
                      }),
                  ],
                  [
                    (0, h.A)(p.A, r.UNLIKE_COMMENT),
                    (t, i, r) =>
                      e("/v2/".concat(i, "/comments/").concat(r, "/like"), {
                        method: "DELETE",
                      }),
                  ],
                  [
                    (0, h.A)(p.A, r.UNDISLIKE_COMMENT),
                    (t, i, r) =>
                      e("/v2/".concat(i, "/comments/").concat(r, "/dislike"), {
                        method: "DELETE",
                      }),
                  ],
                  [
                    k.A,
                    (e) => {
                      throw new Error(
                        'Unsupported action type "'.concat(e, '"')
                      );
                    },
                  ],
                ]))(l)(n, s.router.locale, t)
                .then(() => (0, r.likeDislikeSuccess)(t, i))
                .catch((e) => (0, r.likeDislikeError)(t, e, i));
            }),
            (0, y.qn)("comment :: likeDislikeCommentEpic", n)
          );
        },
        H = (e, t, i) => {
          let { logger: l } = i;
          return e.pipe(
            (0, L.g)(r.TOGGLE_COMMENT_THREAD),
            (0, v.E)(t),
            (0, N.p)((e) => {
              let [{ commentId: t }, i] = e;
              return (0, A.A)(
                (0, o.A)((0, a.A)(t, "id")),
                (0, g.A)([
                  (0, C.A)(n.A),
                  (0, I.A)(!0, ["thread", "isOpen"]),
                  (0, s.A)(T.A, (0, D.A)(["thread", "list"])),
                ])
              )(i.comments.list);
            }),
            (0, _.T)((e) => {
              let [{ commentId: t }] = e;
              return (0, r.fetchComments)(t);
            }),
            (0, y.qn)(
              "comment :: fetchThreadCommentsIfEmptyWhenToggleThreadEpic",
              l
            )
          );
        },
        P = (0, M.E)(b, F, U, w, G, H);
    },
    44620: (e, t, i) => {
      i.r(t),
        i.d(t, {
          CANCEL_DELETE: () => Z,
          CLEAN: () => z,
          COMMENT_DELETED: () => q,
          CONFIRM_DELETE: () => V,
          DELETE_COMMENT: () => B,
          DISLIKE_COMMENT: () => $,
          ERROR: () => H,
          FETCH_COMMENTS: () => K,
          INITIAL_STATE: () => R,
          LIKE_COMMENT: () => x,
          LIKE_DISLIKE_ERROR: () => P,
          LIKE_DISLIKE_SUCCESS: () => W,
          RECEIVED_COMMENTS: () => F,
          RECEIVE_NEW_COMMENT: () => w,
          SEND_COMMENT: () => U,
          TOGGLE_COMMENT_FORM_THREAD: () => G,
          TOGGLE_COMMENT_THREAD: () => b,
          UNDISLIKE_COMMENT: () => j,
          UNLIKE_COMMENT: () => X,
          cancelDelete: () => oe,
          clean: () => he,
          commentDeleted: () => ae,
          confirmDelete: () => de,
          default: () => Ie,
          deleteComment: () => se,
          dislikeComment: () => ue,
          error: () => te,
          fetchComments: () => J,
          likeComment: () => ce,
          likeDislikeError: () => ie,
          likeDislikeSuccess: () => re,
          receiveNewComment: () => ee,
          receivedComments: () => Q,
          sendComment: () => Y,
          toggleCommentFormThread: () => ne,
          toggleCommentThread: () => le,
          undislikeComment: () => Ee,
          unlikeComment: () => me,
        });
      var r = i(48500),
        l = i(91199),
        n = i(8761),
        s = i(56802),
        d = i(29874),
        o = i(83645),
        a = i(61888),
        c = i(24314),
        u = i(4258),
        m = i(52527),
        E = i(8135),
        h = i(25854),
        p = i(82130),
        k = i(83317),
        A = i(82635),
        g = i(63918),
        C = i(7573);
      const I = (0, C.A)(function (e, t) {
        return (0, g.A)([e], t);
      });
      var T = i(24260),
        D = i(17070);
      function L(e, t) {
        return (0, D.A)(e < t.length ? t.length - e : 0, t);
      }
      var M = i(113),
        v = (function () {
          function e(e, t) {
            if (e <= 0) return t;
            (this.xf = t),
              (this.pos = 0),
              (this.full = !1),
              (this.acc = new Array(e));
          }
          return (
            (e.prototype["@@transducer/init"] = M.A.init),
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
      function N(e) {
        return function (t) {
          return new v(e, t);
        };
      }
      const O = (0, C.A)((0, T.A)([], N, L));
      var _ = i(75377),
        f = i(57594),
        S = i(98079),
        y = i(42435);
      const R = {
          total: 0,
          list: [],
          loading: !1,
          deleting: !1,
          page: 0,
          sending: !1,
          error: !1,
          commentToBeDeleted: null,
        },
        K = "article/comments/FETCH",
        F = "article/comments/RECEIVED",
        U = "article/comments/SEND_COMMENT",
        w = "article/comments/RECEIVED_NEW",
        b = "article/comments/TOGGLE_THREAD",
        G = "article/comments/TOGGLE_FORM_THREAD",
        H = "article/comments/ERROR",
        P = "article/comments/LIKE_DISLIKE_ERROR",
        W = "article/comments/LIKE_DISLIKE_SUCCESS",
        B = "article/comments/DELETE_COMMENT",
        V = "article/comments/CONFIRM_DELETE",
        Z = "article/comments/CANCEL_DELETE",
        q = "article/comments/COMMENT_DELETED",
        x = "article/comments/LIKE_COMMENT",
        $ = "article/comments/DISLIKE_COMMENT",
        X = "article/comments/UNLIKE_COMMENT",
        j = "article/comments/UNDISLIKE_COMMENT",
        z = "article/comments/CLEAN",
        J = function () {
          return {
            type: K,
            threadId:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
          };
        },
        Q = function (e, t) {
          return {
            type: F,
            list: e,
            total: t,
            threadId:
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
          };
        },
        Y = function (e) {
          return {
            type: U,
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
            type: w,
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
            type: P,
            id: e,
            error: t,
            threadId:
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
          };
        },
        re = function (e) {
          return {
            type: W,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        le = (e) => ({ type: b, commentId: e }),
        ne = (e) => ({ type: G, commentId: e }),
        se = (e) => ({ type: B, id: e }),
        de = function (e) {
          return {
            type: V,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        oe = (0, r.A)({ type: Z }),
        ae = function (e) {
          return {
            type: q,
            deletedComment: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        ce = function (e) {
          return {
            type: x,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        ue = function (e) {
          return {
            type: $,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        me = function (e) {
          return {
            type: X,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        Ee = function (e) {
          return {
            type: j,
            id: e,
            threadId:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
          };
        },
        he = (0, r.A)({ type: z }),
        pe = (e) => ({
          id: e.id,
          isFetchingLikeDislike: !1,
          message: e.message,
          at: (0, S.u)(e.createdAt),
          author: {
            image: (0, l.A)(null, ["user", "image", "href"], e),
            id: (0, l.A)(null, ["user", "id"], e),
            name: e.user ? e.user.name : null,
          },
          authorHash: e.authorHash,
          validated: e.status === f.UN,
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
        ke = (e, t) => (i) =>
          (0, n.A)((0, s.A)((0, d.A)(e, "id")), (e) =>
            (0, o.A)(
              () => e >= 0,
              (i) => t(e, i)
            )(i)
          )(i),
        Ae = (e, t, i) =>
          (0, n.A)(
            (0, a.A)("list"),
            ke(i, (e, i) => (0, c.A)(e, t, i)),
            (0, u.A)("list", m.A, e)
          )(e),
        ge = function (e, t, i) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return (0, E.A)(
            h.A,
            () => Ae(e, t, i),
            () =>
              ((e, t, i, r) =>
                (0, n.A)(
                  (0, a.A)("list"),
                  ke(r, (e, r) =>
                    (0, c.A)(
                      e,
                      (e) => ({ ...e, thread: Ae(e.thread, t, i) }),
                      r
                    )
                  ),
                  (0, u.A)("list", m.A, e)
                )(e))(e, t, i, r)
          )(r);
        },
        Ce = (e, t) => t < e,
        Ie = (0, y.vy)(R, {
          [K]: (e, t) => {
            let { threadId: i } = t;
            return {
              ...e,
              ...(0, E.A)(
                h.A,
                () => ({ ...e, loading: !0, page: (0, p.A)(e.page, 1) }),
                () =>
                  ge(
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
          [F]: (e, t) => {
            let { list: i, total: r, threadId: l } = t;
            return {
              ...e,
              ...(0, E.A)(
                h.A,
                () => ({
                  ...e,
                  list: (0, k.A)(e.list, (0, A.A)(pe)(i)),
                  total: r,
                  loading: !1,
                }),
                () =>
                  ge(
                    e,
                    (e) => ({
                      ...e,
                      thread: {
                        ...e.thread,
                        list: (0, k.A)(e.thread.list, (0, A.A)(pe)(i)),
                        isOpen: 0 === e.thread.list.length || e.thread.isOpen,
                        loading: !1,
                        total: r,
                      },
                    }),
                    l
                  )
              )(l),
              error: !1,
            };
          },
          [U]: (e, t) => {
            let { threadId: i } = t;
            return {
              ...e,
              ...(0, E.A)(
                h.A,
                () => ({ ...e, sending: !0 }),
                () =>
                  ge(
                    e,
                    (e) => ({ ...e, thread: { ...e.thread, sending: !0 } }),
                    i
                  )
              )(i),
              error: !1,
            };
          },
          [w]: (e, t) => {
            let { newComment: i, threadId: r } = t;
            return (0, E.A)(
              h.A,
              () => ({
                ...e,
                total: (0, p.A)(e.total, 1),
                sending: !1,
                list: (0, n.A)(
                  I(pe(i)),
                  (0, o.A)(() => Ce(e.total, e.list.length), O(1))
                )(e.list),
              }),
              () =>
                ge(
                  e,
                  (e) => ({
                    ...e,
                    thread: {
                      ...e.thread,
                      list: (0, n.A)(
                        (0, o.A)(() => {
                          return (
                            (t = e.thread.total),
                            !(0 === e.thread.list.length && t > 0)
                          );
                          var t;
                        }, I(pe(i))),
                        (0, o.A)(
                          () => Ce(e.thread.total, e.thread.list.length),
                          O(1)
                        )
                      )(e.thread.list),
                      isOpen: 0 === e.thread.total || e.thread.isOpen,
                      sending: !1,
                      total: (0, p.A)(e.thread.total, 1),
                    },
                  }),
                  r
                )
            )(r);
          },
          [H]: (e) => ({
            ...e,
            error: !0,
            sending: !1,
            loading: !1,
            deleting: !1,
          }),
          [b]: (e, t) => {
            let { commentId: i } = t;
            return ge(
              e,
              (e) => ({
                ...e,
                thread: {
                  ...e.thread,
                  isOpen: !e.thread.isOpen,
                  list: (0, A.A)((e) => ({ ...e }))(e.thread.list),
                },
              }),
              i
            );
          },
          [G]: (e, t) => {
            let { commentId: i } = t;
            return ge(
              e,
              (e) => ({
                ...e,
                thread: { ...e.thread, isFormOpen: !e.thread.isFormOpen },
              }),
              i
            );
          },
          [B]: (e, t) => {
            let { id: i } = t;
            return { ...e, commentToBeDeleted: i };
          },
          [Z]: (e) => ({ ...e, commentToBeDeleted: null }),
          [V]: (e) => ({ ...e, error: !1, deleting: !0 }),
          [q]: (e, t) => {
            let { deletedComment: i, threadId: r } = t;
            return {
              ...e,
              ...(0, E.A)(
                h.A,
                () =>
                  i.status !== f.UN
                    ? { page: 0, loading: !0, list: [] }
                    : {
                        list: ke(i.id, (e, t) => (0, c.A)(e, () => pe(i), t))(
                          e.list
                        ),
                      },
                () =>
                  ge(
                    e,
                    (e) => ({
                      ...e,
                      thread:
                        i.status !== f.UN
                          ? { ...e.thread, page: 0, loading: !0, list: [] }
                          : {
                              ...e.thread,
                              list: ke(i.id, (e, t) =>
                                (0, c.A)(e, () => pe(i), t)
                              )(e.thread.list),
                            },
                    }),
                    r
                  )
              )(r),
              commentToBeDeleted: null,
              deleting: !1,
              error: !1,
            };
          },
          [x]: (e, t) => {
            let { id: i, threadId: r } = t;
            return {
              ...ge(
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
                  dislikes: e.disliked ? (0, _.A)(e.dislikes, 1) : e.dislikes,
                  disliked: !1,
                }),
                i,
                r
              ),
              error: !1,
            };
          },
          [$]: (e, t) => {
            let { id: i, threadId: r } = t;
            return {
              ...ge(
                e,
                (e) => ({
                  ...e,
                  isFetchingLikeDislike: !0,
                  previousLikes: e.likes,
                  previousDislikes: e.dislikes,
                  previousDislikedStatus: e.disliked,
                  previousLikedStatus: e.liked,
                  likes: e.liked ? (0, _.A)(e.likes, 1) : e.likes,
                  liked: !1,
                  dislikes: (0, p.A)(e.dislikes, 1),
                  disliked: !0,
                }),
                i,
                r
              ),
              error: !1,
            };
          },
          [X]: (e, t) => {
            let { id: i, threadId: r } = t;
            return {
              ...ge(
                e,
                (e) => ({
                  ...e,
                  isFetchingLikeDislike: !0,
                  previousLikes: e.likes,
                  previousDislikes: e.dislikes,
                  previousDislikedStatus: e.disliked,
                  previousLikedStatus: e.liked,
                  likes: (0, _.A)(e.likes, 1),
                  liked: !1,
                }),
                i,
                r
              ),
              error: !1,
            };
          },
          [j]: (e, t) => {
            let { id: i, threadId: r } = t;
            return {
              ...ge(
                e,
                (e) => ({
                  ...e,
                  isFetchingLikeDislike: !0,
                  previousLikes: e.likes,
                  previousDislikes: e.dislikes,
                  previousDislikedStatus: e.disliked,
                  previousLikedStatus: e.liked,
                  dislikes: (0, _.A)(e.dislikes, 1),
                  disliked: !1,
                }),
                i,
                r
              ),
              error: !1,
            };
          },
          [P]: (e, t) => {
            let { id: i, threadId: r } = t;
            return {
              ...ge(
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
                r
              ),
              error: !0,
            };
          },
          [W]: (e, t) => {
            let { id: i, threadId: r } = t;
            return {
              ...ge(
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
                r
              ),
              error: !1,
            };
          },
          [z]: (0, r.A)(R),
        });
    },
    75377: (e, t, i) => {
      i.d(t, { A: () => r });
      const r = (0, i(7573).A)(function (e, t) {
        return Number(e) - Number(t);
      });
    },
  },
]);
//# sourceMappingURL=7236.a1efc320.chunk.js.map
