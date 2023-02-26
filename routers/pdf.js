import express from "express";
import ExtractImagesFromPDF from "../middleware/ExtractImagesFromPDF.js";
import ExtractTextFromPDF from "../middleware/ExtractTextFromPDF.js";
import UploadFile from "../helpers/UploadFile.js";

import fs from "fs";

const router = express.Router();

router.post(
  "/extract-data",
  UploadFile,
  ExtractImagesFromPDF,
  ExtractTextFromPDF,
  function (req, res) {
    try {
      console.log("pdfFile ", req?.pdfFile);

      const images = req?.images;
      const texts = req?.pdf_text_body;
      // const formatted = req?.pdf_text_json;
      const pdf_body = req?.pdf_body;

      fs.rmSync(req?.pdfFile, { force: true });

      res.status(200).json({
        images,
        texts,
        pdf_body,
      });
    } catch (error) {
      return res.json({ message: `ERROR: ${error.message}` });
    }
  }
);

export default router;
