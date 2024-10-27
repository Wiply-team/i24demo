import "./Comment.scss";
import CommentDeleteForm from "./../CommentDeleteForm";
import ImageProfileRendition from "./../../../Image/Rendition/Profile";
import React from "react";
import Thread from "./../Thread";
import { enLocale } from "../../../../utilities/locales";
import ProfileIcon from "./../../../Icons/ProfileIcon";
import LikeIcon from "./../../../Icons/Comment/LikeIcon";
import LikedIcon from "./../../../Icons/Comment/LikedIcon";
import DislikeIcon from "./../../../Icons/Comment/DislikeIcon";
import DislikedIcon from "./../../../Icons/Comment/DislikedIcon";
import ReplyIcon from "./../../../Icons/Comment/ReplyIcon";
import translations from "../translations";
import translate from "../../../../utilities/translate";
import RelativeTime from "../../../../widgets/Temporal/RelativeTime/RelativeTime";
import Button from "../../../../widgets/Button/Base";

// trans :: String -> String -> String
const trans = translate(translations);

// shouldDisplayOverlay :: (Comment, Number) -> Boolean
const shouldDisplayOverlay = (comment, commentToBeDeleted) =>
  // if comment isn't validated
  !comment.validated &&
  // if comment isn't to be deleted in order to access confirm form
  commentToBeDeleted !== comment.id;

// shortenHash :: String -> String
const shortenHash = (authorHash) => authorHash.substring(0, 7);

// Comment :: Props -> React.Component
export default ({
  comment,
  commentToBeDeleted,
  locale = enLocale,
  likeComment,
  dislikeComment,
  unlikeComment,
  undislikeComment,
  toggleCommentThread,
  toggleCommentFormThread,
  threadId = null,
}) => (
  <div className={threadId ? "is-thread" : ""} data-is="single-comment">
    {shouldDisplayOverlay(comment, commentToBeDeleted) ? (
      <div className="validation-overlay">
        <p>{trans(locale)("beingModerated")}</p>
      </div>
    ) : null}

    <div className="author">
      <div className="profile-picture">
        {comment.author.image ? (
          <ImageProfileRendition
            lazy={true}
            src={comment.author.image}
            alt={comment.author.name}
          />
        ) : (
          <ProfileIcon />
        )}
        <p className="by">
          <span className="name">
            {comment.author.name
              ? comment.author.name
              : `Anonymous_${shortenHash(comment.authorHash)}`}
          </span>
          <RelativeTime date={comment.at} locale={locale} />
        </p>
      </div>
    </div>

    <p className="message">{comment.message}</p>

    <CommentDeleteForm comment={comment} threadId={threadId} />

    {comment.validated ? (
      <div className="actions">
        {!threadId ? (
          <div className="reply-buttons">
            <Button onClick={() => toggleCommentFormThread(comment.id)}>
              <div
                className={`reply ${comment.thread.isFormOpen ? "active" : ""}`}
              >
                <ReplyIcon />
                {trans(locale)("reply")}
              </div>
            </Button>

            {comment.thread.total > 0 ? (
              <Button onClick={() => toggleCommentThread(comment.id)}>
                <div
                  className={`replies ${
                    comment.thread.isOpen
                      ? "active hide-replies"
                      : "show-replies"
                  }`}
                >
                  {comment.thread.isOpen
                    ? trans(locale)("hideReplies")
                    : trans(locale)("replies", { count: comment.thread.total })}
                </div>
              </Button>
            ) : null}
          </div>
        ) : null}

        <div className="likes">
          {comment.liked ? (
            <Button
              disabled={comment.isFetchingLikeDislike}
              onClick={() => unlikeComment(comment.id, threadId)}
              aria-label={trans(locale)("unlike")}
            >
              <LikedIcon />
            </Button>
          ) : (
            <Button
              disabled={comment.isFetchingLikeDislike}
              onClick={() => likeComment(comment.id, threadId)}
              aria-label={trans(locale)("like")}
            >
              <LikeIcon />
            </Button>
          )}
          <span>{comment.likes}</span>
        </div>
        <div className="dislikes">
          {comment.disliked ? (
            <Button
              disabled={comment.isFetchingLikeDislike}
              onClick={() => undislikeComment(comment.id, threadId)}
              aria-label={trans(locale)("undislike")}
            >
              <DislikedIcon />
            </Button>
          ) : (
            <Button
              disabled={comment.isFetchingLikeDislike}
              onClick={() => dislikeComment(comment.id, threadId)}
              aria-label={trans(locale)("dislike")}
            >
              <DislikeIcon />
            </Button>
          )}
          <span>{comment.dislikes}</span>
        </div>
      </div>
    ) : null}

    {!threadId ? <Thread comment={comment} /> : null}
  </div>
);
