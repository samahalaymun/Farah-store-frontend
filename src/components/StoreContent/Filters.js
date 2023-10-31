import React from 'react'
import ShopByCat from './ShopByCat';
import FilterBy from './FilterBy';
import ProductTags from './ProductTags';
import RandomProducts from './RandomProducts';
import { IoMdClose } from 'react-icons/io';
import Card from '../Common/Card/Card';
import CardTitle from "../Common/CardTitle/CardTitle"
function Filters({ onToggle }) {
  return (
    <div className="filters">
      <div className="mobile-filter-header">
        <span>Filter</span>
        <IoMdClose className="fs-1 filter-close" onClick={onToggle} />
      </div>
      <Card >
        <CardTitle className="card-title" title="Shop By Category" />
        <ShopByCat categories={["Accessories", "Shoes", "Bags", "Corset"]} />
      </Card>
      <Card>
        <CardTitle className="card-title" title="Filter By" />
        <FilterBy />
      </Card>
      <Card>
        <CardTitle className="card-title" title="Product Tags" />
        <ProductTags />
      </Card>
      <div className="random-products-mobile-mode">
        <Card>
          <CardTitle className="card-title" title="Random Products" />
          <RandomProducts />
        </Card>
      </div>
    </div>
  );
}

export default Filters
