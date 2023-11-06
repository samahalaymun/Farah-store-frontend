import React from 'react'
import Meta from "../components/Meta/Meta";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import AuthContent from "../components/Authentication/AuthContent";

function ForgotPassword() {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <AuthContent authType="forgotPassword" />
    </>
  );
}

export default ForgotPassword
