import React from "react";
import Navbar from "../../../Navbar/Navbar";
import classes from "./Project.module.css";
import Leaflet from "../../../Map/Leaflet";
const Project = () => {
  return (
    <div className={classes.project}>
      <Navbar />
      <div className={classes.content}>
        <header className={classes.header}>
          ნენსკრას ჰიდროელექტროსადგურის გეოლოგიური რისკების კვლევა
        </header>
        <p className={classes.description}>
          Consectetur quis eiusmod ex laborum. Ullamco sit consequat pariatur
          laboris exercitation id labore id culpa exercitation adipisicing
          laborum excepteur ex. Minim fugiat laboris cillum veniam sit enim ad
          veniam fugiat. Cupidatat pariatur officia proident culpa laborum sit
          enim amet cupidatat. Consequat cillum aliqua est incididunt ut sint
          laborum consequat reprehenderit laborum consequat et duis. Id
          reprehenderit dolore et ullamco consequat aliquip. Adipisicing ex
          laboris aliquip qui amet anim nisi. Lorem laborum labore deserunt eu
          magna reprehenderit cupidatat culpa veniam magna et amet. Magna est
          eiusmod excepteur anim elit eu tempor velit sunt excepteur sit cillum
          anim. Dolore laborum laboris dolor aliquip. Minim magna sint quis
          irure reprehenderit fugiat fugiat dolore id deserunt est pariatur.
          Magna culpa dolore laborum Lorem aliqua tempor cillum officia tempor.
          Mollit ex consequat proident nisi ipsum quis sit reprehenderit ea
          deserunt deserunt tempor enim enim.
        </p>
        <h4 className={classes.date}>თარიღი: 21.02.2020</h4>
        <div className={classes.map}>
          <Leaflet popup="ნენსკრა" center={[43.149262, 42.261292]} zoom={10} marker={[43.149262, 42.261292]}/>
        </div>
      </div>
    </div>
  );
};

export default Project;
