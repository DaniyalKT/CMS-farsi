import React from "react";
import './AddNewProduct.css'
import { FaDollarSign } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { LuTextCursor } from "react-icons/lu";

function AddNewProduct() {
  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید </h1>
      <form action="#" className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
            <LuTextCursor/>
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <FaDollarSign />
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <IoBag/>
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <FaRegImage />
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <FaStar/>
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <FaCartShopping/>
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-products-input"
            />
          </div>{" "}
          <div className="add-products-form-group">
            <IoIosColorPalette/>
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-products-input"
            />
          </div>
        </div>
       <button className="add-products-submit">ثبت محصول</button>
      </form>
    </div>
  );
}

export default AddNewProduct;
