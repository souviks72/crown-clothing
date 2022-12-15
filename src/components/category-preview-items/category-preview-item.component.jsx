import { Link } from "react-router-dom";

import ProductCard from "../productcard/productcard.component";

import "./category-preview-item.styles.scss";

const CategoryPreviewItem = ({ category, items }) => {
  return (
    <div className="category-preview-item">
      <Link to={`${category}`} className="category">
        {category}
      </Link>
      <div className="product-cards-container">
        {items.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreviewItem;
