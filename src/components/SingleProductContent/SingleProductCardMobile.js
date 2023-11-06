import React from "react";
import ProductImagesPreview from "./ProductImagesPreview";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ProductDetails from "./ProductDetails";

function SingleProductCardMobile() {
  return (
    <div className="bg-white">
      <div className="single-product-card-mobile">
        <div className="product-images-carousel position-relative ">
          <BsFillArrowLeftCircleFill className="fs-5 arrow-btn arrow-left" />
          <img
            src={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
            alt="product-img"
          />
          <BsFillArrowRightCircleFill className="fs-5 arrow-btn arrow-right" />
        </div>
        <div className="">
          <ProductDetails
            color={["silver", "gold", "rosybrown"]}
            size={["XL", "M", "SM", "XS"]}
            price={100}
            discount={0.2}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleProductCardMobile;
