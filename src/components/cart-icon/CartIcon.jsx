import React, { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg?react";
import "./cart-icon.styles.scss";
import { CardDropContext } from "../../context/CardDropContext";
const CartIcon = () => {
  const { open, setOpen, cartTotal } = useContext(CardDropContext);
  return (
    <div className="cart-icon-container" onClick={() => setOpen(!open)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotal}</span>
    </div>
  );
};

export default CartIcon;
