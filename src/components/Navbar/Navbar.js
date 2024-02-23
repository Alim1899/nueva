import classes from "./Navbar.module.css";
import React from "react";
import background from "../../assets/photos/background.jpg";
import logo from "../../assets/photos/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function () {
    setWidth(window.innerWidth);
  });
  const showList = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className={classes.main} >
      <img alt="background" src={background}></img>
      <div className={classes.navbar}>
        <div className={classes.menu}>
          {width < 750 && (
            <div className={classes.mobile} >
             <div className={classes.lines} onClick={showList}>
              <div className={!showNavbar?classes.line:classes.close}></div>
              <div className={!showNavbar?classes.line:classes.close}></div>
              <div className={!showNavbar?classes.line:classes.close}></div>
             </div>
      <img className={classes.logo} alt="logo" src={logo}></img>
            </div>
          )}
        </div>
      
        <div className={classes.logo}></div>
      </div>
      {width < 750 && showNavbar&&
        <div className={classes.dropList} >
              <ul className={classes.dropdown}>
              <li>მთავარი</li>
              <li>სერვისები</li>
              <li>ჩვენს შესახებ</li>
              <li>კონტაქტი</li>
              </ul>
              <div className={classes.blur} onClick={showList}></div>
              </div>}
    </div>
  );
};

export default Navbar;
