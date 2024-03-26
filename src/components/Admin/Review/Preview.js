import React from "react";
import classes from "./Preview.module.css";
import recycle from "../../../assets/icons/delete.png";
import {deleteImage, save} from "../Functions"

const ProjectPreview = ({ keys, projectName, projectDescription,setKeys,allImages,month,year,projectLocation,coords}) => {
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
          <h4 className={classes.date}>თარიღი: {year?year:"წელი"}:{month?month:'თვე'}</h4>
        </div>
     
          <h5 className={classes.descriptionPrev}>{projectDescription?projectDescription:"პროექტის აღწერა"}</h5>
        </div>

        <div className={classes.photos}>
       
          <div className={classes.photoScroll}>
          
            {keys.length > 0 &&
              keys.map((el) => (
                <div
                  key={el.key}
                  className={classes.photo}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <img
                    src={el.url}
                    alt={el.key}
                    className={classes.imagePrev}
                  />
                  
                    
                    <img
                      className={`${classes.none} ${classes.bin}`}
                      onClick={(e) => deleteImage(e,el.key,setKeys,keys)}
                      src={recycle}
                      alt="bin"
                    />
                 
                </div>
                
              ))}
            {keys.length === 0 && (
              <div className={classes.uploadedImages}>
                ატვირთული ფოტოები გამოჩნდება აქ
              </div>
            )}
          </div>
        </div>
      </div>
      <button className={classes.saveButton} type="submit" onClick={(e)=>save(e,projectName,projectDescription,year,month,allImages,coords,projectLocation)}>
        პროექტის დამატება
      </button>
    </div>
  );
};

export default ProjectPreview;