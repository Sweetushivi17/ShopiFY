import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError , isSuccess } = useSelector(
    (state) => state.products
  );

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleClick = (category) => {
    const updatedList = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(updatedList);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="container">
        <h1 className="all-products-title">Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <h1 className="all-products-title">Something Went Wrong...</h1>
      </div>
    );
  }

if (isSuccess){
  return (
    <div className="container d-flex flex-wrap justify-content-around p-5">
      <h1 className="all-products-title">All Products</h1>

      <div className="buttons d-flex justify-content-center">
        <button className="btn btn-outline-dark me-2" onClick={() => setFilteredProducts(products)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handleClick("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handleClick("electronics")}>Electronics</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handleClick("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handleClick("jewelery")}>Jewellery</button>
      </div>


   
      {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
    </div>
  );
}

};

export default ProductContainer;
