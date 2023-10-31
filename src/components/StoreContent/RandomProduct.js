import React from 'react'

function RandomProduct({img ,title,price}) {
  return (
    <div className="random-product py-3 d-flex ">
      <div className="w-50 product-img">
        <img src={img} alt="random-product" className="img-fluid" />
      </div>
      <div className="w-50 random-product-details">
        <h5>{title}</h5>
        <b>{"₪" + price}</b>
        <button className="btn-primary mt-3">Add To Card</button>
      </div>
    </div>
  );
}

export default RandomProduct
