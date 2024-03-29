import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartItems,
  selectCartCount,
} from "../../store/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";
import Button from "../Button/button.component";

import "./cart.styles.scss";

const Cart = () => {
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("checkout");
  };

  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="cart-container">
      <div className="cart-items-list">
        {cartCount > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default Cart;
