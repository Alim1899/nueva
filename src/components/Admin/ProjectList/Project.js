import classes from "./ProjectList.module.css";
import { useState } from "react";
import left from "../../../assets/icons/leftslide.svg";
import right from "../../../assets/icons/rightslide.svg";
import locate from "../../../assets/icons/location.svg";
import edit from "../../../assets/AdminIcons/edit.png";
import remove from "../../../assets/icons/delete.png";
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
        <h2 className={classes.projectHeader}>{project.header}</h2>
        <div className={classes.location}>
          <img alt="icon" className={classes.icon} src={locate} />
          <h4>{project.location}</h4>
        </div>
        <div className={classes.buttons}>
        
          <div  className={classes.editBtn}>
            {" "}
            <a href={`/project/${id}`} className={classes.toProject}>
              <img className={classes.icona} src={edit} alt="edit"></img>
              <h3>ცვლილება</h3>
            </a>
          </div>
          <div type="button" className={classes.deleteBtn}>
            <img className={classes.icona} src={remove} alt="delete"></img>
            <h3>წაშლა</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;