import React from "react";
import CheckBox from "../Common/CheckBox";
import CardTitle from "../Common/CardTitle/CardTitle";

function FilterBySize() {
  return (
    <>
      <CardTitle className="card-sub-title" title="Size" />
      <div>
        <CheckBox label="36 (2)" id="36" />
        <CheckBox label="37 (5)" id="37" />
        <CheckBox label="38 (10)" id="38" />
        <CheckBox label="39 (9)" id="39" />
        <CheckBox label="40 (8)" id="40" />
        <CheckBox label="41 (9)" id="41" />
      </div>
    </>
  );
}

export default FilterBySize;
