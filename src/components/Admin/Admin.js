import React, { useRef, useState } from "react";
import classes from "./Admin.module.css";

import app from "../../firebaseConfig";
import Leaflet from "../Map/Leaflet";
import "leaflet/dist/leaflet.css";
import office from "../../assets/icons/office.png";
import markerIcon from "../../assets/icons/marker.png";
import recycle from "../../assets/icons/delete.png";
import { getDatabase, set, get, ref, push, remove } from "firebase/database";

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
  const deleteImage = async (e, imageId) => {
    try {
      // Extract imageId if not provided
      if (!imageId) {
        imageId = e.target.parentNode.parentNode.childNodes[0].alt;
      }
      console.log(imageId);

      // Remove the image from the database
      const db = getDatabase(app);
      const dbRef = ref(db, "images/" + imageId);
      await remove(dbRef);

      // Update the state of keys
      const newKeys = keys.filter((item) => item.key !== imageId);
      setKeys(newKeys);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };
  const retrieveImage = async () => {
    const db = getDatabase(app);
    console.log("Sent");
    const dbRef = ref(db, "images");
    const snapshot = await get(dbRef);
    const imgs = []; // Define imgs array here
    if (snapshot.exists()) {
      Object.entries(snapshot.val()).forEach((el) => {
        imgs.push({
          key: el[0],
          url: el[1].url,
        });
      });
      setKeys(imgs.sort((a, b) => b - a));
      console.log("Success");
    } else {
      console.log("cant find");
    }
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
            const key = "photo" + Date.now() + i;
            try {
              const db = getDatabase(app);
              const newDocRef = push(ref(db, "images"));
              await set(newDocRef, {
                key: key,
                url: dataURL,
              });
              // After each successful upload, retrieve the images
              await retrieveImage();
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
            maxLength={75}
          ></input>
          <label htmlFor="description">პროექტის აღწერილობა </label>
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
            ფოტოს ატვირთვა{" "}
          </label>
          <input
            id="image"
            onChange={imageUploadHandler}
            className={classes.imageUpload}
            type="file"
            multiple
          ></input>{" "}
        </div>
        <div className={classes.preview}>
          {" "}
          <h1>გადახედეთ პროექტს </h1>
          <div className={classes.headers}>
            <h2 className={classes.headerPrev}>{projectName}</h2>
            <h5 className={classes.descriptionPrev}>{projectDescription}</h5>
          </div>
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
            <h1 className={classes.photoPreviewHeader}>ფოტოები</h1>
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
                    <div className={classes.none}>
                      {" "}
                      <img
                        className={classes.bin}
                        onClick={deleteImage}
                        src={recycle}
                        alt="bin"
                      />
                    </div>
                  </div>
                ))}
              {keys.length === 0 && (
                <div className={classes.beforeUpload}>
                  ატვირთული ფოტოები გამოჩნდება აქ
                </div>
              )}
            </div>
          </div>
          <button className={classes.saveButton} type="submit" onClick={save}>
            შენახვა
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
