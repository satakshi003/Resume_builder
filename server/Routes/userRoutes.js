import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {refreshAccessToken} from "../controllers/userController.js"
import {registerUser,
  loginUser,
  logoutUser,
  getUserById,
  getUserResumes
} from "../controllers/userController.js"

const router = Router();

router.route("/register").post(
  registerUser
);
router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken) // it uses refresh token.
router.route("/data").get(verifyJWT, getUserById)
router.route("/resumes").get(verifyJWT, getUserResumes )

export default router;