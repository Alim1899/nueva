import React, { Fragment, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Admin.module.css";
import Footer from "../Pages/Footer/Footer";
import app from "../../firebaseConfig";
import Leaflet from "../Map/Leaflet";
import "leaflet/dist/leaflet.css";
import office from "../../assets/icons/office.png";
import markerIcon from "../../assets/icons/marker.png";
import { getDatabase, set,get, ref, push } from "firebase/database";

const Admin = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [position, setPosition] = useState([42.259061, 43.00614]);
  const [marker, setmarker] = useState([42.259061, 42.66614]);
  const [flyTo, setFlyTo] = useState(null);
  const [icon, setIcon] = useState(office);
  const projectHeaderRef = useRef(null);
  const descriptionRef = useRef(null);
  const locationRef = useRef(null);
  const [keys, setKeys] = useState([]);
  const imgs = [];

  const retrieveImage = async() => {
    const db = getDatabase(app);
  
     const dbRef = ref(db,'images')
     
     const snapshot = await get(dbRef)
     if(snapshot.exists()){
    Object.values(snapshot.val()).forEach(el=>{
      if(!imgs.includes(el.url)){
        imgs.push(el.url);
      }
    })
     }
     setKeys(imgs)
  };

  const save = async () => {
    try {
      const projectHeader = projectHeaderRef.current.value;
      const description = descriptionRef.current.value;
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "projects"));
      await set(newDocRef, {
        header: projectHeader,
        description: description,
      });
      console.log("success");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  const imageUploadHandler = async (e) => {
    if (e.target.files) {
      const fileList = e.target.files;
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const reader = new FileReader();

        if (file.type.startsWith("image/")) {
          reader.onload = async () => {
            const dataURL = reader.result;
            const key = "photo" + Date.now() + i; // Unique key for each photo
            try {
              const db = getDatabase(app);
              const newDocRef = push(ref(db, "images"));
              await set(newDocRef, {
                key: key,
                url: dataURL,
              });
              retrieveImage();
            } catch (error) {
              console.error("Something went wrong:", error);
            }
          };
          reader.readAsDataURL(file);
        } else {
          alert("ატვირთეთ მხოლოდ ფოტოები");
        }
      }
    }
  };
  const changehandler = (e) => {
    if (e.target.id === "projectHeader") {
      setProjectName(e.target.value);
    } else if (e.target.id === "description") {
      console.log(e.target.value);
      setProjectDescription(e.target.value);
    } else if (e.target.id === "location") {
      setProjectLocation(e.target.value);
    }
  };
  const handleLocation = (e) => {
    var pattern = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;
    if (pattern.test(projectLocation)) {
      setPosition(projectLocation.split(","));
      setmarker(projectLocation.split(","));
      setFlyTo(projectLocation.split(","));
      setIcon(markerIcon);
    } else {
      alert("აკრიფე სწორი ფორმატით - 42.422222,43.433333");
    }

    console.log(marker);
    console.log(position);
  };

  return (
    <Fragment>
      <Navbar />
      <div className={classes.main}>
        <h2 className={classes.header}>ახალი პროექტის ატვირთვა</h2>
        <div className={classes.content}>
          <div className={classes.upload} onChange={changehandler}>
            <h1>პროექტის დეტალები</h1>
            <label htmlFor="projectHeader">პროექტის სახელი</label>
            <input
              id="projectHeader"
              placeholder="მოკლე სათაური..."
              className={classes.projectHeader}
              type="text"
              ref={projectHeaderRef}
            ></input>
            <label htmlFor="description">პროექტის აღწერილობა</label>
            <textarea
              id="description"
              placeholder="პროექტის დეტალები რამდენიმე აბზაცი..."
              className={classes.description}
              ref={descriptionRef}
            ></textarea>
            <label htmlFor="location">ლოკაცია</label>
            <input
              type="text"
              id="location"
              ref={locationRef}
              onBlur={handleLocation}
              placeholder="42.016644, 43.907403"
              className={classes.location}
            ></input>
            <label htmlFor="image" className={classes.imageLabel}>
              ფოტოს ატვირთვა
              <input
                id="image"
                onChange={imageUploadHandler}
                className={classes.imageUpload}
                type="file"
                multiple
              ></input>{" "}
            </label>
          </div>
          <div className={classes.preview}>
            <h1>გადახედეთ პროექტს </h1>
            <h2 className={classes.headerPrev}>{projectName}</h2>
            <h5 className={classes.descriptionPrev}>{projectDescription}</h5>
            <div className={classes.map}>
              <Leaflet
                popup="ნენსკრა"
                center={position}
                zoom={7}
                icon={icon}
                marker={marker}
                location={flyTo}
              />
            </div>

            <div className={classes.photos}>
              {keys.length > 0 && (
                <div id="photo">
                  <h2>ფოტოები</h2>
                  {keys.map((el) => {
                    return (
                      <img
                        src={el}
                        key={el}
                        alt={el}
                        className={classes.imagePrev}
                      ></img>
                    );
                  })}
                </div>
              )}
            </div>

            <button className={classes.saveButton} type="submit" onClick={save}>
              ატვირთვა
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Admin;