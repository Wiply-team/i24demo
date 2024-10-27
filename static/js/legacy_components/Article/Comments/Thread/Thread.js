import "./Thread.scss";
import Comment from "./../Comment";
import CommentForm from "./../CommentForm";
import LoadMoreButton from "./../../../Button/LoadMoreButton";
import Loader from "../../../../widgets/Generic/Loader";
import React from "react";

// Thread :: Props -> React.Component
export default ({ comment, fetchComments }) => (
  <div data-is="thread">
    {comment.thread.isOpen ? (
      <div className="list">
        {comment.thread.list.map((threadComment) => (
          <Comment
            key={`comment_${threadComment.id}`}
            comment={threadComment}
            threadId={comment.id}
          />
        ))}

        {comment.thread.loading ? <Loader /> : null}

        {comment.thread.list.length < comment.thread.total &&
        !comment.thread.loading ? (
          <LoadMoreButton onClick={() => fetchComments(comment.id)} />
        ) : null}
      </div>
    ) : null}

    {comment.thread.isFormOpen ? (
      <div className="reply-form">
        <CommentForm threadId={comment.id} />
      </div>
    ) : null}
  </div>
);
