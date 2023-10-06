import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
function HeaderBottom({ setChecked }) {
  return (
    <div className="header-bottom py-lg-3 py-0">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom">
              <div className="dropdown-wrapper">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/images/menu.svg" />
                    <span className="me-5 d-inline-block">
                      {" "}
                      shop categories
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
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
                <NavLink onClick={() => setChecked(false)}>Wishlist</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
