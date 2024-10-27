import "./JumpToComments.scss";
import CommentsIcon from "../../Icons/Comment/CommentsIcon";
import React from "react";
import translations from "./translations";
import translate from "../../../utilities/translate";
import Loader from "../../../widgets/Generic/Loader";
import SecondaryButton from "../../../widgets/Button/SecondaryButton";

// trans :: String -> String -> String
const trans = translate(translations);

// JumpToComments :: () -> React.Component
export default ({ isFetching, locale, numberOfComments, scrollToCommentBox }) =>
  !isFetching ? (
    <div className="jump-to-comments">
      <span>{trans(locale)("total", { total: numberOfComments })}</span>
      <SecondaryButton onClick={scrollToCommentBox}>
        <div className="add-comment">
          {trans(locale)("add")}
          <CommentsIcon className="comment-icon" />
        </div>
      </SecondaryButton>
    </div>
  ) : (
    <Loader />
  );
