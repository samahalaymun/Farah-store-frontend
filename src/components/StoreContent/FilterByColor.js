import React from 'react'
import CardTitle from '../Common/CardTitle/CardTitle';

function FilterByColor() {
  return (
    <>
      <CardTitle className="card-sub-title" title="Color" />
      <div className="d-flex flex-wrap ">
        <ul className="colors ps-0">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default FilterByColor
