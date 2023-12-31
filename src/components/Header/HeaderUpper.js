import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import ToggleNav from "./ToggleNav";
import InputWithIcon from "../Common/InputWithIcon";
function HeaderUpper({ onNavCheck, isChecked}) {
  return (
    <div className="header-upper pb-0 pt-3  py-md-3">
      <div className="container-xxl ">
        <div className="row d-flex align-items-center flex-wrap">
          <div className="col-lg-2 col-md-2 col-12 d-flex align-items-center ">
            <ToggleNav onCheck={onNavCheck} isChecked={isChecked} />
            <h2>
              <Link className="logo">FARAH55</Link>
            </h2>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <InputWithIcon
              icon={<BsSearch className="fs-6 search-bar" />}
              placeholder="Search Product Hear..."
              ClassName="search-bar"
              iconClassName="header-input-group-text p-lg-3 p-md-2 p-2"
            />
          </div>
          <div className="col-lg-5 col-md-5 col-12 header-upper-links">
            <div className=" d-flex align-items-center justify-content-between">
              <div className="">
                <Link
                  to="/compare"
                  className="d-flex align-items-center gap-10 text-white header-upper-link"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/compare.svg"}
                    alt="compare"
                  />
                  <span className="mb-0 header-upper-link-text">
                    Compare
                    <br /> Products
                  </span>
                </Link>
              </div>
              <div className="">
                <Link
                  to="/wishlist"
                  className="d-flex align-items-center  gap-10 text-white header-upper-link"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/wishlist.svg"}
                    alt="wishlist"
                  />
                  <span className="mb-0 header-upper-link-text">
                    Favourite
                    <br /> Wishlist
                  </span>
                </Link>
              </div>
              <div className="">
                <Link to="/login" className="d-flex align-items-center  gap-10 text-white header-upper-link">
                  <img
                    src={process.env.PUBLIC_URL + "/images/user.svg"}
                    alt="user"
                  />
                  <span className="mb-0 header-upper-link-text">
                    Login
                    <br /> My Account
                  </span>
                </Link>
              </div>
              <div className="">
                <Link to="/cart" className="d-flex align-items-center position-relative 
                  gap-10 text-white header-upper-link">
                  <img
                    src={process.env.PUBLIC_URL + "/images/cart.svg"}
                    alt="cart"
                  />
                    <span className="badge rounded-circle  bg-white text-dark position-absolute" style={{top:"-5px",right:"-6px"}}>2</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderUpper;
