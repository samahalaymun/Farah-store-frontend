import React from 'react'
import "./Authentication.css";
import AuthModal from './AuthModal';

function AuthContent({authType}) {
  return (
    <div className="login-wrapper py-4">
      <div className="container-xxl ">
          <AuthModal modalView={authType}/>
      </div>
    </div>
  );
}

export default AuthContent
