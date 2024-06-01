import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.main}>
      <h4>{new Date().getFullYear()}</h4>
      <h4>LTD Nueva</h4>
      <h4>All rights reserved</h4>
    </footer>
  );
};

export default Footer;
