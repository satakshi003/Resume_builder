import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {enhanceProfessionalSummary, enhanceJobDescription, uploadResume} from "../controllers/aiController.js"

const router = Router();

router.route("/enhance-pro-sum").post(verifyJWT, enhanceProfessionalSummary);
router.route("/enhance-job-desc").post(verifyJWT, enhanceJobDescription);
router.route("/upload-resume").post(verifyJWT, uploadResume);

export default router