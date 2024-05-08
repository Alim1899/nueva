import React, { useState, useEffect, useMemo } from "react";
import classes from "./Projects.module.css";
import locate from "./location.svg";
import left from "../../../assets/icons/leftslide.svg";
import right from "../../../assets/icons/rightslide.svg";
import Pagination from "./Pagination/Pagination";
import { retrieveData } from "../../Admin/Functions";

const Project = ({ project, id }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const leftSlide = (length) => {
    setActiveSlide((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  };

  const rightSlide = (length) => {
    setActiveSlide((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
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
          <div className={classes.slides}>
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
          <a href={`/project/${id}`} className={classes.toProject}>
            სრულად
          </a>
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  useEffect(() => {
    retrieveData(setProjects);
  }, []);

  const memoizedProjects = useMemo(() => projects, [projects]);

  return (
    <div className={classes.main}>
      <h1 className={classes.header}>ჩვენს მიერ შესრულებული პროექტები</h1>

      {memoizedProjects.length === 0 && (
        <div className={classes.animation}>
          <h2>იტვირთება პროექტები</h2>
          <div className={classes.loader}></div>
        </div>
      )}

      {memoizedProjects.length > 0 && (
        <div className={classes.projectList}>
          {memoizedProjects
            .slice(startIndex, endIndex)
            .map((project, index) => (
              <Project key={index} project={project[1]} id={project[0]} />
            ))}
        </div>
      )}
      <Pagination
        count={memoizedProjects.length}
        numOfItems={5}
        setStartIndex={setStartIndex}
        setEndIndex={setEndIndex}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </div>
  );
};

export default Projects;
