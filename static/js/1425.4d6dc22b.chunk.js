"use strict";
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [1425, 9084, 8504],
  {
    21904: (e, i, t) => {
      t.r(i), t.d(i, { default: () => w });
      var s = t(38504),
        o = t(96277),
        d = t(20045),
        n = t(8761),
        r = t(50270),
        l = t(65043),
        a = t(21589),
        c = t(29157);
      var u = t(70579);
      const v = (0, c.A)({
          english: {
            hourDuration: "1 h",
            hoursDuration: "{{ hours }} h",
            lessThanAMinute: "< 1 min",
            minuteDuration: "1 min",
            minutesDuration: "{{ minutes }} min",
          },
          french: {
            hourDuration: "1 h",
            hoursDuration: "{{ hours }} h",
            lessThanAMinute: "< 1 min",
            minuteDuration: "1 min",
            minutesDuration: "{{ minutes }} min",
          },
          arabic: {
            hourDuration: "\u0633\u0627\u0639\u0629 1",
            hoursDuration: "\u0633\u0627\u0639\u0627\u062a {{ hours }}",
            lessThanAMinute:
              "\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629",
            minuteDuration: "\u0627\u0644\u0644\u062d\u0638\u0629 1",
            minutesDuration:
              "\u0627\u0644\u062f\u0642\u0627\u0626\u0642 {{ minutes }}",
          },
          hebrew: {
            hourDuration: "\u05e9\u05e2\u05d4 \u05d0\u05d7\u05ea",
            hoursDuration: "{{ hours }} \u05e9\u05e2\u05d4",
            lessThanAMinute: "1 \u05d3\u05e7\u05d4 >",
            minuteDuration: "1 \u05d3\u05e7\u05d4",
            minutesDuration: "{{ minutes }} \u05d3\u05e7\u05d5\u05ea",
          },
        }),
        h = (e) => Math.floor(e / 6e4),
        _ = (e) =>
          (0, n.A)(
            (e) => {
              return {
                duration: e,
                hoursCount: ((i = e), Math.floor(i / 36e5)),
              };
              var i;
            },
            (i) =>
              0 === i.hoursCount
                ? ((e) =>
                    (0, n.A)(h, (i) =>
                      0 === i
                        ? v(e)("lessThanAMinute")
                        : 1 === i
                        ? v(e)("minuteDuration")
                        : v(e)("minutesDuration", { minutes: i })
                    ))(e)(i.duration)
                : (
                    (e) => (i) =>
                      1 === i
                        ? v(e)("hourDuration")
                        : v(e)("hoursDuration", { hours: i })
                  )(e)(i.hoursCount)
          ),
        p = (e) => {
          let {
            locale: i,
            focusVideo: t,
            isFocused: s,
            isPlayed: o,
            video: d,
            onEnd: n,
          } = e;
          return (0, u.jsxs)("div", {
            className: "sticker-latest-videos ".concat(s ? "active" : ""),
            onMouseEnter: () => t(d.id),
            children: [
              (0, u.jsxs)("div", {
                className: "tag-container",
                children: [
                  s && !o
                    ? (0, u.jsx)("span", {
                        className: "tag",
                        children: _(i)(d.duration),
                      })
                    : null,
                  (0, u.jsx)(a.default, { locale: i, videoId: d.id, onEnd: n }),
                ],
              }),
              (0, u.jsx)("div", {
                className: "desc",
                children: (0, u.jsx)("p", {
                  className: "title",
                  children: d.title,
                }),
              }),
            ],
          });
        };
      var f = t(49732),
        x = t(5995);
      const A = {
        layout: '"../../../styles/variables/layout.module.css"',
        "breakpoint-s": "600px",
        "breakpoint-xl": "1280px",
        "stack-level-normal": "0",
        "stack-level-higher": "200",
        "gap-m": "16px",
        "gap-l": "32px",
        "gap-s": "8px",
        colors: '"../../../styles/variables/colors.module.css"',
        "color-white": "#ffffff",
        wrapper: "Slider_wrapper__QrGYf",
        "slider-wrapper": "Slider_slider-wrapper__VvTsF",
        slider: "Slider_slider__WcayZ",
        "active-1": "Slider_active-1__5k9Xc",
        "active-2": "Slider_active-2__puK4i",
        "active-3": "Slider_active-3__uqB4P",
        "active-4": "Slider_active-4__4WSAk",
        "active-5": "Slider_active-5__Ha1ur",
        "active-6": "Slider_active-6__adXbU",
        "active-7": "Slider_active-7__hyrQf",
        "active-8": "Slider_active-8__PDaBf",
        "active-9": "Slider_active-9__qudqD",
        "active-10": "Slider_active-10__PcKWl",
        "active-11": "Slider_active-11__OwyXj",
        slide: "Slider_slide__OY7Tw",
        "active-0": "Slider_active-0__VOe26",
        "focused-0": "Slider_focused-0__EMaZe",
        "focused-1": "Slider_focused-1__Jo1WG",
        "focused-2": "Slider_focused-2__3zc91",
        "focused-3": "Slider_focused-3__yS0hK",
        "focused-4": "Slider_focused-4__GdYGP",
        "focused-5": "Slider_focused-5__AuoHy",
        "focused-6": "Slider_focused-6__JIaSi",
        "focused-7": "Slider_focused-7__SPMpG",
        "focused-8": "Slider_focused-8__tx7DC",
        "focused-9": "Slider_focused-9__WvQAk",
        "focused-10": "Slider_focused-10__CPNw9",
        "focused-11": "Slider_focused-11__A3zEo",
        "button-previous": "Slider_button-previous__JGTSY",
        "button-next": "Slider_button-next__3iAy2",
      };
      var V = t(95518),
        S = t(48434),
        m = t(41662);
      const y = (e) => {
        let {
          activeSlideIndex: i,
          focusedSlideIndex: t,
          onNext: s,
          onNextLabel: o,
          onPrevious: d,
          onPreviousLabel: r,
          children: a,
        } = e;
        const [c, v] = l.useState(null),
          [h, _] = l.useState(null),
          p = v,
          f = _,
          x = () => {
            if (null !== c && null !== h) {
              const e = c - h,
                i = 30;
              e < -i ? d() : e > i && s(), v(null), _(null);
            }
          },
          y = x,
          I = (0, n.A)(
            (0, V.A)((e) => e.preventDefault()),
            (e) => p(e.clientX)
          ),
          g = (0, n.A)(
            (0, V.A)((e) => e.preventDefault()),
            (e) => f(e.clientX)
          ),
          N = (0, n.A)((e) => e.preventDefault(), x),
          D = (0, n.A)((e) => e.preventDefault(), x);
        return (0, u.jsxs)("div", {
          className: A.wrapper,
          children: [
            (0, u.jsx)("div", {
              className: A["button-previous"],
              children: (0, u.jsx)(S.A, {
                onClick: d,
                "aria-label": r,
                children: (0, u.jsx)(m.A, { width: 20, height: 20 }),
              }),
            }),
            (0, u.jsx)("div", {
              className: A["slider-wrapper"],
              children: (0, u.jsx)("div", {
                role: "presentation",
                className: ""
                  .concat(A.slider, " ")
                  .concat(A["active-".concat(i)], " ")
                  .concat(A["focused-".concat(t)]),
                onTouchStart: (e) => p(e.targetTouches[0].clientX),
                onTouchMove: (e) => f(e.targetTouches[0].clientX),
                onTouchEnd: y,
                onMouseDown: I,
                onMouseMove: g,
                onMouseUp: N,
                onMouseLeave: D,
                children: a,
              }),
            }),
            (0, u.jsx)("div", {
              className: A["button-next"],
              children: (0, u.jsx)(S.A, {
                onClick: s,
                "aria-label": o,
                children: (0, u.jsx)(m.A, { width: 20, height: 20 }),
              }),
            }),
          ],
        });
      };
      y.Slide = (e) => {
        let { children: i } = e;
        return (0, u.jsx)("div", { className: A.slide, children: i });
      };
      const I = y,
        g = (0, c.A)(f.A);
      var N = t(83003);
      const D = (0, n.A)(
          (0, o.y3)((e) => {
            let { fetchLatestVideos: i } = e;
            return i();
          }),
          (0, o.qm)((e) => {
            let { clean: i } = e;
            return i();
          })
        )((e) => {
          let {
            slideIndex: i = 0,
            videos: t,
            loading: s,
            locale: o,
            toNext: d,
            toPrevious: n,
            playVideo: l,
            playedVideo: a,
            focusVideo: c,
            focusedVideo: v,
            playNextVideo: h,
          } = e;
          return (0, u.jsxs)("div", {
            id: "home-latest-videos",
            children: [
              (0, u.jsx)(x.A, {
                level: "2",
                color: "light",
                size: "large",
                children: g(o)("topVideos"),
              }),
              (0, u.jsx)("div", {
                className: "container latest-videos",
                children: s
                  ? (0, u.jsx)(r.A, { inversed: !0 })
                  : (0, u.jsx)(I, {
                      activeSlideIndex: i,
                      focusedSlideIndex: t.findIndex((e) => e.id === v),
                      onNext: d,
                      onNextLabel: g(o)("next"),
                      onPrevious: n,
                      onPreviousLabel: g(o)("previous"),
                      children: t.map((e, i) =>
                        (0, u.jsx)(
                          I.Slide,
                          {
                            children: (0, u.jsx)(p, {
                              video: e,
                              locale: o,
                              playVideo: l,
                              focusVideo: c,
                              isFocused: e.id === v,
                              isPlayed: e.id === a,
                              onEnd: (i) => h(e.id, i),
                            }),
                          },
                          i
                        )
                      ),
                    }),
              }),
            ],
          });
        }),
        w = (0, N.Ng)(
          (e) => ({
            loading: e.latestVideos.fetching,
            videos: e.latestVideos.list,
            slideIndex: e.latestVideos.activeIndex,
            focusedVideo: e.latestVideos.focusedVideo,
            playedVideo: e.latestVideos.playedVideo,
            locale: e.router.locale,
          }),
          (e) => ({
            toNext: () => e((0, s.next)(window.innerWidth)),
            toPrevious: () => e((0, s.previous)(window.innerWidth)),
            focusVideo: (i) => e((0, s.focusVideo)(i)),
            playVideo: (i) => e((0, s.playVideo)(i)),
            fetchLatestVideos: (0, d.A)(e, s.fetchLatestVideos),
            clean: (0, d.A)(e, s.clean),
            playNextVideo: (i, t) => {
              t.isFullscreen() && t.exitFullscreen(),
                e((0, s.playNextVideo)(i, window.innerWidth));
            },
          })
        )(D);
    },
    49732: (e, i, t) => {
      t.d(i, { A: () => s });
      const s = {
        english: {
          topVideos: "Top videos",
          next: "Next",
          previous: "Previous",
        },
        french: {
          topVideos: "Top videos",
          next: "Suivant",
          previous: "Pr\xe9c\xe9dent",
        },
        arabic: {
          topVideos:
            "\u0623\u0641\u0636\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a",
          next: "\u0627\u0644\u062a\u0627\u0644\u064a",
          previous: "\u0627\u0644\u0633\u0627\u0628\u0642",
        },
        hebrew: {
          topVideos:
            "\u05d4\u05e0\u05e6\u05e4\u05d9\u05dd \u05d1\u05d9\u05d5\u05ea\u05e8",
          next: "\u05d4\u05d1\u05d0",
          previous: "\u05d4\u05e7\u05d5\u05d3\u05dd",
        },
      };
    },
    50270: (e, i, t) => {
      t.d(i, { A: () => o });
      t(65043);
      var s = t(70579);
      const o = (e) => {
        let { className: i = "", inversed: t = !1 } = e;
        return (0, s.jsx)("figure", {
          className: "loader-wrapper "
            .concat(i, " ")
            .concat(t ? "inverse" : ""),
          children: (0, s.jsx)("div", { className: "loader-overlay" }),
        });
      };
    },
    38504: (e, i, t) => {
      t.r(i),
        t.d(i, {
          CLEAN: () => V,
          ERROR: () => S,
          FETCH_LATEST_VIDEOS: () => x,
          FOCUS_VIDEO: () => g,
          INITIAL_STATE: () => f,
          NEXT: () => m,
          PLAY_NEXT_VIDEO: () => y,
          PLAY_VIDEO: () => N,
          PREVIOUS: () => I,
          RECEIVE_LATEST_VIDEOS: () => A,
          clean: () => E,
          default: () => k,
          error: () => j,
          fetchLatestVideos: () => D,
          focusVideo: () => P,
          next: () => T,
          playNextVideo: () => O,
          playVideo: () => L,
          previous: () => b,
          receiveLatestVideos: () => w,
        });
      var s = t(48500),
        o = t(88313),
        d = t(48098),
        n = t(52527),
        r = t(32709),
        l = t(33373),
        a = t(20828),
        c = t(87723),
        u = t(80982),
        v = t(20045);
      const h = (0, t(82130).A)(-1);
      var _ = t(42435),
        p = t(12040);
      const f = {
          focusedVideo: null,
          playedVideo: null,
          fetching: !0,
          list: [],
          activeIndex: 0,
          error: !1,
        },
        x = "latestVideos/FETCH",
        A = "latestVideos/RECEIVE",
        V = "latestVideos/CLEAN",
        S = "latestVideos/ERROR",
        m = "latestVideos/next",
        y = "latestVideos/PLAY_NEXT_VIDEO",
        I = "latestVideos/previous",
        g = "latestVideos/FOCUS_VIDEO",
        N = "latestVideos/PLAY_VIDEO",
        D = (0, s.A)({ type: x }),
        w = (e) => ({ type: A, videos: e || [] }),
        E = (0, s.A)({ type: V }),
        j = (0, s.A)({ type: S }),
        T = (e) => ({ type: m, viewportWidth: e }),
        b = (e) => ({ type: I, viewportWidth: e }),
        P = (e) => ({ type: g, videoId: e }),
        L = (e) => ({ type: N, videoId: e }),
        O = (e, i) => ({ type: y, currentVideoId: e, viewportWidth: i }),
        C = (e) =>
          (0, o.A)([
            [(0, d.A)(n.A, e - 1), (0, s.A)(0)],
            [(0, r.A)(n.A, 0), (0, s.A)(e - 1)],
            [l.A, a.A],
          ]),
        M = (e, i) =>
          (0, o.A)([
            [(0, c.A)(600), (0, s.A)(e.length)],
            [(0, c.A)(1280), (0, s.A)(e.length - 1)],
            [l.A, (0, s.A)(e.length - 2)],
          ])(i),
        k = (0, _.vy)(f, {
          [x]: (e) => ({ ...e, fetching: !0 }),
          [A]: (e, i) => {
            let { videos: t } = i;
            return { ...e, list: t, activeIndex: 0, fetching: !1, error: !1 };
          },
          [V]: (0, s.A)(f),
          [m]: (e, i) => {
            let { viewportWidth: t } = i;
            return { ...e, activeIndex: C(M(e.list, t))(e.activeIndex + 1) };
          },
          [I]: (e, i) => {
            let { viewportWidth: t } = i;
            return { ...e, activeIndex: C(M(e.list, t))(e.activeIndex - 1) };
          },
          [g]: (e, i) => {
            let { videoId: t } = i;
            return { ...e, focusedVideo: t };
          },
          [N]: (e, i) => {
            let { videoId: t } = i;
            return { ...e, playedVideo: t };
          },
          [y]: (e, i) => {
            let { currentVideoId: t, viewportWidth: d } = i;
            return {
              ...e,
              activeIndex: (0, p.U_)(d)
                ? C(M(e.list, d))(e.activeIndex + 1)
                : ((r = M(e.list, d)),
                  (0, o.A)([
                    [(0, u.A)(n.A, 1), (0, s.A)(0)],
                    [(0, c.A)(n.A, r), (0, s.A)(r - 1)],
                    [l.A, (0, v.A)(h, a.A)],
                  ]))(e.list.findIndex((e) => e.id === t) + 1),
              focusedVideo:
                e.list.findIndex((e) => e.id === t) + 1 === e.list.length
                  ? e.list[e.list.findIndex((e) => e.id === t)].id
                  : e.list[e.list.findIndex((e) => e.id === t) + 1].id,
              playedVideo:
                e.list.findIndex((e) => e.id === t) + 1 === e.list.length
                  ? null
                  : e.list[e.list.findIndex((e) => e.id === t) + 1].id,
            };
            var r;
          },
          [S]: (e) => ({ ...e, error: !0 }),
        });
    },
    43677: (e, i, t) => {
      t.d(i, { A: () => l });
      var s = t(65043),
        o = t(65173),
        d = t.n(o),
        n = t(70579);
      const r = (e) => {
        let {
          level: i,
          color: t = "default",
          size: o = "medium",
          children: d,
        } = e;
        return s.createElement(
          "h".concat(i),
          {
            className: "widget-typography-heading size-"
              .concat(o, " color-")
              .concat(t),
          },
          d
        );
      };
      (r.Sub = (e) => {
        let { children: i } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", {
              className: "widget-typography-heading-separator",
              children: "/",
            }),
            (0, n.jsx)("span", {
              className: "widget-typography-heading-subtitle",
              children: i,
            }),
          ],
        });
      }).propTypes = {
        children: d().oneOfType([d().string, d().arrayOf(d().string)])
          .isRequired,
      };
      const l = r;
    },
    5995: (e, i, t) => {
      t.d(i, { A: () => s.A });
      var s = t(43677);
    },
  },
]);
//# sourceMappingURL=1425.4d6dc22b.chunk.js.map
