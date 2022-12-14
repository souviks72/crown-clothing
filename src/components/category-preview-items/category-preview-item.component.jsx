import ProductCard from "../productcard/productcard.component";

import "./category-preview-item.styles.scss";

const CategoryPreviewItem = ({ category, items }) => {
  return (
    <div className="category-preview-item">
      <p className="category">{category}</p>
      {items.map((item, idx) => (
        <ProductCard key={idx} item={item} />
      ))}
    </div>
  );
};

export default CategoryPreviewItem;
