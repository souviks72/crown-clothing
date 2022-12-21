import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartCount,
} from "../../store/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";
import Button from "../Button/button.component";

import "./cart.styles.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="cart-container">
      <div className="cart-items-list">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default Cart;
