import multer from "multer";

let pdf_file_name = "";

const storage = multer.diskStorage({
  destination: function (_req, _file, callback) {
    callback(null, "./uploads");
  },
  filename: function (_req, _file, callback) {
    const new_name = Math.random().toString().slice(2);
    pdf_file_name = new_name;
    callback(null, `${pdf_file_name}.pdf`);
  },
});

const upload = multer({ storage: storage }).single("document");

function uploadHandler(req, _res, next) {
  req.pdfFile = `./uploads/${pdf_file_name}.pdf`;
  next();
}

const UploadFile = [upload, uploadHandler];
export default UploadFile;
