import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="title-bar">
        <p className="title-img">Product</p>
        <div className="title-info">
          <p className="title">Name</p>
          <p className="title">Quantity</p>
          <p className="title">Price</p>
          <p className="title">Remove</p>
        </div>
      </div>
      <div className="checkout-items-list">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <p className="cart-total">Total: ${cartTotal}</p>
    </div>
  );
};

export default Checkout;
