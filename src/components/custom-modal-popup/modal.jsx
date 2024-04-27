import React, { memo } from "react";
import { ModalWrapper } from "./style";

const Modal = memo(({ id, header, body, footer, onClose }) => {
  return (
    <ModalWrapper id={id || "Modal"}>
      <div className="content">
        <div className="header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </ModalWrapper>
  );
});

export default Modal;
