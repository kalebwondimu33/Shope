import "./category.styles.scss";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../context/CategoriesContext";
import ProductCard from "../../components/productCard/ProductCard";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
