import express from "express";
import http from "http";
import settings from "@src/settings";
import routes from "./routes";

const app = express();
const server = http.createServer(app);

app.use("/api", routes.api());

/**
 * Start the HTTP server
 */

const start = () => {
  return new Promise((resolve, reject) => {
    server.listen(settings.http.port, (err) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(`Server is running on port ${settings.http.port}`);
      resolve();
    });
  });
};

/**
 * Stop the HTTP server
 */

const stop = () => {
  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) {
        reject(err);
        return;
      }
      console.log("Server has stopped");
      resolve();
    });
  });
};

export default {
  start,
  stop,
};
