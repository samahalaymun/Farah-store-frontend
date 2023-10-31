import React from "react";
import DropDown from "../Common/DropDown/DropDown";
import SortByTab from "./SortByTab";
import ProductsList from "./ProductsList";

function ShowProducts({ onFilterToggle }) {
  const sortByOptions = [
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically,Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old",
  ];
  return (
    <>
      <SortByTab
        sortByOptions={sortByOptions}
        numOfProducts={21}
        onFilterToggle={onFilterToggle}
      />
      <ProductsList />
    </>
  );
}

export default ShowProducts;
