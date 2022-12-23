import { useDispatch, useSelector } from "react-redux";

import {
  clearItemFromCart,
  decrementItemCountFromCart,
  addItemToCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, quantity, price } = item;

  const handleClearItemFromCart = () => {
    dispatch(clearItemFromCart(item, cartItems));
  };

  const handleAddItemFromCart = () => {
    dispatch(addItemToCart(item, cartItems));
  };

  const handleSubtractItemFromCart = () => {
    dispatch(decrementItemCountFromCart(item, cartItems));
  };

  return (
    <div className="checkout-item">
      <img src={`${imageUrl}`} alt={name} />
      <div className="checkout-item-info">
        <p>{name}</p>
        <p>
          <span
            onClick={handleSubtractItemFromCart}
            className="cursor-pointer"
          >{`< `}</span>
          {quantity}
          <span
            onClick={handleAddItemFromCart}
            className="cursor-pointer"
          >{` >`}</span>
        </p>
        <p>{price}</p>
        <p onClick={handleClearItemFromCart} className="cursor-pointer">
          X
        </p>
      </div>
    </div>
  );
};

export default CheckoutItem;
