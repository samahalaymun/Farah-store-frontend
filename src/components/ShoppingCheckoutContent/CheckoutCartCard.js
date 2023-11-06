import React from "react";

function CheckoutCartCard({ img, price, title, size, color, quantity }) {
  return (
    <div className="d-flex gap-10 align-items-center checkout-cart-card mb-3">
      <div className="d-flex gap-10 w-75 align-items-center">
        <div className="w-25 position-relative checkout-cart-card-img">
          <span
            style={{
              top: "-10px",
              right: "2px",
              width: "22px",
              height: "22px",
            }}
            className="badge bg-secondary text-white rounded-circle p-2 position-absolute d-flex align-items-center "
          >
            {quantity}
          </span>
          <img src={img} className=" img-fluid" />
        </div>
        <div className="d-flex flex-column w-75">
          <h5 className="title">{title}</h5>
          {size && color && <p className="mb-0 gray-text">{size} / {color}</p>}
          {size && !color&&<p className="mb-0 gray-text">{size}</p>}
          {color && !size&&<p className="mb-0 gray-text">{color}</p>}
        </div>
      </div>
      <div className="w-25">
        <h5 className="text-end total">₪ {quantity * price}</h5>
      </div>
    </div>
  );
}

export default CheckoutCartCard;
