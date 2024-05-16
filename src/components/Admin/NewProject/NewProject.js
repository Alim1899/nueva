import React, { useState, useEffect } from "react";
import classes from "./NewProject.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Control from "../../Inputs/Control";
import Leaflet from "../../Map/Leaflet";
import "leaflet/dist/leaflet.css";
import office from "../../../assets/icons/office.png";
import ProjectPreview from "../Review/Preview";
import {
  deleteAllData,
  handleLocation,
  imageUploadHandler,
  save,
} from "../Functions";
import { months, year } from "./DatePicker";

const NewProject = () => {
  const [keys, setKeys] = useState([]);
  const [savedSucces, setSavedSucces] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const [position, setPosition] = useState([42.259061, 43.00614]);
  const [marker, setmarker] = useState([42.259061, 42.66614]);
  const [flyTo, setFlyTo] = useState(null);
  const [icon, setIcon] = useState(office);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const btnEnabler = (values) => {
    if (
      values.header &&
      values.description &&
      values.coords &&
      values.month &&
      values.year
    )
      setBtnDisabled(false);
    else setBtnDisabled(true);
  };
  useEffect(() => {
    deleteAllData();
  }, []);
  const Schema = Yup.object().shape({
    header: Yup.string().min(5, "სათაური მოკლეა").max(50, "სათაური გრძელია"),
    description: Yup.string().min(30, "მინ. 30 სიმბოლო"),
    coords: Yup.string().matches(
      /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/,
      "აკრიფეთ სწორი ფორმატით"
    ),
  });

  return (
    <div className={classes.main}>
      <h2 className={classes.header}>ახალი პროექტის ატვირთვა</h2>

      <Formik
        validateOnChange
        initialValues={{
          header: "",
          coords: "",
          description: "",
          location: "",
          month: "",
          year: "",
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => {
          console.log(values);
          return (
            <div className={classes.content}>
            <Form className={classes.form} onChange={() => btnEnabler(values)}>
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
                          setmarker,
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
                <div className={classes.photoInput}>
                  <Control name="image" control="file" label="ფოტოს ატვირთვა" />
                  <label htmlFor="image" className={classes.imageLabel}>
                    ფოტოს ატვირთვა{" "}
                  </label>
                  <input
                    id="image"
                    onChange={(e) =>
                      imageUploadHandler(e, setKeys, setAllImages)
                    }
                    className={classes.imageUpload}
                    type="file"
                    multiple
                  ></input>{" "}
                </div>
              </Form>

              <ProjectPreview
                keys={keys}
                projectName={values.header}
                projectDescription={values.description}
                setKeys={setKeys}
                allImages={allImages}
                projectLocation={values.location}
                coords={values.coords}
                month={values.month}
                year={values.year}
              />
              <button
                type="submit"
                onClick={(e)=>save(e,values.header,values.description,values.year,values.month,allImages,values.coords,values.location,setSavedSucces)}
                className={classes.submit}
                disabled={btnDisabled}
              >
                პროექტის შენახვა
              </button>
            </div>
          );
        }}
      </Formik>

      {savedSucces && (
        <div className={classes.popup}>
          <h1>პროექტი შენახულია ✅</h1>
        </div>
      )}
    </div>
  );
};

export default NewProject;
