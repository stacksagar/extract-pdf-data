import cors from "cors";
import express from "express";

const midWares = [
  [
    cors(),
    express.urlencoded({ extended: true, limit: "50mb" }),
    express.json({ limit: "50mb" }),
  ],
];

export default midWares;
