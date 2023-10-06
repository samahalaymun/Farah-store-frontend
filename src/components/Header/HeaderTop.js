import React, { useState } from 'react'
import ToggleNav from './ToggleNav';

const HeaderTop = ({onNavCheck,isChecked}) => {

  return (
    <div className="header-top-strip py-3">
      <div className="container-xxl ">
        <ToggleNav onCheck={onNavCheck} isChecked={isChecked} />
        <div className="row header-top">
          <div className="col-6">
            <p className="text-white mb-0">
              Free shipping over $100 & free returns
            </p>
          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">
              Hotline:
              <a className="text-white" href="tel:+972569481919">
                +972569481919
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop
