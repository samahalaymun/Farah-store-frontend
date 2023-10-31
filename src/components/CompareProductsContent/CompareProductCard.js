import React from 'react'
import { IoMdClose } from 'react-icons/io';
import ProductDetail from './ProductDetail';
import Color from '../Common/Color/Color';

function CompareProductCard({ img, title, price, discount ,brand,color,size,availability ,compareCard}) {
  return (
    <div className="compare-product-card position-relative ">
      <IoMdClose className="fs-3 position-absolute delete-prod" />
      <div className="product-card-img">
        <img src={img} />
      </div>
      <div className="compare-product-details">
        <h5 className="title">{title}</h5>
        <div className="price">
          {discount && (
            <p className="current-price mb-0">₪{price - price * discount}</p>
          )}
          {
            <p
              className={`old-price mb-0 ${
                discount ? "text-decoration-line-through" : ""
              }`}
            >
              ₪{price}
            </p>
          }
        </div>
        {compareCard&&<div>
          <ProductDetail label="Brand">
            <p className="mb-0">{brand}</p>
          </ProductDetail>
          <ProductDetail label="Availability">
            <p className="mb-0">{availability}</p>
          </ProductDetail>
          <ProductDetail label="Color">
            {color == "-" ? (
              <p className="mb-0">-</p>
            ) : (
              <div className="d-flex align-items-center gap-10 prod-color">
                {color.map((item) => (
                 <Color color={item} />
                ))}
              </div>
            )}
          </ProductDetail>
          <ProductDetail label="Size">
            {size == "-" ? (
              <p className="mb-0">-</p>
            ) : (
              <div className="d-flex align-items-center gap-10 prod-size">
                {size.map((item) => (
                  <p className="mb-0">{item}</p>
                ))}
              </div>
            )}
          </ProductDetail>
        </div>}
      </div>
    </div>
  );
}

export default CompareProductCard
