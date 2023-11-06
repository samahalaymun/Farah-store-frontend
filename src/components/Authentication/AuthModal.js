import React from 'react'
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

function AuthModal({modalView}) {
  return (
    <div className="auth-modal">
      <h3 className="text-center mb-3">
        {modalView === "login" && "Login"}
        {modalView === "signup" && "Create Account"}
        {modalView === "forgotPassword" && "Reset Your Password"}
        {modalView === "resetPassword" && "Reset Password"}
      </h3>
      {modalView === "login" && <SignIn />}
      {modalView === "signup" && <SignUp />}
      {modalView === "forgotPassword" && <ForgotPassword />}
      {modalView === "resetPassword" && <ResetPassword />}
    </div>
  );
}

export default AuthModal
