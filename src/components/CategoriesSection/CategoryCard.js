import React from 'react'
import "./CategoriesSection.css";
function CategoryCard({image,catName}) {
  return (
    <div className="category-card">
      <img src={image} />
      <div className="category-card-content">
        <h6>{catName}</h6>
      </div>
    </div>
  );
}

export default CategoryCard
