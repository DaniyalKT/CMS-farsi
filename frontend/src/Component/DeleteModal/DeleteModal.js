import React from "react";
import "./DeleteModal.css";
import ReactDOM from "react-dom";

function DeleteModal({title,isShowDelete , SubmitAction , CancelAction}) {
  return ReactDOM.createPortal(
    <div className={isShowDelete ? "modal-parent active": 'modal-parent'}>
      <div className="delete-modal">
        <h1 className="">{title}</h1>
        <div className="delete-modal-btns">
          <button className="delete-btn delete-modal-accept-btn" onClick={SubmitAction}>بله</button>
          <button className="delete-btn delete-modal-reject-btn" onClick={CancelAction}>خیر</button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}

export default DeleteModal;
