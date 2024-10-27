import { F, compose } from "ramda";
import {
  componentDidMount,
  shouldComponentUpdate,
} from "../../components/Lifecycles";
import React from "react";
import { connect } from "react-redux";
import { requestTweetRendering } from "../../store/modules/x";

// mapDispatchToProps :: (Action * -> State) -> Prop
const mapDispatchToProps = (dispatch) => ({
  requestTweetRendering: (tweetId, options) =>
    dispatch(requestTweetRendering(tweetId, options)),
});

// didMount :: Props -> State
const didMount = ({ requestTweetRendering, tweetId, options }) =>
  requestTweetRendering(tweetId, options);

// View :: Props -> React.Component
const View = ({ tweetId }) => <div id={`tweet-${tweetId}`}></div>;

// lifecycles :: React.Component -> React.Component
const lifecycles = compose(
  componentDidMount(didMount),
  shouldComponentUpdate(F)
)(View);

// Tweet :: Props -> React.Component
export default connect(null, mapDispatchToProps)(lifecycles);
