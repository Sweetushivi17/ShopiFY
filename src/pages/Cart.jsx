import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import CartImg from '../assets/cart.svg'

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <img src={CartImg} alt="" />
        <h1>Add products to your cart</h1>
      </div>
    );
  }

  const totalAmount = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="bill-section">
        <h1>
          Total Amount : <br /> <br /> $ {totalAmount.toFixed(2)} {}
        </h1>
        <button className="pay-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
