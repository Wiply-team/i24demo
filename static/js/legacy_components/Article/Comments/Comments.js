import "./Comments.scss";
import ComponentObserver from "./../../ComponentObserver";
import LazyComponent from "../../../components/LazyComponent";
import React from "react";
import translations from "./translations";
import translate from "../../../utilities/translate";
import Heading from "../../../widgets/Typography/Heading";

const CommentList = LazyComponent("CommentList");

// trans :: String -> String -> String
const trans = translate(translations);

// Comments :: Props -> React.Component
const Comments = ({ locale }) => (
  <section data-is="article-comments">
    <Heading level="2">{trans(locale)("title")}</Heading>

    <ComponentObserver componentId="comment-list" component={CommentList} />
  </section>
);

export default Comments;
