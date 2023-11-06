import React from "react";
import "./Input.css";

function Input({ placeholder, type, onChange, name, value ,isDisabled}) {
  return (
    <>
      <input
        className="form-control"
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        disabled={isDisabled}
      />
    </>
  );
}

export default Input;
