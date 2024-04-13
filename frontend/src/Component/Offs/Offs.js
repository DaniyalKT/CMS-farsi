import React, { useState } from "react";
import "./Offs.css";
import Errorbox from "../Errorbox/Errorbox";
import useApiCrud from "../../Services/useApiCrud";
import DeleteModal from "../DeleteModal/DeleteModal";
import useAcceptReject from "../../Services/useAcceptReject";

function Offs() {
  const [offsData, fetchData, deleteOff, updateOff, insertOff, isShowMessage] =
    useApiCrud("http://localhost:8000/api/offs/");

  const [isAcceptReject, activeHandler] = useAcceptReject(
    "http://localhost:8000/api/offs"
  );

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowAcceptRejectModal, setIsShowAcceptRejectModal] = useState(false);
  const [acceptRejectTitle, setAcceptRejectTitle] = useState();
  const [offId, setOffId] = useState();
  const [putActive, setPutActive] = useState();
  const deleteModalSubmitHandler = () => {
    console.log("عملیات حذف انجام شد");

    deleteOff(offId);

    setIsShowDeleteModal(false);
  };
  const deleteModalCancelHandler = () => {
    console.log("عملیات حذف کنسل شد");
    setIsShowDeleteModal(false);
  };

  const acceptRejectSubmitHandler = () => {
    console.log("عملیات تایید انجام شد");
    activeHandler("active-off", offId, putActive, fetchData);
    setIsShowAcceptRejectModal(false);
  };
  const acceptRejectCancelHandler = () => {
    console.log("عملیات تایید کنسل شد");
    setIsShowAcceptRejectModal(false);
  };
  return (
    <div className="cms-main">
      {offsData.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>کد</th>
              <th>محصول</th>
              <th>ادمین</th>
              <th>درصد</th>
              <th>تاریخ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {offsData.map((off) => (
              <tr>
                <td>{off.code}</td>
                <td>{off.productID}</td>
                <td>{off.adminID}</td>
                <td>% {off.percent}</td>
                <td>{off.date}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setOffId(off.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => {
                      setIsShowAcceptRejectModal(true);
                      off.isActive == 0
                        ? setAcceptRejectTitle(
                            "آیا از تایید تخفیف اطمینان دارید؟ "
                          )
                        : setAcceptRejectTitle(
                            "آیا از لغو تایید تخفیف اطمینان دارید؟ "
                          );
                      off.isActive == 0 ? setPutActive(1) : setPutActive(0);
                      setOffId(off.id);
                    }}
                  >
                    {off.isActive == 0 ? "تایید" : "لغو تایید"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ تخفیفی یافت نشد" />
      )}

      {/* delete */}
      <DeleteModal
        title="آیا از حذف تخفیف مطمئن هستید؟"
        isShowDelete={isShowDeleteModal}
        SubmitAction={deleteModalSubmitHandler}
        CancelAction={deleteModalCancelHandler}
      />

      {/* accept & Reject  */}
      <DeleteModal
        title={acceptRejectTitle}
        isShowDelete={isShowAcceptRejectModal}
        SubmitAction={acceptRejectSubmitHandler}
        CancelAction={acceptRejectCancelHandler}
      />
    </div>
  );
}

export default Offs;
