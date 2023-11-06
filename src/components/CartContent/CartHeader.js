import React from 'react'

function CartHeader() {
  return (
    <div className="cart-header py-3 row">
      <div className="col-5">
        <h4 className="text-uppercase ">Product</h4>
      </div>
      <div className="col-7">
        <div className="row">
          <div className="col-3 text-center ">
            <h4 className="text-uppercase ">Price</h4>
          </div>
          <div className="col-6 text-center">
            <h4 className="text-uppercase ">Quantity</h4>
          </div>
          <div className="col-3 text-center">
            <h4 className="text-uppercase ">Total</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartHeader
