import Image from "../index";
import React from "react";
import { always, cond, equals, T } from "ramda";

const Default = (props) => <Image {...props} width={350} />;

const Large = (props) => (
  <Image
    {...props}
    width={350}
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

const Small = (props) => <Image {...props} width={180} />;

const List = ({ size = "default", ...props }) =>
  cond([
    [equals("large"), always(<Large {...props} />)],
    [equals("small"), always(<Small {...props} />)],
    [T, always(<Default {...props} />)],
  ])(size);

export default List;
