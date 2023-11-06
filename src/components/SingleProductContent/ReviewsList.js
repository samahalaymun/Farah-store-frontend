import React from 'react'
import { RatingComponent, PrecisionType } from "@syncfusion/ej2-react-inputs";

function ReviewsList() {
  return (
    <div className="reviews mt-3">
      <div className="review mt-3 d-flex flex-column gap-10">
        <div className="d-flex align-items-center gap-10">
          <h6 className="mb-0">samah</h6>
          <RatingComponent
            precision={PrecisionType.Half}
            readOnly={true}
            id="rating"
            value={3.5}
          />
        </div>
        <p>nice product</p>
      </div>
      <div className="review mt-3 d-flex flex-column gap-10">
        <div className="d-flex align-items-center gap-10">
          <h6 className="mb-0">ahmed</h6>
          <RatingComponent
            precision={PrecisionType.Half}
            readOnly={true}
            id="rating"
            value={4}
          />
        </div>
        <p className="mb-0">beautiful product</p>
      </div>
    </div>
  );
}

export default ReviewsList
