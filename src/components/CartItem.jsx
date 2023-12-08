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
     <div className="img-sec"> <img src={cartItem.image} alt="" /></div>
      <div className="details">
        <h5>{cartItem.title}</h5>
        <h5>Price : $ {cartItem.price}</h5>
        <h5>
          Qty :
          {cartItem.quantity > 1 ? (
            <span>
              {cartItem.quantity} x {cartItem.price}
            </span>
          ) : (
            <span> 1 x {cartItem.price}</span>
          )}
        </h5>
      
        <span className="btn-sec">
        <button
          className="cart-btn "
          onClick={() => handleAdd(cartItem)}
        >
          <FaPlus />
        </button>
        <button
          className="cart-btn  "
          onClick={() => handleReduce(cartItem)}
        >
          <FaMinus />
        </button>
      </span>
        <button
          className="cart-btn remove-btn "
          onClick={() => handleRemove(cartItem.id)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;



