import React from 'react'

function CheckBox({label ,id}) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id={id} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default CheckBox
