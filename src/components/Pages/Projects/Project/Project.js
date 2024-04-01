import React from "react";
import classes from "./Project.module.css";
import Leaflet from "../../../Map/Leaflet";
import { useState, useEffect } from "react";
import {getData} from '../../../Admin/Functions'
import  {useParams} from 'react-router-dom';
// import left from "../../../../assets/icons/leftslide.svg";
// import right from "../../../../assets/icons/rightslide.svg";
import marker from "../../../../assets/icons/marker.png";

const Project = () => {
  const [project, setProject] = useState([]);
  const [dataArrived, setDataArrived] = useState(false); // New state to track if data has arrived



  const {id} = useParams();

  
  useEffect(() => {
    if (!dataArrived) { 
      getData(id,setProject,setDataArrived);
    }
    console.log(project);
  }, [id,project,dataArrived]);
  


  return (
    <div className={classes.project}>
      {project.length===0&&(
          <div className={classes.animation}>
          <h2>იტვირთება პროექტები</h2>
          <div className={classes.loader}></div>
        </div>)}
   { dataArrived&&  <div className={classes.content}>
    
        <header className={classes.header}>
          {project.header}
        </header>
        <p className={classes.description}>
          {project.description}
        </p>
        <h4 className={classes.date}>{project.date.month}, {project.date.year} </h4>
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
         
      </div>
      </div>}
     
     
    </div>
  );
};

export default Project;



/* <div className={classes.slider}>

  const [activeSlide, setActiveSlide] = useState(null);
  const leftSlide = () => {
    console.log('LEFT');

  };
  const rightslide = () => {
console.log('RIGHT');
  };
     
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
   </div> */