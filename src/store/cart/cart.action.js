import { createAction } from "./../../utils/redux.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const toggleCartOpen = (payload) =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, payload);

const addCartItem = (item, cartItems) => {
  const exists = cartItems.find((cartItem) => item.id === cartItem.id);

  if (exists) {
    return cartItems.map((cartItem) => {
      if (item.id === cartItem.id)
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      return cartItem;
    });
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const addItemToCart = (item, cartItems) => {
  const newCartItems = addCartItem(item, cartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
