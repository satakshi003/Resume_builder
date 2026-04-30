import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import {enhanceProfessionalSummary, enhanceJobDescription, updateResume} from "../controllers/aiController.js"

const router = Router();

router.route("/enhance-pro-sum").post(verifyJWT, enhanceProfessionalSummary);
router.route("/enhance-job-desc").post(verifyJWT, enhanceJobDescription);
router.route("/upload-resume").post(verifyJWT, updateResume);

export default router