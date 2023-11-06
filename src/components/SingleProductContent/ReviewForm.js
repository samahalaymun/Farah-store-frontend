import React from 'react'
import { RatingComponent, PrecisionType } from "@syncfusion/ej2-react-inputs";

function ReviewForm({reviewValue,onReviewValueChange}) {
  return (
    <div className="review-form py-4">
      <form className="d-flex flex-column gap-15">
        <h4 className="mb-0">Write a Review</h4>
        <RatingComponent
          id="rating"
          value={reviewValue}
          valueChanged={onReviewValueChange}
          precision={PrecisionType.Half}
        />
        <div className="mt-1">
          <textarea
            cols="30"
            rows="4"
            className="form-control w-100"
            placeholder="comments"
          ></textarea>
        </div>

        <div className="d-flex justify-content-end  w-100">
          <button className="btn-primary">Submit Review</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm
