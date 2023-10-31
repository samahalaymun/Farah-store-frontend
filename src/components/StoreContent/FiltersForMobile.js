import React from 'react'
import FilterCard from './FilterCard';
import FilterTitle from './FilterTitle';
import ShopByCat from './ShopByCat';
import FilterBy from './FilterBy';
import ProductTags from './ProductTags';
import { IoMdClose } from "react-icons/io";

function FiltersForMobile({ onToggle }) {
  return (
    <div className="mobile-filter-wrapper">
      <div className="mobile-filter-header">
        <span>Filter</span>
        <IoMdClose className="fs-1" onClick={onToggle} />
      </div>
      <FilterCard>
        <FilterTitle className="filter-title" title="Shop By Category" />
        <ShopByCat categories={["Accessories", "Shoes", "Bags", "Corset"]} />
      </FilterCard>
      <FilterCard>
        <FilterTitle className="filter-title" title="Filter By" />
        <FilterBy />
      </FilterCard>
      <FilterCard>
        <FilterTitle className="filter-title" title="Product Tags" />
        <ProductTags />
      </FilterCard>
    </div>
  );
}

export default FiltersForMobile
