import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from "../../utils/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
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

          <ShoppingBag className="shopping-bag" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
