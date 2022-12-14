import "./productcard.styles.scss";

const ProductCard = ({ item: { title, price, imageUrl } }) => {
  return (
    <div className="productcard">
      <img src={`${imageUrl}`} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
