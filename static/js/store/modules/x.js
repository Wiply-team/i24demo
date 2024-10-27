import { always, append } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  initialized: false,
  pendingTweets: [],
};

export const LOAD_SDK = "x/LOAD_SDK";
export const SDK_INITIALIZED = "x/SDK_INITIALIZED";
export const REQUEST_TWEET_RENDERING = "x/REQUEST_TWEET_RENDERING";
export const WAIT_FOR_SDK = "x/WAIT_FOR_SDK";
export const RENDER_TWEET = "x/RENDER_TWEET";

// loadSdk :: () -> Action.LOAD_SDK
export const loadSdk = always({ type: LOAD_SDK });

// sdkInitialized :: () -> Action.SDK_INITIALIZED
export const sdkInitialized = always({ type: SDK_INITIALIZED });

// requestTweetRendering :: (String, String) -> Action.REQUEST_TWEET_RENDERING
export const requestTweetRendering = (tweetId, options) => ({
  type: REQUEST_TWEET_RENDERING,
  tweetId,
  options,
});

// waitForSdk :: (String, String) -> Action.WAIT_FOR_SDK
export const waitForSdk = (tweetId, options) => ({
  type: WAIT_FOR_SDK,
  tweetId,
  options,
});

// renderTweet :: (String, String) -> Action.RENDER_TWEET
export const renderTweet = (tweetId, options) => ({
  type: RENDER_TWEET,
  tweetId,
  options,
});

export default createReducer(INITIAL_STATE, {
  [SDK_INITIALIZED]: (state) => ({
    ...state,
    initialized: true,
  }),

  [WAIT_FOR_SDK]: (state, { tweetId, options }) => ({
    ...state,
    pendingTweets: append({ tweetId, options }, state.pendingTweets),
  }),
});
