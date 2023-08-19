import React from "react";
import { useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import { remove, increaseQuantity , decreaseQuantity } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleAdd = (cartItem) => {
    dispatch(increaseQuantity(cartItem.id));
  };

  const handleReduce = (cartItem) => {
    dispatch(decreaseQuantity(cartItem.id));
  };


  return (
    <div className="cart-item">
      <img src={cartItem.image} alt="" />
      <span className="details">
        <h5>{cartItem.title}</h5>
        <h5>Price : ${cartItem.price}</h5>
        <h5>Qty : {cartItem.quantity} x {cartItem.price}</h5> {}
        <span className="btn-sec">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => handleAdd(cartItem)}
        >
          <FaPlus />
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => handleReduce(cartItem)}
        >
          <FaMinus />
        </button>
      </span>
        <button
          className="btn btn-outline-dark my-4 "
          onClick={() => handleRemove(cartItem.id)}
        >
          Remove Item
        </button>
      </span>
    </div>
  );
};

export default CartItem;



