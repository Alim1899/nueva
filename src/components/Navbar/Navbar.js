import classes from "./Navbar.module.css";
import React from "react";
import logo from "../../assets/photos/logo.png";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const Navbar = () => {
  const {t} = useTranslation();
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
            <a href="/">{t('main')}</a>
          </li>
          <li>
            <a href="/about">{t("about")}</a>
          </li>
          <li>
            <a href="/services">{t("services")}</a>
          </li>
          <li>
            <a href="/projects">{t('projetcs')}</a>
          </li>
          <li>
            <a href="/gallery">{t('gallery')}</a>
          </li>

          <li>
            <a href="/contact">{t('contact')}</a>
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
            <a href="/"><h4>{t('main')}</h4></a>
          </li>
          <li>
            <a href="/about"><h4>{t("about")}</h4></a>
          </li>
          <li>
            <a href="/services"><h4>{t("services")}</h4></a>
          </li>
          <li>
            <a href="/projects"><h4>{t("projects")}</h4></a>
          </li>
          <li>
            <a href="/gallery"><h4>{t("gallery")}</h4></a>
          </li>

          <li>
            <a href="/contact"><h4>{t("contact")}</h4></a>
          </li>
          <li>
            <img className={classes.logo} alt="logo" src={logo}></img>
          </li>
          <li className={classes.languages}>
            <h5  onClick={() => changeLanguage('ge')} className={classes.language}>ქარ</h5>
            <h5 onClick={() => changeLanguage('en')} className={classes.language}>EN</h5>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
