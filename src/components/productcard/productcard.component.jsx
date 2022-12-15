import "./productcard.styles.scss";
import Button from "./../Button/button.component";

const ProductCard = ({ item: { name, price, imageUrl } }) => {
  return (
    <div className="productcard">
      <div
        className="product-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <Button buttonType="inverted">Add to cart</Button>
      </div>
      <div className="product-data">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
