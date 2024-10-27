import { useEffect } from "react";

// useHistoryChange :: Callback -> _
const useHistoryChange = (callback) => {
  useEffect(() => {
    const handleHistoryChange = (event) => {
      callback(event);
    };

    window.addEventListener("popState", handleHistoryChange);
    window.addEventListener("pushState", handleHistoryChange);
    window.addEventListener("replaceState", handleHistoryChange);

    return () => {
      window.removeEventListener("popState", handleHistoryChange);
      window.removeEventListener("pushState", handleHistoryChange);
      window.removeEventListener("replaceState", handleHistoryChange);
    };
  }, [callback]);
};

export default useHistoryChange;
