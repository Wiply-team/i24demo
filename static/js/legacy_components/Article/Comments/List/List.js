import Comment from "../Comment";
import CommentForm from "../CommentForm";
import LoadMoreButton from "../../../Button/LoadMoreButton";
import Loader from "../../../../widgets/Generic/Loader";
import React from "react";
import Toast from "../../../Toastr/Toast";
import styles from "./List.module.css";
import translations from "../translations";
import translate from "../../../../utilities/translate";

// trans :: String -> String -> String
const trans = translate(translations);

// List :: Props -> React.Component
const List = ({
  comments = [],
  total = 0,
  loading = false,
  error,
  fetchComments,
  locale,
}) => (
  <>
    {error ? <Toast message={trans(locale)("error")} /> : null}

    {total === 0 ? (
      <p className={styles["empty-comment"]}>{trans(locale)("noComments")}</p>
    ) : null}

    <CommentForm />

    {total > 0
      ? comments.map((comment) => (
          <Comment key={`comment_${comment.id}`} comment={comment} />
        ))
      : null}

    {loading ? <Loader /> : null}

    {comments.length < total && !loading ? (
      <LoadMoreButton onClick={() => fetchComments()} />
    ) : null}
  </>
);

export default List;
