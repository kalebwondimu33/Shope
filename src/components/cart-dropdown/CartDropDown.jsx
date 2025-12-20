import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartdropdown.styles";
import Button from "../button/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardDropContext } from "../../context/CardDropContext";
import CartItem from "../cart-item/CartItem";
const CartDropDown = () => {
  const navigate = useNavigate();
  const goToCheckoutHandle = () => {
    navigate("/checkout");
  };
  const { cartItems, open, setOpen } = useContext(CardDropContext);
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
