import React from 'react'
import Input from '../Common/Input/Input';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <>
      <p className="text-center mt-2 mb-3">
        We will send you an email to reset your password
      </p>
      <form className="d-flex flex-column gap-15">
        <Input placeholder="Email" type="email" name="email" />
        <div className="d-flex flex-column  gap-15 align-items-center justify-content-center mt-3 ">
          <button className="btn-primary">Submit</button>
          <Link to="/login" className=" cancel">Cancel</Link>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
