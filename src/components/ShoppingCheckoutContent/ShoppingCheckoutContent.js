import React from "react";
import "./ShoppingCheckoutContent.css";
import { Link } from "react-router-dom";
import ShoppingCheckoutInformation from "./ShoppingCheckoutInformation";
import CheckoutCartinformation from "./CheckoutCartinformation";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutCartInformationMobile from "./CheckoutCartInformationMobile";
import CheckoutFooter from "./CheckoutFooter";

function ShoppingCheckoutContent() {
  return (
    <>
      <CheckoutHeader />
      <div className="checkout-wrapper">
        <div className="row"></div>
        <div className="row gx-0 flex-wrap-reverse ">
          <div className="col-md-7 h-100">
            <div className=" checkout-left-side">
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
                className="mb-4 checkout-breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark">
                      Cart
                    </Link>
                  </li>
                  &nbsp; {">"}
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp; {">"}
                  <li className="breadcrumb-item">Shipping</li>
                  &nbsp; {">"}
                  <li className="breadcrumb-item " aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <ShoppingCheckoutInformation />
            </div>
            <CheckoutFooter />
          </div>
          <div className="col-md-5">
            <div className=" checkout-right-side">
              <div className="cart-information-wrapper">
                <CheckoutCartinformation />
              </div>
              <CheckoutCartInformationMobile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCheckoutContent;
