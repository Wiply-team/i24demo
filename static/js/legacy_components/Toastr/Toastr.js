import "./Toastr.scss";
import React from "react";
import Button from "../../widgets/Button/Base";
import CloseIcon from "../Icons/CloseIcon";

export default ({ close, toasts }) => (
  <div className="toastr">
    {toasts.map((toast) => (
      <div
        key={`toast-${toast.id}`}
        id={`toast-${toast.id}`}
        className={`toast toast-${toast.level}`}
      >
        <span className="message">{toast.message}</span>
        <div className="close-button">
          <Button onClick={close(toast.id)}>
            <CloseIcon width={14} height={14} />
          </Button>
        </div>
      </div>
    ))}
  </div>
);
