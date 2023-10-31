import React, {  useEffect, useState } from "react";
import HeaderUpper from "./HeaderUpper";
import HeaderBottom from "./HeaderBottom";
import "../../App.css";
import "../Header/Header.css"
const Header = () => {
const [checked, setChecked] = useState(false);

const onCheckBoxChecked = () => {
  setChecked(!checked);
};
    const showSideBar = () => {
      document.getElementsByClassName("menu-bottom")[0].style.left = "0px";
      document.getElementsByClassName("checkBtn")[0].style.position =
        "fixed";
      document.getElementsByClassName("checkBtn")[0].style.left = "90%";
       document.getElementsByClassName("close-overlay")[0].style.display =
         "block";
    };
    const hideSideBar = () => {
      document.getElementsByClassName("menu-bottom")[0].style.left = "-100%";
      document.getElementsByClassName("checkBtn")[0].style.position =
        "relative";
      document.getElementsByClassName("checkBtn")[0].style.left = "0";
      document.getElementsByClassName("close-overlay")[0].style.display =
        "none";
    };

    useEffect(() => {
      if(checked){
        showSideBar()
      }else{
        hideSideBar()
      }
    }, [checked]);
  return (
    <header className="position-sticky header">
      <div className="close-overlay"></div>
      <HeaderUpper
        onNavCheck={onCheckBoxChecked}
        isChecked={checked}
        onHideSideBar={hideSideBar}
        onShowSideBar={showSideBar}
      />
      <HeaderBottom setChecked={setChecked} />
    </header>
  );
};

export default Header;
