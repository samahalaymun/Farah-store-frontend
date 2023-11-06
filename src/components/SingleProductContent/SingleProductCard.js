import React from 'react'
import ProductImagesPreview from './ProductImagesPreview';
import ProductDetails from './ProductDetails';

function SingleProductCard() {
  return (
    <div className="py-4 single-product-card">
      <div className="container-xxl">
        <div className="single-product-card-wrapper">
          <div className="row d-flex flex-wrap ">
            <div className="col-lg-6 col-md-12">
              <ProductImagesPreview />
            </div>
            <div className="col-lg-6 col-md-12">
              <ProductDetails price={100} discount={0.2} color={["silver", "gold", "rosybrown"]} size={["XXL","XL","M","SM","XS"]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCard
