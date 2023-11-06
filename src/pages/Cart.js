import React from 'react'
import Meta from '../components/Meta/Meta';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import CartContent from '../components/CartContent/CartContent';

function Cart() {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <CartContent />
    </>
  );
}

export default Cart
