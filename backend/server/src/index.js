import "./aliases";
import settings from "./settings";
import http from "./http";

(async () => {
  try {
    console.log(settings);
    await http.server.start();
  } catch (err) {
    console.error(err);
  }
})();
