// indexedDB.js
const dbName = "ProjectsDB";
const storeName = "projectsStore";

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore(storeName, { keyPath: "id" });
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

const getProjectByIdFromDB = async (id) => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);

      // Open a cursor to iterate through all items
      const request = store.openCursor();

      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          // Check if the ID matches the ID in the array
          if (cursor.value[0] === id) {
            resolve(cursor.value[1]); // Return the project details part of the array
          } else {
            cursor.continue(); // Continue to the next item
          }
        } else {
          // If we finish iterating and don't find the ID
          resolve(null); // Or reject with a suitable error
        }
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error("Error opening the database:", error);
    throw error;
  }
};

export { getProjectByIdFromDB };
