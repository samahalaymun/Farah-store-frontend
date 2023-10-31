import React from 'react'
import DropDown from '../Common/DropDown/DropDown';
import {AiOutlineFilter} from "react-icons/ai";
import PageInnerTab from '../Common/PageInnerTab/PageInnerTab';

function SortByTab({ sortByOptions, numOfProducts, onFilterToggle }) {
  return (
    <>
      <PageInnerTab>
        <div className="d-flex align-items-center justify-content-between">
          <div className="sort-by d-flex align-items-center justify-content-between gap-10">
            <p className="mb-0 sort-label">Sort By:</p>
            <div className="filter-mobile" onClick={onFilterToggle}>
              <AiOutlineFilter />
              Filter
            </div>
            <DropDown
              id="sortByDropDown"
              label="Best Selling"
              options={sortByOptions}
              className="btn sortByBtn dropdown-toggle bg-transparent
                 border-0 gap-15 d-flex align-items-center"
              ulClassName="sortByDropDown"
            />
          </div>
          <div className="total-products">
            <p className="mb-0">{numOfProducts} Products</p>
          </div>
        </div>
      </PageInnerTab>
    </>
  );
}

export default SortByTab
