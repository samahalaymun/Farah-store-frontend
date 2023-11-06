import React from 'react'

function ProductDetailCard({label,children}) {
  return (
    <div className="d-flex align-items-center gap-10 py-2">
      <h3 className="product-heading mb-0">{label}:</h3>
      {children}
    </div>
  );
}

export default ProductDetailCard
