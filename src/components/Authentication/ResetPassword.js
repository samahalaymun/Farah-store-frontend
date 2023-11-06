import React from 'react'
import Input from '../Common/Input/Input';
import { Link } from 'react-router-dom';

function ResetPassword() {
  return (
      <form className="d-flex flex-column gap-15">
        <div className="mt-1">
          <Input placeholder="Password" type="password" name="password" />
        </div>

        <div className="mt-1">
          <Input
            placeholder="Confirm password"
            type="password"
            name="confirmPassword"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center mt-3 ">
          <button className="btn-primary">Ok</button>
        </div>
      </form>
  );
}

export default ResetPassword
