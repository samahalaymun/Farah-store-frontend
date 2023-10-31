import React from 'react'
import CheckBox from '../Common/CheckBox';
import CardTitle from '../Common/CardTitle/CardTitle';

function FilterByAvailability() {
  return (
    <>
      <CardTitle className="card-sub-title" title="Availability" />
      <CheckBox label="In Stock (10)" id="inStock" />
      <CheckBox label="Out Of Stock (5)" id="outOFStock" />
    </>
  );
}

export default FilterByAvailability;
