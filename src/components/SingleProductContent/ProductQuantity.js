import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function ProductQuantity({value ,name}) {
  return (
    <div className="quantity-wrapper ">
      <button className="quantity-btn quantity-btn-minus">
        <AiOutlineMinus className="fs-5" />
      </button>
      <input
        type="number"
        className="quantity"
        name={name}
        min={1}
        max={10}
        value={value}
      />
      <button className="quantity-btn quantity-btn-plus">
        <AiOutlinePlus className="fs-5" />
      </button>
    </div>
  );
}

export default ProductQuantity
