import React from "react";
import "./Authentication.css";
import Input from "../Common/Input/Input";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <form className="d-flex flex-column gap-15">
      <Input placeholder="Email" type="email" name="email" />
      <div className="mt-1">
        <Input placeholder="Password" type="password" name="password" />
      </div>
      <Link to="/forgot-password">Forgot password?</Link>
      <div className="d-flex gap-15 align-items-center justify-content-center mt-3 ">
        <button className="btn-primary">Login</button>
        <Link className="btn-primary signup" to="/signup">
          Signup
        </Link>
      </div>
    </form>
  );
}

export default SignIn;
