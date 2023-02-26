import PdfToText from "pdf-to-text";
import PdfTextsToJson from "../utils/PdfTextsToJson.js";

export default function ExtractTextFromPDF(req, res, next) {
  PdfToText.pdfToText(req?.pdfFile, {}, (err, body) => {
    if (err) return res.json({ error: err?.message });
    const data = body
      ?.split("\n")
      .join("")
      .split(" ")
      .filter((w) => w)
      .map((w) => w.replace("\r", ""))
      .join(" ");

    req.pdf_body = body;
    req.pdf_text_body = data;
    req.pdf_text_json = PdfTextsToJson(data);
    next();
  });
}
