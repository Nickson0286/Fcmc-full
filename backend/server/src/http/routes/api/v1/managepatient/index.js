import { Router } from "express";
import get from "./get";

const managepatient = () => {
  const router = Router();

  //URL: api/v1/managepatient
  router.get("/", get());

  return router;
};

export default managepatient;
