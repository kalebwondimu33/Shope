import React from "react";
import { useContext } from "react";
import { CardDropContext } from "../../context/CardDropContext";
import "./checkout.styles.scss";
import CheckoutItems from "../../components/checkout/CheckoutItems";
const Checkout = () => {
  const { cartItems, cartTotals } = useContext(CardDropContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItems cartItem={cartItem} key={cartItem.id} />
      ))}
      <span className="total">Total : ${cartTotals}</span>
    </div>
  );
};

export default Checkout;
