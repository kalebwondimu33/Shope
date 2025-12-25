import "./productcard.styles.scss";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import { addItemToCart } from "../../store/cart/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { price, name, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const addProductCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductCart}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
