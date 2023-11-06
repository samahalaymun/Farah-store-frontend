import React from 'react'
import "./DiscountLabel.css";

function DiscountLabel({discount}) {
  return (
    <div className="discount-label">
      <span>{discount*100}%</span>
    </div>
  );
}

export default DiscountLabel
