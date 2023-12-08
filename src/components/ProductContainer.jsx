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
      <div className="Product-container">
        <h1 className="all-products-title">Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="Product-container">
        <h1 className="all-products-title">Something Went Wrong...</h1>
      </div>
    );
  }

if (isSuccess){
  return (
    <div className="Product-container ">
      <h1 className="all-products-title">All Products</h1>
      <div className="buttons">
        <button className="btn " onClick={() => setFilteredProducts(products)}>All</button>
        <button className="btn " onClick={() => handleClick("men's clothing")}>Men's Clothing</button>
        <button className="btn " onClick={() => handleClick("electronics")}>Electronics</button>
        <button className="btn " onClick={() => handleClick("women's clothing")}>Women's Clothing</button>
        <button className="btn " onClick={() => handleClick("jewelery")}>Jewellery</button>
      </div>


   
      {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
    </div>
  );
}

};

export default ProductContainer;
