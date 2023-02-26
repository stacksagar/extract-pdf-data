import http from "http";
import app from "./app/index.js";

const server = http.createServer(app);

const PORT = process.env.PORT || 2000;

server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
