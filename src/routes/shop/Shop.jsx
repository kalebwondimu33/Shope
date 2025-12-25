import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

import { fetchCategoriesStart } from "../../store/categories/cateogryAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
