import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../../components/productCard/ProductCard";
import "./shop.styles.scss";
const Shop = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="products-container">
      {product.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
