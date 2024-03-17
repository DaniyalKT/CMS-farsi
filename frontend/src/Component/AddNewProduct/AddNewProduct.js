import React, { useState } from "react";
import "./AddNewProduct.css";
import { FaDollarSign } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { LuTextCursor } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";

function AddNewProduct({ isShowMessage, insertProduct }) {
  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  const insertProductSubmit = (e) => {
    e.preventDefault();

    const producntNewInsert = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    };

    insertProduct(producntNewInsert);

    if (isShowMessage == true) {
      toast.success("محصول با موفقیت افزوده شد");
      emptyInput()
    }
  };

  function emptyInput() {
    setProductNewPrice("");
    setProductNewTitle("");
    setProductNewCount("");
    setProductNewImg("");
    setProductNewPopularity("");
    setProductNewSale("");
    setProductNewColors("");
  }

  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید </h1>
      <form
        action="#"
        className="add-products-form"
        onSubmit={insertProductSubmit}
      >
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
            <LuTextCursor />
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-products-input"
              value={productNewTitle}
              onChange={(e) => setProductNewTitle(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <FaDollarSign />
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-products-input"
              value={productNewPrice}
              onChange={(e) => setProductNewPrice(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <IoBag />
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-products-input"
              value={productNewCount}
              onChange={(e) => setProductNewCount(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <FaRegImage />
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-products-input"
              value={productNewImg}
              onChange={(e) => setProductNewImg(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <FaStar />
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-products-input"
              value={productNewPopularity}
              onChange={(e) => setProductNewPopularity(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <FaCartShopping />
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-products-input"
              value={productNewSale}
              onChange={(e) => setProductNewSale(e.target.value)}
            />
          </div>{" "}
          <div className="add-products-form-group">
            <IoIosColorPalette />
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-products-input"
              value={productNewColors}
              onChange={(e) => setProductNewColors(e.target.value)}
            />
          </div>
        </div>
        <button className="add-products-submit">ثبت محصول</button>
      </form>
      <ToastContainer position="top-left" style={{ fontFamily: "Lalezar" }} />
    </div>
  );
}

export default AddNewProduct;
