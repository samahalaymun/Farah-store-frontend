import React from 'react'
import Meta from "../components/Meta/Meta";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import AuthContent from "../components/Authentication/AuthContent";

function ResetPassword() {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <AuthContent authType="resetPassword" />
    </>
  );
}

export default ResetPassword
