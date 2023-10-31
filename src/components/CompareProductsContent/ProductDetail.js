import React from 'react'

function ProductDetail({label,children}) {
  return (
    <div className="product-detail d-flex">
      <h5 className='mb-0'>{label}:</h5>
      {children}
    </div>
  );
}

export default ProductDetail
