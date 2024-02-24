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
    <div className={classes.main}>
      <img alt="background" src={background}></img>
      <div className={classes.navbar}>
        <div className={classes.menu}>
          {width < 700 && (
            <div className={classes.mobile}>
              <div className={classes.lines} onClick={showList}>
                <div
                  className={!showNavbar ? classes.line : classes.close}
                ></div>
                <div
                  className={!showNavbar ? classes.line : classes.close}
                ></div>
                <div
                  className={!showNavbar ? classes.line : classes.close}
                ></div>
              </div>
              <img className={classes.logo} alt="logo" src={logo}></img>
            </div>
          )}

          {width > 699 && (
            <div className={classes.menuList}>
              <ul className={classes.menuItems}>
                <li>მთავარი</li>
                <li>სერვისები</li>
                <li>პროექტები</li>
                <li>ჩვენს შესახებ</li>
                <li>კონტაქტი</li>
              </ul>
              <div className={classes.logoDiv}>
                
                <img className={classes.logo} alt="logo" src={logo}></img>
              </div>
            </div>
          )}
        </div>
      </div>

      {width < 750 && showNavbar && (
        <div className={classes.dropList}>
          <ul className={classes.dropdown}>
            <li>მთავარი</li>
            <li>სერვისები</li>
            <li>პროექტები</li>
            <li>ჩვენს შესახებ</li>
            <li>კონტაქტი</li>
          </ul>
          <div className={classes.blur} onClick={showList}></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
