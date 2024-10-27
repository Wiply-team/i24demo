import Image from "../index";
import React from "react";

export default (props) => (
  <Image
    {...props}
    width={750}
    sources={[
      {
        renditions: [{ width: 750 }],
        media: "(min-width: 480px)",
      },
      {
        renditions: [{ width: 350 }],
        media: "(max-width: 480px)",
      },
    ]}
  />
);
