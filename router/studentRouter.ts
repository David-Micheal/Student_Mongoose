import { Router } from "express";
import {
  postStudent,
  getStudent,
  getOneStudent,
} from "../controller/studentController";

const router = Router();

router.route("/student").get(getStudent);
router.route("/student/:id").get(getOneStudent);
router.route("/newstudent").post(postStudent);

export default router;
