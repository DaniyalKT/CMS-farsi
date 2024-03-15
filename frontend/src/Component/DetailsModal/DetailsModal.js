import React from "react";
import ReactDOM from "react-dom";
import "./DetailsModal.css";

function DetailsModal({ isShowDetail, onHide, children }) {
  return ReactDOM.createPortal(
    <div className={isShowDetail ? "modal-parent active" : "modal-parent"}>
      <div className="details-modal ">
        {children}
        <div className="detail-close">
          <button className="details-close-btn" onClick={onHide}>
            بستن
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}

export default DetailsModal;
