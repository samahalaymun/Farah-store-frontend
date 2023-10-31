import React from "react";
import FilterByPrice from "./FilterByPrice";
import FilterByColor from "./FilterByColor";
import FilterByAvailability from "./FilterByAvailability";
import FilterBySize from "./FilterBySize";

function FilterBy() {
  return (
    <div>
      <FilterByAvailability />
      <FilterByPrice />
      <FilterByColor />
      <FilterBySize />
      
    </div>
  );
}

export default FilterBy;
