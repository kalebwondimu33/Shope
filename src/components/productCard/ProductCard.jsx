import "./productcard.styles.scss";
import React from "react";
import Button from "../button/Button";
import { useContext } from "react";
import { CardDropContext } from "../../context/CardDropContext";
const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  const { addItemToCart } = useContext(CardDropContext);
  const addProductCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
