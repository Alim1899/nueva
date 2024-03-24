import app from "../../firebaseConfig";
import markerIcon from "../../assets/icons/marker.png";

import { getDatabase, set, get, ref, push, remove } from "firebase/database";

export const save = async (projectHeaderRef, descriptionRef) => {
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

// TESTED WORKING
export const retrieveImage = async (setKeys) => {
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
export const handleLocation = (
  e,
  projectLocation,
  setPosition,
  setmarker,
  setFlyTo,
  setIcon
) => {
  var pattern = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;
  if (pattern.test(projectLocation)) {
    setPosition(projectLocation.split(","));
    setmarker(projectLocation.split(","));
    setFlyTo(projectLocation.split(","));
    setIcon(markerIcon);
  } else {
    alert("აკრიფე სწორი ფორმატით - 42.123456,43.123456");
  }
};
export const imageUploadHandler = async (e, setKeys) => {
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
            await retrieveImage(setKeys);
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
export const changehandler = (
  e,
  setProjectName,
  setProjectDescription,
  setProjectLocation,
  setYear,
  setMonth
) => {
  if (e.target.id === "projectHeader") {
    setProjectName(e.target.value);
  } else if (e.target.id === "description") {
    setProjectDescription(e.target.value);
  } else if (e.target.id === "location") {
    setProjectLocation(e.target.value);
  }else if (e.target.id==='years'){
    setYear(e.target.value)
  }else if (e.target.id==='months'){
    setMonth(e.target.value)
  } else return;
};
export const deleteAllData = async () => {
  try {
    const db = getDatabase(app);
    const imagesRef = ref(db, "images");
    await remove(imagesRef);

    // Optionally, you can reset your state variables here if needed
  } catch (error) {
    console.error("Error deleting all data:", error);
  }
};

export const deleteImage = async (e, imageId, setKeys, keys) => {
  if (!imageId) {
    imageId = e.target.parentNode.parentNode.childNodes[0].alt;
  }

  const db = getDatabase(app);
  const dbRef = ref(db, "images/" + imageId);
  await remove(dbRef);

  const newKeys = keys.filter((item) => item.key !== imageId);
  setKeys(newKeys);
  console.log(keys);
};
