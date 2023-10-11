import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {


  return (
    <Link to="/contact" className="product-card position-relative ">
      <div className="wishlist-icon position-absolute ">
        <button className="action-btn">
          <img src="images/wish.svg" alt="wish" />
        </button>
      </div>
      {props.discount && (
        <div className="discount-icon position-absolute ">
          <span>-{props.discount * 100}%</span>
        </div>
      )}
      <div className="product-img">
        <img src={props.img} className="img-fluid" alt="product-card" />
      </div>
      <div className="product-details">
        <h6 className="brand">{props.brand}</h6>
        <h5 className="product-title">{props.title}</h5>
        <div className="price">
          {props.discount && (
            <p className="current-price">
              ₪{props.price - props.price * props.discount}
            </p>
          )}
          {
            <p
              className={`old-price ${
                props.discount?'text-decoration-line-through':''}`}
            >
              ₪{props.price}
            </p>
          }
        </div>
      </div>
      <div className="action-bar position-absolute ">
        <div className="d-flex flex-column gap-15">
          <button className="action-btn" onClick={(event)=>{
              event.preventDefault();
              console.log("clicked")
          }}>
            <img src="images/prodcompare.svg" alt="compare" />
          </button>
          <button className="action-btn">
            <img src="images/view.svg" alt="view" />
          </button>
          <button className="action-btn">
            <img src="images/add-cart.svg" alt="addCart" />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
