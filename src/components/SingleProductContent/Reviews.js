import React from "react";
import { rating } from "../../Utils/Utils";
import { useState } from "react";
import Input from "../Common/Input/Input";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import ReviewHeader from "./ReviewHeader";
import ReviewsList from "./ReviewsList";

function Reviews() {
  const [orderedProduct, setOrderProduct] = useState(true);
  const [reviewValue, setReviewValue] = useState(0);
  console.log(reviewValue);
  const reviewValueChange = (args) => {
    setReviewValue(args.value);
  };
  return (
    <section id="review" className="product-reviews py-4">
      <div className="container-xxl ">
        <div className="row d-flex flex-wrap ">
          <div className="col-12">
            <h4 className="section-header-title">Reviews</h4>

            <div className="review-inner-wrapper p-3">
              <ReviewHeader orderedProduct={orderedProduct} />
              <ReviewForm
                onReviewValueChange={reviewValueChange}
                reviewValue={reviewValue}
              />
              <ReviewsList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
