import { Router } from "express";
import v1 from "./v1";

//URL /api

const api = () => {
  const router = Router();

  //api/v1/
  router.use("/v1", v1());

  return router;
};

export default api;
