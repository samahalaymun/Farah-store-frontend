import React from "react";
import "./SingleProductContent.css";
import ProductsSection from "../ProductsSection/ProductsSection";
import SingleProductCard from "./SingleProductCard";
import Reviews from "./Reviews";
import ProductDescription from "./ProductDescription";
import { useState } from "react";
import SingleProductCardMobile from "./SingleProductCardMobile";

function SingleProductContent() {
  
  return (
    <div className="single-product-wrapper py-0 position-relative  py-md-4">
        <SingleProductCardMobile />
        <SingleProductCard />
        <ProductDescription />
        <Reviews  />
        <ProductsSection header="You may also like" />
    </div>
  );
}

export default SingleProductContent;
