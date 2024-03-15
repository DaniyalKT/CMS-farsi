import React from "react";
import ReactDOM from "react-dom";
import "./DetailsModal.css";

function DetailsModal({ isShowDetail, onHide }) {
  return ReactDOM.createPortal(
    <div className={isShowDetail ? "modal-parent active" : "modal-parent"}>
      <div className="details-modal ">
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>لپتاپ</td>
              <td>12,000,000</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
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
