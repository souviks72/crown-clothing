import { createAction } from "./../../utils/redux.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const toggleCartOpen = (payload) =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, payload);
