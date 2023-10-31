import React from 'react'
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Meta from "../components/Meta/Meta";
import WishListContent from '../components/WishListContent/WishListContent';

function WishList() {
  return (
    <>
      <Meta title="WishList" />
      <BreadCrumb title="WishList" />
      <WishListContent />
    </>
  );
}

export default WishList
