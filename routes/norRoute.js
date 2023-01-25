import express from "express";
import { city, consignee, consignor, createCity, createNee, createNor, deleteCity, deleteNee, deleteNor, updateCity, updateNee, updateNor } from "../controllers/nor.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Consignor Routes
router.post("/createConsignor",verifyAdmin, createNor);
router.put("/editConsignor/:id",verifyAdmin, updateNor);
router.get("/",verifyAdmin, consignor);
router.delete("/:id",verifyAdmin, deleteNor);

// Consignee routes
router.post("/createConsignee",verifyAdmin, createNee);
router.put("/editConsignee/:id",verifyAdmin,updateNee);
router.get("/needata",verifyAdmin, consignee);
router.delete("/deletenee/:id",verifyAdmin, deleteNee);


// City Routes
router.post("/createcity",verifyAdmin, createCity);
router.put("/editcity/:id",verifyAdmin,updateCity);
router.get("/citydata",verifyAdmin, city);
router.delete("/deletecity/:id",verifyAdmin, deleteCity);



export default router;
