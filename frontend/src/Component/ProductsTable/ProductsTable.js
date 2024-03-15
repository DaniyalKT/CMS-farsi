import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Errorbox from "../Errorbox/Errorbox";

function ProductsTable() {
  const [allProducts, setAllProducts] = useState([]);
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
    event.preventDefault();
    console.log("محصول ویرایش شد");
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((response) => response.json())
      .then((products) => setAllProducts(products));
  }, []);

  return (
    <>
      {allProducts.length ? (
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
            {allProducts.map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price} تومان</td>
                <td>{product.count}</td>
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
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ محصولی یافت نشد" />
      )}

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
      >
        <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text "
            placeholder="عنوان جدید را وارد کنید"
            className="edit-product-input"
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text "
            placeholder="عنوان جدید را وارد کنید"
            className="edit-product-input"
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text "
            placeholder="عنوان جدید را وارد کنید"
            className="edit-product-input"
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text "
            placeholder="عنوان جدید را وارد کنید"
            className="edit-product-input"
          />
        </div>
      </EditModal>
    </>
  );
}

export default ProductsTable;
