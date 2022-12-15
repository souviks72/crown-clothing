import { useSelector } from "react-redux";
import { selectCategoriesMap } from "./../../store/categories/category.selector";

import CategoryPreviewItem from "../category-preview-items/category-preview-item.component";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className="categories-preview-container">
      {Object.keys(categoriesMap).map((category) => (
        <CategoryPreviewItem
          key={category}
          category={category}
          items={categoriesMap[category].slice(0, 4)}
        />
      ))}
    </div>
  );
};

export default CategoriesPreview;
