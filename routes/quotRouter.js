import express from "express";
import { createQuot, getQuot, updateQuot } from "../controllers/quot.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Bilty Routes
router.post("/createquot",verifyAdmin, createQuot);
router.get("/",verifyAdmin, getQuot);
router.put("/editquot",verifyAdmin, updateQuot);
// router.delete("/:id",verifyAdmin, deleteNor);


export default router;
