import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import Cart from "../cart/cart.component";

import "./navigation.styles.scss";
import { toggleCartOpen } from "./../../store/cart/cart.action";

const Navigation = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCart = () => {
    dispatch(toggleCartOpen(!isCartOpen));
  };

  return (
    <div>
      <div className="navigation">
        <div className="logo">
          <CrwnLogo />
        </div>
        <div className="nav-items">
          <Link className="nav-link" to="shop">
            Shop
          </Link>

          {currentUser === null ? (
            <Link className="nav-link" to="signin">
              SIGN IN
            </Link>
          ) : (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          )}

          <ShoppingBag className="shopping-bag" onClick={toggleCart} />
          {isCartOpen && <Cart />}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
