// Project.js
import React, { useState, useEffect } from "react";
import classes from "./Project.module.css";
import Leaflet from "../../../Map/Leaflet";
import { useParams } from "react-router-dom";
import enlarge from "../../../../assets/icons/larger.png";
import marker from "../../../../assets/icons/marker.png";
import left from "../../../../assets/icons/leftslide.svg";
import right from "../../../../assets/icons/rightslide.svg";
import { useProjects } from "./ProjectsContext";
import { useTranslation } from "react-i18next";
const Project = () => {
  const {t}=useTranslation();
  const { id } = useParams();
  const { projects } = useProjects();
  const [project, setProject] = useState(null);
  const [slider, showSlider] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const foundProject = projects.find((p) => p[0] === id);
    if (foundProject) {
      setProject(foundProject[1]);
    }
  }, [id, projects]);

  if (!project) {
    return (
      <div className={classes.mainAnim}>
        <div className={classes.animation}>
          <h2>{t("projectsPage.loading")}</h2>
          <div className={classes.loader}></div>
        </div>
      </div>
    );
  }

  const leftSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === 0
        ? Object.entries(project.images).length - 1
        : prevIndex - 1
    );
  };

  const rightSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === Object.entries(project.images).length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const openSlider = (index) => {
    setActiveSlide(index);
    showSlider(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setTimeout(() => {
        showSlider(false);
      }, 300);
    }
  };
  window.addEventListener("keydown", handleKeyDown);

  return (
    <div className={classes.project}>
      <div className={classes.content}>
        <header className={classes.header}>{project.header}</header>
        <p className={classes.description}>{project.description}</p>
        <h4 className={classes.date}>
          {project.date.month}, {project.date.year}{" "}
        </h4>
        <div className={classes.map}>
          <Leaflet
            popup="ნენსკრა"
            center={project.coords.split(",")}
            zoom={10}
            icon={marker}
            marker={project.coords.split(",")}
          />
        </div>
        <div className={classes.gallery}>
          <h1 className={classes.sliderHeader}>{t('projectsPage.project.galleryHeader')}</h1>
          <div className={classes.photos}>
            {Object.entries(project.images).map((img, index) => {
              return (
                <div key={img[1].key} className={classes.imgs}>
                  <img
                    className={classes.img}
                    alt="project-img"
                    src={img[1].url}
                  ></img>
                  <div className={classes.enlarge}>
                    <img
                      src={enlarge}
                      alt="enlarge"
                      onClick={() => openSlider(index)}
                    ></img>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {slider && (
        <div className={classes.slider}>
          <div className={classes.arrows} onClick={leftSlide}>
            <img
              alt="left"
              src={left}
              className={`${classes.arrow} ${classes.leftArrow}`}
            />
          </div>
          <div className={classes.slides}>
            {Object.entries(project.images).map((image) => (
              <img
                key={image[0]}
                className={classes.contentImg}
                alt={image[1].key}
                src={image[1].url}
                onClick={() => showSlider(false)}
                style={{
                  transform: `translateX(-${activeSlide * 100}%)`,
                }}
              />
            ))}
          </div>
          <div className={classes.arrows} onClick={rightSlide}>
            <img
              alt="right"
              src={right}
              className={`${classes.arrow} ${classes.rightArrow}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
