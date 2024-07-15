// indexedDB.js
const dbName = "ProjectsDB";
const storeName = "projectsStore";

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = event => {
      const db = event.target.result;
      db.createObjectStore(storeName, { keyPath: "id" });
    };

    request.onsuccess = event => {
      resolve(event.target.result);
    };

    request.onerror = event => {
      reject(event.target.error);
    };
  });
};

const getProjectsFromDB = async () => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

const saveProjectsToDB = async projects => {
  const db = await openDB();
  const transaction = db.transaction(storeName, "readwrite");
  const store = transaction.objectStore(storeName);
  projects.forEach((project, index) => {
    if (!project.id) {
      project.id = index; // Assign a unique id if not present
    }
    store.put(project);
  });

  return transaction.complete;
};

export { getProjectsFromDB, saveProjectsToDB };
