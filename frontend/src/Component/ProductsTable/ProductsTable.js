import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { MdOutlineTitle } from "react-icons/md";
import { FaDollarSign, FaBoxes, FaImage, FaStar } from "react-icons/fa";
import { MdOutlinePointOfSale } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";

import Errorbox from "../Errorbox/Errorbox";
import { ToastContainer, toast } from "react-toastify";

function ProductsTable({
  productData,
  deleteProduct,
  updateProduct,
  isShowMessage,
}) {
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [productID, setProductID] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState([]);

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  const deleteModalCandelHandler = () => {
    console.log("دیلیت کنسل شد");
    setIsShowDelete(false);
  };
  const deleteModalSubmitHandler = () => {
    console.log("دیلیت تایید شد");
    deleteProduct(productID);
    setIsShowDelete(false);
    if (isShowMessage == true) {
      toast.success("محصول مورد نظر حذف شد");
    }
  };

  const detailsModalCloseHandler = () => {
    setIsShowDetail(false);
  };

  const updateModalSubmitHandler = (event) => {
    event.preventDefault();
    let newUpdateProduct = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    };

    updateProduct(productID, newUpdateProduct);
    setIsShowEdit(false);
    if (isShowMessage == true) {
      toast.success("محصول مورد نظربا موفقیت ویرایش شد");
    }
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
            {productData.reverse().map((product) => (
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
                    onClick={() => {
                      setIsShowEdit(true);
                      setProductID(product.id);
                      setProductNewTitle(product.title);
                      setProductNewPrice(product.price);
                      setProductNewCount(product.count);
                      setProductNewImg(product.img);
                      setProductNewPopularity(product.popularity);
                      setProductNewSale(product.sale);
                      setProductNewColors(product.colors);
                    }}
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
        title="آیا از حذف اطمینان دارید؟"
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
        onSubmit={updateModalSubmitHandler}
      >
        <div className="edit-products-form-group">
          <span>
            <MdOutlineTitle />
          </span>
          <input
            type="text "
            placeholder="عنوان جدید را وارد کنید"
            className="edit-product-input"
            value={productNewTitle}
            onChange={(e) => setProductNewTitle(e.target.value)}
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <FaDollarSign />
          </span>
          <input
            type="text "
            placeholder=" مبلغ محصول را وارد کنید"
            className="edit-product-input"
            value={productNewPrice}
            onChange={(e) => setProductNewPrice(e.target.value)}
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <FaBoxes />
          </span>
          <input
            type="text "
            placeholder="موجودی محصول را وارد کنید"
            className="edit-product-input"
            value={productNewCount}
            onChange={(e) => setProductNewCount(e.target.value)}
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <FaImage />
          </span>
          <input
            type="text "
            placeholder="آدرس کاور محصول را وارد کنید"
            className="edit-product-input"
            value={productNewImg}
            onChange={(e) => setProductNewImg(e.target.value)}
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <FaStar />
          </span>
          <input
            type="text "
            placeholder="میزان محبوبیت محصول را وارد کنید"
            className="edit-product-input"
            value={productNewPopularity}
            onChange={(e) => setProductNewPopularity(e.target.value)}
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <MdOutlinePointOfSale />
          </span>
          <input
            type="text "
            placeholder="میزان فروش محصول را وارد کنید"
            className="edit-product-input"
            value={productNewSale}
            onChange={(e) => setProductNewSale(e.target.value)}
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <IoIosColorPalette />
          </span>
          <input
            type="text "
            placeholder="تعداد رنگ بندی را وارد کنید"
            className="edit-product-input"
            value={productNewColors}
            onChange={(e) => setProductNewColors(e.target.value)}
          />
        </div>
      </EditModal>
      <ToastContainer position="top-left" />
    </>
  );
}

export default ProductsTable;
