import React from 'react'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import Meta from '../components/Meta/Meta';
import StoreContent from '../components/StoreContent/StoreContent';


function Store() {
  return (
    <>
      <Meta title="Store" />
      <BreadCrumb title="Store" />
      <StoreContent />
    </>
  );
}

export default Store
