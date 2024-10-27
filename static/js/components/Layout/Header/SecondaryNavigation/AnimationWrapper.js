import React, { useEffect, useState } from "react";
import View from "./SecondaryNavigation";
import ClientOnly from "../../../../legacy_components/ClientOnly";

// AnimationWrapper :: Props -> React.Component
const AnimationWrapper = (props) => {
  const [move, setMove] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMove(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ClientOnly fallBack={<View {...props} move={true} />}>
      <View {...props} move={move} />
    </ClientOnly>
  );
};

export default AnimationWrapper;
