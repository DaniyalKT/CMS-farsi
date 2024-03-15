import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Errorbox from "../Errorbox/Errorbox";
import useApiCrud from "../../Services/useApiCrud";
import { ToastContainer, toast } from "react-toastify";

function ProductsTable() {
  const [productData, deleteProduct, deleteMassage] = useApiCrud(
    "http://localhost:8000/api/products/"
  );

  const [isShowDelete, setIsShowDelete] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [productID, setProductID] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState([]);
  

  const deleteModalCandelHandler = () => {
    console.log("دیلیت کنسل شد");
    setIsShowDelete(false);
  };
  const deleteModalSubmitHandler = () => {
    console.log("دیلیت تایید شد");
    deleteProduct(productID);
    setIsShowDelete(false);
    if (deleteMassage == true) {
      toast.success("محصول مورد نظر حذف شد");
    } else {
      toast.warning("حذف انجام نشد");
    }
  };

  const detailsModalCloseHandler = () => {
    setIsShowDetail(false);
  };

  const updateProductInfos = (event) => {
    event.preventDefault();
    console.log("محصول ویرایش شد");
  };

  return (
    <>
      {productData.length ? (
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
            {productData.map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price.toLocaleString()} تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDetail(true);
                      setMainProductInfos(product);
                    }}
                  >
                    جزئیات
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDelete(true);
                      setProductID(product.id);
                    }}
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
      >
        <table className="cms-table">
          <thead>
            <tr>
              <th>محبوبیت</th>
              <th>فروش</th>
              <th>رنگ بندی</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>% {mainProductInfos.popularity}</td>
              <td>{Number(mainProductInfos.sale).toLocaleString()}</td>
              <td>{mainProductInfos.colors}</td>
            </tr>
          </tbody>
        </table>
      </DetailsModal>
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
      <ToastContainer position="top-left" style={{ fontFamily: "Lalezar" }} />
    </>
  );
}

export default ProductsTable;
