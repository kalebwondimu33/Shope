import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartdropdown.styles";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cartSelector";
import Button from "../button/Button";

import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
const CartDropDown = () => {
  const navigate = useNavigate();
  const goToCheckoutHandle = () => {
    navigate("/checkout");
  };

  const cartItems = useSelector(selectCartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandle}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
