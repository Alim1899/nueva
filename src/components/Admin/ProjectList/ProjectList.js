import React from "react";
import { useState, useEffect, useMemo } from "react";
import { retrieveData } from "../Functions";
import Project from "./Project";
import classes from "./ProjectList.module.css";
const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    retrieveData(setProjects);
  }, []);
  const memoizedProjects = useMemo(() => projects, [projects]);

  return (
    <div className={classes.main}>
      {memoizedProjects.length === 0 && (
        <div className={classes.animation}>
          <h2>იტვირთება პროექტები</h2>
          <div className={classes.loader}></div>
        </div>
      )}
      {memoizedProjects.length > 0 && (
        <div className={classes.projectList}>
          {memoizedProjects.map((project, index) => (
            <Project key={index} project={project[1]} id={project[0]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
