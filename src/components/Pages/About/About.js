import React from "react";
import classes from "./About.module.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
import imageOne from "../../../assets/photos/lazy.jpg";
const About = () => {
  const lorem =
    "Officia proident culpa laborum sit enim amet cupidatat. Consequat cillum  consequat reprehenderit laborum consequat et duis. Id reprehenderit dolore et ullamco consequat aliquip. Adipisicing ex laboris aliquip qui amet anim nisi. Lorem laborum labore deserunt eu magna reprehenderit cupidatat culpa veniam magna et amet. Magna est eiusmod excepteur anim elit eu tempor velit sunt excepteur sit cillum anim. Dolore laborum laboris dolor aliquip. Minim magna sint quis irure reprehenderit fugiat fugiat dolore id deserunt est pariatur. Magna culpa dolore laborum Lorem aliqua tempor cillum officia tempor. Mollit ex consequat proident nisi ipsum quis sit reprehenderit ea deserunt deserunt tempor enim enim.";
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.content}>
         <div className={classes.section}>
        <img src={imageOne} className={classes.img} alt="img"></img>
        <div className={classes.description}>
        <p className={classes.text}>{lorem}</p>
         
        </div>
      </div>
      </div>
     
      <div className={classes.content}>
         <div className={classes.section}>
        <img src={imageOne} className={classes.img} alt="img"></img>
        <div className={classes.description}>
        <p className={classes.text}>{lorem}</p>
         
        </div>
      </div>
      </div>  <div className={classes.content}>
         <div className={classes.section}>
        <img src={imageOne} className={classes.img} alt="img"></img>
        <div className={classes.description}>
        <p className={classes.text}>{lorem}</p>
         
        </div>
      </div>
      </div>
      <div className={classes.footer}><Footer/></div>
    </div>
  );
};

export default About;
