import { i24LogoUrl } from "../../../../../utilities/constants";
import BaseImage from "../../../../Image";
import "./Images.scss";
import React from "react";

// Images :: Props -> React.Component
const Images = ({ signatures, variant = "default" }) => (
  <span className={`signature-images-${variant}`}>
    {signatures.map((signature, index) => (
      <React.Fragment key={index}>
        <BaseImage
          src={signature.image ? signature.image.href : i24LogoUrl}
          alt={signature.authorName}
          lazy={false}
          width={variant === "default" ? 36 : 30}
          height={variant === "default" ? 36 : 30}
        />
      </React.Fragment>
    ))}
  </span>
);

export default Images;
