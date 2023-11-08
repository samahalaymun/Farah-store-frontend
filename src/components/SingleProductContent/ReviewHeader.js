import React from "react";
import { Link } from "react-router-dom";
import { rating } from "../../Utils/Utils";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";

function ReviewHeader({ orderedProduct }) {
  return (
    <div className="review-head d-flex justify-content-between align-items-end ">
      <div>
        <h4 className="mb-2">Customer Reviews</h4>
        <div className="d-flex align-items-center  gap-10">
          <RatingComponent  id="rating" readOnly={true} value={3.5} />
          <p className="mb-0">(10 reviews)</p>
        </div>
      </div>
      {orderedProduct && (
        <div className="write-review">
          <a className="text-decoration-underline " href="#review">
            Write a Review
          </a>
        </div>
      )}
    </div>
  );
}

export default ReviewHeader;
