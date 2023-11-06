import React from 'react'
import { Link } from 'react-router-dom'

function CheckoutHeader() {
  return (
    <div className="header-wrapper py-4">
      <div className="d-flex justify-content-center">
        <Link to="/">
          <h1>FARAH55 Store</h1>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutHeader
