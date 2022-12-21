import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button from "./../Button/button.component";

import "./productcard.styles.scss";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = item;

  const handleAddToCart = () => {
    dispatch(addItemToCart(item, cartItems));
  };
  return (
    <div className="productcard">
      <div
        className="product-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <Button buttonType="inverted" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
      <div className="product-data">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
