import classes from "./Navbar.module.css";
import React from "react";
import logo from "../../assets/photos/logo.svg";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const Navbar = () => {
  const { t } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [englishLang, setEnglishLang] = useState(false);
  const [dropDown, setDropDown] = useState(windowWidth >= 750 ? false : true);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      windowWidth > 750 ? setDropDown(false) : setDropDown(true);
     setShowNavbar(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dropDown, windowWidth,showNavbar]);
  const showList = () => {
    setShowNavbar(!showNavbar);
  };

  const changeLanguage = (e) => {
    setEnglishLang(!englishLang);
    if (englishLang) {
      i18n.changeLanguage("ge");
      sessionStorage.setItem("lng","ge")
    } else {
      i18n.changeLanguage("en");
      sessionStorage.setItem("lng","en")
    }
  };

  return (
    <div className={classes.main}>
      {dropDown && (
        <div>
          <div className={classes.mobile}>
            <div className={classes.lines} onClick={showList}>
              <div className={!showNavbar ? classes.line : classes.close}></div>
              <div className={!showNavbar ? classes.line : classes.close}></div>
              <div className={!showNavbar ? classes.line : classes.close}></div>
            </div>
            <img className={classes.logoBig} alt="logo" src={logo}></img>
          </div>
        </div>
      )}
      <div className={dropDown ? classes.dropdown : classes.navbar}>
        <a href="/">
          {" "}
          <img
            className={dropDown ? classes.none : classes.logo}
            alt="logo"
            src={logo}
          ></img>
        </a>
        <ul className={showNavbar ? classes.dropMenu : classes.navlinks}>
          <li
            className={
              window.location.pathname === "/about"
                ? classes.activeItem
                : classes.listItem
            }
          >
            <a href="/about">
              <h4>{t("about")}</h4>
            </a>
          </li>
          <li
            className={
              window.location.pathname === "/services"
                ? classes.activeItem
                : classes.listItem
            }
          >
            <a href="/services">
              <h4>{t("services")}</h4>
            </a>
          </li>
          <li
            className={
              window.location.pathname === "/projects"
                ? classes.activeItem
                : classes.listItem
            }
          >
            <a href="/projects">
              <h4>{t("projects")}</h4>
            </a>
          </li>
          <li
            className={
              window.location.pathname === "/gallery"
                ? classes.activeItem
                : classes.listItem
            }
          >
            <a href="/gallery">
              <h4>{t("gallery")}</h4>
            </a>
          </li>

          <li
            className={
              window.location.pathname === "/contact"
                ? classes.activeItem
                : classes.listItem
            }
          >
            <a href="/contact">
              <h4>{t("contact")}</h4>
            </a>
          </li>
        </ul>
        <div onClick={(e) => changeLanguage(e)} className={showNavbar?classes.langs:classes.languages}>
          <h5  className={classes.language}>
            {englishLang ? "ქართული" : "English"}
          </h5>
        </div>
        {showNavbar && (
        <div className={classes.blur} onClick={showList}></div>
      )}
      </div>
     
    </div>
  );
};

export default Navbar;
