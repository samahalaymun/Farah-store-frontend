import React from 'react'
import Meta from "../components/Meta/Meta";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import ShippingPolicyContent from '../components/Policies/ShippingPolicyContent';

function ShippingPolicy() {
  return (
    <>
      <Meta title="Shipping Policy" />
      <BreadCrumb title="Shipping Policy" />
      <ShippingPolicyContent />
    </>
  );
}

export default ShippingPolicy
