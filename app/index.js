import express from "express";
import midWares from "./midWares.js";
import routes from "./routes.js";
import error from "./error.js";
const app = express();

app.use("", express.static("uploads"));
app.use(midWares);
app.use(routes);
app.use(error.notFoundHandler);
app.use(error.errorHandler);

export default app;
