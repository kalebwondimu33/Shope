import React, { useContext } from "react";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import { CardDropContext } from "../../context/CardDropContext";
const CartIcon = () => {
  const { open, setOpen, cartTotal } = useContext(CardDropContext);
  return (
    <CartIconContainer onClick={() => setOpen(!open)}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartTotal}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
