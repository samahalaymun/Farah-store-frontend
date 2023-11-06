import React from 'react'
import ProductQuantity from "../SingleProductContent/ProductQuantity";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function CartCard({ price,title, img, size, color, quantity }) {
  return (
    <div className="cart-data mb-2 py-3 row flex-wrap ">
      <div className="col-sm-12 col-md-5">
        <div className="cart-product d-flex align-items-center gap-15 ">
          <div className="cart-product-img w-25">
            <img className="img-fluid" src={img} />
          </div>
          <div className="d-flex flex-column w-75 gap-2">
            <h5 className="mb-0 cart-product-title">{title}</h5>
            {size && <p className="mb-0 cart-product-size">Size: {size}</p>}
            {color && <p className="mb-0 cart-product-color">Color: {color}</p>}
          </div>
        </div>
      </div>
      <div className="col-sm-12  col-md-7">
        <div className="row cart-right-side">
          <div className=" col-3 text-center ">
            <div className="product-cart-price ">
              <h5 className="mb-0">₪ {price}</h5>
            </div>
          </div>
          <div className=" col-6 text-center">
            <div className="product-cart-quantity gap-10">
              <ProductQuantity name="product-cart-quantity" value={quantity} />
              <button className="btn-primary delete-product-cart">
                <BsFillTrash3Fill className="fs-5" />
              </button>
            </div>
          </div>
          <div className=" col-3 text-center">
            <div className="product-cart-total">
              <h5 className="mb-0">₪ {quantity * price}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
