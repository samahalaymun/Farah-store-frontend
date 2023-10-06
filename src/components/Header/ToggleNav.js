import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const ToggleNav = ({ onCheck, isChecked }) => {

  return (
    <>
      <input type="checkbox" id="check" onChange={onCheck} />
      <label htmlFor="check" className="checkBtn text-white ">
        {isChecked && <IoMdClose className="fs-1" />}
        {!isChecked && <FaBars className="fs-1" />}
      </label>
    </>
  );
};

export default ToggleNav