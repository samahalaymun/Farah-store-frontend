import React from 'react';
 import "./BreadCrumb.css";
import { Link } from 'react-router-dom';

function BreadCrumb(props) {
  return (
    <div className="py-4 bg-white ">
      <div className="container-xxl ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
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
