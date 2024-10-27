import "./Author.scss";
import React from "react";
import Names from "./Signature/Names";
import Links from "./Signature/Links";
import ReadingTime from "./Article/ReadingTime";
import PublishedAt from "./Article/PublishedAt";
import LastRevision from "./Article/LastRevision";
import JobTitle from "./Signature/JobTitle";
import Images from "./Signature/Images";
import Separator from "./Separator";
import { isSameDate } from "../../../utilities/datetimes";

// Author :: Props -> React.Component
const Author = ({ signatures, updatedAt, publishedAt }) => (
  <div data-is="author">
    <div className="wrapper">
      {signatures.length === 1 ? (
        <>
          <div className="image-wrapper">
            <Images signatures={[signatures[0]]} />
          </div>
          <div className="information-wrapper">
            <Names signatures={[signatures[0]]} />
            <JobTitle jobTitle={signatures[0].jobTitle} />
            <Links links={signatures[0].links} />
          </div>
        </>
      ) : (
        <div className="information-with-image-wrapper">
          <Images signatures={signatures} variant="multiple" />
          <Names signatures={signatures} />
        </div>
      )}
      <div className="reading-time-wrapper hide-md">
        <ReadingTime />
      </div>
    </div>
    <div className="show-md">
      <ReadingTime />
    </div>
    <div className="common-information-wrapper">
      <PublishedAt />
      {!isSameDate(publishedAt, updatedAt) ? <Separator /> : null}
      <LastRevision />
    </div>
  </div>
);

export default Author;
