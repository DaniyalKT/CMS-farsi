import React from "react";
import "./Products.css";
import Errorbox from "../Errorbox/Errorbox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";

function Products() {
  return (
    <>
      <AddNewProduct />
      <Errorbox msg="هیج محصولی یافت نشد" />
    </>
  );
}

export default Products;
