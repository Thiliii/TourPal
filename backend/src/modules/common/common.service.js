import FIREBASE_CONFIG from "../../config/firebase.config.js";

const storage = FIREBASE_CONFIG.FirebaseAdmin.storage();

const uploadToFirebase = async (file, path) => {
  return new Promise((resolve, reject) => {
    const blob = storage.bucket(process.env.FIREBASE_STORAGE_BUCKET).file(path);

    // Create writable stream and specifying file mimetype
    const blobWriter = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobWriter.on("error", (err) => {
      reject(new Error());
    });

    blobWriter.on("finish", () => {
      resolve(path);
    });

    // When there is no more data to be consumed from the stream
    blobWriter.end(file.buffer);
  });
};

const deleteFromFirebase = async (path) => {
  return await storage.bucket(process.env.FIREBASE_STORAGE_BUCKET).deleteFiles({
    force: true,
    prefix: path,
  });
};

const deleteFromFirebaseByPathArr = async (pathArr) => {
  for (const path of pathArr) {
    await storage.bucket(process.env.FIREBASE_STORAGE_BUCKET).deleteFiles({
      force: true,
      prefix: path,
    });
  }
};

export default {
  uploadToFirebase,
  deleteFromFirebase,
  deleteFromFirebaseByPathArr,
};
