import React from 'react';
 import "./BreadCrumb.css";
import { Link } from 'react-router-dom';

function BreadCrumb(props) {
  return (
    <div className="py-4 bg-white ">
      <div className="container-xxl ">
        <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-dark">
                Home
              </Link>
            </li>
            &nbsp; {">"}
            <li className="breadcrumb-item active" aria-current="page">
              {props.title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb
