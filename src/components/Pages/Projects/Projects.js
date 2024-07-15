import React, { useState, useEffect, useMemo } from "react";
import classes from "./Projects.module.css";
import locate from "../../../assets/icons/location.svg";
import left from "../../../assets/icons/leftslide.svg";
import right from "../../../assets/icons/rightslide.svg";
import Pagination from "./Pagination/Pagination";
import { useProjects } from "./Project/ProjectsContext";
import { useTranslation } from "react-i18next";
import { getProjectsFromDB, saveProjectsToDB } from "./indexedDB";

const Project = ({ project, id }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useTranslation();

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

  const lang = sessionStorage.getItem("lng");

  return (
    <div className={classes.project}>
      <div className={classes.content}>
        <div className={classes.slider}>
          <img
            alt="left"
            onClick={() => leftSlide(Object.entries(project.images).length)}
            src={left}
            className={`${classes.arrow} ${classes.leftArrow}`}
          />
          <div className={classes.slides}>
            {Object.entries(project.images).map((image, index) => (
              <img
                key={index}
                className={classes.contentImg}
                alt={image[1].key}
                src={image[1].url}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              />
            ))}
          </div>
          <img
            alt="right"
            src={right}
            onClick={() => rightSlide(Object.entries(project.images).length)}
            className={`${classes.arrow} ${classes.rightArrow}`}
          />
        </div>
        <h3 className={classes.projectHeader}>
          {lang === "en" ? project.header.en : project.header.ge}
        </h3>
        <div className={classes.location}>
          <img alt="icon" className={classes.icon} src={locate} />
          <h5>{lang === "en" ? project.location.en : project.location.ge}</h5>
        </div>

        
          <a href={`/project/${id}`} className={classes.toProject}>
          <button type="button" className={classes.moreBtn}>
          {t("projectsPage.moreBtn")}</button>
          </a>
        
      </div>
    </div>
  );
};

const Projects = () => {
  const { projects, loading } = useProjects();
  const [cachedProjects, setCachedProjects] = useState([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      // Fetch from IndexedDB first
      const cachedData = await getProjectsFromDB();
      if (cachedData.length > 0) {
        setCachedProjects(cachedData);
        setProjectsLoaded(true);
      }

      // Fetch from server and update IndexedDB and state
      if (projects.length > 0) {
        saveProjectsToDB(projects);
        setCachedProjects(projects);
        setProjectsLoaded(true);
      }
    };

    fetchProjects();
  }, [projects]);

  const memoizedProjects = useMemo(() => cachedProjects, [cachedProjects]);

  return (
    <div className={classes.main}>
      <h1 className={classes.header}>{t("projectsPage.header")}</h1>

      {loading && !projectsLoaded && (
        <div className={classes.mainAnim}>
          <div className={classes.animation}>
            <h2>{t("projectsPage.loading")}</h2>
            <div className={classes.loader}></div>
          </div>
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
        numOfItems={6}
        setStartIndex={setStartIndex}
        setEndIndex={setEndIndex}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </div>
  );
};

export default Projects;
