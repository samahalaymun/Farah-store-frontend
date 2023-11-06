import React from 'react'
import Meta from "../components/Meta/Meta";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import AuthContent from "../components/Authentication/AuthContent";
function Login() {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <AuthContent authType="login" />
    </>
  );
}

export default Login
