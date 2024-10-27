import React, { useRef, useState } from "react";
import useResize from "../../hooks/useResize";

// HTMLWidgetRenderer :: Props -> React.Component
const HTMLWidgetRenderer = ({ locale, id, title }) => {
  const ref = useRef();
  const [height, setHeight] = useState(0);
  const [hasLoadedWithErrors, setHasLoadedWithErrors] = useState(false);

  const onLoadHandler = (e) => {
    setHeight(
      e.target.contentWindow.document.body
        ? e.target.contentWindow.document.body.scrollHeight
        : 0
    );
  };

  const onErrorHandler = () => {
    setHasLoadedWithErrors(true);
  };

  useResize(() => {
    if (ref.current) {
      setHeight(
        ref.current.contentWindow.document.body
          ? ref.current.contentWindow.document.body.scrollHeight
          : 0
      );
    }
  });

  return hasLoadedWithErrors ? null : (
    <iframe
      ref={ref}
      src={`/${locale}/widgets/${id}`}
      title={title}
      tabIndex={-1}
      onLoad={onLoadHandler}
      onError={onErrorHandler}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "none",
      }}
    ></iframe>
  );
};

export default HTMLWidgetRenderer;
