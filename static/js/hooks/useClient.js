import { useEffect, useState } from "react";
import { isRequestFromSSR } from "../utilities/urls";

const useClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(
      window &&
        window.navigator &&
        !isRequestFromSSR(window.navigator.userAgent)
    );
  }, []);

  return isClient;
};

export default useClient;
