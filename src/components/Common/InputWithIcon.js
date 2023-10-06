import React from 'react'

function InputWithIcon({ icon, placeholder, ClassName, iconClassName }) {
  return (
    <div className={`input-group ${ClassName} bg-white `}>
      <input
        type="text"
        className="form-control py-lg-2 py-md-1 py-1"
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="basic-addon2"
      />
      <span className={iconClassName} id="basic-addon2">
        {icon}
      </span>
    </div>
  );
}

export default InputWithIcon
