import React from "react";
import classes from "./Project.module.css";
import Leaflet from "../../../Map/Leaflet";
import { useState } from "react";
import img from "../img.jpg";
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import left from "../../../../assets/icons/leftslide.svg";
import right from "../../../../assets/icons/rightslide.svg";
import marker from "../../../../assets/icons/marker.png";

const Project = () => {
  const slides = [
    { id: 1, src: img },
    { id: 2, src: img1 },
    { id: 3, src: img2 },
  ];
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  const leftSlide = () => {
    console.log(activeSlide.id);
    if (activeSlide.id === 1) {
      setActiveSlide(slides[2]);
    } else if (activeSlide.id === 2) {
      setActiveSlide(slides[0]);
    } else if (activeSlide.id === 3) {
      setActiveSlide(slides[1]);
    }
  };
  const rightslide = () => {
    console.log(activeSlide.id);

    if (activeSlide.id === 1) {
      setActiveSlide(slides[1]);
    } else if (activeSlide.id === 2) {
      setActiveSlide(slides[2]);
    } else if (activeSlide.id === 3) {
      setActiveSlide(slides[0]);
    }
  };
  return (
    <div className={classes.project}>
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
          <Leaflet
            popup="ნენსკრა"
            center={[43.149262, 42.261292]}
            zoom={10}
            icon={marker}
            marker={[43.149262, 42.261292]}
          />
        </div>
      </div>
      <div className={classes.gallery}>
         <h1 className={classes.sliderHeader}>გალერეა</h1>
         <div className={classes.slider}>
     
     <img
       alt="left"
       onClick={leftSlide}
       src={left}
       className={classes.arrow}
     ></img>{" "}
     <img
       alt="img"
       className={classes.contentImg}
       src={activeSlide.src}
     ></img>
     <img
       alt="right"
       src={right}
       onClick={rightslide}
       className={classes.arrow}
     ></img>{" "}
   </div>
      </div>
     
    </div>
  );
};

export default Project;
