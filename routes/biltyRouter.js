import express from "express";
import { biltyNumber, createBilty, getOneBilty } from "../controllers/Bilty.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Bilty Routes
router.post("/createbilty",verifyAdmin, createBilty);
// router.put("/editConsignor/:id",verifyAdmin, updateNor);
router.get("/biltynumber",verifyAdmin, biltyNumber);
router.post("/findone/:id",verifyAdmin, getOneBilty);
// router.delete("/:id",verifyAdmin, deleteNor);


export default router;
