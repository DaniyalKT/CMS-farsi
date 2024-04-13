import React, { useState } from "react";
import "./Orders.css";
import Errorbox from "../Errorbox/Errorbox";
import useApiCrud from "../../Services/useApiCrud";
import DetailsModal from "../DetailsModal/DetailsModal";
import useAcceptReject from "../../Services/useAcceptReject";
import DeleteModal from "../DeleteModal/DeleteModal";

function Orders() {
  const [
    ordersData,
    fetchData,
    deleteOrder,
    updateOrder,
    insertOrder,
    isShowMessage,
  ] = useApiCrud("http://localhost:8000/api/orders/");

  const [isAcceptReject, activeHandler] = useAcceptReject(
    "http://localhost:8000/api/orders"
  );

  let [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  let [isShowDetailModal, setIsShowDetailModal] = useState(false);
  let [isShowActiveRejectModal, setIsShowActiveRejectModal] = useState(false);

  let [activeRejectTitle, setActiveRejectTitle] = useState();

  let [orderID, setOrderID] = useState();
  let [mainOrderInfo, setMainOrderInfo] = useState([]);
  let [putActive, setPutActive] = useState();

  const onCloseDetailModalHandler = () => {
    setIsShowDetailModal(false);
    console.log(ordersData);
  };

  const activeRejectModalSubmitHandler = () => {
    activeHandler("active-order", orderID, putActive, fetchData);
    setIsShowActiveRejectModal(false);
  };
  const activeRejectModalCancelHandler = () => {
    console.log("عملیات تایید کنسل شد");
    setIsShowActiveRejectModal(false);
  };

  const deleteModalSubmitHandler = () => {
    console.log("عملیات حذف تایید شد");

    deleteOrder(orderID);

    setIsShowDeleteModal(false);
  };
  const deleteModalCancelHandler = () => {
    console.log("عملیات حذف کنسل شد");
    setIsShowDeleteModal(false);
  };
  return (
    <div className="cms-main">
      <h1 className="cms-title">سفارشات</h1>

      {ordersData.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>محصول</th>
              <th>کاربر</th>
              <th>تاریخ</th>
              <th>ساعت</th>
              <th>تعداد</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {ordersData.map((order) => (
              <tr>
                <td>{order.productID}</td>
                <td>{order.userID}</td>
                <td>{order.date}</td>
                <td>{order.hour}</td>
                <td>{order.count}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setOrderID(order.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => {
                      setIsShowDetailModal(true);
                      setMainOrderInfo(order);
                    }}
                  >
                    جزئیات
                  </button>
                  <button
                    onClick={() => {
                      setIsShowActiveRejectModal(true);
                      setOrderID(order.id);
                      order.isActive == 0 ? setPutActive(1) : setPutActive(0);
                      order.isActive == 0
                        ? setActiveRejectTitle("آیا از تایید اطمینان دارید؟")
                        : setActiveRejectTitle(
                            "آیا از لغو تایید اطمینان دارید؟ "
                          );
                    }}
                  >
                    {order.isActive == 0 ? "تایید " : "لغو تایید"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ سفارشی یافت نشد" />
      )}

      <DetailsModal
        isShowDetail={isShowDetailModal}
        onHide={onCloseDetailModalHandler}
      >
        <table className="cms-table">
          <thead>
            <tr>
              <th>تعداد فروش</th>
              <th>قیمت</th>
              <th>تخفیف</th>
              <th>فروش</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{mainOrderInfo.sale_count}</td>
              <td>{Number(mainOrderInfo.price).toLocaleString()}</td>
              <td>% {mainOrderInfo.off}</td>
              <td>{Number(mainOrderInfo.sale).toLocaleString()}</td>
              <td>% {mainOrderInfo.popularity}</td>
            </tr>
          </tbody>
        </table>
      </DetailsModal>

      {/* Active Reject */}
      <DeleteModal
        title={activeRejectTitle}
        isShowDelete={isShowActiveRejectModal}
        SubmitAction={activeRejectModalSubmitHandler}
        CancelAction={activeRejectModalCancelHandler}
      />

      {/* Delete */}
      <DeleteModal
        title="آیا از حذف اطمینان دارید؟"
        isShowDelete={isShowDeleteModal}
        SubmitAction={deleteModalSubmitHandler}
        CancelAction={deleteModalCancelHandler}
      />
    </div>
  );
}

export default Orders;
