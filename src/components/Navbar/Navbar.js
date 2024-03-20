import classes from "./Navbar.module.css";
import React from "react";
import logo from "../../assets/photos/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const showList = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className={classes.main}>
      
        <div className={classes.mobile}>
          <div className={classes.lines} onClick={showList}>
            <div className={!showNavbar ? classes.line : classes.close}></div>
            <div className={!showNavbar ? classes.line : classes.close}></div>
            <div className={!showNavbar ? classes.line : classes.close}></div>
          </div>
          <img className={classes.logo} alt="logo" src={logo}></img>
        </div>
      

      {showNavbar && (
        <div className={classes.dropList}>
          <ul className={classes.dropdown}>
            <li>
              <a href="/">მთავარი</a>
            </li>
            <li>
              <a href="/services">სერვისები</a>
            </li>
            <li>
              <a href="/projects">პროექტები</a>
            </li>
            <li>
              <a href="/about">ჩვენს შესახებ</a>
            </li>
            <li>
              <a href="/contact">კონტაქტი</a>
            </li>
          </ul>
          <div className={classes.blur} onClick={showList}></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
