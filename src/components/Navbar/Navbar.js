import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import classes from "./Navbar.module.css";
import logo from "../../assets/photos/logo.svg";

const Navbar = () => {
  const { t } = useTranslation();
  const initialLanguage = sessionStorage.getItem("lng") || "ge";
  const [showNavbar, setShowNavbar] = useState(false);
  const [englishLang, setEnglishLang] = useState(initialLanguage === "en");
  const [dropDown, setDropDown] = useState(window.innerWidth < 750);

  useEffect(() => {
    const handleResize = () => {
      setDropDown(window.innerWidth <= 750);
      setShowNavbar(false);
    };

    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, arguments), delay);
    };
  };

  const showList = () => {
    setShowNavbar(!showNavbar);
  };

  const changeLanguage = () => {
    const newLang = englishLang ? "ge" : "en";
    setEnglishLang(!englishLang);
    i18n.changeLanguage(newLang);
    sessionStorage.setItem("lng", newLang);
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
          <img
            className={dropDown ? classes.none : classes.logo}
            alt="logo"
            src={logo}
          ></img>
        </a>
        <ul className={showNavbar ? classes.dropMenu : classes.navlinks}>
          {["about", "services", "projects", "gallery", "contact"].map(
            (path) => (
              <li
                key={path}
                className={
                  window.location.pathname === `/${path}`
                    ? classes.activeItem
                    : classes.listItem
                }
              >
                <a href={`/${path}`}>
                  <h4>{t(`headers.${path}`)}</h4>
                </a>
              </li>
            )
          )}
        </ul>
        <div
          onClick={changeLanguage}
          className={showNavbar ? classes.langs : classes.languages}
        >
          <h5 className={classes.language}>
            {englishLang ? "ქართული" : "English"}
          </h5>
        </div>
        {showNavbar && <div className={classes.blur} onClick={showList}></div>}
      </div>
    </div>
  );
};

export default Navbar;
