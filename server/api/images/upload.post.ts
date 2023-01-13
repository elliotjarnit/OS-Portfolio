import formidable from "formidable";
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {

  const form = formidable({ multiples: true });
  return await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      if (!files.photo) {
        resolve({
          status: "error",
          message: "Please upload a photo with name photo in the form",
        });
      }
      if (files.photo.mimetype.startsWith("image/")) {
        let imageName = String(Date.now() + Math.round(Math.random() * 100000));
        let oldPath = files.photo.filepath;
        let imagesDir = path.join(process.cwd(), "./public", "images");
        let newPath = String(path.join(imagesDir, imageName));
        fs.copyFileSync(oldPath, newPath);
        resolve({
          status: "ok",
          url: newPath,
        });
      } else {
        resolve({
          status: "error",
          message: "Not an image",
        });
      }
    });
  });
});
