import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./EditModal.css";
export default function EditModal({ children, onClose, onSetClose, onSubmit }) {
  return ReactDOM.createPortal(
    <div className={onClose ? "modal-parent active" : "modal-parent"}>
      <form className="edit-modal-form">
        <h1>اطلاعات جدید را وارد نمایید</h1>

        {children}
        <div className="edit-form-btns">
          <button className="edit-form-submit" onClick={onSubmit}>
            ثبت اطلاعات جدید
          </button>
          <button
            className="edit-form-edit"
            onClick={() => {
              onSetClose(false);
            }}
          >
            بستن
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("modals-parent")
  );
}
