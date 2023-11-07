import React from "react";
import CheckoutCartinformation from "./CheckoutCartinformation";
import {IoIosArrowDown} from "react-icons/io";

function CheckoutCartInformationMobile() {
  return (
    <div className="checkout-cart-info-mobile">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <span className=" accordion-btn-text">
                Expand to see order summery
                <IoIosArrowDown className="fs-5 accordion-icon" />
              </span>
              <h5 className="accordion-total mb-0 text-end">NIS 32220</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <CheckoutCartinformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCartInformationMobile;
