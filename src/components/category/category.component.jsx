import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { selectCategoriesMap } from "./../../store/categories/category.selector";

import "./category.styles.scss";
import ProductCard from "../productcard/productcard.component";

const Category = () => {
  const { category } = useParams();
  const [categoriesData, setCategoriesData] = useState([]);
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(() => {
    setCategoriesData(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <h2 className="category-name">{category}</h2>
      <div className="category-items">
        {categoriesData.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
