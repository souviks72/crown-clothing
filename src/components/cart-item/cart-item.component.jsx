import "./cart-item.styles.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="cart-item-container">
      <img className="cart-item-img" src={`${imageUrl}`} alt={name} />
      <div className="cart-item-info">
        <p className="cart-item-name">{name}</p>
        <p className="price-quantity">
          {quantity} X ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
