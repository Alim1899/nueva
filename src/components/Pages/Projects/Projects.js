import classes from "./Projects.module.css";
import img from "./img.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import locate from "./location.svg";
import left from "../../../assets/icons/leftslide.svg";
import right from "../../../assets/icons/rightslide.svg";
import { useState } from "react";

const Projects = () => {
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
  const project = (
    <div className={classes.project}>
      <div className={classes.content}>
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
        <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>

        <div className={classes.location}>
          <img alt="icon" className={classes.icon} src={locate}></img>
          <h5>სვანეთი, მესტია</h5>
        </div>
        <button type="button" className={classes.moreBtn}>
          <a href="/project">სრულად</a>
        </button>
      </div>
    </div>
  );
  return (
    <div className={classes.main}>
        <h1 className={classes.header}>ჩვენს მიერ შესრულებული პროექტები</h1>
      
        <div className={classes.projectList}>
          {project}
          {project}
          {project}
          {project}
          {project}
          {project}
          {project}
          {project}
          {project}
        </div>
    
    </div>
  );
};

export default Projects;
