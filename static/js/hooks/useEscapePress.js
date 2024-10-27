import { useEffect } from "react";

// useEscapePress :: Callback -> _
const useEscapePress = (callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        callback(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [callback]);
};

export default useEscapePress;
