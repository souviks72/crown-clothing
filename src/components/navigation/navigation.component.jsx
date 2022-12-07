import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <CrwnLogo />
      </div>
      <div className="nav-items">
        <a className="nav-link" href="/#">
          Shop
        </a>
        <a className="nav-link" href="/#">
          Sign In
        </a>
        <ShoppingBag className="shopping-bag" />
      </div>
    </div>
  );
};

export default Navigation;
