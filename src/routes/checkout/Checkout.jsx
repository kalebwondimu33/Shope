import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cartSelector";
import PaymentForm from "../../components/payment-form/PaymentForm";
import "./checkout.styles.scss";
import CheckoutItems from "../../components/checkout/CheckoutItems";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotals = useSelector(selectCartTotal);
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
      <PaymentForm />
    </div>
  );
};

export default Checkout;
