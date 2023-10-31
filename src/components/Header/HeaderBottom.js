import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import DropDown from "../Common/DropDown/DropDown";
function HeaderBottom({ setChecked }) {
  return (
    <div className="header-bottom py-lg-3 py-0">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom">
              <div className="header-drop-down">
                <DropDown
                  id="headerDropDown"
                  label="shop categories"
                  options={["Accessories", "Shoes", "Bags", "Corset"]}
                  logo={process.env.PUBLIC_URL + "/images/menu.svg"}
                  className="btn btn-secondary dropdown-toggle bg-transparent
                 border-0 gap-15 d-flex align-items-center"
                  ulClassName="headerDropDown"
                />
              </div>
              <h3 className="mobile-menu-header mb-0">MENU</h3>
              <div className=" mobile-menu-links">
                <NavLink to="/" onClick={() => setChecked(false)}>
                  Accessories
                </NavLink>
                <NavLink to="/store" onClick={() => setChecked(false)}>
                  Women Shoes
                </NavLink>
                <NavLink to="/blogs" onClick={() => setChecked(false)}>
                  Bags
                </NavLink>
                <NavLink to="/contact" onClick={() => setChecked(false)}>
                  Corset
                </NavLink>
              </div>
              <div className="menu-links">
                <NavLink to="/" onClick={() => setChecked(false)}>
                  Home
                </NavLink>
                <NavLink to="/store" onClick={() => setChecked(false)}>
                  Our Store
                </NavLink>
                <NavLink to="/blogs" onClick={() => setChecked(false)}>
                  Blogs
                </NavLink>
                <NavLink to="/contact" onClick={() => setChecked(false)}>
                  Contact
                </NavLink>
              </div>
              <div className=" mobile-menu-links">
                <NavLink to="/" onClick={() => setChecked(false)}>
                  About Us
                </NavLink>
                <NavLink onClick={() => setChecked(false)}>
                  <AiOutlineHeart className="fs-5" /> Wishlist
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
