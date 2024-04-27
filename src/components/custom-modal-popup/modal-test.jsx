import React, { memo, useState } from "react";
import Modal from "./modal";

const ModalTest = memo(() => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          body={<div>Custom Body</div>}
          header={<h1>Custom Header</h1>}
          footer={<h1>Custom Footer</h1>}
          onClose={onClose}
        />
      )}
    </div>
  );
});

export default ModalTest;
