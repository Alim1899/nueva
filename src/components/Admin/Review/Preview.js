import React from "react";
import classes from "./Preview.module.css";
import recycle from "../../../assets/icons/delete.png";
import {deleteImage} from "../Functions"

const ProjectPreview = ({ allImages, projectName, projectDescription,setAllImages,projectLocation,month,year}) => {
  const handleMouseOver = (e) => {
    const element = e.currentTarget.childNodes[1];
    element.classList.add(classes.bindiv);
    element.classList.remove(classes.none);
  };

  const handleMouseOut = (e) => {
    const element = e.currentTarget.childNodes[1];
    element.classList.remove(classes.bindiv);
    element.classList.add(classes.none);
  };
  return (
    <div className={classes.preview}>
      <h1 className={classes.prevHeader}>გადახედეთ პროექტს </h1>
      <div className={classes.prevContent}>
        <div className={classes.headers}>
        <div className={classes.headerWrapper}>
               <h2 className={classes.headerPrev}>{projectName?projectName:"პროექტის სათაური"}</h2>
               <h2 className={classes.locationPrev}>{projectLocation?projectLocation:"პროექტის ლოკაცია"}</h2>
          <h4 className={classes.date}>თარიღი: {month?month:'თვე'},{year?year:'წელი'}</h4>
        </div>
     
          <h5 className={classes.descriptionPrev}>{projectDescription?projectDescription:"პროექტის აღწერა"}</h5>
        </div>

        <div className={classes.photos}>
       
          <div className={classes.photoScroll}>
          
          {
  Object.entries(allImages).length > 0 && (
   console.log('allImages:', allImages),
    Object.entries(allImages).map((el) => (
      <div
        key={el[0]}
        id={el[0]}
        className={classes.photo}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          src={el[1].url}
          alt={el[0]}
          className={classes.imagePrev}
        />
        
        <img
          className={`${classes.none} ${classes.bin}`}
          onClick={(e) => deleteImage(e, el[0], setAllImages, allImages)}
          src={recycle}
          alt="bin"
          id={el[0]}
        />
      </div>
    ))
  )
}

            {allImages.length === 0 && (
              <div className={classes.uploadedImages}>
                ატვირთული ფოტოები გამოჩნდება აქ
              </div>
            )}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ProjectPreview;