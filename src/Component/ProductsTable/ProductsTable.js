import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

function ProductsTable() {
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);

  const deleteModalCandelHandler = () => {
    console.log("دیلیت کنسل شد");
    setIsShowDelete(false);
  };
  const deleteModalSubmitHandler = () => {
    console.log("دیلیت تایید شد");
    setIsShowDelete(false);
  };

  const detailsModalCloseHandler = () => {
    setIsShowDetail(false);
  };

  const updateProductInfos = (event) => {
    event.preventDefault()
    console.log("محصول ویرایش شد");
  };

  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr className="products-table-tr">
            <td>
              <img
                src="images/oil.jpg"
                alt="oil Image"
                className="products-table-img"
              />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>92000 تومان</td>
            <td>82</td>
            <td>
              <button
                className="products-table-btn"
                onClick={() => setIsShowDetail(true)}
              >
                جزئیات
              </button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowDelete(true)}
              >
                حذف
              </button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowEdit(true)}
              >
                ویرایش
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <DeleteModal
        isShowDelete={isShowDelete}
        SubmitAction={deleteModalSubmitHandler}
        CancelAction={deleteModalCandelHandler}
      />
      <DetailsModal
        isShowDetail={isShowDetail}
        onHide={detailsModalCloseHandler}
      />
      <EditModal
        onClose={isShowEdit}
        onSetClose={setIsShowEdit}
        onSubmit={updateProductInfos}
      ></EditModal>
    </>
  );
}

export default ProductsTable;
