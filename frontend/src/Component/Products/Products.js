import React from "react";
import "./Products.css";
import Errorbox from "../Errorbox/Errorbox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

function Products() {
  return (
    <>
      <AddNewProduct />
      <ProductsTable />
    </>
  );
}

export default Products;
