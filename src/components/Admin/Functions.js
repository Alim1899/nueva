import app from "../../firebaseConfig";
import markerIcon from "../../assets/icons/marker.png";

import { getDatabase, set, get, ref, push, remove } from "firebase/database";
// TESTED WORKING
export const save = async (
  e,
  header,
  description,
  year,
  month,
  allImages,
  coords,
  location,
  setSavedSucces
) => {
  try {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "projects"));
    await set(newDocRef, {
      id: `project${new Date().getTime()}`,
      header: header,
      description: description,
      date: { month: month, year: year },
      images: allImages,
      coords: coords,
      location: location,
    });
    setSavedSucces(true);
    window.location.reload();

  } catch (error) {
    console.error("Error saving data:", error);
  }
};
export const retrieveImage = async (setKeys, setAllImages) => {
  const db = getDatabase(app);
  const dbRef = ref(db, "images");
  const snapshot = await get(dbRef);
  const imgs = [];
  if (snapshot.exists()) {
    Object.entries(snapshot.val()).forEach((el) => {
      imgs.push({
        key: el[0],
        url: el[1].url,
      });
    });
    setKeys(imgs.sort((a, b) => b - a));
    setAllImages(imgs);
  } else {
    console.error("cant find");
  }
};
export const retrieveData = async (setProjects) => {
  const db = getDatabase(app);
  const dbRef = ref(db, "projects");
  const snapshot = await get(dbRef);

  if (snapshot.exists()) {
    setProjects(Object.entries(snapshot.val()));
  } else {
    console.error("cant find");
  }
};
export const handleLocation = (
  e,
  coords,
  setPosition,
  setmarker,
  setFlyTo,
  setIcon
) => {
  var pattern = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;
  if (pattern.test(coords)) {
    setPosition(coords.split(","));
    setmarker(coords.split(","));
    setFlyTo(coords.split(","));
    setIcon(markerIcon);
  } else {
    alert("აკრიფე სწორი ფორმატით - 42.123456,43.123456");
  }
};
export const imageUploadHandler = async (e, setKeys, setAllImages) => {
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
              id: localStorage.getItem("id"),
            });
            // After each successful upload, retrieve the images
            await retrieveImage(setKeys, setAllImages);
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
};
export const deleteProject = async(id)=>{
  const db = getDatabase(app);
  const dbRef = ref(db, "projects/" + id);
  await remove(dbRef);
  console.log(id);
}
export const getData = async(id,setProject,setDataArrived)=>{
  const db = getDatabase(app);
  const dbRef = ref(db, `projects/${id}`);
  const snapshot = await get(dbRef);

  if (snapshot.exists()) {
    setProject(snapshot.val());
    setDataArrived(true);
  } else {
    console.error("cant find");
  }
}


