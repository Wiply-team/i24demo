import { equals, isNil, path, prop } from "ramda";
import React from "react";
import TrashIcon from "./../../../Icons/TrashIcon.js";
import translations from "../translations";
import translate from "../../../../utilities/translate";
import Button from "../../../../widgets/Button/Base";
import CancelButton from "../../../../widgets/Button/CancelButton";
import PrimaryButton from "../../../../widgets/Button/PrimaryButton";

// trans :: String -> String -> String
const trans = translate(translations);

// shouldDisplayDeleteButton :: (Comment, User) -> Boolean
const shouldDisplayDeleteButton = (comment, user) =>
  comment !== null &&
  !isNil(user) &&
  equals(prop("id", user), path(["author", "id"], comment)) &&
  !comment.isDeleted;

// CommentDeleteForm :: Props -> React.Component
export default ({
  cancelDelete,
  confirmDelete,
  deleteComment,
  commentToBeDeleted,
  deleting,
  user,
  comment = null,
  threadId = null,
  locale,
}) =>
  shouldDisplayDeleteButton(comment, user) ? (
    <div className="deletion">
      {commentToBeDeleted === comment.id ? (
        <div className="confirm">
          <p>{trans(locale)("areYouSure")}</p>
          <div className="confirm-buttons">
            <PrimaryButton
              disabled={deleting}
              onClick={() => confirmDelete(comment.id, threadId)}
            >
              {trans(locale)("yes")}
            </PrimaryButton>
            <CancelButton onClick={cancelDelete}>
              {trans(locale)("no")}
            </CancelButton>
          </div>
        </div>
      ) : (
        <div className="toggle-wrapper">
          <Button
            onClick={() => deleteComment(comment.id)}
            aria-label={trans(locale)("deleteComment")}
          >
            <TrashIcon />
          </Button>
        </div>
      )}
    </div>
  ) : null;
