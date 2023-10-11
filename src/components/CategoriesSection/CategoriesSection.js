import React from 'react'
import "./CategoriesSection.css";
import CategoryCard from './CategoryCard';
function CategoriesSection() {
  return (
    <section className="home-wrapper-3 py-5">
      <div className="container-xxl ">
        <ul className="categories">
          <li>
            <CategoryCard
              catName="Accessories"
              image={process.env.PUBLIC_URL + "/images/accessories-cat.jpg"}
            />
          </li>
          <li>
            <CategoryCard
              catName="wedding Shoes"
              image={process.env.PUBLIC_URL + "/images/wedding-shoes.webp"}
            />
          </li>
          <li>
            <CategoryCard
              catName="Sandals"
              image={process.env.PUBLIC_URL + "/images/sandals.webp"}
            />
          </li>
          <li>
            <CategoryCard
              catName="casual shoes"
              image={process.env.PUBLIC_URL + "/images/casual.webp"}
            />
          </li>
          <li>
            <CategoryCard
              catName="Corset"
              image={process.env.PUBLIC_URL + "/images/corset.webp"}
            />
          </li>
          <li>
            <CategoryCard
              catName="Bags"
              image={process.env.PUBLIC_URL + "/images/bags.jpg"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CategoriesSection
