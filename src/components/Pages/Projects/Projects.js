import React, { useState, useEffect } from "react";
import classes from "./Projects.module.css";
import locate from "./location.svg";
import left from "../../../assets/icons/leftslide.svg";
import right from "../../../assets/icons/rightslide.svg";
import { retrieveData } from "../../Admin/Functions";

const Project = ({ project }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const leftSlide = (length) => {
    setActiveSlide((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
  };

  const rightSlide = (length) => {
    setActiveSlide((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={classes.project}>
      <div className={classes.content}>
        <div className={classes.slider}>
          <img
            alt="left"
            onClick={() => leftSlide(project.images.length)}
            src={left}
            className={`${classes.arrow} ${classes.leftArrow}`}
          />
          <div className={classes.slides} >
            {project.images.map((image, index) => (
              <img
                key={index}
                id={parseInt(localStorage.getItem("id")) + 1}
                className={classes.contentImg}
                alt={image.key}
                src={image.url}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              />
            ))}
          </div>
          <img
            alt="right"
            src={right}
            onClick={() => rightSlide(project.images.length)}
            className={`${classes.arrow} ${classes.rightArrow}`}
          />
        </div>
        <h3 className={classes.projectHeader}>{project.header}</h3>
        <div className={classes.location}>
          <img alt="icon" className={classes.icon} src={locate} />
          <h5>{project.location}</h5>
        </div>
        <button type="button" className={classes.moreBtn}>
          <a href="/project">სრულად</a>
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    retrieveData(setProjects);
  }, []);

  return (
    <div className={classes.main}>
      <h1 className={classes.header}>ჩვენს მიერ შესრულებული პროექტები</h1>
      
        {projects.length===0&&(
          <div className={classes.animation}>
          <h2>იტვირთება პროექტები</h2>
          <div className={classes.loader}></div>
        </div>)}
      
      {projects.length>0&&(
        <div className={classes.projectList}>
        {projects.map((project) => (
          <Project key={project[0]} project={project[1]} />
        ))}
      </div>
      )}
      
    </div>
  );
};

export default Projects;