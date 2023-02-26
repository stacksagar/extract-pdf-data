import { exportImages } from "pdf-export-images";
// import { api } from "../config.js";
// import fs from "fs";
// import path from "path";
import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default async function ExtractImagesFromPDF(req, res, next) {
  try {
    const images = await exportImages(req?.pdfFile, "uploads");
    req.images = images;

    next();
  } catch (error) {
    return res.json({ error: error?.message });
  }
  // try {
  //   const images = await exportImages(req?.pdfFile, "uploads");

  //   const urls = images.map((image, index) => {
  //     const type = index === 0 ? "photo" : "signature";

  //     // const oldPath = path.join(__dirname,`./uploads/${image.file?.split("\\")[1]}` );
  //     const oldPath = `./uploads/${image.file?.split("\\")[1]}`;

  //     const newFileName = `${Date.now()}-${type}.png`;
  //     const newPath = `./uploads/${newFileName}`;

  //     fs.renameSync(oldPath, newPath);

  //     return api + "/" + newFileName;
  //   });

  //   req.images = urls;
  //   next();
  // } catch (e) {
  //   return res.json({ message: e?.message });
  // }
}
