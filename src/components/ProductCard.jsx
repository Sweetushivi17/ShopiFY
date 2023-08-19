import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, isInCart } from "../features/cart/cartSlice"; 
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const isProductInCart = isInCart(cart, product.id); 

  return (
    <div className="col-md-3 col-sm-8 m-3">
      <div className="card text-center p-3" key={product.id}>
        <img src={product.image} class="card-img-top" height={"250px"} />
        <div className="card-body">
          <h6 className="card-title my-1">{product.title.substring(0, 25)}</h6>
          <p className="card-text lead fw-bold"> $ : {product.price}</p>
          <p className="card-text text-secondary"> {product.rating.rate} <FaStar className="icon m-1" /></p>

          {isProductInCart ? (
            <button className="btn btn-outline-dark " disabled>
              Added 
            </button>
          ) : (
            <button className="btn btn-outline-dark " onClick={() => handleAdd(product)}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
