import { exportImages } from "pdf-export-images";
import { api } from "../config.js";
import fs from "fs";

export default async function ExtractImagesFromPDF(req, res, next) {
  try {
    const images = await exportImages(req?.pdfFile, "uploads");

    const urls = images.map((image, index) => {
      const type = index === 0 ? "photo" : "signature";

      const oldPath = `./uploads/${image.file?.split("\\")[1]}`;

      const newFileName = `${Date.now()}-${
        images?.length > 2 ? "picture" : type
      }.png`;
      const newPath = `./uploads/${newFileName}`;

      fs.renameSync(oldPath, newPath);

      return api + "/" + newFileName;
    });

    req.images = urls;
    next();
  } catch (e) {
    return res.json({ message: e?.message });
  }
}
