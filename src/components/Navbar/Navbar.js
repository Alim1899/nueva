import classes from "./Navbar.module.css";
import React from "react";
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
      {width > 700 && (
        
          <div className={classes.navbar}>
                <a className={classes.link} href="/">მთავარი</a>
                <a className={classes.link} href="/services">სერვისები</a>          
                <a className={classes.link} href="/projects">პროექტები</a>
                <a className={classes.link} href="/about">ჩვენს შესახებ</a>
                <a className={classes.link} href="/contact">კონტაქტი</a>        
              <img className={classes.logo} alt="logo" src={logo}></img>
          </div>
        
      )}




      {width < 701 && (
        <div className={classes.menu}>
          <div className={classes.mobile}>
            <div className={classes.lines} onClick={showList}>
              <div className={!showNavbar ? classes.line : classes.close}></div>
              <div className={!showNavbar ? classes.line : classes.close}></div>
              <div className={!showNavbar ? classes.line : classes.close}></div>
            </div>
            <img className={classes.logo} alt="logo" src={logo}></img>
          </div>
        </div>
      )}

      {width < 701 && showNavbar && (
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
