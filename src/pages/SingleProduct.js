import React from 'react'
import Meta from "../components/Meta/Meta";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import SingleProductContent from '../components/SingleProductContent/SingleProductContent';
function SingleProduct() {
  return (
    <>
      <Meta title="Dynamic product" />
      <BreadCrumb title="Dynamic product" />
      <SingleProductContent />
    </>
  );
}

export default SingleProduct
