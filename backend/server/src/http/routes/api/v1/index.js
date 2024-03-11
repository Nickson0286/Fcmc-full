import { Router } from "express";

//URL: api/v1

const v1 = () => {
  const router = Router();
  
  router.use("/appointment")
  router.use("/visit")
  router.use("/managepatient", managepatient())
  router.use("/accounting")

  return router;
};

export default v1;
