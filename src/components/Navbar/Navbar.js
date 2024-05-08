import classes from "./Navbar.module.css";
import React from "react";
import logo from "../../assets/photos/logo.png";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showList = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className={classes.main}>
      {windowWidth <= 750 && (
        <div>
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
            <a href="/about">ჩვენს შესახებ</a>
          </li>
          <li>
            <a href="/services">სერვისები</a>
          </li>
          <li>
            <a href="/projects">პროექტები</a>
          </li>
          <li>
            <a href="/gallery">გალერეა</a>
          </li>

          <li>
            <a href="/contact">კონტაქტი</a>
          </li>
              </ul>
              <div className={classes.blur} onClick={showList}></div>
            </div>
          )}
        </div>
      )}
      {windowWidth > 750 && (
        <ul className={classes.navlinks}>
          <li>
            <a href="/">მთავარი</a>
          </li>
          <li>
            <a href="/about">ჩვენს შესახებ</a>
          </li>
          <li>
            <a href="/services">სერვისები</a>
          </li>
          <li>
            <a href="/projects">პროექტები</a>
          </li>
          <li>
            <a href="/gallery">გალერეა</a>
          </li>

          <li>
            <a href="/contact">კონტაქტი</a>
          </li>
          <li>
            <img className={classes.logo} alt="logo" src={logo}></img>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
