import React, { useRef, useEffect, useState } from "react";
import { isNil, pipe, tap, when } from "ramda";
import Picture from "./Picture";
import useClient from "../../../hooks/useClient";

// Eager :: Props -> React.Component
const Eager = ({
  alt = "",
  className = "",
  fallbackSrc,
  onLoad,
  onError,
  src,
  ...restProps
}) => {
  const isClient = useClient();
  const imgRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (
      imgRef &&
      imgRef.current &&
      imgRef.current.src &&
      imgRef.current.complete &&
      imgRef.current.naturalHeight === 0
    ) {
      setError(true);
    }
  }, []);

  return isClient && error ? (
    <Picture alt={alt} className={className} src={fallbackSrc} {...restProps} />
  ) : (
    <Picture
      alt={alt}
      className={className}
      onLoad={onLoad}
      onError={pipe(
        tap(() => setError(true)),
        // Call original onError handler if defined
        when(() => !isNil(onError), onError)
      )}
      src={src}
      {...restProps}
      ref={imgRef}
    />
  );
};

export default Eager;
