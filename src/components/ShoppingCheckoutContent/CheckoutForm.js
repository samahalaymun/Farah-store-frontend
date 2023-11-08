import React from 'react'
import Input from '../Common/Input/Input';
import { Link } from 'react-router-dom';
import {BsArrowLeftShort} from "react-icons/bs";

export default function CheckoutForm() {
  return (
    <>
      <h4 className="mb-2 heading-title">Shipping Address</h4>
      <form className="d-flex gap-15 flex-wrap flex-column ">
        <div className="w-100">
          <select className="form-control form-select w-100">
            <option selected disabled>
              Select country
            </option>
            <option value="1">Palestine</option>
            <option value="2">Jordan</option>
          </select>
        </div>
        <div className="w-100 d-flex gap-15 flex-wrap flex-md-nowrap ">
          <Input placeholder="First name" type="text" name="firstname" />
          <Input placeholder="Last name" type="text" name="lastname" />
        </div>
        <div className="w-100">
          <Input type="text" placeholder="Address" name="address" />
        </div>
        <div className="w-100">
          <Input
            type="text"
            placeholder="Apartment, suit, etc(Optional)"
            name="apartment"
          />
        </div>
        <div className="d-flex gap-10 w-100">
          <Input type="text" placeholder="City" name="city" />
          <Input type="text" placeholder="Postal code" name="postalCode" />
          <select className="form-control form-select w-100">
            <option selected disabled>
              State
            </option>
            <option value="1">West Bank</option>
            <option value="2">Gaza</option>
            <option value="3">The occupied interior</option>
          </select>
        </div>
        <div className="mt-2">
          <h4 className="mb-2 heading-title">Shipping Method</h4>
          <div className="shipping-method d-flex align-items-center justify-content-between ">
            <p className="mb-0 dark-gray-text text-uppercase ">Standard</p>
            <p className="mb-0 dark-gray-text">NIS 20</p>
          </div>
        </div>
        <div className="mt-2">
          <h4 className="mb-2 heading-title">Payment</h4>
          <div className="shipping-method d-flex align-items-center justify-content-between ">
            <p className="mb-0 dark-gray-text text-uppercase ">Cash On Delivery</p>
          </div>
        </div>
        <div className="form-footer mt-3">
          <div className="d-flex justify-content-between align-items-center ">
            <Link to="/cart" className="text-dark">
              <BsArrowLeftShort className="me-2" />
              Return to cart
            </Link>
            <button className="btn-primary">Pay now</button>
          </div>
        </div>
      </form>
    </>
  );
}
