import React from 'react'
import Input from '../Common/Input/Input';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <form className="d-flex flex-column gap-15">
        <div className="mt-1">
          <Input placeholder="First name" type="text" name="firstname" />
        </div>
        <div className="mt-1">
          <Input placeholder="Last name" type="text" name="lastname" />
        </div>
        <div className="mt-1">
          <Input placeholder="Email" type="email" name="email" />
        </div>
        <div className="mt-1">
          <Input placeholder="Mobile number" type="tel" name="mobileNumber" />
        </div>
        <div className="mt-1">
          <Input placeholder="Password" type="password" name="password" />
        </div>

        <div className="mt-1">
          <Input
            placeholder="Re-enter password"
            type="password"
            name="reEnterPassword"
          />
        </div>
        <div className="d-flex flex-column  gap-15 align-items-center justify-content-center mt-3 ">
          <button className="btn-primary">Create</button>
          <div className="d-flex gap-1 align-items-center signup-footer">
            <p className="mb-0">Already have an account?</p>
            <Link to="/login">sign in</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp
