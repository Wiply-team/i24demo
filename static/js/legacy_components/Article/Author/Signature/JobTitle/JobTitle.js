import { isEmpty } from "ramda";
import "./JobTitle.scss";
import React from "react";
import Separator from "../../Separator";

// JobTitle :: Props -> React.Component
const JobTitle = ({ jobTitle = "" }) =>
  !isEmpty(jobTitle) ? (
    <>
      <Separator />
      <span className="signature-job-title">{jobTitle}</span>
    </>
  ) : null;

export default JobTitle;
