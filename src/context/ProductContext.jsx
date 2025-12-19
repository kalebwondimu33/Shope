import { Children, createContext, useState } from "react";
import shopData from "../shop-data.json";
export const ProductContext = createContext({
  Product: [],
});

export const ProductsProvider = ({ children }) => {
  const [product, setProducts] = useState(shopData);
  const value = { product };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
