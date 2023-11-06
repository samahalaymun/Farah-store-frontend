import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { rating } from "../../Utils/Utils";
import DiscountLabel from "../Common/DiscountLabel/DiscountLabel";

function ProductCard(props) {
// const rating = (stars) => "★★★★★☆☆☆☆☆".slice(5 - stars, 10 - stars);

  return (
    <div className={`${props.className}`}>
      <Link to="/products/:id" className={`product-card position-relative `}>
        <div className="wishlist-icon position-absolute">
          <button className="action-btn">
            <img src={process.env.PUBLIC_URL + "/images/wish.svg"} alt="wish" />
          </button>
        </div>
        {props.discount && (
          <div className="discount-icon position-absolute ">
            <DiscountLabel discount={props.discount} />
          </div>
        )}
        <div className="product-img">
          <img src={props.img} className="img-fluid" alt="product-card" />
        </div>
        <div className="product-details">
          <h6 className="brand">{props.brand}</h6>
          <h5 className="product-title">{props.title}</h5>
          <h6 className="rating">{rating(props.rating)}</h6>
          <div className="price">
            {props.discount && (
              <p className="current-price fw-bold red-text">
                ₪{props.price - props.price * props.discount}
              </p>
            )}
            {
              <p
                className={`old-price ${
                  props.discount
                    ? "text-decoration-line-through gray-text"
                    : "dark-gray-text fw-bold"
                }`}
              >
                ₪{props.price}
              </p>
            }
          </div>
        </div>
        <div className="action-bar position-absolute ">
          <div className="d-flex flex-column gap-15">
            <button
              className="action-btn"
              onClick={(event) => {
                event.preventDefault();
                console.log("clicked");
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/prodcompare.svg"}
                alt="compare"
              />
            </button>
            <Link to="/products/:id" className="action-btn">
              <img
                src={process.env.PUBLIC_URL + "/images/view.svg"}
                alt="view"
              />
            </Link>
            <button className="action-btn">
              <img
                src={process.env.PUBLIC_URL + "/images/add-cart.svg"}
                alt="addCart"
              />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
