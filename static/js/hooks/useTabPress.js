import { useEffect } from "react";

// useTabPress :: Callback -> _
const useTabPress = (callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        callback(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [callback]);
};

export default useTabPress;
