import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import {createResume, updateResume, deleteResume, getResumeById, getPublicResumeById} from "../controllers/resumeController.js"
import { upload } from "../config/multer.js";

const router = Router();

router.route("/create").post(verifyJWT, createResume);
router.route("/update").put(upload.single('image'), verifyJWT, updateResume );
router.route("/delete/:resumeId").delete(verifyJWT,deleteResume);
router.route("/get/:resumeId").get(verifyJWT, getResumeById);
router.route("/public/:resumeId").get( getPublicResumeById);

export default router;