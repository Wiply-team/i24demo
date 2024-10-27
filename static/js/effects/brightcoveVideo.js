import {
  BRIGHTCOVE_VIDEO_PLAYED,
  BRIGHTCOVE_VIDEO_READY,
  DISPOSE_BRIGHTCOVE_VIDEO,
  INIT_BRIGHTCOVE_VIDEO,
  clear,
  videoDisposed,
  videoPlayed,
  videoReady,
} from "../store/modules/brightcoveVideo";
import {
  addIndex,
  allPass,
  anyPass,
  assoc,
  complement,
  compose,
  equals,
  forEach,
  forEachObjIndexed,
  hasPath,
  isNil,
  join,
  keys,
  o,
  path,
  pathOr,
  pipe,
  prop,
  filter as rfilter,
  map as rmap,
  take as rtake,
  tap as rtap,
  splitEvery,
  when,
} from "ramda";
import React from "react";
import { renderToString } from "react-dom/server";
import { brightcoveVideoPlayed$ } from "./index";
import { combineEpics, ofType } from "redux-observable";
import {
  filter,
  ignoreElements,
  map,
  mergeMap,
  tap,
  withLatestFrom,
} from "rxjs";
import { isMobileViewport } from "../utilities/displays";
import { logObservableError } from "../utilities/logs";
import { imagePlaceholder } from "../utilities/media/images";
import {
  guessBrightcoveTopVideosPlaylistId,
  newsletterEndScreen,
  playlistEndScreen,
  resolvePlayerIdentifier,
} from "../utilities/media/videos";
import { inDoubleQuotedAttr, inHTMLData } from "xss-filters";
import BrightcovePlayersTranslations from "../legacy_components/BrightcovePlayers/translations";
import LatestVideosTranslations from "../legacy_components/Homepage/LatestVideos/translations";
import { ROUTE_FOUND } from "../store/modules/router";
import Heading from "../widgets/Typography/Heading";
import ArrowIcon from "../legacy_components/Icons/ArrowIcon";
import PlayIcon from "../legacy_components/Icons/Radio/PlayIcon";
import LogoIcon from "../legacy_components/Icons/LogoIcon";

// getVideoElements :: (Document, String) -> NodeList
const getVideoElements = (document, id) =>
  document.querySelectorAll(`video[data-video-id="${id}"]`);

// getVideoElement :: (Document, String) -> Element
const getVideoElement = (document, id) =>
  document.querySelector(`video[data-video-id="${id}"]`);

const canInitVideoOverlay = allPass([
  complement(isNil),
  // ensure overlay plugin is enabled on the player
  prop("overlay"),
  // ensure no overlay plugin is already loaded on the player
  (player) => player.overlays_ && player.overlays_.length === 0,
]);

// initializePlayer :: (Element, Function) -> Function|null
const initializePlayer = (videoElement, getBrightcoveSdk) =>
  pipe(
    o(getBrightcoveSdk, resolvePlayerIdentifier),
    when(complement(isNil), (brightcoveSdk) => brightcoveSdk(videoElement))
  )(videoElement);

// getPlayer :: (Element, Function) -> Function|null
const getPlayer = (videoElement, getBrightcovePlayerSdk) =>
  pipe(
    o(getBrightcovePlayerSdk, resolvePlayerIdentifier),
    when(complement(isNil), (playerSdk) => playerSdk.getPlayer(videoElement))
  )(videoElement);

// generateSubscriptionOverlayNode :: (Object, Object) -> Node
export const generateSubscriptionOverlayNode = (player, trans) =>
  pipe(
    () =>
      new DOMParser().parseFromString(
        `<div class="bclsOverlay subscription-overlay">
      <div class="container">
        <span class="logo">
          ${renderToString(<LogoIcon width={49} height={28} />)}
        </span>
        <h4>${trans("stayUpdated")}</h4>
        <p>${trans("subscribeToOurNewsletter")}</p>
        <a class="subscribe" href=${trans("link")}>${trans("subscribe")}</a>
      </div>
    </div>`,
        "text/html"
      ).body.firstChild,
    rtap((overlayNode) =>
      overlayNode
        .querySelector(".subscribe")
        .addEventListener("click", (event) => {
          if (player.isFullscreen()) {
            player.exitFullscreen();
          }
        })
    )
  )();

// generatePlaylistOverlayNode :: (Array, Object, Object, Boolean) -> Node
export const generatePlaylistOverlayNode = (
  videos,
  player,
  translations,
  isMobileViewport
) =>
  pipe(
    () =>
      new DOMParser().parseFromString(
        `<div class="bclsOverlay playlist-overlay">
      <div class="navigation">
        <button class="previous" aria-label="${translations.previous}">
          ${renderToString(<ArrowIcon height={20} />)}
        </button>
      </div>
      <div class="last-videos">
        ${
          !isMobileViewport
            ? renderToString(
                <Heading level="2" size="small" color="light">
                  {translations.title}
                </Heading>
              )
            : ""
        }
      </div>
      <div class="navigation">
        <button class="next" aria-label="${translations.next}">
          ${renderToString(<ArrowIcon height={20} />)}
        </button>
      </div>
    </div>`,
        "text/html"
      ).body.firstChild,
    rtap(attachEndscreenNavigationEvents),
    rtap((overlayNode) =>
      injectOverlayPages(
        overlayNode.querySelector(".last-videos"),
        videos,
        player,
        isMobileViewport,
        translations
      )
    )
  )();

// generatePageNode :: (Array, Int, Object, Object) -> Node
export const generatePageNode = (videos, pageNumber, player, translations) =>
  pipe(
    () =>
      new DOMParser().parseFromString(
        `<div class="page ${
          pageNumber === 1 ? "active" : ""
        }" data-page=${inDoubleQuotedAttr(pageNumber)}></div>`,
        "text/html"
      ).body.firstChild,
    rtap((pageNode) =>
      forEach((video) =>
        pageNode.append(generateVideoNode(video, player, translations))
      )(videos)
    )
  )();

// generateVideoNode :: (Object, Object, Object) -> Node
export const generateVideoNode = (video, player, translations) =>
  pipe(
    () =>
      new DOMParser().parseFromString(
        `<a>
      <figure class="video-figure">
        <img src="${inDoubleQuotedAttr(
          pathOr(imagePlaceholder, ["images", "poster", "src"], video)
        )}" />
        <figcaption>${inHTMLData(video.name)}</figcaption>
        <p class="video-player">
          <button aria-label="${translations.play}">${renderToString(
          <PlayIcon />
        )}</button>
        </p>
      </figure>
    </a>`,
        "text/html"
      ).body.firstChild,
    rtap((videoNode) =>
      videoNode.addEventListener("click", (event) => {
        event.preventDefault();

        player.catalog.getVideo(video.id, (error, currentVideo) => {
          if (error) {
            return;
          }

          player.catalog.load(currentVideo);
          player.on("loadstart", player.play);
        });
      })
    )
  )();

// injectOverlayPages :: (Node, Array, Object, Object) -> _
const injectOverlayPages = (
  parentNode,
  videos,
  player,
  isMobileViewport,
  translations
) =>
  addIndex(rmap)(
    pipe(
      (videos, index) =>
        generatePageNode(videos, index + 1, player, translations),
      (pageNode) => parentNode.append(pageNode)
    )
  )(splitEvery(isMobileViewport ? 1 : 3, videos));

// attachEndscreenNavigationEvents :: (Node) -> _
export const attachEndscreenNavigationEvents = pipe(
  rtap((overlayNode) =>
    overlayNode
      .querySelector(".navigation .previous")
      .addEventListener("click", changeOverlayPageListener(overlayNode, false))
  ),
  rtap((overlayNode) =>
    overlayNode
      .querySelector(".navigation .next")
      .addEventListener("click", changeOverlayPageListener(overlayNode, true))
  )
);

// changeOverlayPageListener :: (Node, Boolean) -> Event -> _
const changeOverlayPageListener = (listNode, isNextEvent) => (event) => {
  const activePage = listNode.querySelector(".page.active");
  const nextActiveNumber = isNextEvent
    ? parseInt(activePage.dataset.page) + 1
    : parseInt(activePage.dataset.page) - 1;
  const nextActivePage = listNode.querySelector(
    `.page[data-page="${nextActiveNumber}"]`
  );

  activePage.classList.remove("active");

  if (nextActivePage) {
    nextActivePage.classList.add("active");
  } else {
    listNode
      .querySelector(isNextEvent ? '.page[data-page="1"]' : ".page:last-child")
      .classList.add("active");
  }
};

// videoPlayedEpic :: Epic -> Observable Action BRIGHTCOVE_VIDEO_PLAYED
export const videoPlayedEpic = (action$, state$, { logger }) =>
  brightcoveVideoPlayed$.pipe(
    map(({ playerId, videoId, endScreenType }) =>
      videoPlayed(playerId, videoId, endScreenType)
    ),
    logObservableError("brightcoveVideo :: videoPlayedEpic", logger)
  );

// initVideoEpic :: Epic -> Observable Action BRIGHTCOVE_VIDEO_READY
export const initVideoEpic = (
  action$,
  state$,
  { getBrightcoveSdk, document, logger }
) =>
  action$.pipe(
    ofType(INIT_BRIGHTCOVE_VIDEO),
    map((action) =>
      assoc(
        "players",
        rmap(
          (element) => initializePlayer(element, getBrightcoveSdk),
          getVideoElements(document, action.videoId)
        ),
        action
      )
    ),
    tap(({ videoId, autoPlay, players, endScreenType, onEnd }) =>
      forEach((player) => {
        player.on("play", (e) =>
          brightcoveVideoPlayed$.next({
            playerId: e.target.id,
            videoId,
            autoPlay,
            endScreenType,
          })
        );
        player.off("ended");
        player.on("ended", () => onEnd(player));
      }, players)
    ),
    mergeMap(({ players, ...props }) =>
      Promise.all([
        props,
        ...rmap(
          (player) =>
            new Promise((resolve) => player.ready(() => resolve(player))),
          players
        ),
      ])
    ),
    map(([{ videoId, lazy, autoPlay, muted }]) =>
      videoReady(videoId, lazy, autoPlay, muted)
    ),
    logObservableError("brightcoveVideo :: initVideoEpic", logger)
  );

// disposeVideoEpic :: Epic -> Observable Action BRIGHTCOVE_VIDEO_DISPOSED
export const disposeVideoEpic = (
  action$,
  state$,
  { document, logger, getBrightcovePlayerSdk }
) =>
  action$.pipe(
    ofType(DISPOSE_BRIGHTCOVE_VIDEO),
    map(({ videoId }) => getVideoElement(document, videoId)),
    filter(complement(isNil)),
    tap((element) =>
      pipe(
        o(getBrightcovePlayerSdk, resolvePlayerIdentifier),
        when(complement(isNil), (playerSdk) => playerSdk(element).dispose())
      )(element)
    ),
    map(videoDisposed),
    logObservableError("brightcoveVideo :: disposeVideoEpic", logger)
  );

// autoplayVideoEpic :: Epic -> Observable Action _
export const autoplayVideoEpic = (
  action$,
  _,
  { document, getBrightcovePlayerSdk, logger }
) =>
  action$.pipe(
    ofType(BRIGHTCOVE_VIDEO_READY),
    filter(anyPass([prop("lazy"), prop("autoPlay")])),
    map((action) =>
      assoc(
        "player",
        getPlayer(
          getVideoElement(document, action.videoId),
          getBrightcovePlayerSdk
        ),
        action
      )
    ),
    filter(o(complement(isNil), prop("player"))),
    // Setting muted to false could, on some browser (ex. Chrome >= 70), avoid
    // the auto play to work as they don't allow to autoplay videos with volume
    // on.
    tap(({ muted, player }) => player.muted(muted)),
    tap(({ player }) => player.play()),
    ignoreElements(),
    logObservableError("brightcoveVideo :: autoplayVideoEpic", logger)
  );

// pauseOtherVideosEpic :: Epic -> Observable Action _
export const pauseOtherVideosEpic = (
  action$,
  state$,
  { logger, getBrightcoveRootSdk }
) =>
  action$.pipe(
    ofType(BRIGHTCOVE_VIDEO_PLAYED),
    map(({ playerId }) =>
      pipe(
        // Get properties exposed by the root Brightcove SDK (loaded player types, basic info, etc...)
        () => keys(getBrightcoveRootSdk()),
        // Filters the keys to only get player types checking if the key value contains a videojs property
        // Unfortunately there is no better method than this as Brightcove SDK doesn't expose any method
        // to retrieve all the loaded player types.
        rfilter((key) => hasPath([key, "videojs"], getBrightcoveRootSdk())),
        // Get the player type SDK
        rmap((playerTypeId) =>
          path([playerTypeId, "videojs"], getBrightcoveRootSdk())
        ),
        // Loop over each player type
        forEach(
          // Loop over each player for the given player type
          pipe(
            (playerType) => playerType.getPlayers(),
            rfilter(complement(isNil)),
            forEachObjIndexed(
              when(
                (player) => !equals(playerId, player.id()),
                (player) => player.pause()
              )
            )
          )
        )
      )()
    ),
    ignoreElements(),
    logObservableError("brightcoveVideo :: pauseOtherVideosEpic", logger)
  );

// @see https://player.support.brightcove.com/plugins/display-overlay-plugin.html
//
// endscreenVideoWithPlaylistEpic :: Epic -> Observable Action _
export const endscreenVideoWithPlaylistEpic = (
  action$,
  state$,
  { window, document, getBrightcovePlayerSdk, fetchApi, logger, translate }
) =>
  action$.pipe(
    ofType(BRIGHTCOVE_VIDEO_PLAYED),
    filter(({ endScreenType }) => endScreenType === playlistEndScreen),
    map(({ _, videoId }) => getVideoElement(document, videoId)),
    map((videoElement) => getPlayer(videoElement, getBrightcovePlayerSdk)),
    filter(canInitVideoOverlay),
    withLatestFrom(state$),
    mergeMap(
      ([player, state]) =>
        fetchApi(
          join("", [
            `/v2/${state.router.locale}/brightcove/playlists`,
            `/${guessBrightcoveTopVideosPlaylistId(
              state.router.locale
            )}/videos`,
            `?limit=13`,
          ])
        ),
      ([player, state], response) => [
        // select only 12 videos, different from the video which was played
        compose(
          rtake(12),
          rfilter((video) => video.id !== player.mediainfo.id)
        )(response.body),
        player,
        state.router.locale,
      ]
    ),
    tap(([videos, player, locale]) =>
      pipe(
        (videos) =>
          generatePlaylistOverlayNode(
            videos,
            player,
            {
              previous: translate(LatestVideosTranslations)(locale)("previous"),
              next: translate(LatestVideosTranslations)(locale)("next"),
              play: translate(BrightcovePlayersTranslations)(locale)("play"),
              title: translate(LatestVideosTranslations)(locale)("topVideos"),
            },
            isMobileViewport(window)
          ),
        (overlayNode) =>
          player.overlay({
            overlays: [
              {
                align: "top",
                content: overlayNode,
                start: "ended",
                end: "play",
              },
            ],
          })
      )(videos)
    ),
    ignoreElements(),
    logObservableError(
      "brightcoveVideo :: endscreenVideoWithPlaylistEpic",
      logger
    )
  );

// @see https://player.support.brightcove.com/plugins/display-overlay-plugin.html
//
// endscreenVideoWithSubscriptionEpic :: Epic -> Observable Action _
export const endscreenVideoWithSubscriptionEpic = (
  action$,
  state$,
  { document, getBrightcovePlayerSdk, logger, translate }
) =>
  action$.pipe(
    ofType(BRIGHTCOVE_VIDEO_PLAYED),
    filter(({ endScreenType }) => endScreenType === newsletterEndScreen),
    withLatestFrom(state$),
    filter(([_, state]) =>
      anyPass([isNil, (user) => user && !user.newsletterSubscription])(
        state.session.user
      )
    ),
    map(([{ _, videoId }]) => getVideoElement(document, videoId)),
    map((videoElement) => getPlayer(videoElement, getBrightcovePlayerSdk)),
    filter(canInitVideoOverlay),
    withLatestFrom(state$),
    tap(([player, state]) =>
      pipe(
        () =>
          generateSubscriptionOverlayNode(
            player,
            translate(BrightcovePlayersTranslations)(state.router.locale)
          ),
        (overlayNode) =>
          player.overlay({
            overlays: [
              {
                align: "top",
                content: overlayNode,
                start: "ended",
                end: "play",
              },
            ],
          })
      )()
    ),
    ignoreElements(),
    logObservableError(
      "brightcoveVideo :: endscreenVideoWithSubscriptionEpic",
      logger
    )
  );

// clearBrightcoveVideosEpic :: Epic -> Observable Action.CLEAR
export const clearBrightcoveVideosEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    map(clear),
    logObservableError("brightcoveVideo :: clearBrightcoveVideosEpic", logger)
  );

export default combineEpics(
  autoplayVideoEpic,
  disposeVideoEpic,
  initVideoEpic,
  pauseOtherVideosEpic,
  videoPlayedEpic,
  endscreenVideoWithPlaylistEpic,
  endscreenVideoWithSubscriptionEpic,
  clearBrightcoveVideosEpic
);
