import React from "react";
import "./DeleteModal.css";
import ReactDOM from "react-dom";

function DeleteModal() {
  return ReactDOM.createPortal (
 
      <div className="delete-modal">
        <h1 className="">آیا از حذف اطمینان دارید؟</h1>
        <div className="delete-modal-btns">
          <button className="delete-btn delete-modal-accept-btn">بله</button>
          <button className="delete-btn delete-modal-reject-btn">خیر</button>
        </div>
      </div> , document.getElementById('modals-parent')
  );
}

export default DeleteModal;
