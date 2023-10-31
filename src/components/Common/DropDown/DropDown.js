import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function DropDown({ id, label, options, logo, className, ulClassName }) {
  const [dropDownLabel,setDropDownLabel]=useState(label);
  const onDropItemClick=(label)=>{
    setDropDownLabel(label);
  }
    return (
      <div className="dropdown">
        <button
          className={className}
          type="button"
          id={id}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {logo && <img src={logo} />}
          <span className="me-5 d-inline-block">{dropDownLabel}</span>
        </button>
        <ul className={ulClassName + " dropdown-menu"} aria-labelledby={id}>
          {options &&
            options.map((option) => (
              <li key={option}>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => onDropItemClick(option)}
                >
                  {option}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
}

export default DropDown
