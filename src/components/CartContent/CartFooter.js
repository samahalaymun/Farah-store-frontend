import React from 'react'
import { Link } from 'react-router-dom';

function CartFooter({total}) {
  return (
    <div className="py-4 footer-wrapper">
      <div className="d-flex row">
        <div className="col-sm-12 col-md-6">
          <div className="cart-note w-100">
            <p className="mb-0">Add Order Note</p>
            <div className="mt-2">
              <textarea
                cols="30"
                rows="4"
                className="form-control w-100"
                placeholder="How can we help you?"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="cart-total-checkout w-100 d-flex flex-column align-items-md-end ">
            <h4 className="cart-subtotal">
              <span className='text-uppercase '>Subtotal</span>: ₪ {total}
            </h4>
            <p>Taxes and shipping calculated at checkout</p>
            <Link to="/checkout" className="btn-primary">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartFooter
