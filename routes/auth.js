import express from "express";
import { getUserInfo, login, register } from "../controllers/auth.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/register",verifyAdmin, register);
router.post("/login", login);
router.post("/getUserInfo",verifyAdmin, getUserInfo);

export default router;

