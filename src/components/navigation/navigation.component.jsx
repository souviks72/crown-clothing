import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart/cart.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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

          <CartIcon />
          {isCartOpen && <Cart />}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
