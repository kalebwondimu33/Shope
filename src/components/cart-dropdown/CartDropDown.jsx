import "./cartdropdown.styles.scss";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandle}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
