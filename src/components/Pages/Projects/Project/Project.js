import React, { useState, useEffect } from "react";
import classes from "./Project.module.css";
import Leaflet from "../../../Map/Leaflet";
import { getData } from "../../../Admin/Functions";
import { useParams } from "react-router-dom";
import enlarge from "../../../../assets/icons/larger.png";
import marker from "../../../../assets/icons/marker.png";
import left from "../../../../assets/icons/leftslide.svg";
import right from "../../../../assets/icons/rightslide.svg";

const Project = () => {
  const [project, setProject] = useState([]);
  const [slider, showSlider] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [dataArrived, setDataArrived] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!dataArrived) {
      getData(id, setProject, setDataArrived);
    }
  }, [id, project, dataArrived]);

  const leftSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const rightSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openSlider = (index) => {
    setActiveSlide(index);
    showSlider(true);
  };

  return (
    <div className={classes.project}>
      {!dataArrived && (
        <div className={classes.animation}>
          <h2>იტვირთება</h2>
          <div className={classes.loader}></div>
        </div>
      )}
      {dataArrived && (
        <div className={classes.content}>
          <header className={classes.header}>{project.header}</header>
          <p className={classes.description}>{project.description}</p>
          <h4 className={classes.date}>
            {project.date.month}, {project.date.year}{" "}
          </h4>
          <div className={classes.map}>
            <Leaflet
              popup="ნენსკრა"
              center={project.coords}
              zoom={10}
              icon={marker}
              marker={project.coords}
            />
          </div>
          <div className={classes.gallery}>
            <h1 className={classes.sliderHeader}>გალერეა</h1>
            <div className={classes.photos}>
              {project.images.map((img, index) => {
                return (
                  <div key={img.key} className={classes.imgs}>
                    <img
                      className={classes.img}
                      alt="project-img"
                      src={img.url}
                      
                    ></img>
                    <div className={classes.enlarge}>
                    <img src={enlarge}  alt="enlarge" onClick={() => openSlider(index)}></img>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
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
            {project.images.map((image, index) => (
              <img
                key={index}
                className={classes.contentImg}
                alt={image.key}
                src={image.url}
                onClick={() => showSlider(false)}
                style={{
                  transform: `translateX(-${activeSlide * 100}%)`,
                }}
              />
            ))}
          </div>
          <div className={classes.arrows} onClick={rightSlide}> <img
            alt="right"
            src={right}
            
            className={`${classes.arrow} ${classes.rightArrow}`}
          /></div>
         
        </div>
      )}
    </div>
  );
};

export default Project;