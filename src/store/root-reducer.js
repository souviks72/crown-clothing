import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import categoryReducer from "./categories/category.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default rootReducer;
