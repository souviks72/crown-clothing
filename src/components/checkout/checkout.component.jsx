import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  clearItemFromCart,
  decrementItemCountFromCart,
  addItemToCart,
} from "../../store/cart/cart.action";

import "./checkout.styles.scss";

const Checkout = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  return (
    <div className="checkout-container">
      <div className="title-bar">
        <p className="title">Product</p>
        <p className="title">Name</p>
        <p className="title">Quantity</p>
        <p className="title">Price</p>
        <p className="title">Remove</p>
      </div>
    </div>
  );
};

export default Checkout;
