import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./navigation.styles.scss";

const Navigation = () => {
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
          <Link className="nav-link" to="signin">
            Sign In
          </Link>
          <ShoppingBag className="shopping-bag" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
