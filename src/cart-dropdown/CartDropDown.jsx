import "./cartdropdown.styles.scss";
import Button from "../components/button/Button";
import React from "react";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
