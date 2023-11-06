import React from 'react'
import ReactImageZoom from "react-image-zoom";

function ProductImagesPreview() {
    const props = { width: 500, height: 600, zoomWidth: 500, img: process.env.PUBLIC_URL + "/images/crown-logo.webp" };
  return (
    <div className='images-preview-wrapper '>
      <div className="main-product-img">
        <div className="">
          <ReactImageZoom {...props} />
        </div>
      </div>
      <div className="row thumb-gallery mt-3 ">
        <div className="col-3">
          <div className="thumb">
            <img className='img-fluid' src={process.env.PUBLIC_URL + "/images/crown-logo.webp"} />
          </div>
        </div>
        <div className="col-3">
          <div className="thumb">
            <img src={process.env.PUBLIC_URL + "/images/crown-logo.webp"} />
          </div>
        </div>
        <div className="col-3">
          <div className="thumb">
            <img src={process.env.PUBLIC_URL + "/images/crown-logo.webp"} />
          </div>
        </div>
        <div className="col-3">
          <div className="thumb">
            <img src={process.env.PUBLIC_URL + "/images/crown-logo.webp"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductImagesPreview
