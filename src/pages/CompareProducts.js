import React from 'react'
import Meta from "../components/Meta/Meta";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import CompareProductsContent from '../components/CompareProductsContent/CompareProductsContent';

function CompareProducts() {
  return (
    <>
      <Meta title="Compare Products" />
      <BreadCrumb title="Compare Products" />
      <CompareProductsContent />
    </>
  );
}

export default CompareProducts
