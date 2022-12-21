import { useSelector, useDispatch } from "react-redux";

import { toggleCartOpen } from "./../../store/cart/cart.action";
import { selectIsCartOpen } from "./../../store/cart/cart.selector";
import { selectCartCount } from "./../../store/cart/cart.selector";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCartDropdown = () => {
    dispatch(toggleCartOpen(!isCartOpen));
  };
  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShoppingBag className="shopping-bag" />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
