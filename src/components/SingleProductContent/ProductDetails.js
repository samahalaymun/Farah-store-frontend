import React from "react";
import ReviewHeader from "./ReviewHeader";
import ProductDetailCard from "./ProductDetailCard";
import Color from "../Common/Color/Color";
import ProductQuantity from "./ProductQuantity";
import { AiOutlineHeart } from "react-icons/ai";
import DiscountLabel from "../Common/DiscountLabel/DiscountLabel";
function ProductDetails({ color, size ,price,discount }) {
   const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <div className=" container-xxl ">
      <div className="main-product-details">
        <div className="border-bottom ">
          <h3 className="title">Crown silver</h3>
        </div>
        <div className="py-3">
          <div className="price mb-3">
            {discount && (
              <p className="current-price fw-bold red-text mb-0">
                ₪{price - price * discount}
              </p>
            )}
            {
              <p
                className={`old-price  mb-0 ${
                  discount
                    ? "text-decoration-line-through gray-text"
                    : "dark-gray-text fw-bold"
                }`}
              >
                ₪{price}
              </p>
            }
            {discount && <DiscountLabel discount={discount} />}
          </div>
          <ReviewHeader orderedProduct={true} />
        </div>
        <div className="border-bottom pb-3">
          <ProductDetailCard label="Brand">
            <p className="product-data mb-0">Farah55</p>
          </ProductDetailCard>
          <ProductDetailCard label="Category">
            <p className="product-data mb-0">Accessories</p>
          </ProductDetailCard>
          <ProductDetailCard label="Availability">
            <p className="product-data mb-0">In Stock</p>
          </ProductDetailCard>
          {color && (
            <ProductDetailCard label="Color">
              <div className="d-flex align-items-center gap-10 prod-color">
                {color.map((item) => (
                  <div className="color-card-wrapper">
                    <Color color={item} />
                  </div>
                ))}
              </div>
            </ProductDetailCard>
          )}
          {size && (
            <ProductDetailCard label="Size">
              <div className="d-flex align-items-center gap-10 prod-size">
                {size.map((item) => (
                  <div className="size-card-wrapper">
                    <p className="mb-0">{item}</p>
                  </div>
                ))}
              </div>
            </ProductDetailCard>
          )}
          <div className="d-flex align-items-center gap-10 quantity mt-3 mb-3">
            <ProductQuantity name="product-details-quantity" value={1} />
            <button className="btn-primary add-to-cart">ADD TO CART</button>
            <button className="circle-btn wish-btn">
              <AiOutlineHeart className="fs-5" />
            </button>
            <button className="circle-btn compare-btn">
              <img
                src={process.env.PUBLIC_URL + "/images/prodcompare.svg"}
                alt="compare"
              />
            </button>
          </div>

          <div className="d-flex flex-column  py-2">
            <h3 className="product-heading mb-1">Shipping & Return:</h3>
            <p className="product-data mb-0">
              Free shipping and returns available on all orders! we ship all
              orders within <b>3-5 days!</b>
            </p>
          </div>
          <ProductDetailCard label="Product link">
            <a
              className="product-data d-block "
              href="javascript:void(0);"
              onClick={(e) => {
                e.preventDefault();
                copyToClipboard("link");
              }}
            >
              Copy product link
            </a>
          </ProductDetailCard>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
