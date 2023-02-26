import express from "express";
import pdf from "../routers/pdf.js";

const router = express.Router();

router.get("/health", (_req, res) => {
  res.status(200).json({ message: "ok", success: true });
});

router.use("/api/v1/pdf", pdf);

export default router;
