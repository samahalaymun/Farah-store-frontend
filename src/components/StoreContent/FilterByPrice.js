import React from 'react'
import CardTitle from '../Common/CardTitle/CardTitle';

function FilterByPrice() {
  return (
    <>
      <CardTitle className="card-sub-title" title="Price" />
      <div className="d-flex justify-content-between gap-10 mb3 align-items-center ">
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="fromPrice"
            placeholder="from"
          />
          <label htmlFor="fromPrice">From</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="priceTo"
            placeholder="to"
          />
          <label htmlFor="priceTo">To</label>
        </div>
      </div>
    </>
  );
}

export default FilterByPrice;
