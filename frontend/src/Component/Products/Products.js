import React from "react";
import "./Products.css";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import useApiCrud from "../../Services/useApiCrud";

function Products() {
  const [
    productData,
    fetchData,
    deleteProduct,
    updateProduct,
    insertProduct,
    isShowMessage,
  ] = useApiCrud("http://localhost:8000/api/products/");

  return (
    <>
      <AddNewProduct 
        insertProduct={insertProduct}
        isShowMessage={isShowMessage}
      />
      <ProductsTable
        productData={productData}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
        isShowMessage={isShowMessage}
      />
    </>
  );
}

export default Products;
