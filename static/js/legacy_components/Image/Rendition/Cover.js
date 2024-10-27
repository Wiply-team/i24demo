import Image from "../index";
import React from "react";

export default (props) => (
  <Image
    {...props}
    width={1000}
    sources={[
      {
        renditions: [{ width: 1000 }],
        media: "(min-width: 1000px)",
      },
      {
        renditions: [{ width: 750 }],
        media: "(min-width: 480px) and (max-width: 1000px)",
      },
      {
        renditions: [{ width: 480 }],
        media: "(max-width: 480px)",
      },
    ]}
  />
);
