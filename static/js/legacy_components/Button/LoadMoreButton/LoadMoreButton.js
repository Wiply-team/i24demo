import "./LoadMoreButton.scss";
import React from "react";
import translate from "../../../utilities/translate";
import translations from "./translations";
import Button from "../../../widgets/Button/Base";

// trans :: String -> String -> String
const trans = translate(translations);

// LoadMoreButton :: Props
export default ({ onClick, locale }) => (
  <Button onClick={onClick}>
    <span className="load-more">{trans(locale)("loadMore")}</span>
  </Button>
);
