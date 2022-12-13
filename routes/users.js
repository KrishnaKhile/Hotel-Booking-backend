import express from "express";
import { deleteUsers, getAllUsers, getUsers, updateUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/checkauthenticated",verifyToken,(req,res,next)=>{
//     res.send("Hello user you are logged in.");
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user , You are logged in and You can delete your account.");
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello admin , You are logged in and You can delete All account.");
// })


// UPDATE
router.put("/:id",verifyUser, updateUsers);
// DELETE
router.delete("/:id",verifyUser, deleteUsers);
// GET
router.get("/:id",verifyUser, getUsers);
// GET ALL
router.get("/",verifyAdmin, getAllUsers);

export default router