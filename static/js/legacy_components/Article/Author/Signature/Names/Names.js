import "./Names.scss";
import React from "react";
import Separator from "../../Separator";
import ExternalLink from "../../../../../components/Routing/ExternalLink";

const Base = ({ signatures }) => (
  <span className="signature-names">
    {signatures.map((signature, index) => (
      <React.Fragment key={index}>
        {signature.frontendUrl ? (
          <span className="signature-link">
            <ExternalLink href={signature.frontendUrl}>
              {signature.authorName}
            </ExternalLink>
          </span>
        ) : (
          signature.authorName
        )}
        {index < signatures.length - 1 ? <>,&nbsp;</> : ""}
      </React.Fragment>
    ))}
  </span>
);

// Names :: Props -> React.Component
const Names = ({ signatures }) =>
  signatures.length === 1 ? (
    <Base signatures={signatures} />
  ) : (
    <>
      <Separator />
      <Base signatures={signatures} />
    </>
  );

export default Names;
