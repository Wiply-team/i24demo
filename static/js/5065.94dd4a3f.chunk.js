"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [5065],
  {
    75065: (e, r, n) => {
      n.r(r),
        n.d(r, {
          CLEAN: () => a,
          CONTENTS_RECEIVED: () => c,
          ERROR: () => T,
          FETCH_CONTENTS: () => l,
          INITIALIZE: () => i,
          INITIAL_STATE: () => E,
          REFRESH_CONTENTS: () => o,
          clean: () => u,
          contentsReceived: () => I,
          default: () => R,
          error: () => d,
          fetchContents: () => N,
          initialize: () => h,
          refreshContents: () => C,
        });
      var t = n(48500),
        s = n(42435);
      const E = { isFetching: !1, contents: [], error: null },
        i = "headlines/INITIALIZE",
        l = "headlines/FETCH_CONTENTS",
        o = "headlines/REFRESH_CONTENTS",
        c = "headlines/CONTENTS_RECEIVED",
        T = "headlines/ERROR",
        a = "headlines/CLEAN",
        h = function (e) {
          return {
            type: i,
            categoryId: e,
            autoRefresh:
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          };
        },
        N = (e) => ({ type: l, categoryId: e }),
        C = (e) => ({ type: o, categoryId: e }),
        I = (e) => ({ type: c, contents: e }),
        d = (e) => ({ type: T, error: e }),
        u = (0, t.A)({ type: a }),
        R = (0, s.vy)(E, {
          [l]: (e) => ({ ...e, isFetching: !0, error: null }),
          [o]: (e) => ({ ...e, error: null }),
          [c]: (e, r) => {
            let { contents: n } = r;
            return { ...e, isFetching: !1, error: null, contents: n };
          },
          [T]: (e, r) => {
            let { error: n } = r;
            return { ...e, isFetching: !1, error: n };
          },
          [a]: (0, t.A)(E),
        });
    },
  },
]);
//# sourceMappingURL=5065.94dd4a3f.chunk.js.map
