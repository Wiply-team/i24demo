import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import View from "./Modal";

const Modal = ({ children }) => {
  let modalRoot = document.getElementById("modal");
  const mainDivRef = useRef(document.createElement("aside"));

  useEffect(() => {
    const mainDiv = mainDivRef.current;
    if (modalRoot && mainDiv) {
      modalRoot.appendChild(mainDiv);
    }

    return () => {
      if (modalRoot && mainDiv) {
        modalRoot.removeChild(mainDiv);
      }
    };
  }, [modalRoot]);

  return mainDivRef.current ? createPortal(children, mainDivRef.current) : null;
};

Modal.Body = View;

export default Modal;
