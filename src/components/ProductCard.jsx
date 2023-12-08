import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, isInCart } from "../features/cart/cartSlice"; 
import { FaStar } from "react-icons/fa";
import {  FaShoppingCart } from "react-icons/fa";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const isProductInCart = isInCart(cart, product.id); 

  return (
    <div className="Product-Card">
      <div className="" key={product.id}>
        <img src={product.image} className="Card-img"  />
        <div className="card-body">
          <h6 className="card-title">{product.title.substring(0, 25)}</h6>
          <p className="card-text "> $ : {product.price}</p>
          <p className="card-text text-secondary"> {product.rating.rate} <FaStar className="icon " /></p>

          {isProductInCart ? (
            <button className="btn " >
              Added 
            </button>
          ) : (
            <button className="btn" onClick={() => handleAdd(product)}>
                 <FaShoppingCart className="me-1" />   Add to cart   
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
