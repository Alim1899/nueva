import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import Control from "../../Inputs/Control";
import {
  getData,
  handleLocation,
  edit,
  imageUploadHandler,
  deleteImage,
  deleteProjectImage,
  getImages
} from "../Functions";
import classes from "./Edit.module.css";
import Leaflet from "../../Map/Leaflet";
import add from "../../../assets/AdminIcons/plus.png";
import admin from "../../../assets/AdminIcons/admin.png";
import office from "../../../assets/icons/office.png";
import { year, months } from "../NewProject/DatePicker";
import recycle from "../../../assets/icons/delete.png";

const Edit = () => {
  const [project, setProject] = useState([{}]);
  const [dataArrived, setDataArrived] = useState(false);
  const [position, setPosition] = useState([42.259061, 43.00614]);
  const [marker, setMarker] = useState([42.259061, 42.66614]);
  const [flyTo, setFlyTo] = useState(null);
  const [icon, setIcon] = useState(office);
  const { id } = useParams();
  const [oldImages, setOldImages] = useState([]);
  const [newImages, setnewImages] = useState([]);

  useEffect(() => {
    if (!dataArrived) {
      getData(id, setProject, setDataArrived);
      getImages(id,setOldImages)
    } else {
    }
  }, [id,project,dataArrived,oldImages]);

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
  if (!dataArrived) {
    return (
      <div className={classes.animation}>
        <h2>იტვირთება</h2>
        <div className={classes.loader}></div>
      </div>
    );
  }

  return (
    <div className={classes.main}>
      <div className={classes.headers}>
        <a className={classes.link} href="/projectList">
          <img className={classes.iconl} src={add} alt="addproject" />
          პროექტების ნახვა
        </a>
        <h1 className={classes.header}>პროექტის დეტალები</h1>
        <a className={classes.link} href="/admin">
          <img className={classes.iconl} src={admin} alt="adminpanel" />
          ადმინის პანელი
        </a>
      </div>

      <div className={classes.content}>
        <Formik
          validateOnChange
          initialValues={{
            header: project.header || "",
            coords: project.coords || "",
            description: project.description || "",
            location: project.location || "",
            month: project.date.month || "",
            year: project.date.year || "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => {
            project.header = values.header;
            project.description = values.description;
            project.coords = values.coords;
            project.date.month = values.month;
            project.date.year = values.year;
            project.location = values.location;
            project.images = oldImages;

             console.log("oldImages:", oldImages); 
             console.log("New images:",newImages);
            return (
              <div className={classes.content}>
                <Form className={classes.form}>
                  <div className={classes.formWrapper}>
                    <div className={classes.wrap}>
                      <Control
                        name="header"
                        label="სათაური"
                        control="input"
                        type="text"
                      />
                      <Control
                        name="coords"
                        label="კოორდინატები"
                        control="input"
                        onBlur={(e) =>
                          handleLocation(
                            e,
                            values.coords,
                            setPosition,
                            setMarker,
                            setFlyTo,
                            setIcon
                          )
                        }
                        type="text"
                      ></Control>
                      <Control
                        name="location"
                        label="ლოკაცია"
                        control="input"
                        type="text"
                      ></Control>
                      <div className={classes.datePicker}>
                        <Control
                          name="month"
                          label="თვე"
                          options={months}
                          control="select"
                        />
                        <Control
                          name="year"
                          label="წელი"
                          options={year}
                          control="select"
                        />
                      </div>
                    </div>
                    <div className={classes.description}>
                      <Control
                        name="description"
                        label="აღწერა"
                        control="textarea"
                        type="text"
                      />
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

                  <div className={classes.photoHeaders}>
                    <h2 className={classes.photoHeader}>ახალი ფოტოები</h2>
                    <h2 className={classes.photoHeader}>არსებული ფოტოები</h2>
                  </div>
                  <div className={classes.photos}>
                    <div className={classes.newImages}>
                      <div className={classes.uploadNew}>
                        <Control
                          name="image"
                          control="file"
                          label="ფოტოს ატვირთვა"
                        />
                        <label htmlFor="image" className={classes.imageLabel}>
                          <img
                            src={add}
                            alt="newImage"
                            className={classes.icon}
                          ></img>{" "}
                          ფოტოს ატვირთვა
                        </label>
                        <input
                          id="image"
                          onChange={(e) =>
                            imageUploadHandler(e,setnewImages)
                          }
                          className={classes.imageUpload}
                          type="file"
                          multiple
                        ></input>
                      </div>
                      {Object.entries(newImages).length > 0 &&
                      Object.entries(newImages).map((el) => (
                        <div
                          key={el[0]}
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
                            src={recycle}
                            alt={el[0]}
                            onClick={(e)=>{deleteImage(e,el[0],setnewImages,newImages)}}
                          />
                        </div>
                      ))}
                    </div>
                    <div className={classes.oldImages}>
                      {Object.entries(oldImages).length > 0 &&
                        Object.entries(oldImages).map((el) => (
                          <div
                            key={el[1].key}
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
                              src={recycle}
                              alt={el[0]}
                              onClick={(e)=>deleteProjectImage(e,id,el[0],setOldImages,oldImages)}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </Form>

                <button
                  type="submit"
                  onClick={(e) => edit(e, project, id)}
                  className={classes.submit}
                >
                  შენახვა
                </button>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Edit;
