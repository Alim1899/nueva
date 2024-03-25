import React, { useRef, useState, useEffect } from "react";
import classes from "./Admin.module.css";
import Leaflet from "../Map/Leaflet";
import "leaflet/dist/leaflet.css";
import office from "../../assets/icons/office.png";
import ProjectPreview from "./Review/Preview";
import DatePicker from './DatePicker'
import {
  deleteAllData,
  changehandler,
  handleLocation, 
  imageUploadHandler,
} from "./Functions"; // Import the functions

const Admin = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [keys, setKeys] = useState([]);
  const [allImages,setAllImages] = useState([]);
  const [position, setPosition] = useState([42.259061, 43.00614]);
  const [marker, setmarker] = useState([42.259061, 42.66614]);
  const [flyTo, setFlyTo] = useState(null);
  const [icon, setIcon] = useState(office);
  const [year,setYear] =useState(null);
  const [month,setMonth] =useState(null);
  const projectHeaderRef = useRef(null);
  const descriptionRef = useRef(null);
  const locationRef = useRef(null);
  const monthref = useRef(null);
  const yearref = useRef(null);

  //Refresh database
  useEffect(() => {
    deleteAllData();
  }, []);
  // Handling Mouse


  return (
    <div className={classes.main}>
      <h2 className={classes.header}>ახალი პროექტის ატვირთვა</h2>
      <div className={classes.content}>
        <div
          className={classes.upload}
          onChange={(e) =>
            changehandler(
              e,
              setProjectName,
              setProjectDescription,
              setProjectLocation,
              setYear,
              setMonth
            )
          }
        >
          <h1 className={classes.uploadHeader}>პროექტის დეტალები</h1>
          <div className={classes.form}>
            <div className={classes.formWrapper}>
            <div className={classes.wrap}>
               <label htmlFor="projectHeader">პროექტის სათაური</label>
              <input
                id="projectHeader"
                placeholder="მოკლე სათაური..."
                className={classes.projectHeader}
                type="text"
                ref={projectHeaderRef}
                maxLength={50}
              ></input>
            </div>
             <div className={classes.wrap}>
             <label htmlFor="location">ლოკაცია</label>
             <input
                type="text"
                id="location"
                ref={locationRef}
                onBlur={(e) =>
                  handleLocation(
                    e,
                    projectLocation,
                    setPosition,
                    setmarker,
                    setFlyTo,
                    setIcon
                  )
                }
                placeholder="42.016644, 43.907403"
                className={classes.location}
              ></input>
             </div>
              
            
              <DatePicker className={classes.datePicker} yearref={yearref} monthref={monthref} />
            </div>
            <div className={classes.description}>
              <label htmlFor="description">პროექტის აღწერილობა </label>
              <textarea
                id="description"
                placeholder="პროექტის დეტალები რამდენიმე აბზაცი..."
                ref={descriptionRef}
              ></textarea>
            </div>
          </div>

          
          <div className={classes.map}>
            <Leaflet
              popup="ოფისი"
              center={position}
              zoom={7}
              icon={icon}
              marker={marker}
              location={flyTo}
            />
          </div>
          <div className={classes.photoInput}>
            <label htmlFor="image" className={classes.imageLabel}>
              ფოტოს ატვირთვა{" "}
            </label>
            <input
              id="image"
              onChange={(e)=>imageUploadHandler(e,setKeys,setAllImages,monthref,yearref)}
              className={classes.imageUpload}
              type="file"
              multiple
            ></input>{" "}
          </div>
        </div>
        <ProjectPreview
          keys={keys}
          projectName={projectName}
          projectDescription={projectDescription}
         setKeys={setKeys}
         month={month}
         year={year}
         allImages={allImages}
         coords={flyTo}
        />
      </div>
    </div>
  );
};

export default Admin;
