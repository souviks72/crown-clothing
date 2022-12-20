import Button from "../Button/button.component";

import "./cart.styles.scss";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-items-list">Cart items</div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default Cart;
