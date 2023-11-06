import React from 'react'
import Meta from "../components/Meta/Meta";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import AuthContent from "../components/Authentication/AuthContent";

function Signup() {
  return (
    <>
      <Meta title="Create Account" />
      <BreadCrumb title="Create Account" />
      <AuthContent authType="signup" />
    </>
  );
}

export default Signup
