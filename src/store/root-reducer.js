import { combineReducers } from "redux";
import { userReducer } from "./user/User-reducer";
import { categoriesReducer } from "./categories/categoryReducer";
import { CartReducer } from "./cart/cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: CartReducer,
});
