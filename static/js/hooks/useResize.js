import { useEffect } from "react";

// useResize :: Callback -> Object
const useResize = (callback) => {
  useEffect(() => {
    const handleResize = () => {
      callback();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback]);
};

export default useResize;
